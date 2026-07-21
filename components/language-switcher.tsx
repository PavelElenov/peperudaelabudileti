"use client"

import { Globe } from "lucide-react"
import { useLanguage, type Language } from "@/lib/i18n"

const options: { value: Language; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "bg", label: "БГ" },
]

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-card/60 p-1">
      <Globe className="ml-1.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLang(option.value)}
          aria-pressed={lang === option.value}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
            lang === option.value
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
