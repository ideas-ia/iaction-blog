import { Plus } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import type { Translations } from "@/lib/translations";

export function FaqSection({ t }: { t: Translations }) {
  return (
    <section id="faq" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl px-6 lg:grid-cols-[1fr_2fr] lg:gap-12">
        <SectionHeader label={t.faq.label} title={t.faq.title} />

        <div className="reveal border-t border-border">
          {t.faq.items.map((faq) => (
            // name compartido: el navegador cierra las demás al abrir una, sin JavaScript
            <details key={faq.question} name="faq" className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md py-5 font-display font-semibold text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus
                  className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-45 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 leading-relaxed text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
