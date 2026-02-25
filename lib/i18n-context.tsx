"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { translations, type Locale, type Translations } from "@/lib/translations"

interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es")

  useEffect(() => {
    // Check localStorage first, then browser language
    const stored = localStorage.getItem("locale") as Locale | null
    if (stored && (stored === "es" || stored === "en")) {
      setLocaleState(stored)
      return
    }
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith("en")) {
      setLocaleState("en")
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
  }, [])

  const t = translations[locale]

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
