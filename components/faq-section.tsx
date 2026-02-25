"use client"

import { useEffect, useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useI18n } from "@/lib/i18n-context"

export function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useI18n()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        }
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll("[data-animate]")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="faq" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div data-animate className="opacity-0 mb-12 text-center lg:mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">{t.faq.label}</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.faq.title}
          </h2>
        </div>

        <div data-animate className="opacity-0" style={{ animationDelay: "150ms" }}>
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/60">
                <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
