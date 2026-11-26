import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { hasLocale, languageAlternates, localePath, seo } from "@/lib/locales"

const PATH = "/privacy-policy"

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy-policy">): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const text = seo[lang].privacy
  return {
    title: text.title,
    description: text.description,
    alternates: { canonical: localePath(lang, PATH), languages: languageAlternates(PATH) },
    openGraph: { url: localePath(lang, PATH), title: text.title, description: text.description },
  }
}

export default function PrivacyPolicyPage() {
  return <LegalPage kind="privacy" />
}
