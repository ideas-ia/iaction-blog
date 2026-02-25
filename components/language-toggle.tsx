"use client";

import { Languages } from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n-context";

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();
  const isEnglish = locale === "en";

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "es" ? "en" : "es")}
      role="switch"
      aria-checked={isEnglish}
      aria-label={locale === "es" ? "Cambiar idioma a inglés" : "Switch language to Spanish"}
      className="flex h-9 items-center gap-1.5 rounded-full border border-border bg-muted px-2 text-xs font-semibold transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <Languages className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
      <span className="sr-only">
        {isEnglish ? "Idioma actual: inglés" : "Idioma actual: español"}
      </span>
      <span
        className={`inline-flex h-7 min-w-[4.25rem] items-center justify-center rounded-full px-2 transition-colors ${
          locale === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
        }`}
        aria-hidden="true"
      >
        <span className="inline-flex items-center gap-1 leading-none">
          <Image
            src="/flags/es.svg"
            alt=""
            aria-hidden="true"
            width={18}
            height={12}
            className="h-3 w-[18px] shrink-0 rounded-[2px]"
          />
          <span>ES</span>
        </span>
      </span>
      <span
        className={`inline-flex h-7 min-w-[4.25rem] items-center justify-center rounded-full px-2 transition-colors ${
          locale === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
        }`}
        aria-hidden="true"
      >
        <span className="inline-flex items-center gap-1 leading-none">
          <Image
            src="/flags/us.svg"
            alt=""
            aria-hidden="true"
            width={18}
            height={12}
            className="h-3 w-[18px] shrink-0 rounded-[2px]"
          />
          <span>EN</span>
        </span>
      </span>
    </button>
  );
}
