"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Award, Scissors, Heart } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function ProgramSection() {
  const { t } = useLanguage()

  return (
    <section id="program" className="relative py-20 lg:py-28 bg-secondary/40 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-primary/40" />
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              {t.program.eyebrow}
            </p>
            <div className="h-px w-12 bg-primary/40" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary italic text-balance">
            {t.program.title}
          </h2>
          <p className="mt-4 font-serif text-xl lg:text-2xl text-foreground/80 text-pretty">
            {t.program.subtitle}
          </p>
        </div>

        {/* Intro: image + text */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/metamorphosis-program.png"
              alt="Hands sewing colorful fabric on a sewing machine"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          <div className="space-y-5">
            <p className="text-lg text-muted-foreground leading-relaxed">{t.program.intro1}</p>
            <p className="text-muted-foreground leading-relaxed">{t.program.intro2}</p>
          </div>
        </div>

        {/* Every small step matters */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent mb-5">
            <Award className="w-7 h-7 text-primary" strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            {t.program.stepsTitle}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">{t.program.steps1}</p>
          <p className="text-muted-foreground leading-relaxed mb-6">{t.program.steps2}</p>
          <p className="font-serif text-xl lg:text-2xl text-primary italic">
            {t.program.stepsHighlight}
          </p>
        </div>

        {/* Impact statement */}
        <div className="rounded-2xl bg-card border border-border p-8 lg:p-12 mb-16">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-8 h-8 text-primary" strokeWidth={1.5} />
          </div>
          <div className="space-y-4 max-w-3xl mx-auto text-center">
            <p className="text-lg font-medium text-foreground leading-relaxed">
              {t.program.impact1}
            </p>
            <p className="text-muted-foreground leading-relaxed">{t.program.impact2}</p>
            <p className="text-muted-foreground leading-relaxed">{t.program.impact3}</p>
          </div>
        </div>

        {/* Support packages */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Scissors className="w-6 h-6 text-primary" strokeWidth={1.5} />
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground text-center">
              {t.program.packagesTitle}
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {t.program.packages.map((pkg) => (
              <div
                key={pkg.amount}
                className="flex items-start gap-4 rounded-xl bg-card border border-border p-5 hover:border-primary/50 transition-colors"
              >
                <span className="font-serif text-2xl font-bold text-primary whitespace-nowrap">
                  {pkg.amount}
                </span>
                <span className="text-sm text-muted-foreground leading-snug pt-1">
                  {pkg.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="max-w-2xl mx-auto text-center">
          <ul className="space-y-1 mb-8">
            {t.program.closingLines.map((line, i) => (
              <li
                key={i}
                className={
                  i === 0
                    ? "font-serif text-xl lg:text-2xl text-foreground italic mb-3"
                    : "text-muted-foreground"
                }
              >
                {line}
              </li>
            ))}
          </ul>
          <p className="text-foreground leading-relaxed mb-8">{t.program.closingText}</p>
          <Button size="lg" asChild className="text-base">
            <Link href="#donate">
              <Heart className="mr-2 h-4 w-4" />
              {t.hero.supportUs}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
