import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { notFound } from 'next/navigation'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n'
import { SITE_URL, hasLocale, locales, ogLocales, seo } from '@/lib/locales'
import '../globals.css'

// Local copies keep font loading independent of Google Fonts and Turbopack URL parsing.
const montserrat = localFont({
  src: '../fonts/Montserrat-Variable.ttf',
  weight: '100 900',
  display: 'swap',
  variable: '--font-montserrat',
})
const lora = localFont({
  src: [
    { path: '../fonts/Lora-Variable.ttf', weight: '400 700', style: 'normal' },
    { path: '../fonts/Lora-Italic-Variable.ttf', weight: '400 700', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-lora',
})
const greatVibes = localFont({
  src: '../fonts/GreatVibes-Regular.ttf',
  weight: '400',
  display: 'swap',
  variable: '--font-great-vibes',
})

const SHARE_IMAGE = {
  url: '/images/butterfly-freedom.jpg',
  width: 1024,
  height: 1024,
}
const FACEBOOK_URL =
  'https://www.facebook.com/people/%D0%9F%D0%B5%D0%BF%D0%B5%D1%80%D1%83%D0%B4%D0%B0-%D0%95%D0%BB%D0%B0-%D0%91%D1%8A%D0%B4%D0%B8-%D0%9B%D0%B5%D1%82%D0%B8/61588415966369/'
const INSTAGRAM_URL = 'https://www.instagram.com/peperuda.bg'

export const viewport: Viewport = {
  themeColor: '#504994',
}

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const text = seo[lang]
  const shareImage = { ...SHARE_IMAGE, alt: text.shareImageAlt }

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: text.home.title,
      template: `%s | ${text.siteName}`,
    },
    description: text.home.description,
    applicationName: 'Peperuda',
    keywords: [
      'Peperuda',
      'Peperuda Sliven',
      'women empowerment',
      'non-profit',
      'NGO',
      'Sliven',
      'Bulgaria',
      'young mothers',
      'sewing workshop',
      'upcycling',
      'handmade',
      'Metamorphosis program',
      'donate Bulgaria',
      'Пеперуда',
      'Пеперуда Сливен',
      'Сливен',
      'подкрепа за жени',
      'млади майки',
      'шиене',
      'дарение',
    ],
    authors: [{ name: 'Peperuda', url: SITE_URL }],
    creator: 'Peperuda',
    publisher: 'Peperuda',
    openGraph: {
      type: 'website',
      siteName: text.siteName,
      title: text.home.title,
      description: text.home.description,
      locale: ogLocales[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocales[l]),
      images: [shareImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: text.home.title,
      description: text.home.description,
      images: [shareImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    // Favicons come from the app/ file conventions: favicon.ico, icon.png, apple-icon.png
  }
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Peperuda',
  alternateName: 'Пеперуда',
  url: SITE_URL,
  logo: `${SITE_URL}/images/peperuda-logo.jpeg`,
  image: `${SITE_URL}${SHARE_IMAGE.url}`,
  description: seo.en.home.description,
  email: 'peperuda.bulgaria@gmail.com',
  telephone: '+359897996625',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dame Gruev 7',
    addressLocality: 'Sliven',
    addressCountry: 'BG',
  },
  areaServed: { '@type': 'City', name: 'Sliven' },
  knowsLanguage: ['bg', 'en', 'de'],
  founder: { '@type': 'Person', name: 'Salome' },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'peperuda.bulgaria@gmail.com',
    telephone: '+359897996625',
    availableLanguage: ['Bulgarian', 'English', 'German'],
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '16:00',
    },
  },
  sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Peperuda',
  alternateName: ['Пеперуда', 'Peperuda Bulgaria'],
  url: SITE_URL,
  inLanguage: ['en', 'bg', 'de'],
  publisher: { '@type': 'NGO', name: 'Peperuda', url: SITE_URL },
}

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  return (
    <html lang={lang}>
      <body className={`${montserrat.variable} ${lora.variable} ${greatVibes.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]).replace(/</g, '\\u003c'),
          }}
        />
        <LanguageProvider lang={lang}>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
