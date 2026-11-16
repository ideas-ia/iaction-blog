import { SectionHeader } from "@/components/section-header";
import type { Translations } from "@/lib/translations";

export function ResultsSection({ t }: { t: Translations }) {
  return (
    <section id="resultados" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader label={t.results.label} title={t.results.title} />

        <div className="reveal grid gap-x-12 gap-y-10 md:grid-cols-3">
          {t.results.metrics.map((item) => (
            <div key={item.metric} className="border-t border-border pt-6">
              <p className="font-display text-5xl font-semibold tracking-tight tabular-nums text-primary">
                {item.metric}
              </p>
              <p className="mt-3 font-display font-semibold text-foreground">{item.label}</p>
              <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <figure className="reveal mt-16 max-w-3xl border-l-2 border-primary pl-6 lg:mt-20">
          <blockquote className="text-xl leading-relaxed text-foreground sm:text-2xl">
            “{t.results.testimonial}”
          </blockquote>
          <figcaption className="mt-5 text-sm">
            <span className="font-semibold text-foreground">{t.results.testimonialAuthor}</span>
            {t.results.testimonialRole ? (
              <span className="text-muted-foreground"> · {t.results.testimonialRole}</span>
            ) : null}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
