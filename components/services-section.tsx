"use client";

import { BarChart3, Check, MessageCircleMore, Workflow } from "lucide-react";
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n-context";

const icons = [Workflow, MessageCircleMore, BarChart3];

export function ServicesSection() {
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
    <section ref={sectionRef} id="servicios" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div data-animate className="opacity-0 mb-12 text-center lg:mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            {t.services.label}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">{t.services.title}</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <Card
                key={service.title}
                data-animate
                className="opacity-0 group border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-4 font-display text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
