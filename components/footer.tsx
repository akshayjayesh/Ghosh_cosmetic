"use client"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-primary/20 pointer-events-none" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10 leading-[1.65rem]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="group hover:translate-y-2 transition-transform cursor-pointer">
            <div className="flex items-center gap-2 mb-4 hover:gap-3 transition-all">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform p-1">
                <img src="https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2F0266f0d0e051428d9d84fb33a21848bd?format=webp&width=200" alt="Bel Viso Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold group-hover:text-primary transition-colors text-left">BEL VISO</h3>
                <p className="text-xs text-gray-300">Facial Cosmetics</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed hover:text-gray-100 transition-colors">
              Enhancing natural beauty with advanced facial cosmetic treatments and personalized aesthetic care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("belviso")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Treatments
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("belviso")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Treatments</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById("belviso")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Anti-Aging
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("belviso")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Laser Treatments
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("belviso")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Facials
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold mb-4">Locations</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+919447045560" className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  Thalassery
                </a>
              </li>
            
              </li>
              <li>
                <a href="tel:+919447045560" className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

       

        {/* Social Icons */}
        <div className="border-t border-white/10 pt-8 flex items-center justify-between">
          <p className="text-sm text-gray-300">&copy; 2025 Belviso Facial Cosmetic Centre. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
