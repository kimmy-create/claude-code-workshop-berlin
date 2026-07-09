"use client";

import { useLanguage } from "../lib/language-context";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Hero() {
  const { t } = useLanguage();
  const { hero } = t;

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <LanguageSwitcher />
      <p className="mt-8 text-sm font-medium uppercase tracking-wider text-accent">
        {hero.role} · {hero.location}
      </p>
      <h1 className="mt-3 text-5xl md:text-6xl font-bold tracking-tight">
        {hero.name}
      </h1>
      <p className="mt-6 text-xl text-ink/75 leading-relaxed max-w-xl">
        {hero.headline}
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={hero.ctaPrimary.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-ink text-paper rounded-full font-medium hover:opacity-90 transition"
        >
          {hero.ctaPrimary.label}
        </a>
        <a
          href={hero.ctaSecondary.href}
          className="inline-block px-6 py-3 border border-ink/15 rounded-full font-medium hover:bg-ink/5 transition"
        >
          {hero.ctaSecondary.label}
        </a>
      </div>
    </section>
  );
}
