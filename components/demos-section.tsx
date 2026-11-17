import { ArrowUpRight } from "lucide-react";
import { demos } from "@/app/[lang]/demos/demos";
import { SectionHeader } from "@/components/section-header";
import type { Locale, Translations } from "@/lib/translations";

export function DemosSection({ t, lang }: { t: Translations; lang: Locale }) {
  return (
    <section id="demos" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader label={t.demos.label} title={t.demos.title} subtitle={t.demos.subtitle} />
        <div className="reveal grid gap-6 md:grid-cols-3">
          {Object.entries(demos).map(([slug, { [lang]: demo }]) => (
            <a
              key={slug}
              // En inglés se sirve en el dominio principal: los subdominios de demos son solo en español.
              href={lang === "en" ? `/en/demos/${slug}` : `/demos/${slug}`}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <span className="mb-4 w-fit rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
                {t.demos.soon}
              </span>
              <h3 className="mb-2 flex items-start justify-between gap-2 font-display text-lg font-semibold text-foreground">
                {demo.title}
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </h3>
              <p className="leading-relaxed text-muted-foreground">{demo.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
