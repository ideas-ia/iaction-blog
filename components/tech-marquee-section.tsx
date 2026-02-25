"use client";

import { useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n-context";

const technologies = [
  { name: "Google Cloud", abbr: "GCP" },
  { name: "Docker", abbr: "Docker" },
  { name: "n8n", abbr: "n8n" },
  { name: "Python", abbr: "Python" },
  { name: "JavaScript", abbr: "JS" },
  { name: "ChatGPT", abbr: "ChatGPT" },
  { name: "Gemini", abbr: "Gemini" },
  { name: "Claude", abbr: "Claude" },
  { name: "PostgreSQL", abbr: "PostgreSQL" },
  { name: "React", abbr: "React" },
  { name: "Next.js", abbr: "Next.js" },
  { name: "TypeScript", abbr: "TS" },
  { name: "TensorFlow", abbr: "TensorFlow" },
  { name: "LangChain", abbr: "LangChain" },
  { name: "Supabase", abbr: "Supabase" },
  { name: "Vercel", abbr: "Vercel" },
];

function TechLogo({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-xl border border-border/60 bg-card px-6 py-4 transition-colors duration-300 hover:border-primary/30 hover:bg-primary/5">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
        <span className="font-display text-xs font-bold text-primary">
          {abbr.slice(0, 2).toUpperCase()}
        </span>
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </div>
  );
}

export function TechMarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
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

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div data-animate className="mb-10 text-center opacity-0">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            {t.tech.label}
          </p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            <span className="text-balance">{t.tech.title}</span>
          </h2>
        </div>
      </div>

      <div data-animate className="relative opacity-0" style={{ animationDelay: "200ms" }}>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="mb-4 flex marquee-scroll">
          <div className="flex shrink-0 gap-4 pr-4">
            {technologies.map((tech) => (
              <TechLogo key={tech.name} name={tech.name} abbr={tech.abbr} />
            ))}
          </div>
          <div className="flex shrink-0 gap-4 pr-4" aria-hidden="true">
            {technologies.map((tech) => (
              <TechLogo key={`dup-${tech.name}`} name={tech.name} abbr={tech.abbr} />
            ))}
          </div>
        </div>

        <div className="flex marquee-scroll-reverse">
          <div className="flex shrink-0 gap-4 pr-4">
            {[...technologies].reverse().map((tech) => (
              <TechLogo key={tech.name} name={tech.name} abbr={tech.abbr} />
            ))}
          </div>
          <div className="flex shrink-0 gap-4 pr-4" aria-hidden="true">
            {[...technologies].reverse().map((tech) => (
              <TechLogo key={`dup-${tech.name}`} name={tech.name} abbr={tech.abbr} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
