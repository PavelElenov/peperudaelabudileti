// Server-safe locale helpers (no "use client"), shared by layouts, metadata, sitemap and proxy.

export const SITE_URL = "https://peperudabulgaria.com"

export const locales = ["en", "bg", "de"] as const
export type Language = (typeof locales)[number]
export const defaultLocale: Language = "en"

export const LOCALE_COOKIE = "peperuda-lang"

export function hasLocale(value: string): value is Language {
  return (locales as readonly string[]).includes(value)
}

/** Builds the public URL path for a locale. English lives at the root without a prefix. */
export function localePath(lang: Language, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`
  if (lang === defaultLocale) return clean
  return clean === "/" ? `/${lang}` : `/${lang}${clean}`
}

/** Removes a leading /bg or /de (or /en) from a pathname. */
export function stripLocale(pathname: string): string {
  const [, first, ...rest] = pathname.split("/")
  if (first && hasLocale(first)) {
    return `/${rest.join("/")}`
  }
  return pathname || "/"
}

/** hreflang map for Metadata.alternates.languages */
export function languageAlternates(path = "/") {
  return {
    en: localePath("en", path),
    bg: localePath("bg", path),
    de: localePath("de", path),
    "x-default": localePath("en", path),
  }
}

export const ogLocales: Record<Language, string> = {
  en: "en_US",
  bg: "bg_BG",
  de: "de_DE",
}

type PageSeo = { title: string; description: string }

export const seo: Record<
  Language,
  {
    siteName: string
    home: PageSeo
    shareImageAlt: string
    privacy: PageSeo
    terms: PageSeo
  }
> = {
  en: {
    siteName: "Peperuda",
    home: {
      title: "Peperuda | Empowering Women in Sliven, Bulgaria",
      description:
        "Peperuda is a non-profit in Sliven, Bulgaria, where young women and mothers learn sewing and practical skills, gain independence and keep their families together.",
    },
    shareImageAlt: "Peperuda – empowering women together",
    privacy: {
      title: "Privacy Policy",
      description: "Learn how Peperuda handles information on its website.",
    },
    terms: {
      title: "Terms of Service",
      description: "Terms for using the Peperuda website.",
    },
  },
  bg: {
    siteName: "Пеперуда",
    home: {
      title: "Пеперуда | Подкрепа за жени и майки в Сливен",
      description:
        "Пеперуда е организация с нестопанска цел в Сливен, където млади жени и майки учат шиене и практически умения, стават по-независими и запазват семействата си заедно.",
    },
    shareImageAlt: "Пеперуда – заедно даваме сила на жените",
    privacy: {
      title: "Политика за поверителност",
      description: "Научете как Пеперуда обработва информацията на своя уебсайт.",
    },
    terms: {
      title: "Общи условия",
      description: "Условия за използване на уебсайта на Пеперуда.",
    },
  },
  de: {
    siteName: "Peperuda",
    home: {
      title: "Peperuda | Frauen stärken in Sliven, Bulgarien",
      description:
        "Peperuda ist eine gemeinnützige Organisation in Sliven, Bulgarien, in der junge Frauen und Mütter Nähen und praktische Fähigkeiten lernen, unabhängig werden und ihre Familien zusammenhalten.",
    },
    shareImageAlt: "Peperuda – gemeinsam Frauen stärken",
    privacy: {
      title: "Datenschutzerklärung",
      description: "Erfahren Sie, wie Peperuda mit Informationen auf seiner Website umgeht.",
    },
    terms: {
      title: "Nutzungsbedingungen",
      description: "Bedingungen für die Nutzung der Peperuda-Website.",
    },
  },
}
