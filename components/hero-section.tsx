import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Translations } from "@/lib/translations";

export function HeroSection({ t }: { t: Translations }) {
  return (
    <section className="ai-bg py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-20">
        <div>
          <p className="mb-6 text-sm font-medium text-muted-foreground">{t.hero.badge}</p>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            {t.hero.titleStart}
            <span className="text-primary">{t.hero.titleAccent}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button asChild size="lg" className="text-base">
              <a href="#contacto">{t.hero.ctaQuote}</a>
            </Button>
            <a
              href="#demos"
              className="inline-flex min-h-11 items-center gap-2 rounded-md text-base font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {t.hero.ctaCases}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">{t.hero.microcopy}</p>
        </div>

        <dl className="grid gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-1 lg:gap-0">
          {t.services.items.map((item) => (
            <div key={item.title} className="border-t border-border pt-4 lg:py-5">
              <dt className="font-display text-lg font-semibold tracking-tight text-foreground lg:text-xl">
                {item.title}
              </dt>
              <dd className="mt-1 text-sm leading-snug text-muted-foreground">{item.summary}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
