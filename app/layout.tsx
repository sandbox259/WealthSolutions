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

// export const metadata: Metadata = {
//   title: 'Nivesh Nirnay Solutions | Investment Education & Market Learning',
//   description: 'Learn First. Invest Later. Premium investment education and market learning solutions for disciplined wealth building.',
//   generator: 'v0.app',
//   icons: {
//     icon: [
//       {
//         url: '/niveshlogo.png',
//         media: '(prefers-color-scheme: light)',
//       },
//       {
//         url: '/niveshlogo.png',
//         media: '(prefers-color-scheme: dark)',
//       },
//       {
//         url: '/niveshlogo.png',
//         type: 'image/svg+xml',
//       },
//     ],
//     apple: '/niveshlogo.png',
//   },
// }

export const metadata: Metadata = {
  metadataBase: new URL("https://niveshnirnaysolutions.in"),

  title: {
    default:
      "Nivesh Nirnay Solutions | Investment Education & Market Learning",
    template: "%s | Nivesh Nirnay Solutions",
  },

  description:
    "Nivesh Nirnay Solutions provides investment education, market learning, financial awareness and mentorship to help individuals make informed and disciplined financial decisions.",

  applicationName: "Nivesh Nirnay Solutions",

  authors: [
    {
      name: "Nivesh Nirnay Solutions",
      url: "https://niveshnirnaysolutions.in",
    },
  ],

  creator: "Nivesh Nirnay Solutions",
  publisher: "Nivesh Nirnay Solutions",

  alternates: {
    canonical: "https://niveshnirnaysolutions.in/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/niveshlogo.png",
        type: "image/png",
      },
    ],
    apple: "/niveshlogo.png",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://niveshnirnaysolutions.in/",
    siteName: "Nivesh Nirnay Solutions",

    title:
      "Nivesh Nirnay Solutions | Investment Education & Market Learning",

    description:
      "Investment education, market learning, financial awareness and mentorship from Nivesh Nirnay Solutions.",

    images: [
      {
        url: "/niveshlogo.png",
        width: 512,
        height: 512,
        alt: "Nivesh Nirnay Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Nivesh Nirnay Solutions | Investment Education & Market Learning",

    description:
      "Investment education, market learning, financial awareness and mentorship from Nivesh Nirnay Solutions.",

    images: ["/niveshlogo.png"],
  },

  category: "finance",
};

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
