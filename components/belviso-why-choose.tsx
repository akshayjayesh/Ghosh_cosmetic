"use client"

import { Card } from "@/components/ui/card"
import { Layers, Users, Cpu, Heart, ShieldCheck, MapPin, Sparkles, PiggyBank } from "lucide-react"

const points = [
  {
    icon: Layers,
    title: "Dual Expertise",
    text: "Complete oral and facial aesthetics under one roof for seamless, coordinated care.",
  },
  {
    icon: Users,
    title: "Experienced Professionals",
    text: "Board-certified practitioners with years of clinical experience and proven results.",
  },
  { icon: Cpu, title: "Advanced Technology", text: "State-of-the-art equipment and evidence-based techniques for safer outcomes." },
  {
    icon: Heart,
    title: "Personalized Care",
    text: "Tailored treatment plans that respect your goals, comfort, and timelines.",
  },
  { icon: ShieldCheck, title: "Hygiene & Safety", text: "International sterilization, protocols, and monitored procedures." },
  { icon: MapPin, title: "Convenient Location", text: "Easy access in Kanayannur, Kerala with flexible scheduling." },
  { icon: Sparkles, title: "Comprehensive Care", text: "From preventive dentistry to advanced facial aesthetics." },
  { icon: PiggyBank, title: "Affordable Packages", text: "Transparent pricing and flexible payment options." },
]

export default function BelvisoWhyChoose() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Bel Viso?
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Expertise, safety, and outcomes you can trust</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, idx) => (
            <Card key={p.title} className="p-6 shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <p.icon className="text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">{p.title}</h4>
                  <p className="text-muted-foreground mt-2">{p.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
