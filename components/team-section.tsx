"use client"

import Image from "next/image"
import { MapPin, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function TeamSection() {
  const { t } = useLanguage()

  return (
    <section id="team" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Soft decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-accent/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -right-24 size-80 rounded-full bg-secondary blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-primary/40" />
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              {t.team.eyebrow}
            </p>
            <div className="h-px w-12 bg-primary/40" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            {t.team.title}
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground text-pretty">
            {t.team.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-start">
          {/* Team photo */}
          <div className="lg:sticky lg:top-28">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -top-4 -left-4 h-full w-full rounded-[2rem] border-2 border-primary/25"
              />
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-xl">
                <Image
                  src="/images/team.jpg"
                  alt={t.team.photoAlt}
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 448px) 448px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-6 flex size-20 items-center justify-center rounded-full bg-card shadow-lg ring-4 ring-background">
                <Image
                  src="/images/peperuda-butterfly-transparent.png"
                  alt=""
                  width={56}
                  height={56}
                  className="size-12 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Member cards */}
          <ul className="flex flex-col gap-6 lg:gap-8">
            {t.team.members.map((member) => (
              <li
                key={member.name}
                className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-4 sm:gap-5 mb-5">
                  <div
                    aria-hidden="true"
                    className="flex size-16 sm:size-20 shrink-0 items-center justify-center rounded-full bg-accent font-[family-name:var(--font-script)] text-4xl sm:text-5xl text-primary"
                  >
                    {member.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-[family-name:var(--font-script)] text-4xl sm:text-5xl leading-none text-primary">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-foreground">
                      {member.role}
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
                      {member.origin}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
                  {member.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-6 flex items-start gap-3 rounded-xl bg-secondary/60 px-4 py-3">
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm text-foreground">
                    <span className="font-semibold text-primary">{t.team.funFactLabel}: </span>
                    {member.funFact}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
