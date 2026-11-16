import { SectionHeader } from "@/components/section-header";
import type { Translations } from "@/lib/translations";

export function ProblemsSection({ t }: { t: Translations }) {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader label={t.problems.label} title={t.problems.title} />

        <div className="reveal grid gap-x-12 gap-y-10 md:grid-cols-3">
          {t.problems.items.map((problem) => (
            <div key={problem.title} className="border-t border-border pt-6">
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
