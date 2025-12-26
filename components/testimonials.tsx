"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Kochi",
    rating: 5,
    text: "Outstanding experience! The team was professional and the aesthetic results exceeded my expectations. My skin looks amazing!",
    image: "/smiling-woman-portrait-professional.jpg",
  },
  {
    name: "Rajesh Kumar",
    location: "Thiruvananthapuram",
    rating: 5,
    text: "Best facial cosmetic center in Kerala. The Botox and filler treatments were expertly done and look completely natural.",
    image: "/smiling-man-portrait-professional.jpg",
  },
  {
    name: "Priya Sharma",
    location: "Ernakulathappan",
    rating: 5,
    text: "The doctors are incredibly skilled and experienced. The entire staff is courteous and the clinic is state-of-the-art. Worth every penny!",
    image: "/happy-woman-face-portrait-smiling.jpg",
  },
  {
    name: "Arun Menon",
    location: "Kozhikode",
    rating: 5,
    text: "Fantastic treatment experience. The cosmetic technology used is impressive and my skin transformation is remarkable. Highly satisfied!",
    image: "/confident-man-smiling-professional-portrait.jpg",
  },
  {
    name: "Lisa Anna",
    location: "Thrissur",
    rating: 5,
    text: "Extremely professional team with expertise in facial aesthetics. My skin rejuvenation results are incredible and look naturally beautiful!",
    image: "/cheerful-woman-face-portrait-smiling.jpg",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Patient Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Real stories from our happy patients</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        {/* Carousel */}
        <div className="relative">
          <Card className="p-12 shadow-2xl bg-gradient-to-br from-white to-blue-50/50 hover:shadow-3xl transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center min-h-80">
              {/* Testimonial Content */}
              <div className="animate-in fade-in duration-500 space-y-4">
                <div className="flex gap-1 mb-4 hover:gap-2 transition-all">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-yellow-400 text-yellow-400 hover:scale-110 transition-transform"
                      style={{ animationDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="text-xl text-foreground leading-relaxed italic hover:text-primary/80 transition-colors">
                  "{testimonials[current].text}"
                </p>
                <div className="flex items-center gap-3 pt-2 hover:translate-x-2 transition-transform cursor-pointer">
                  <img
                    src={testimonials[current].image || "/placeholder.svg"}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-full border-2 border-primary/20 shadow-md"
                  />
                  <div>
                    <p className="font-bold text-foreground">{testimonials[current].name}</p>
                    <p className="text-muted-foreground text-sm">{testimonials[current].location}</p>
                  </div>
                </div>
              </div>

              {/* Before/After Comparison */}
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all hover:scale-105 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground font-semibold">Facial Cosmetic Results</p>
                  <p className="text-sm text-muted-foreground mt-2">Expert aesthetic transformations</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrent(idx)
                      setAutoPlay(false)
                    }}
                    className={`h-3 rounded-full transition-all hover:scale-125 ${
                      idx === current ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400 w-3"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  size="icon"
                  onClick={prev}
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent hover:scale-110 transition-all"
                  variant="outline"
                >
                  <ChevronLeft />
                </Button>
                <Button
                  size="icon"
                  onClick={next}
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent hover:scale-110 transition-all"
                  variant="outline"
                >
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </Card>

          {/* View All Button */}
          <div className="text-center mt-8">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 hover:shadow-lg hover:scale-105 transition-all">
              View All Testimonials
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
