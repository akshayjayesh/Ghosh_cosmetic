"use client"

import { useState } from "react"
import { Clock, CreditCard, Users, Shield, Heart, Phone } from "lucide-react"
import { Card } from "@/components/ui/card"

const carePoints = [
  {
    title: "Flexible Timing",
    description: "Early morning to late evening appointments",
    icon: Clock,
  },
  {
    title: "EMI Options",
    description: "Installment plans available for all treatments",
    icon: CreditCard,
  },
  {
    title: "Expert Team",
    description: "Experienced aesthetic specialists and clinicians",
    icon: Users,
  },
  {
    title: "Sterilization",
    description: "International hygiene standards maintained",
    icon: Shield,
  },
  {
    title: "Personalized Care",
    description: "Custom treatment plans for each patient",
    icon: Heart,
  },
  {
    title: "24/7 Support",
    description: "Emergency assistance available anytime",
    icon: Phone,
  },
]

export default function PatientCare() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Patient-Centric Care</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your comfort and satisfaction are our top priorities
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        {/* Care Points Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {carePoints.map((point, idx) => {
            const Icon = point.icon
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${idx * 75}ms` }}
              >
                <Card
                  className={`p-8 hover:shadow-2xl hover:-translate-y-3 transition-all group border-border hover:border-primary/50 cursor-pointer h-full ${
                    hoveredCard === idx ? "bg-gradient-to-br from-primary/5 to-accent/5 shadow-xl" : ""
                  }`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${
                      hoveredCard === idx ? "scale-125 from-primary/20 to-accent/20 rotate-12" : "group-hover:scale-110"
                    }`}
                  >
                    <Icon
                      className={`text-primary transition-all duration-300 ${
                        hoveredCard === idx ? "scale-125 rotate-12" : ""
                      }`}
                      size={32}
                    />
                  </div>
                  <h3
                    className={`text-lg font-bold mb-2 transition-colors ${
                      hoveredCard === idx ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
