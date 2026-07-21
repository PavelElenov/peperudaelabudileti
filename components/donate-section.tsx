"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Copy, Check, Share2, ShoppingBag, Wallet } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const bankDetails = {
  receiver: "Foundation Peperuda - Come Be Fly",
  iban: "BG43BUIN95615000780027",
  bic: "BUINBGSF"
}

export function DonateSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const { t } = useLanguage()

  const onlinePayments = [
    {
      name: "PayPal",
      label: t.donate.scanPaypal,
      qr: "/images/qr-paypal.png",
      url: "https://paypal.me/peperuda",
      displayUrl: "paypal.me/peperuda"
    },
    {
      name: "Revolut",
      label: t.donate.scanRevolut,
      qr: "/images/qr-revolut.png",
      url: "https://checkout.revolut.com/pay/8ab1571e-666a-4580-8ded-75808935a0a1",
      displayUrl: "checkout.revolut.com"
    }
  ]

  const sponsorshipTiers = [
    { amount: "20", period: t.donate.perDay, description: t.donate.tierDay },
    { amount: "80", period: t.donate.perWeek, description: t.donate.tierWeek },
    { amount: "320", period: t.donate.perMonth, description: t.donate.tierMonth }
  ]

  const waysToHelp = [
    { icon: Share2, title: t.donate.waysToHelp.share.title, description: t.donate.waysToHelp.share.description },
    { icon: ShoppingBag, title: t.donate.waysToHelp.purchase.title, description: t.donate.waysToHelp.purchase.description },
    { icon: Wallet, title: t.donate.waysToHelp.finances.title, description: t.donate.waysToHelp.finances.description }
  ]

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text.replace(/\s/g, ''))
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <section id="donate" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8e4f0] via-[#d8d4e8] to-[#c5bfd9]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-primary/40" />
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              {t.donate.eyebrow}
            </p>
            <div className="h-px w-12 bg-primary/40" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground italic text-balance mb-4">
            {t.donate.heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.donate.subtextBefore}
            <span className="italic text-primary">{t.donate.subtextQuilt}</span>
            {t.donate.subtextAfter}
          </p>
        </div>

        {/* Hero image for donate section */}
        <div className="relative max-w-3xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-xl">
          <div className="relative aspect-[16/9]">
            <Image
              src="/images/giving-hands.jpg"
              alt="Hands nurturing a seedling symbolizing growth and giving"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-center">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-white italic mb-2">
              {t.donate.heroTitle}
            </h3>
            <p className="text-white/90 max-w-xl mx-auto text-sm md:text-base">
              {t.donate.heroText}
            </p>
          </div>
        </div>

        {/* Invest today quote */}
        <div className="text-center mb-12">
          <p className="font-serif text-xl lg:text-2xl text-primary italic">
            {t.donate.investQuote}
          </p>
        </div>

        {/* Ways to help grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {waysToHelp.map((way) => (
            <div
              key={way.title}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-accent/50 flex items-center justify-center mx-auto mb-4">
                <way.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-xl font-semibold text-foreground uppercase tracking-wide mb-2">
                {way.title}
              </h4>
              <p className="text-sm text-muted-foreground">{way.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Bank Transfer Card */}
          <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {t.donate.bankInfoTitle}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t.donate.onlineBanking}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Receiver */}
              <div className="flex items-center justify-between p-4 bg-secondary rounded-xl">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    {t.donate.receiver}
                  </p>
                  <p className="font-medium text-foreground">
                    {bankDetails.receiver}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(bankDetails.receiver, 'receiver')}
                  className="text-primary hover:text-primary h-8 w-8 p-0"
                >
                  {copiedField === 'receiver' ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>

              {/* IBAN */}
              <div className="flex items-center justify-between p-4 bg-secondary rounded-xl">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    IBAN
                  </p>
                  <p className="font-mono font-medium text-foreground tracking-wider">
                    {bankDetails.iban}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(bankDetails.iban, 'iban')}
                  className="text-primary hover:text-primary h-8 w-8 p-0"
                >
                  {copiedField === 'iban' ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>

              {/* BIC */}
              <div className="flex items-center justify-between p-4 bg-secondary rounded-xl">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    BIC
                  </p>
                  <p className="font-mono font-medium text-foreground tracking-wider">
                    {bankDetails.bic}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(bankDetails.bic, 'bic')}
                  className="text-primary hover:text-primary h-8 w-8 p-0"
                >
                  {copiedField === 'bic' ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Online payment options with QR codes */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wide text-center mb-4">
                {t.donate.orDonateOnline}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {onlinePayments.map((payment) => (
                  <div
                    key={payment.name}
                    className="flex flex-col items-center text-center p-4 bg-secondary rounded-xl"
                  >
                    <div className="bg-white rounded-lg p-2 shadow-sm mb-3">
                      <Image
                        src={payment.qr || "/placeholder.svg"}
                        alt={`QR code to donate via ${payment.name}`}
                        width={120}
                        height={120}
                        className="w-28 h-28"
                      />
                    </div>
                    <p className="font-serif font-semibold text-foreground">{payment.name}</p>
                    <p className="text-xs text-muted-foreground mb-3">{payment.label}</p>
                    <a
                      href={payment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-primary hover:underline break-all"
                    >
                      {payment.displayUrl}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Sponsorship tiers */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-foreground mb-2">
              {t.donate.becomeSponsor}
            </h4>
            <p className="text-muted-foreground mb-6">
              {t.donate.sponsorIntro}
            </p>
            
            <div className="space-y-4 mb-8">
              {sponsorshipTiers.map((tier) => (
                <div
                  key={tier.period}
                  className="flex items-center gap-4 p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:shadow-md transition-shadow"
                >
                  <div className="text-center min-w-[80px]">
                    <span className="font-serif text-2xl font-bold text-primary">{tier.amount}</span>
                    <span className="text-sm text-primary ml-1">EUR</span>
                    <p className="text-xs text-muted-foreground">{tier.period}</p>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <p className="text-sm text-muted-foreground flex-1">{tier.description}</p>
                </div>
              ))}
            </div>

            {/* Additional ways */}
            <div className="bg-accent/30 rounded-xl p-6">
              <h5 className="font-medium text-foreground mb-3">{t.donate.moreWaysTitle}</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{t.donate.moreWay1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{t.donate.moreWay2}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            {t.donate.thankYou}
          </p>
        </div>
      </div>
    </section>
  )
}
