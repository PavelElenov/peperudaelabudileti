"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/i18n"

const FACEBOOK_URL =
  "https://www.facebook.com/people/%D0%9F%D0%B5%D0%BF%D0%B5%D1%80%D1%83%D0%B4%D0%B0-%D0%95%D0%BB%D0%B0-%D0%91%D1%8A%D0%B4%D0%B8-%D0%9B%D0%B5%D1%82%D0%B8/61588415966369/"
const INSTAGRAM_URL = "https://www.instagram.com/peperuda.bg"

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = {
    organization: [
      { name: t.footer.aboutUs, href: "#about" },
      { name: t.footer.ourValues, href: "#about" },
      { name: t.footer.news, href: "#" },
    ],
    support: [
      { name: t.footer.donate, href: "#donate" },
      { name: t.footer.volunteer, href: "#contact" },
      { name: t.footer.shop, href: "#" },
    ],
    connect: [
      { name: t.footer.contact, href: "#contact" },
      { name: "Facebook", href: FACEBOOK_URL },
      { name: "Instagram", href: INSTAGRAM_URL },
    ],
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-[family-name:var(--font-script)] text-3xl">
              Peperuda
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Organization Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.organization}</h3>
            <ul className="space-y-3">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.support}</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.connect}</h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => {
                const isExternal = link.href.startsWith("http")
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              {t.footer.rights}
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {t.footer.privacy}
              </Link>
              <Link
                href="#"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
