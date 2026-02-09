"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Shield, Lightbulb } from "lucide-react"

export default function HeroRedesigned() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  const animatedTexts = [
    "Personalized Treatments",
    "Advanced Skin Analysis",
    "Natural-Looking Results",
    "Expert Procedures",
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % animatedTexts.length)
    }, 4000)

    return () => clearInterval(textInterval)
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
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden" id="home">
        {/* Background Image with Ken Burns Effect */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: isMobile
              ? `url('https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2Fb95232e7d9d749c1a0652150cbc64cf3?format=webp&width=800&height=1200')`
              : `url('https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2Ff19e12c24b1a4c9bb4b19f60c3f2f905?format=webp&width=1920&height=2880')`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center 40%",
            animation: isMobile ? "none" : "kenburns 20s ease-in-out infinite alternate",
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
          <div className="max-w-7xl mx-auto px-4 lg:px-12 py-4 lg:py-5 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl lg:text-2xl font-semibold text-white">Bel Viso</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {["Home", "Services", "About Us", "Gallery", "Testimonials", "Treatments", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white text-sm lg:text-base font-normal opacity-95 hover:text-red-600 transition-colors duration-300 whitespace-nowrap"
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white focus:outline-none">
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
          <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 max-w-2xl">
            {/* Main Headline */}
            <h1
              className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-in fade-in slide-in-from-left-8 duration-1000"
              style={{
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                letterSpacing: "-0.5px",
              }}
            >
              Unlock Your Skin's Potential
            </h1>

            {/* Subheadline with Animated Text */}
            <p
              className="text-white text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-8 max-w-md lg:max-w-lg animate-in fade-in slide-in-from-left-8 duration-1000"
              style={{
                animationDelay: "200ms",
                opacity: 0.9,
              }}
            >
              Advanced Facial Analysis &{" "}
              <span
                className="font-semibold text-red-400 inline-block min-w-fit"
                style={{
                  animation: "fadeInOut 4s infinite",
                }}
              >
                {animatedTexts[textIndex]}
              </span>
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 animate-in fade-in slide-in-from-left-8 duration-1000"
              style={{
                animationDelay: "400ms",
              }}
            >
              <button
                onClick={handleBookConsultation}
                className="px-6 sm:px-8 py-3 lg:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base whitespace-nowrap text-center"
              >
                Book a Consultation
              </button>
              <button
                onClick={handleLearnMore}
                className="px-6 sm:px-8 py-3 lg:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 text-sm sm:text-base whitespace-nowrap text-center"
              >
                Learn More
              </button>
            </div>

            {/* Feature Badges */}
            <div
              className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 lg:gap-8 animate-in fade-in duration-1000"
              style={{
                animationDelay: "600ms",
              }}
            >
              <div className="flex items-center gap-2">
                <Shield size={20} className="text-white flex-shrink-0" />
                <span className="text-white text-sm lg:text-base font-light opacity-80">
                  Trust
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Lightbulb size={20} className="text-white flex-shrink-0" />
                <span className="text-white text-sm lg:text-base font-light opacity-80">
                  Innovation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          style={{
            animation: "bounce 2s infinite",
            animationDelay: "800ms",
          }}
        >
          <button
            onClick={handleScroll}
            className="flex flex-col items-center gap-2 cursor-pointer focus:outline-none"
            aria-label="Scroll to explore"
          >
            <span className="text-white text-xs lg:text-sm opacity-60 font-light">
              Scroll to explore
            </span>
            <ChevronDown
              size={24}
              className="text-white opacity-60"
              style={{
                animation: "pulse 2s infinite",
              }}
            />
          </button>
        </div>
      </section>

      {/* CSS for Animations */}
      <style jsx>{`
        @keyframes kenburns {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.05);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0;
          }
          10%, 90% {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          section[id="home"] {
            background-attachment: scroll !important;
          }
        }

        /* Responsive text sizing */
        @media (max-width: 640px) {
          h1 {
            font-size: 1.75rem;
            line-height: 1.2;
          }
          p {
            font-size: 0.875rem;
          }
        }

        /* Focus states for accessibility */
        button:focus {
          outline: 2px solid white;
          outline-offset: 2px;
        }
      `}</style>
    </>
  )
}
