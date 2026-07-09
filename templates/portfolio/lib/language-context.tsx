"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { content, type Locale } from "../content";

const LanguageContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
}>({ locale: "de", setLocale: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("de");

  useEffect(() => {
    const stored = window.localStorage.getItem("locale");
    if (stored === "de" || stored === "en" || stored === "vi") {
      setLocaleState(stored);
    }
  }, []);

  function setLocale(l: Locale) {
    setLocaleState(l);
    window.localStorage.setItem("locale", l);
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const { locale, setLocale } = useContext(LanguageContext);
  return { locale, setLocale, t: content[locale] };
}
