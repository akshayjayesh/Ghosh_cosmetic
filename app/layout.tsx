import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
const _inter = Inter({ subsets: ["latin"] })

import { BRAND_NAME } from "@/lib/site"

export const metadata: Metadata = {
  title: BRAND_NAME,
  description: `${BRAND_NAME} — Premium facial cosmetic treatments and aesthetic services across Kerala.`,
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth text-center">
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: BRAND_NAME,
              url: "https://example.com",
              department: [
                { "@type": "MedicalSpa", name: "Facial Cosmetic Centre" }
              ],
              areaServed: "Kerala, India",
              medicalSpecialty: ["CosmeticDermatology"],
            }),
          }}
          aria-hidden="true"
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
