"use client";

import { Quote, Timer, TrendingUp, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n-context";

const icons = [TrendingUp, Timer, Users];

export function ResultsSection() {
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
    <section ref={sectionRef} id="resultados" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div data-animate className="opacity-0 mb-12 text-center lg:mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            {t.results.label}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">{t.results.title}</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.results.metrics.map((item, index) => {
            const Icon = icons[index];
            return (
              <Card
                key={item.metric}
                data-animate
                className="opacity-0 border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-display text-4xl font-bold text-primary">{item.metric}</p>
                  <p className="mt-1 font-display text-base font-semibold text-foreground">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div
          data-animate
          className="opacity-0 mt-12 rounded-2xl border border-border/60 bg-card p-8 lg:p-10"
          style={{ animationDelay: "400ms" }}
        >
          <div className="flex flex-col items-center text-center">
            <Quote className="mb-4 h-8 w-8 text-primary/30" />
            <blockquote className="max-w-2xl text-lg leading-relaxed text-foreground">
              {'"'}
              {t.results.testimonial}
              {'"'}
            </blockquote>
            <div className="mt-6">
              <p className="font-display font-semibold text-foreground">
                {t.results.testimonialAuthor}
              </p>
              <p className="text-sm text-muted-foreground">{t.results.testimonialRole}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
