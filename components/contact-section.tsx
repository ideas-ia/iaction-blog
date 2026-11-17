"use client";

import { Loader2, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { type DemoSlug, demos } from "@/app/[lang]/demos/demos";
import { SectionHeader } from "@/components/section-header";
import { TriageAssistant } from "@/components/triage-assistant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/lib/i18n-context";

// Validación en el navegador con las reglas de react-hook-form (sin zod: ~33 KB menos).
// El servidor (/api/contact) vuelve a validar con zod, que es la validación que manda.
type ContactFormValues = { name: string; email: string; phone?: string; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const minTrim = (min: number, msg: string) => (v?: string) => (v ?? "").trim().length >= min || msg;

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const { t, locale } = useI18n();

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();

  const honeypotRef = useRef<HTMLInputElement>(null);

  // Viene desde un subdominio de demo (?demo=slug): prellenar el mensaje de esa demo.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("demo");
    const demo = slug && slug in demos ? demos[slug as DemoSlug][locale] : null;
    if (!demo) return;
    setValue("message", demo.message, { shouldValidate: true });
    // La sección carga diferida, así que el salto nativo a #contacto falla: llevamos el foco al primer campo.
    const name = document.getElementById("name");
    name?.focus({ preventScroll: true });
    name?.scrollIntoView({ block: "center" });
  }, [setValue, locale]);

  // WebMCP: si un agente envía el formulario, le devolvemos el resultado como texto.
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    const ev = e.nativeEvent as SubmitEvent & {
      agentInvoked?: boolean;
      respondWith?: (p: Promise<string>) => void;
    };
    const result = new Promise<string>((resolve) => {
      handleSubmit(
        async (data) => resolve(await onSubmit(data)),
        (errs) => resolve(`Validation failed: ${Object.keys(errs).join(", ")}`)
      )(e);
    });
    if (ev.agentInvoked) ev.respondWith?.(result);
  }

  async function onSubmit(data: ContactFormValues): Promise<string> {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, website: honeypotRef.current?.value }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setServerError(
          typeof json.error === "string"
            ? json.error
            : "Error al enviar el mensaje. Por favor intenta nuevamente."
        );
        return `Error: ${json.error ?? res.status}`;
      }

      setSubmitted(true);
      return "Mensaje enviado. iaction responderá por email.";
    } catch {
      setServerError("Error de conexión. Por favor verifica tu internet e intenta nuevamente.");
      return "Error de conexión.";
    }
  }

  return (
    <section id="contacto" className="ai-bg border-t border-border py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <SectionHeader
          label={t.contact.badge}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div>
          {/* aria-live region so screen readers announce the success state */}
          <div aria-live="polite" aria-atomic="true">
            {submitted ? (
              <div className="rounded-lg border border-border bg-card p-10 text-center">
                <div
                  className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
                  aria-hidden="true"
                >
                  <Send className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {t.contact.successTitle}
                </h3>
                <p className="mt-2 text-muted-foreground">{t.contact.successMessage}</p>
              </div>
            ) : null}
          </div>

          {!submitted && (
            <form
              className="reveal rounded-lg border border-border bg-card p-6 sm:p-8 lg:p-10"
              onSubmit={handleFormSubmit}
              noValidate
              toolname="contactar-iaction"
              tooldescription="Envía una consulta a iaction (automatización de procesos con IA en Chile) para pedir una cotización, demo o asesoría. El usuario revisa antes de enviar."
              aria-label={t.contact.title}
            >
              {/* Honeypot anti-bots: invisible para personas y lectores de pantalla */}
              <input
                ref={honeypotRef}
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />
              <TriageAssistant
                getMessage={() => getValues("message") ?? ""}
                setMessage={(v) => setValue("message", v, { shouldValidate: true })}
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">{t.contact.nameLabel}</Label>
                  <Input
                    id="name"
                    placeholder={t.contact.namePlaceholder}
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name", {
                      validate: minTrim(2, t.contact.errName),
                      maxLength: { value: 100, message: t.contact.errName },
                    })}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="text-xs text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">{t.contact.emailLabel}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email", {
                      validate: (v) => EMAIL_RE.test(v.trim()) || t.contact.errEmail,
                      maxLength: { value: 200, message: t.contact.errEmail },
                    })}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="text-xs text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <Label htmlFor="phone">
                  {t.contact.phoneLabel}{" "}
                  <span className="text-xs font-normal text-muted-foreground">(opcional)</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t.contact.phonePlaceholder}
                  autoComplete="tel"
                  {...register("phone", { maxLength: 50 })}
                />
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <Label htmlFor="message">{t.contact.messageLabel}</Label>
                <Textarea
                  id="message"
                  placeholder={t.contact.messagePlaceholder}
                  rows={4}
                  toolparamdescription="Qué proceso quiere automatizar, volumen aproximado y plazo"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  {...register("message", {
                    validate: minTrim(10, t.contact.errMessage),
                    maxLength: { value: 2000, message: t.contact.errMessage },
                  })}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="text-xs text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {serverError && (
                <p
                  role="alert"
                  className="mt-4 rounded-lg bg-destructive/10 px-4 py-2 text-sm text-destructive"
                >
                  {serverError}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                className="mt-6 w-full gap-2 text-base"
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>{t.contact.submitButton}</span>
                  </>
                )}
              </Button>

              <p className="mt-3 text-center text-xs text-muted-foreground">
                {t.contact.disclaimer}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
