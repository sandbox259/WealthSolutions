import React from "react"
import type { Metadata } from 'next'
import { Montserrat, Questrial } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Footer from "@/components/Footer"
import { Nav } from "@/components/nav"
import PageTransition from "@/components/PageTransition"


const inter = Montserrat({ subsets: ["latin"], variable: '--font-sans' });
const playfair = Questrial({ weight: '400', subsets: ["latin"], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'My Wealth Solutions | Financial Education & Market Learning',
  description: 'Structured financial education and market learning programs. Learn about securities markets, commodities, and build disciplined wealth knowledge.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logo.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`font-sans antialiased`}>
        <Nav />
        <PageTransition>
        <main className ="min-h-screen">
          {children}
        </main>
        </PageTransition>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
