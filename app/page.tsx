import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProgramSection } from "@/components/program-section"
import { DonateSection } from "@/components/donate-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <DonateSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
