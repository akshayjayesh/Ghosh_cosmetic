"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Shield, Lightbulb } from "lucide-react"

export default function HeroRedesigned() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleBookConsultation = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLearnMore = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleScroll = () => {
    const aboutSection = document.getElementById("facial-services")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden" id="home">
        {/* Background Image with Ken Burns Effect */}
        <div
          className="absolute inset-0 bg-center bg-cover animate-kenburns"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F1de51d5462a249b98efb37df803b082a%2F019b6e9850e54a21ad2ac1b9542c6e0c?format=webp&width=1920')`,
            backgroundAttachment: "fixed",
          }}
        />

        {/* Dark Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%)",
          }}
        />

        {/* Transparent Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-none bg-transparent">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 lg:py-6 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-semibold text-white">Belviso</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {["Home", "Services", "About Us", "Testimonials", "Treatments", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white text-base font-normal opacity-95 hover:text-red-600 transition-colors duration-300"
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div
            className="w-full lg:w-auto px-5 lg:px-12 max-w-2xl"
            style={{
              marginLeft: "0",
              marginTop: "-20px",
            }}
          >
            {/* Main Headline */}
            <h1
              className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-in fade-in slide-in-from-left-8 duration-1000"
              style={{
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                letterSpacing: "-0.5px",
              }}
            >
              Unlock Your Skin's Potential
            </h1>

            {/* Subheadline */}
            <p
              className="text-white text-base md:text-lg lg:text-xl font-light leading-relaxed mb-8 max-w-md animate-in fade-in slide-in-from-left-8 duration-1000"
              style={{
                animationDelay: "200ms",
                opacity: 0.9,
              }}
            >
              Advanced Facial Analysis & Personalized Treatments
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 mb-10 animate-in fade-in slide-in-from-left-8 duration-1000"
              style={{
                animationDelay: "400ms",
              }}
            >
              <button
                onClick={handleBookConsultation}
                className="px-8 py-3 lg:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-base whitespace-nowrap"
              >
                Book a Consultation
              </button>
              <button
                onClick={handleLearnMore}
                className="px-8 py-3 lg:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 text-base whitespace-nowrap"
              >
                Learn More
              </button>
            </div>

            {/* Feature Badges */}
            <div
              className="flex flex-wrap gap-6 lg:gap-8 animate-in fade-in duration-1000"
              style={{
                animationDelay: "600ms",
              }}
            >
              <div className="flex items-center gap-2">
                <Shield size={20} className="text-white" />
                <span className="text-white text-sm lg:text-base font-light opacity-80">
                  Trust
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Lightbulb size={20} className="text-white" />
                <span className="text-white text-sm lg:text-base font-light opacity-80">
                  Innovation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
          style={{
            animationDelay: "800ms",
          }}
        >
          <button
            onClick={handleScroll}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <span className="text-white text-xs lg:text-sm opacity-60 font-light">
              Scroll to explore
            </span>
            <ChevronDown size={24} className="text-white opacity-60 animate-pulse" />
          </button>
        </div>
      </section>

      {/* CSS for Ken Burns Animation */}
      <style jsx>{`
        @keyframes kenburns {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.05);
          }
        }

        .animate-kenburns {
          animation: kenburns 20s ease-in-out infinite alternate;
        }

        @media (max-width: 768px) {
          .animate-kenburns {
            animation: none;
          }
        }
      `}</style>
    </>
  )
}
