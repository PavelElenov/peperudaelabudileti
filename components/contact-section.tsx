"use client"

import type { ReactNode } from "react"
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const EMAIL = "peperuda.bulgaria@gmail.com"
const PHONE_HREF = "tel:+359897996625"
const PHONE_DISPLAY = "+359 89 7996625"

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/%D0%9F%D0%B5%D0%BF%D0%B5%D1%80%D1%83%D0%B4%D0%B0-%D0%95%D0%BB%D0%B0-%D0%91%D1%8A%D0%B4%D0%B8-%D0%9B%D0%B5%D1%82%D0%B8/61588415966369/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/peperuda.bg",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
]

function InfoItem({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-foreground">{label}</h4>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  )
}

function DirectContactCard() {
  const { t } = useLanguage()

  const actions = [
    { href: `mailto:${EMAIL}`, icon: <Mail className="w-5 h-5" strokeWidth={1.5} />, label: t.contact.emailButton, value: EMAIL },
    { href: PHONE_HREF, icon: <Phone className="w-5 h-5" strokeWidth={1.5} />, label: t.contact.callButton, value: PHONE_DISPLAY },
  ]

  return (
    <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-8 lg:p-10">
      {/* Soft decorative glow */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary-foreground/10 blur-2xl" />

      <h3 className="relative font-serif text-2xl lg:text-3xl font-semibold">{t.contact.directTitle}</h3>
      <p className="relative mt-4 leading-relaxed text-primary-foreground/80">{t.contact.directText}</p>

      <div className="relative mt-8 space-y-4">
        {actions.map((action) => (
          <a
            key={action.href}
            href={action.href}
            className="group flex items-center gap-4 rounded-xl bg-primary-foreground/10 p-4 transition-colors hover:bg-primary-foreground/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
          >
            <span className="shrink-0 w-12 h-12 rounded-full bg-primary-foreground text-primary flex items-center justify-center">
              {action.icon}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-medium">{action.label}</span>
              <span className="block truncate text-sm text-primary-foreground/80">{action.value}</span>
            </span>
            <ArrowUpRight className="w-5 h-5 shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ))}
      </div>

      <div className="relative mt-8 pt-6 border-t border-primary-foreground/20">
        <p className="text-sm text-primary-foreground/80 mb-4">{t.contact.orMessage}</p>
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-primary/40" />
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              {t.contact.eyebrow}
            </p>
            <div className="h-px w-12 bg-primary/40" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            {t.contact.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
              {t.contact.connectTitle}
            </h3>
            <div className="space-y-6">
              <InfoItem icon={<MapPin className="w-5 h-5" strokeWidth={1.5} />} label={t.contact.addressLabel}>
                {t.contact.address.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </InfoItem>

              <InfoItem icon={<Clock className="w-5 h-5" strokeWidth={1.5} />} label={t.contact.workingTimeLabel}>
                {t.contact.workingTime}
              </InfoItem>
            </div>
          </div>

          <DirectContactCard />
        </div>
      </div>
    </section>
  )
}
