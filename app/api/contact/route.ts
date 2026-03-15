import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100).trim(),
  email: z.string().email("Email inválido").max(200).trim().toLowerCase(),
  phone: z.string().max(50).trim().optional(),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(2000)
    .trim(),
});

// In-memory rate limiter: max 3 requests per IP per hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) {
    return true;
  }

  entry.count += 1;
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  // Extract IP for rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Por favor intenta en una hora." },
      { status: 429 }
    );
  }

  // Parse request body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  // Validate with Zod
  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Datos inválidos.", details: result.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const { name, email, phone, message } = result.data;
  const to = process.env.CONTACT_EMAIL ?? "meeh.dev@gmail.com";

  // If no API key, log in dev and return success
  if (!resend) {
    console.log("[contact] No RESEND_API_KEY set. Form submission:", {
      name,
      email,
      phone,
      message,
    });
    return NextResponse.json({ ok: true });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : "No proporcionado";
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  try {
    const { error } = await resend.emails.send({
      from: "iaction Contact <no-reply@iaction.cl>",
      to,
      replyTo: email,
      subject: `Nuevo contacto de ${name} — iaction.cl`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Teléfono: ${phone ?? "No proporcionado"}`,
        "",
        "Mensaje:",
        message,
      ].join("\n"),
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <body style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#111">
          <h2 style="margin-top:0">Nuevo contacto desde iaction.cl</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;font-weight:bold;width:120px">Nombre:</td><td>${safeName}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold">Email:</td><td><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:bold">Teléfono:</td><td>${safePhone}</td></tr>
          </table>
          <h3 style="margin-top:24px">Mensaje:</h3>
          <p style="background:#f4f4f5;border-radius:8px;padding:16px;line-height:1.6">${safeMessage}</p>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Error al enviar el mensaje. Por favor intenta nuevamente." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Error inesperado. Por favor intenta nuevamente." },
      { status: 500 }
    );
  }
}
