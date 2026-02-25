"use client";

import { AlertTriangle, Clock, DollarSign } from "lucide-react";
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n-context";

const icons = [Clock, DollarSign, AlertTriangle];

export function ProblemsSection() {
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
    <section ref={sectionRef} className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div data-animate className="opacity-0 mb-12 text-center lg:mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            {t.problems.label}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">{t.problems.title}</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.problems.items.map((problem, index) => {
            const Icon = icons[index];
            return (
              <Card
                key={problem.title}
                data-animate
                className="opacity-0 border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
