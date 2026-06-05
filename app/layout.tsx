import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Energy Healing with Amy — Reconnect with Your Energy',
  description: 'Amy offers intuitive energy healing sessions and experiential classes to help you feel grounded, clear, and connected. Sessions in Easton MD, Sarasota FL, and virtually.',
  keywords: ['energy healing', 'reiki', 'chakra balancing', 'spiritual healing', 'Amy Ostroff', 'Easton MD', 'Sarasota FL'],
  authors: [{ name: 'Amy Ostroff' }],
  openGraph: {
    title: 'Energy Healing with Amy',
    description: 'Intuitive energy healing sessions and experiential classes to help you feel grounded, clear, and deeply connected to yourself.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-sans antialiased bg-cream text-deep">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
