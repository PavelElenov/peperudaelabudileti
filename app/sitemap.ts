import type { MetadataRoute } from "next"
import { SITE_URL, languageAlternates, localePath, locales } from "@/lib/locales"

const pages: { path: string; changeFrequency: "monthly" | "yearly"; priority: number }[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
]

const absolute = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return pages.flatMap(({ path, changeFrequency, priority }) => {
    const languages = Object.fromEntries(
      Object.entries(languageAlternates(path)).map(([key, href]) => [key, absolute(href)]),
    )
    return locales.map((lang) => ({
      url: absolute(localePath(lang, path)),
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages },
    }))
  })
}
