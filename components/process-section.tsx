"use client";

import { HeadphonesIcon, PenTool, Rocket, Search } from "lucide-react";
import { useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n-context";

const icons = [Search, PenTool, Rocket, HeadphonesIcon];
const numbers = ["01", "02", "03", "04"];

export function ProcessSection() {
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
    <section ref={sectionRef} id="proceso" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div data-animate className="opacity-0 mb-12 text-center lg:mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            {t.process.label}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">{t.process.title}</span>
          </h2>
        </div>

        <div className="relative grid gap-8 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-[3.5rem] hidden h-px bg-border md:block" />

          {t.process.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div
                key={step.title}
                data-animate
                className="opacity-0 relative flex flex-col items-center text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <span className="mb-1 text-xs font-bold uppercase tracking-widest text-primary">
                  {numbers[index]}
                </span>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
