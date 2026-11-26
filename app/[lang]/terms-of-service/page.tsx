import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { hasLocale, languageAlternates, localePath, seo } from "@/lib/locales"

const PATH = "/terms-of-service"

export async function generateMetadata({ params }: PageProps<"/[lang]/terms-of-service">): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const text = seo[lang].terms
  return {
    title: text.title,
    description: text.description,
    alternates: { canonical: localePath(lang, PATH), languages: languageAlternates(PATH) },
    openGraph: { url: localePath(lang, PATH), title: text.title, description: text.description },
  }
}

export default function TermsOfServicePage() {
  return <LegalPage kind="terms" />
}
