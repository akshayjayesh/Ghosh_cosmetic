"use client"

import { Button } from "@/components/ui/button"

export default function BelvisoHero() {
  return (
    <section id="belviso" className="py-20 bg-gradient-to-b from-white to-red-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Bel Viso - Where Beauty Meets Expertise
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Medical-grade facial aesthetic services delivered by experienced professionals. "Bel Viso" means "Beautiful Face" in Italian.
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Our advanced AI-powered facial analysis technology provides precise aesthetic assessment and personalized treatment recommendations tailored to your unique facial structure and beauty goals.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mb-8" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 hover:shadow-lg hover:scale-105 transition-all"
                aria-label="Explore Services"
              >
                Explore Services
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="border-primary text-primary hover:bg-primary/5 px-8 py-3 hover:shadow-lg hover:scale-105 transition-all"
                aria-label="Book Facial Consultation"
              >
                Book Consultation
              </Button>
            </div>
          </div>

          {/* Image Section - AI Facial Scan */}
          <div className="animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60 group-hover:opacity-100" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2Fb2d480f7773c4283b052462ed9e40354?format=webp&width=800"
                  alt="AI Facial Analysis - Bel Viso Technology"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Tech Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg animate-in fade-in slide-in-from-top-4 duration-700 delay-300">
                  <p className="text-sm font-semibold text-primary">AI Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
