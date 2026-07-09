"use client";

import { locales } from "../content";
import { useLanguage } from "../lib/language-context";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  return (
    <div className="flex gap-2">
      {locales.map((l) => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code)}
          aria-pressed={locale === l.code}
          className={`px-3 py-1 text-sm rounded-full border transition ${
            locale === l.code
              ? "bg-ink text-paper border-ink"
              : "border-ink/15 hover:bg-ink/5"
          }`}
        >
          {l.flag} {l.label}
        </button>
      ))}
    </div>
  );
}
