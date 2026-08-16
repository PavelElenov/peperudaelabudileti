"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/i18n"

function DottedCircleIcon({ className }: { className?: string }) {
  const layers = [
    { count: 1, r: 0 },
    { count: 6, r: 9 },
    { count: 12, r: 17 },
    { count: 18, r: 25 },
  ]
  const dots: React.ReactElement[] = []
  layers.forEach((layer, li) => {
    for (let i = 0; i < layer.count; i++) {
      const angle = (i / layer.count) * Math.PI * 2
      const x = Number((32 + Math.cos(angle) * layer.r).toFixed(3))
      const y = Number((32 + Math.sin(angle) * layer.r).toFixed(3))
      dots.push(
        <circle
          key={`${li}-${i}`}
          cx={x}
          cy={y}
          r={li === 0 ? 2.6 : 1.3}
          fill="currentColor"
          opacity={li === 0 ? 1 : 0.45}
        />,
      )
    }
  })
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {dots}
    </svg>
  )
}

function HandsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 44c4-2 8-5 12-9 2-2 4-3 6-3 3 0 5 2 8 2" />
      <path d="M54 44c-4-2-8-5-12-9-2-2-4-3-6-3" />
      <path d="M28 32l-4 4c-1 1-1 3 0 4s3 1 4 0l3-3" />
      <path d="M36 34l4 4c1 1 1 3 0 4s-3 1-4 0" />
      <path d="M22 26c2-2 5-3 7-2M42 26c-2-2-5-3-7-2" />
    </svg>
  )
}

function ButterflyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M32 22c0 8 0 14 0 18" />
      <path d="M32 24c-8-10-20-10-18 2 1 7 12 6 18 2" />
      <path d="M32 24c8-10 20-10 18 2-1 7-12 6-18 2" />
      <path d="M32 30c-6 4-14 8-10 14 3 4 9-4 10-10" />
      <path d="M32 30c6 4 14 8 10 14-3 4-9-4-10-10" />
      <path d="M32 40c-2 6-12 8-16 14-3 4 4 6 6 2" />
    </svg>
  )
}

function BulbPlantIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 28a10 10 0 1 1 20 0c0 5-3 7-4 10H26c-1-3-4-5-4-10z" />
      <path d="M26 42h12M27 46h10M29 50h6" />
      <path d="M32 40V26" />
      <path d="M32 32c-4-1-7-4-7-8 4 0 7 3 7 8z" />
      <path d="M32 30c4-1 7-4 7-8-4 0-7 3-7 8z" />
    </svg>
  )
}

export function AboutSection() {
  const { t } = useLanguage()

  const values = [
    { Icon: DottedCircleIcon, title: t.about.values.one.title, description: t.about.values.one.description },
    { Icon: HandsIcon, title: t.about.values.community.title, description: t.about.values.community.description },
    { Icon: ButterflyIcon, title: t.about.values.setFree.title, description: t.about.values.setFree.description },
    { Icon: BulbPlantIcon, title: t.about.values.sustainability.title, description: t.about.values.sustainability.description },
  ]

  const statistics = [
    { value: "34%", label: t.about.stats.education },
    { value: "10.2%", label: t.about.stats.teenMothers },
    { value: "8.1%", label: t.about.stats.unemployment },
    { value: "21.4%", label: t.about.stats.poverty },
  ]

  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-primary/40" />
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            {t.about.eyebrow}
          </p>
          <div className="h-px w-12 bg-primary/40" />
        </div>

        {/* Butterfly meaning section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground italic text-balance mb-6">
            <span className="text-primary">Peperuda</span>{t.about.butterflyBefore}
          </h2> */}
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary leading-relaxed text-balance">
            {t.hero.quoteBefore}
            <span className="font-semibold">{t.hero.quoteHighlight}</span>
            {t.hero.quoteAfter}
          </h2>
        </div>

        {/* Top section with image and intro */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-sewing.png"
                alt="Women working together sewing handmade products from recycled fabrics"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/30 rounded-2xl -z-10" />
          </div>

          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {t.about.intro1}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.about.intro2}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.about.intro3}
            </p>
            <p className="text-foreground font-medium leading-relaxed">
              {t.about.intro4}
            </p>
          </div>
        </div>

        {/* Sliven Statistics */}
        <div className="bg-secondary/50 rounded-2xl p-8 lg:p-12 mb-20">
          <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground text-center mb-4">
            {t.about.slivenTitle}
          </h3>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            {t.about.slivenText}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Rows */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground text-center mb-16">
            {t.about.valuesTitle}
          </h3>
          <div className="max-w-5xl mx-auto flex flex-col gap-14 lg:gap-20">
            {values.map((value) => (
              <div
                key={value.title}
                className="grid grid-cols-1 md:grid-cols-[1.1fr_auto_2fr] items-center gap-4 md:gap-10"
              >
                <h4 className="font-serif text-3xl lg:text-4xl font-bold text-primary uppercase tracking-tight leading-none text-balance">
                  {value.title}
                </h4>
                <div className="flex justify-center">
                  <value.Icon className="w-20 h-20 lg:w-24 lg:h-24 text-primary" />
                </div>
                <p className="text-muted-foreground leading-relaxed md:text-justify">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Origin Story Card */}
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-primary text-center mb-6">
            {t.about.originTitle}
          </h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              {t.about.origin1}
            </p>
            <p className="text-primary font-semibold text-lg">
              {t.about.originQuote}
            </p>
            <p>
              {t.about.origin2}
            </p>
            <p>
              {t.about.origin3}
            </p>
            <p>
              {t.about.origin4}
            </p>
            <p className="text-primary font-semibold text-lg text-center py-4">
              {t.about.originHighlight}
            </p>
            <p>
              {t.about.origin5}
            </p>
            <p className="italic">
              {t.about.origin6}
            </p>
          </div>
        </div>

        {/* Decorative butterfly */}
        <div className="mt-16 flex justify-center">
          <Image
            src="/images/peperuda-logo.jpeg"
            alt="Peperuda butterfly logo"
            width={96}
            height={96}
            className="h-20 w-20 md:h-24 md:w-24 object-contain mix-blend-multiply"
            priority
          />
        </div>
      </div>
    </section>
  )
}
