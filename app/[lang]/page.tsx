import type { Metadata } from "next"
import { hasLocale, languageAlternates, localePath } from "@/lib/locales"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import { ProgramSection } from "@/components/program-section"
import { DonateSection } from "@/components/donate-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  return {
    alternates: { canonical: localePath(lang, "/"), languages: languageAlternates("/") },
    openGraph: { url: localePath(lang, "/") },
  }
}

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <ProgramSection />
      <DonateSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
