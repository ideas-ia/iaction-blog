"use client";

import { BarChart3, Globe, Headphones, Plug, Share2, ShoppingBag, UserCheck } from "lucide-react";
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n-context";

const icons = [Headphones, ShoppingBag, Globe, BarChart3, Plug, Share2, UserCheck];

export function SolutionsSection() {
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
    <section ref={sectionRef} id="soluciones" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div data-animate className="mb-12 text-center opacity-0 lg:mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            {t.solutions.label}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">{t.solutions.title}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t.solutions.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.solutions.items.map((solution, index) => {
            const Icon = icons[index];
            const iconKey = Icon.displayName ?? Icon.name;
            return (
              <Card
                key={`solution-${iconKey}`}
                data-animate
                className="group border-border/60 bg-card opacity-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="flex h-full flex-col p-6 lg:p-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-3 font-display text-lg font-semibold leading-snug text-foreground">
                    {solution.title}
                  </h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solution.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
