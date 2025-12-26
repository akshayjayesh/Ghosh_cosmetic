"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import BelvisoHero from "@/components/belviso-hero"
import FacialServices from "@/components/facial-services"
import BelvisoGallery from "@/components/belviso-gallery"
import BelvisoWhyChoose from "@/components/belviso-why-choose"
import BelvisoTestimonials from "@/components/belviso-testimonials"
import Technology from "@/components/technology"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import FloatingActions from "@/components/floating-actions"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="overflow-hidden">
      <Header />
      <BelvisoHero />
      <FacialServices />
      <BelvisoGallery />
      <BelvisoWhyChoose />
      <BelvisoTestimonials />
      <Technology />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  )
}
