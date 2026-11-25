import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n'
import './globals.css'

// Local copies keep font loading independent of Google Fonts and Turbopack URL parsing.
const montserrat = localFont({
  src: './fonts/Montserrat-Variable.ttf',
  weight: '100 900',
  display: 'swap',
  variable: '--font-montserrat',
})
const lora = localFont({
  src: [
    { path: './fonts/Lora-Variable.ttf', weight: '400 700', style: 'normal' },
    { path: './fonts/Lora-Italic-Variable.ttf', weight: '400 700', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-lora',
})
const greatVibes = localFont({
  src: './fonts/GreatVibes-Regular.ttf',
  weight: '400',
  display: 'swap',
  variable: '--font-great-vibes',
})

const SITE_URL = 'https://peperudabulgaria.com'
const SITE_TITLE = 'Peperuda | Empowering Women Together'
const SITE_DESCRIPTION =
  'A community non-profit organization dedicated to empowering women through community, freedom, and sustainable growth.'
const SHARE_IMAGE = {
  url: '/images/butterfly-freedom.jpg',
  width: 1024,
  height: 1024,
  alt: 'Peperuda – empowering women together',
}
const FACEBOOK_URL =
  'https://www.facebook.com/people/%D0%9F%D0%B5%D0%BF%D0%B5%D1%80%D1%83%D0%B4%D0%B0-%D0%95%D0%BB%D0%B0-%D0%91%D1%8A%D0%B4%D0%B8-%D0%9B%D0%B5%D1%82%D0%B8/61588415966369/'
const INSTAGRAM_URL = 'https://www.instagram.com/peperuda.bg'

export const viewport: Viewport = {
  themeColor: '#504994',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Peperuda',
  },
  description: SITE_DESCRIPTION,
  applicationName: 'Peperuda',
  keywords: [
    'Peperuda',
    'women empowerment',
    'non-profit',
    'NGO',
    'Bulgaria',
    'community',
    'handcraft',
    'sewing',
    'women support',
    'Пеперуда',
  ],
  authors: [{ name: 'Peperuda', url: SITE_URL }],
  creator: 'Peperuda',
  publisher: 'Peperuda',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Peperuda',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'en_US',
    alternateLocale: ['bg_BG', 'de_DE'],
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SHARE_IMAGE],
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
  icons: {
    icon: { url: '/images/peperuda-logo-rounded.png', type: 'image/png' },
    apple: '/images/peperuda-logo.jpeg',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Peperuda',
  alternateName: 'Пеперуда',
  url: SITE_URL,
  logo: `${SITE_URL}/images/peperuda-logo.jpeg`,
  image: `${SITE_URL}${SHARE_IMAGE.url}`,
  description: SITE_DESCRIPTION,
  email: 'peperuda.bulgaria@gmail.com',
  telephone: '+359897996625',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BG',
  },
  sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${lora.variable} ${greatVibes.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
