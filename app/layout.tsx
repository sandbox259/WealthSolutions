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
  title: 'Unity Wealth Solutions | Investment Banking & Corporate Advisory',
  description: 'India-focused investment banking and corporate advisory firm connecting ambition to capital.',
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
