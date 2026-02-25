"use client";

import { Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "es" ? "en" : "es")}
      aria-label={locale === "es" ? "Switch to English" : "Cambiar a Español"}
      className="flex h-9 items-center gap-1.5 rounded-full border border-border bg-muted px-2 text-xs font-semibold transition-colors hover:bg-accent"
    >
      <Languages className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
      <span
        className={`inline-flex h-7 min-w-[4.25rem] items-center justify-center rounded-full px-2 transition-colors ${
          locale === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
        }`}
      >
        <span className="inline-flex items-center gap-1 leading-none">
          <img
            src="/flags/es.svg"
            alt=""
            aria-hidden="true"
            className="h-3 w-[18px] shrink-0 rounded-[2px]"
          />
          <span>ES</span>
        </span>
      </span>
      <span
        className={`inline-flex h-7 min-w-[4.25rem] items-center justify-center rounded-full px-2 transition-colors ${
          locale === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
        }`}
      >
        <span className="inline-flex items-center gap-1 leading-none">
          <img
            src="/flags/us.svg"
            alt=""
            aria-hidden="true"
            className="h-3 w-[18px] shrink-0 rounded-[2px]"
          />
          <span>EN</span>
        </span>
      </span>
    </button>
  );
}
