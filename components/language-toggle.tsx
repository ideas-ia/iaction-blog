"use client";

import { useI18n } from "@/lib/i18n-context";

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "es" ? "en" : "es")}
      aria-label={locale === "es" ? "Switch to English" : "Cambiar a Espanol"}
      className="flex h-8 items-center gap-1 rounded-full border border-border bg-muted px-2 text-xs font-semibold transition-colors hover:bg-accent"
    >
      <span
        className={`rounded-full px-1.5 py-0.5 transition-colors ${
          locale === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
        }`}
      >
        ES
      </span>
      <span
        className={`rounded-full px-1.5 py-0.5 transition-colors ${
          locale === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
        }`}
      >
        EN
      </span>
    </button>
  );
}
