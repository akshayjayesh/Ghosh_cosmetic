"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const services = [
  {
    title: "Anti-Aging Treatments",
    description: "Advanced Botox and filler treatments for youthful appearance",
    price: "₹5,000 - ₹30,000",
    image: "/placeholder.svg",
  },
  {
    title: "Laser Skin Treatments",
    description: "Cutting-edge laser technology for skin rejuvenation",
    price: "₹8,000 - ₹50,000",
    image: "/placeholder.svg",
  },
  {
    title: "Advanced Facials",
    description: "Customized facials for radiant and healthy skin",
    price: "₹3,000 - ₹15,000",
    image: "/placeholder.svg",
  },
]

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive facial cosmetic solutions tailored to your needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <Card className="overflow-hidden h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      hoveredCard === idx ? "scale-110 brightness-110" : "scale-100 brightness-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{service.description}</p>
                  <p className="text-lg font-bold text-primary mb-6">{service.price}</p>
                  <Button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full bg-primary hover:bg-primary/90 text-white transition-all hover:shadow-lg"
                  >
                    Book Now
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Services Carousel */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-all shadow-lg">
          <h3 className="text-2xl font-bold text-foreground mb-6">Additional Services</h3>
          <div className="flex flex-wrap gap-4 text-center">
            {[
              "Skin Tightening",
              "Dermaplaning",
              "Microdermabrasion",
              "Chemical Peels",
              "PRP Therapy",
              "Facial Consultation",
            ].map((service, idx) => (
              <button
                key={idx}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer font-semibold text-primary border border-primary/20 hover:border-primary/50 hover:bg-primary/5"
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
