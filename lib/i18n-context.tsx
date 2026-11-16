"use client";

import { useRouter } from "next/navigation";
import { createContext, type ReactNode, useCallback, useContext } from "react";
import { type Locale, type Translations, translations } from "@/lib/translations";

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextValue | null>(null);

// El idioma lo define la URL (/ = español, /en = inglés) para que cada versión sea indexable.
export function I18nProvider({ children, locale }: { children: ReactNode; locale: Locale }) {
  const router = useRouter();

  const setLocale = useCallback(
    (newLocale: Locale) => router.push(newLocale === "en" ? "/en" : "/", { scroll: false }),
    [router]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
