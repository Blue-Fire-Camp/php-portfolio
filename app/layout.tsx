import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Manfred Powell | Senior Software Engineer — Laravel, WordPress & Cloud",
  description:
    "Senior software engineer with 11+ years building scalable PHP/Laravel and WordPress platforms, full-stack Vue and React/Next.js products, and cloud-native systems on AWS with Docker, Kubernetes, and Terraform.",
  keywords: [
    "Senior Software Engineer",
    "Laravel",
    "WordPress",
    "PHP",
    "Vue.js",
    "React",
    "Next.js",
    "AWS",
    "Docker",
    "Kubernetes",
  ],
  authors: [{ name: "Manfred Powell" }],
  openGraph: {
    title: "Manfred Powell | Senior Software Engineer — Laravel, WordPress & Cloud",
    description:
      "Portfolio of a senior engineer focused on Laravel, WordPress/WooCommerce, full-stack TypeScript, and reliable cloud delivery.",
    type: "website",
    
  },
  icons: {
    icon: "/logo/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M2V1CEY3J9"
          strategy="afterInteractive"
          async
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M2V1CEY3J9');
          `}
        </Script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${spaceGrotesk.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
