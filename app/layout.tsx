import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Peperuda | Empowering Women Together',
  description: 'A community non-profit organization dedicated to empowering women through community, freedom, and sustainable growth.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/peperuda-logo.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/peperuda-logo.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/peperuda-logo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/peperuda-logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${lora.variable} ${greatVibes.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
