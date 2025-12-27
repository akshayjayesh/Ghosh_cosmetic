"use client"

import { Button } from "@/components/ui/button"

export default function BelvisoHero() {
  return (
    <section id="belviso" className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Belviso Facial Cosmetic Centre - Where Beauty Meets Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            "Bel Viso" means "Beautiful Face" in Italian. At Belviso, we offer comprehensive, medical-grade facial
            aesthetic services delivered by experienced professionals in a safe, clinical environment.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 hover:shadow-lg hover:scale-105 transition-all"
            aria-label="Explore Services"
          >
            Explore Services
          </Button>
          <Button
            variant="outline"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border-primary text-primary hover:bg-primary/5 px-8 py-6 hover:shadow-lg hover:scale-105 transition-all"
            aria-label="Book Facial Consultation"
          >
            Book Facial Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
