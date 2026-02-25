"use client";

import {
  ArrowRight,
  BrainCircuit,
  CalendarDays,
  MessageSquare,
  Network,
  Sparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n-context";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      const elements = sectionRef.current?.querySelectorAll("[data-animate]");
      elements?.forEach((el) => {
        el.classList.remove("opacity-0");
      });
      return;
    }

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

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,hsl(var(--primary)/0.08),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div data-animate className="opacity-0" style={{ animationDelay: "0ms" }}>
              <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1.5 text-xs font-medium">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                {t.hero.badge}
              </Badge>
            </div>

            <h1
              data-animate
              className="opacity-0 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "100ms" }}
            >
              <span className="text-balance">{t.hero.titleStart}</span>
              <span className="text-primary">{t.hero.titleAccent}</span>
            </h1>

            <p
              data-animate
              className="opacity-0 mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
              style={{ animationDelay: "200ms" }}
            >
              {t.hero.description}
            </p>

            <div
              data-animate
              className="opacity-0 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "300ms" }}
            >
              <Button asChild size="lg" className="motion-safe:animate-pulse gap-2 text-base">
                <a href="#contacto">
                  <MessageSquare className="h-4 w-4" />
                  {t.hero.ctaQuote}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 text-base bg-transparent"
              >
                <a href="#contacto">
                  <CalendarDays className="h-4 w-4" />
                  {t.hero.ctaConsult}
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="gap-2 text-base text-muted-foreground"
              >
                <a href="#resultados">
                  {t.hero.ctaCases}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <p
              data-animate
              className="opacity-0 mt-4 text-xs text-muted-foreground"
              style={{ animationDelay: "400ms" }}
            >
              {t.hero.microcopy}
            </p>
          </div>

          <div
            data-animate
            className="opacity-0 relative hidden lg:flex lg:items-center lg:justify-center"
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative h-80 w-80">
              <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                <BrainCircuit className="h-10 w-10 text-primary" />
              </div>
              <div className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-xl border border-border bg-card shadow-sm overflow-hidden">
                <Image
                  src="/android-icon-48x48.png"
                  alt="iaction logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-cover"
                  sizes="40px"
                />
              </div>
              <div className="absolute right-0 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-xl border border-border bg-card shadow-sm">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute bottom-0 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-xl border border-border bg-card shadow-sm">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute left-0 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-xl border border-border bg-card shadow-sm">
                <Network className="h-6 w-6 text-primary" />
              </div>
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 320 320"
                fill="none"
              >
                <circle
                  cx="160"
                  cy="160"
                  r="120"
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <circle
                  cx="160"
                  cy="160"
                  r="80"
                  stroke="hsl(var(--primary) / 0.15)"
                  strokeWidth="1"
                  strokeDasharray="6 6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
