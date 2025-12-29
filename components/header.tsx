"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { BRAND_NAME, LOGO_SRC, PHONE, PHONE_DIAL } from "@/lib/site"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Treatments", id: "belviso" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
        >
          <div className="relative w-12 h-12">
            <Image
              src={LOGO_SRC}
              alt={BRAND_NAME}
              width={48}
              height={48}
              className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300 shadow-none rounded-4xl"
              priority
            />
          </div>
          <div className="block sm:block">
            <h1 className="text-lg font-bold text-primary">{BRAND_NAME}</h1>
            <p className="text-xs text-muted-foreground" />
            <p className="text-[10px] text-muted-foreground">Premium Facial Aesthetics & Cosmetic Treatments</p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
              className="text-foreground hover:text-primary transition-colors font-medium hover:underline underline-offset-4"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${PHONE_DIAL}`}
            aria-label={`Call ${PHONE}`}
            className="flex items-center justify-center w-10 h-10 rounded-full text-primary hover:bg-primary/5 transition-all hover:scale-105"
          >
            <Phone size={20} />
            <span className="sr-only">{PHONE}</span>
          </a>
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            Book Appointment
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border p-4 space-y-4 animate-in fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                setIsOpen(false)
              }}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium px-2 py-2 hover:bg-primary/5 rounded"
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              setIsOpen(false)
            }}
            className="w-full bg-primary hover:bg-primary/90 text-white mt-4"
          >
            Book Appointment
          </Button>
        </div>
      )}
    </header>
  )
}
