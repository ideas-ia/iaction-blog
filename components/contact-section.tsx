"use client";

import { Send, Sparkles } from "lucide-react";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/lib/i18n-context";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const { t } = useI18n();

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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section ref={sectionRef} id="contacto" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-primary/[0.03]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,hsl(var(--primary)/0.08),transparent)]" />

      <div className="relative mx-auto max-w-3xl px-6">
        <div data-animate className="opacity-0 mb-12 text-center lg:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            {t.contact.badge}
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">{t.contact.title}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        {submitted ? (
          <div
            data-animate
            className="opacity-0 animate-fade-in-up rounded-2xl border border-primary/20 bg-card p-10 text-center shadow-sm"
          >
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Send className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              {t.contact.successTitle}
            </h3>
            <p className="mt-2 text-muted-foreground">{t.contact.successMessage}</p>
          </div>
        ) : (
          <form
            data-animate
            className="opacity-0 rounded-2xl border border-border/60 bg-card p-6 shadow-sm sm:p-8 lg:p-10"
            style={{ animationDelay: "150ms" }}
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">{t.contact.nameLabel}</Label>
                <Input id="name" placeholder={t.contact.namePlaceholder} required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">{t.contact.emailLabel}</Label>
                <Input id="email" type="email" placeholder={t.contact.emailPlaceholder} required />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <Label htmlFor="phone">{t.contact.phoneLabel}</Label>
              <Input id="phone" type="tel" placeholder={t.contact.phonePlaceholder} />
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <Label htmlFor="message">{t.contact.messageLabel}</Label>
              <Textarea id="message" placeholder={t.contact.messagePlaceholder} rows={4} required />
            </div>

            <Button type="submit" size="lg" className="mt-6 w-full gap-2 text-base">
              <Send className="h-4 w-4" />
              {t.contact.submitButton}
            </Button>

            <p className="mt-3 text-center text-xs text-muted-foreground">{t.contact.disclaimer}</p>
          </form>
        )}
      </div>
    </section>
  );
}
