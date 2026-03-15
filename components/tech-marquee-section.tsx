"use client";

import { useEffect, useRef } from "react";
import type { IconType } from "react-icons";
import { useI18n } from "@/lib/i18n-context";
import {
  SiGooglecloud,
  SiDocker,
  SiN8N,
  SiPython,
  SiJavascript,
  SiOpenai,
  SiGooglegemini,
  SiClaude,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTensorflow,
  SiLangchain,
  SiSupabase,
  SiVercel,
} from "react-icons/si";

const technologies: { name: string; Icon: IconType; color: string }[] = [
  { name: "Google Cloud", Icon: SiGooglecloud, color: "#4285F4" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "n8n", Icon: SiN8N, color: "#EA4B71" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "ChatGPT", Icon: SiOpenai, color: "#412991" },
  { name: "Gemini", Icon: SiGooglegemini, color: "#8E75B2" },
  { name: "Claude", Icon: SiClaude, color: "#D97757" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
  { name: "LangChain", Icon: SiLangchain, color: "#1C3C3C" },
  { name: "Supabase", Icon: SiSupabase, color: "#3FCF8E" },
  { name: "Vercel", Icon: SiVercel, color: "#000000" },
];

function TechLogo({
  name,
  Icon,
  color,
  "aria-hidden": ariaHidden,
}: {
  name: string;
  Icon: IconType;
  color: string;
  "aria-hidden"?: boolean | "true";
}) {
  return (
    <li
      className="flex shrink-0 items-center gap-3 rounded-xl border border-border/60 bg-card px-6 py-4 transition-colors duration-300 hover:border-primary/30 hover:bg-primary/5"
      aria-hidden={ariaHidden}
    >
      <div
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10"
        aria-hidden="true"
      >
        <Icon size={22} style={{ color }} />
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </li>
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

        {/* First row: semantically meaningful list, duplicates hidden from AT */}
        <ul
          className="mb-4 flex gap-4 marquee-scroll list-none p-0"
          aria-label="Tecnologías utilizadas"
        >
          {technologies.map((tech) => (
            <TechLogo key={tech.name} name={tech.name} Icon={tech.Icon} color={tech.color} />
          ))}
          {/* Duplicate for seamless loop — hidden from screen readers */}
          {technologies.map((tech) => (
            <TechLogo key={`dup-${tech.name}`} name={tech.name} Icon={tech.Icon} color={tech.color} aria-hidden />
          ))}
        </ul>

        {/* Second row: purely decorative, hidden from assistive technologies */}
        <div className="flex marquee-scroll-reverse" aria-hidden="true">
          <div className="flex shrink-0 gap-4 pr-4">
            {[...technologies].reverse().map((tech) => (
              <TechLogo key={tech.name} name={tech.name} Icon={tech.Icon} color={tech.color} />
            ))}
          </div>
          <div className="flex shrink-0 gap-4 pr-4">
            {[...technologies].reverse().map((tech) => (
              <TechLogo key={`dup-${tech.name}`} name={tech.name} Icon={tech.Icon} color={tech.color} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
