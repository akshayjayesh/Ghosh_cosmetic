"use client"

import { useState } from "react"
import { MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import dynamic from "next/dynamic"

const branches = [
  {
    name: "Kochi Main",
    address: "MG Road, Kochi, Kerala",
    phone: "+91 94470 45560",
    hours: "9:00 AM - 8:00 PM",
    coords: { lat: 9.9312, lng: 76.2673 },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.5623842461247!2d76.2651!3d9.9312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d5c5c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    name: "Thiruvananthapuram",
    address: "Statue Road, TVM, Kerala",
    phone: "+91 98765 43211",
    hours: "9:00 AM - 7:00 PM",
    coords: { lat: 8.5241, lng: 76.9366 },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.9878941622906!2d76.9366!3d8.5241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b64f5c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    name: "Kozhikode",
    address: "Calicut Medical Road",
    phone: "+91 98765 43212",
    hours: "10:00 AM - 8:00 PM",
    coords: { lat: 11.2588, lng: 75.7804 },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.8956482932546!2d75.7804!3d11.2588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65cccc5c5c5d%3A0x5c5c5c5c5c5c5c5c!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    name: "Ernakulathappan",
    address: "Ernakulathappan Road, Kochi",
    phone: "+91 98765 43213",
    hours: "9:00 AM - 7:00 PM",
    coords: { lat: 9.9, lng: 76.27 },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.2345678901234!2d76.27!3d9.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d5c5c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2sErnakulathappan%2C%20Kochi!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    name: "Thrissur",
    address: "Sakthan Vazhcha Road, Thrissur",
    phone: "+91 98765 43214",
    hours: "10:00 AM - 6:00 PM",
    coords: { lat: 10.5276, lng: 76.2144 },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.8901234567890!2d76.2144!3d10.5276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b088f8f8f8f8f8f%3A0x5c5c5c5c5c5c5c5c!2sThrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    name: "Kottayam",
    address: "Kottayam Medical Center",
    phone: "+91 98765 43215",
    hours: "9:00 AM - 7:00 PM",
    coords: { lat: 9.5942, lng: 76.5214 },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.5678901234567!2d76.5214!3d9.5942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0814b5c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2sKottayam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890",
  },
]

const BranchMap = dynamic(() => import("./branch-map"), { ssr: false })

export default function Branches() {
  const [selectedBranch, setSelectedBranch] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="branches" className="py-20 bg-gradient-to-b from-white to-red-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Branches</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visit us at any of our 6 premium locations across Kerala
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Map */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-[774px]">
              <BranchMap branches={branches} selectedBranch={selectedBranch} onSelectBranch={setSelectedBranch} />
            </Card>
          </div>

          {/* Branch Cards Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {branches.map((branch, idx) => (
              <Card
                key={idx}
                onMouseEnter={() => {
                  setSelectedBranch(idx)
                  setHoveredCard(idx)
                }}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  selectedBranch === idx
                    ? "border-primary border-2 bg-primary/5 shadow-xl scale-105"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                      selectedBranch === idx ? "bg-primary text-white scale-110" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <MapPin size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-lg mb-1">{branch.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{branch.address}</p>
                    <p className="text-xs text-muted-foreground mb-3">Hours: {branch.hours}</p>
                    <a
                      href={`tel:${branch.phone}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all hover:text-primary/80"
                    >
                      <Phone size={16} />
                      {branch.phone}
                    </a>
                  </div>
                </div>
                <Button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full mt-4 bg-primary hover:bg-primary/90 text-white transition-all"
                >
                  Book Appointment
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
