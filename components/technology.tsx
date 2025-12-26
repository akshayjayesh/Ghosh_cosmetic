"use client"

import { useState, useEffect } from "react"
import { Zap, Cpu, Brain, Smile } from "lucide-react"
import { Card } from "@/components/ui/card"

const technologies = [
  {
    title: "3D Digital Imaging",
    description: "Advanced 3D imaging for precise aesthetic planning",
    icon: Zap,
  },
  {
    title: "Medical-Grade Lasers",
    description: "Latest laser technology for superior treatment results",
    icon: Cpu,
  },
  {
    title: "AI-Powered Analysis",
    description: "Artificial intelligence for optimal aesthetic outcomes",
    icon: Brain,
  },
  {
    title: "Digital Beauty Design",
    description: "Visualize your enhanced appearance before treatment begins",
    icon: Smile,
  },
]

export default function Technology() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("technology")
      if (section) {
        const rect = section.getBoundingClientRect()
        setIsVisible(rect.top < window.innerHeight * 0.8)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Advanced Technology</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            State-of-the-art cosmetic technology for superior aesthetic results
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        {/* Main Technology Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl h-96 group cursor-pointer hover:shadow-3xl transition-all hover:-translate-y-2 duration-300">
          <img
            src="/placeholder.svg"
            alt="Advanced cosmetic treatment technology"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Technology Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <Card
                  className={`p-6 hover:shadow-xl hover:-translate-y-3 transition-all group cursor-pointer border-border hover:border-primary/50 h-full ${
                    hoveredCard === idx ? "shadow-xl bg-primary/5" : ""
                  }`}
                >
                  <div
                    className={`w-14 h-14 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-all ${
                      hoveredCard === idx ? "scale-110 bg-primary/30" : ""
                    }`}
                  >
                    <Icon
                      className={`text-primary transition-all ${hoveredCard === idx ? "scale-125 rotate-12" : ""}`}
                      size={28}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{tech.description}</p>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Benefits Badge Strip */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:border-primary/30 transition-all hover:shadow-xl">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left-4 duration-700 hover:translate-x-2 transition-transform cursor-pointer">
              <div className="text-3xl">✓</div>
              <div>
                <p className="font-bold text-foreground">Non-Invasive</p>
                <p className="text-sm text-muted-foreground">Minimal downtime procedures</p>
              </div>
            </div>
            <div className="flex items-center gap-4 animate-in fade-in slide-in-from-top-4 duration-700 delay-100 hover:translate-y-1 transition-transform cursor-pointer">
              <div className="text-3xl">✓</div>
              <div>
                <p className="font-bold text-foreground">Natural Results</p>
                <p className="text-sm text-muted-foreground">Enhanced beauty that looks authentic</p>
              </div>
            </div>
            <div className="flex items-center gap-4 animate-in fade-in slide-in-from-right-4 duration-700 delay-200 hover:-translate-x-2 transition-transform cursor-pointer">
              <div className="text-3xl">✓</div>
              <div>
                <p className="font-bold text-foreground">Expert Results</p>
                <p className="text-sm text-muted-foreground">Precision aesthetic outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
