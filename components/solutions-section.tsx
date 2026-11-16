import { SectionHeader } from "@/components/section-header";
import type { Translations } from "@/lib/translations";

export function SolutionsSection({ t }: { t: Translations }) {
  return (
    <section id="soluciones" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label={t.solutions.label}
          title={t.solutions.title}
          subtitle={t.solutions.subtitle}
        />

        <div className="reveal grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {t.solutions.items.map((solution) => (
            <div key={solution.title} className="flex flex-col border-t border-border pt-6">
              <h3 className="mb-2 font-display text-lg font-semibold leading-snug text-foreground">
                {solution.title}
              </h3>
              <p className="mb-4 flex-1 leading-relaxed text-muted-foreground">
                {solution.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {solution.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
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
