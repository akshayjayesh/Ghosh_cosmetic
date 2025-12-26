"use client"

import { Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const stages = [
  {
    number: 1,
    title: "Consultation",
    description: "Comprehensive aesthetic evaluation and planning",
  },
  {
    number: 2,
    title: "Assessment",
    description: "3D digital imaging for precision analysis",
  },
  {
    number: 3,
    title: "Design",
    description: "Personalized beauty enhancement plan",
  },
  {
    number: 4,
    title: "Treatment",
    description: "Begin your aesthetic transformation",
  },
  {
    number: 5,
    title: "Maintenance",
    description: "Maintain your enhanced natural beauty",
  },
]

export default function Timeline() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Treatment Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Five simple steps to your enhanced appearance</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />

            {/* Timeline Steps */}
            <div className="grid grid-cols-5 gap-4">
              {stages.map((stage, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Circle with Number */}
                  <div className="relative z-10 w-32 h-32 bg-white rounded-full border-4 border-primary flex items-center justify-center shadow-lg mb-6 group cursor-pointer hover:scale-125 transition-all duration-300 hover:shadow-2xl hover:border-accent hover:bg-primary/5">
                    <div className="text-center">
                      <div className={`text-4xl font-bold transition-colors group-hover:text-accent`}>
                        {stage.number}
                      </div>
                      <Zap size={24} className="text-primary mx-auto group-hover:rotate-12 transition-transform" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <Card className="w-full p-6 text-center hover:shadow-lg hover:-translate-y-2 transition-all group hover:border-primary/50 cursor-pointer">
                    <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80">
                      {stage.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              className="flex gap-4 animate-in fade-in slide-in-from-left-4 duration-700"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg hover:scale-110 transition-all cursor-pointer hover:shadow-xl">
                  {stage.number}
                </div>
                {idx < stages.length - 1 && <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent mt-2" />}
              </div>
              <Card className="flex-1 p-4 hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
                <h3 className="font-bold text-foreground mb-1 hover:text-primary transition-colors">{stage.title}</h3>
                <p className="text-sm text-muted-foreground">{stage.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
