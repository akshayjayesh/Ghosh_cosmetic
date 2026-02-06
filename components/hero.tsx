"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentSlide, setCurrentSlide] = useState(0)
  const fullText = "Enhance Your Natural Beauty with Advanced Facial Cosmetics"

  const heroImages = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ]

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(slideTimer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-50" />

      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                {displayText}
                <span className="text-primary animate-pulse">|</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                Kerala's Premier Aesthetic & Cosmetic Center | Thalassery
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-primary mb-8 animate-pulse">
                <span className="text-2xl">★★★★★</span>
                <span>4.9/5 • 10,000+ Satisfied Clients</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Get Free Consultation
              </Button>
              <Button
                onClick={() => document.getElementById("branches")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg bg-transparent transition-all duration-300"
              >
                View Our Branches
              </Button>
            </div>
          </div>

          {/* Right Image Slideshow */}
          <div className="relative h-[500px] group">
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
              {heroImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img || "/placeholder.svg"}
                  alt={`Hero slide ${idx + 1}`}
                  className={`absolute w-full h-full object-cover transition-all duration-700 ${
                    idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent rounded-2xl" />
            </div>

            {/* Slide Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="text-primary" size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="text-primary" size={24} />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-primary" size={32} />
        </div>
      </div>
    </section>
  )
}
