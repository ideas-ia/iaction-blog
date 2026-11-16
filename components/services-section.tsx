import { Check } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import type { Translations } from "@/lib/translations";

export function ServicesSection({ t }: { t: Translations }) {
  return (
    <section id="servicios" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader label={t.services.label} title={t.services.title} />

        <div className="reveal divide-y divide-border border-y border-border">
          {t.services.items.map((service) => (
            <div key={service.title} className="grid gap-4 py-8 md:grid-cols-[1fr_2fr] md:gap-12">
              <h3 className="font-display text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-muted-foreground">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
