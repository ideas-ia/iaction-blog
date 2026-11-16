import { SectionHeader } from "@/components/section-header";
import type { Translations } from "@/lib/translations";

export function ProcessSection({ t }: { t: Translations }) {
  return (
    <section id="proceso" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader label={t.process.label} title={t.process.title} />

        <ol className="reveal grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, index) => (
            <li key={step.title} className="border-t border-border pt-6">
              <span
                className="mb-4 block font-display text-3xl font-semibold tabular-nums text-primary"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
