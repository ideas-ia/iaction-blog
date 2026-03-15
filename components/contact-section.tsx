"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/lib/i18n-context";

const contactSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  email: z.string().email().max(200).trim(),
  phone: z.string().max(50).trim().optional(),
  message: z.string().min(10).max(2000).trim(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const { t } = useI18n();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        }
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  async function onSubmit(data: ContactFormValues) {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setServerError(
          typeof json.error === "string"
            ? json.error
            : "Error al enviar el mensaje. Por favor intenta nuevamente."
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setServerError("Error de conexión. Por favor verifica tu internet e intenta nuevamente.");
    }
  }

  return (
    <section ref={sectionRef} id="contacto" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-primary/[0.03]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,hsl(var(--primary)/0.08),transparent)]" />

      <div className="relative mx-auto max-w-3xl px-6">
        <div data-animate className="opacity-0 mb-12 text-center lg:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {t.contact.badge}
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">{t.contact.title}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        {/* aria-live region so screen readers announce the success state */}
        <div aria-live="polite" aria-atomic="true">
          {submitted ? (
            <div
              data-animate
              className="opacity-0 animate-fade-in-up rounded-2xl border border-primary/20 bg-card p-10 text-center shadow-sm"
            >
              <div
                className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
                aria-hidden="true"
              >
                <Send className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                {t.contact.successTitle}
              </h3>
              <p className="mt-2 text-muted-foreground">{t.contact.successMessage}</p>
            </div>
          ) : null}
        </div>

        {!submitted && (
          <form
            data-animate
            className="opacity-0 rounded-2xl border border-border/60 bg-card p-6 shadow-sm sm:p-8 lg:p-10"
            style={{ animationDelay: "150ms" }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            aria-label={t.contact.title}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">{t.contact.nameLabel}</Label>
                <Input
                  id="name"
                  placeholder={t.contact.namePlaceholder}
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  {...register("name")}
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
                  {...register("email")}
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
                {...register("phone")}
              />
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <Label htmlFor="message">{t.contact.messageLabel}</Label>
              <Textarea
                id="message"
                placeholder={t.contact.messagePlaceholder}
                rows={4}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                {...register("message")}
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
    </section>
  );
}
