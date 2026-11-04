"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-butterfly.png"
          alt="Women standing together looking towards a hopeful horizon"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#c5bfd9]/85 via-[#d8d4e8]/70 to-[#e8e4f0]/80" />
      </div>

      {/* Top section with logo */}
      <div className="relative pt-50 text-center">
        {/* Decorative line with logo */}
        <div className="flex items-center justify-center gap-6 mb-2">
          <div className="h-px w-20 md:w-32 bg-primary/50" />
          <Image
            src="/images/peperuda-logo.svg"
            alt="Peperuda"
            width={300}
            height={164}
            className="w-48 sm:w-56 md:w-64 object-contain mix-blend-multiply"
            priority
          />
          <div className="h-px w-20 md:w-32 bg-primary/50" />
        </div>

        {/* Tagline */}
        <p className="mt-4 flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-2 font-script text-2xl md:text-3xl leading-tight text-primary">
          {t.hero.tagline.split(" ").map((word) => (
            <span key={word}>{word}</span>
          ))}
        </p>
      </div>

      {/* Main content area with quote */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 pt-10 md:pt-14 pb-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary leading-relaxed text-balance">
            <span className="text-primary font-bold text-[1.12em]">Peperuda</span>{t.about.butterflyBefore}
          </h1>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button size="lg" asChild className="text-base">
            <Link href="#about">
              {t.hero.discoverMission}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base bg-card/50 backdrop-blur-sm">
            <Link href="#donate">{t.hero.supportUs}</Link>
          </Button>
        </div>
      </div>

      {/* Misty mountain silhouettes at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(139, 128, 168, 0.3)"
            d="M0,60L80,65C160,70,320,80,480,75C640,70,800,50,960,45C1120,40,1280,50,1360,55L1440,60L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
          <path
            fill="rgba(119, 108, 148, 0.4)"
            d="M0,80L80,85C160,90,320,100,480,95C640,90,800,70,960,70C1120,70,1280,90,1360,100L1440,110L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}
