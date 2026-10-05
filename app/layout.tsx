import type { Metadata } from 'next'
import { Great_Vibes, Lora, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n'
import './globals.css'

// Closest Cyrillic-capable matches for the Canva flyer fonts: Garet, Cooper BT, Halimum.
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: '--font-montserrat'
});
const lora = Lora({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: '--font-lora'
});
const greatVibes = Great_Vibes({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: '--font-great-vibes'
});

export const metadata: Metadata = {
  title: 'Peperuda | Empowering Women Together',
  description: 'A community non-profit organization dedicated to empowering women through community, freedom, and sustainable growth.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
