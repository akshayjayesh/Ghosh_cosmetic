"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const belvisoTestimonials = [
  {
    name: "Aisha K.",
    rating: 5,
    treatment: "Anti-aging Facial & Botox",
    text:
      "The team explained everything clearly and the results look completely natural. My skin feels rejuvenated and I couldn't be happier with the outcome!",
    image: "/placeholder.svg",
    meta: "Thalassery • Jan 2025",
  },
  {
    name: "Rohan S.",
    rating: 5,
    treatment: "Hydrafacial & Laser",
    text:
      "My skin texture improved in just a few sessions. Professional setup and excellent aftercare guidance.",
    image: "/placeholder.svg",
    meta: "Thalassery • Dec 2024",
  },
  {
    name: "Maya P.",
    rating: 5,
    treatment: "Long-term patient",
    text:
      "I've trusted the clinic for years. Adding Belviso was the best decision—complete care in one place.",
    image: "/placeholder.svg",
    meta: "Thalassery • Nov 2024",
  },
  {
    name: "Arun V.",
    rating: 5,
    treatment: "Staff Professionalism",
    text:
      "Warm, reassuring team. Procedures were explained thoroughly and done with utmost hygiene.",
    image: "/placeholder.svg",
    meta: "Thalassery • Oct 2024",
  },
  {
    name: "Neha D.",
    rating: 5,
    treatment: "Visible results",
    text:
      "Noticeable lift and glow after RF tightening and PRP. Confidence boost is real!",
    image: "/placeholder.svg",
    meta: "Thalassery • Sep 2024",
  },
]

export default function BelvisoTestimonials() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">What Our Patients Say</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Facial cosmetic experiences from real patients</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="grid grid-flow-col auto-cols-[minmax(280px,1fr)] gap-6 snap-x snap-mandatory animate-carousel">
            {belvisoTestimonials.map((t, idx) => (
              <Card key={idx} className="p-6 snap-start shadow-lg hover:shadow-2xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.image}
                    alt={`${t.name} avatar`}
                    className="w-14 h-14 rounded-full border-2 border-primary/20"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.meta}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-primary fill-primary" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm text-primary font-semibold mb-2">{t.treatment}</p>
                <p className="text-foreground">“{t.text}”</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        :global(.animate-carousel) {
          animation: carousel 20s linear infinite;
        }

        :global(.animate-carousel):hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
