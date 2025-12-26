"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin } from "lucide-react"

const doctors = [
  {
    name: "Dr. Dinak",
    title: "Chief Cosmetic Surgeon & Founder",
    qualifications: "MD, FRCS, PGDHE, FFAC",
    specialization: "Anti-Aging & Facial Rejuvenation Specialist",
    phone: "+91 94470 45560",
    email: "dr.dinak@clinic.com",
    locations: ["Kochi Main", "Thiruvananthapuram"],
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fb102da237b80440abbd5f8140df01ad3?format=webp&width=800",
    experience: "20+ years",
  },
  {
    name: "Dr. Priya",
    title: "Senior Aesthetic Specialist",
    qualifications: "MD, DRS, MACS",
    specialization: "Laser & Skin Rejuvenation Specialist",
    phone: "+91 98765 43211",
    email: "dr.priya@clinic.com",
    locations: ["Kochi Main", "Thrissur"],
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F76aea0e9125a4ccb8da2436d848a3dfd?format=webp&width=800",
    experience: "15+ years",
  },
  {
    name: "Dr. Anaya",
    title: "Aesthetic Dermatologist",
    qualifications: "MD, DDV",
    specialization: "Dermatology & Skin Care Specialist",
    phone: "+91 98765 43212",
    email: "dr.anaya@clinic.com",
    locations: ["Kozhikode"],
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F703e19e82f404300a68106c3c1b3897b?format=webp&width=800",
    experience: "12+ years",
  },
  {
    name: "Dr. Amir",
    title: "Anti-Aging Specialist",
    qualifications: "MD, FRCS",
    specialization: "Botox & Filler Specialist",
    phone: "+91 98765 43213",
    email: "dr.amir@clinic.com",
    locations: ["Ernakulathappan"],
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fd9813784f3ae40ac9bf09b1326563ddb?format=webp&width=800",
    experience: "10+ years",
  },
  {
    name: "Dr. Shreya",
    title: "Cosmetic Specialist",
    qualifications: "MD, FRCS",
    specialization: "Facial Aesthetics & Beauty Enhancement",
    phone: "+91 98765 43214",
    email: "dr.shreya@clinic.com",
    locations: ["Kottayam"],
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fb102da237b80440abbd5f8140df01ad3?format=webp&width=800",
    experience: "8+ years",
  },
  {
    name: "Dr. Rahul",
    title: "Cosmetic Surgeon",
    qualifications: "MD, MS",
    specialization: "Advanced Facial Enhancement",
    phone: "+91 98765 43215",
    email: "dr.rahul@clinic.com",
    locations: ["Kochi Main"],
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F76aea0e9125a4ccb8da2436d848a3dfd?format=webp&width=800",
    experience: "7+ years",
  },
  {
    name: "Dr. Neha",
    title: "Aesthetic Therapist",
    qualifications: "MD, FRCS",
    specialization: "Facial Treatment & Skin Care",
    phone: "+91 98765 43216",
    email: "dr.neha@clinic.com",
    locations: ["Kozhikode"],
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F703e19e82f404300a68106c3c1b3897b?format=webp&width=800",
    experience: "6+ years",
  },
  {
    name: "Dr. Sophia",
    title: "Cosmetic Specialist",
    qualifications: "MD, DDV",
    specialization: "Laser & Non-Invasive Treatments",
    phone: "+91 98765 43217",
    email: "dr.sophia@clinic.com",
    locations: ["Thiruvananthapuram"],
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fd9813784f3ae40ac9bf09b1326563ddb?format=webp&width=800",
    experience: "5+ years",
  },
]

export default function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="doctors" className="py-20 bg-gradient-to-b from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Expert Specialists</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet our highly qualified team of cosmetic and aesthetic specialists
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, idx) => (
            <div
              key={idx}
              onMouseEnter={() => {
                setHoveredCard(idx)
                setSelectedDoctor(idx)
              }}
              onMouseLeave={() => setHoveredCard(null)}
              className="group cursor-pointer h-full"
            >
              <Card
                className={`overflow-hidden h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  selectedDoctor === idx ? "ring-2 ring-primary" : ""
                }`}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <img
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      hoveredCard === idx ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <Badge className="absolute top-3 right-3 bg-primary/90">{doctor.experience}</Badge>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-bold text-foreground text-sm line-clamp-2">{doctor.name}</h3>
                    <p className="text-xs text-primary font-semibold mt-1">{doctor.title}</p>
                  </div>

                  <div className="text-xs">
                    <p className="text-muted-foreground mb-2">{doctor.qualifications}</p>
                    <p className="text-xs text-gray-600 line-clamp-2">{doctor.specialization}</p>
                  </div>

                  {/* Contact Icons */}
                  <div className="flex gap-2 pt-2 border-t">
                    <a
                      href={`tel:${doctor.phone}`}
                      className="flex-1 flex items-center justify-center p-2 bg-primary/10 hover:bg-primary/20 rounded transition-all text-primary hover:scale-110"
                      title="Call"
                    >
                      <Phone size={16} />
                    </a>
                    <a
                      href={`mailto:${doctor.email}`}
                      className="flex-1 flex items-center justify-center p-2 bg-primary/10 hover:bg-primary/20 rounded transition-all text-primary hover:scale-110"
                      title="Email"
                    >
                      <Mail size={16} />
                    </a>
                    <div className="flex-1 flex items-center justify-center p-2 bg-primary/10 hover:bg-primary/20 rounded transition-all text-primary hover:scale-110 cursor-pointer">
                      <MapPin size={16} />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Highlighted Featured Doctor */}
        {selectedDoctor !== null && (
          <div className="mt-12 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img
                  src={doctors[selectedDoctor].image || "/placeholder.svg"}
                  alt={doctors[selectedDoctor].name}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{doctors[selectedDoctor].name}</h3>
                    <p className="text-lg text-primary font-semibold mb-1">{doctors[selectedDoctor].title}</p>
                    <p className="text-muted-foreground mb-4">{doctors[selectedDoctor].experience} of Experience</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">Qualifications:</p>
                    <p className="text-muted-foreground mb-4">{doctors[selectedDoctor].qualifications}</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">Specialization:</p>
                    <p className="text-muted-foreground mb-4">{doctors[selectedDoctor].specialization}</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">Available At:</p>
                    <div className="flex flex-wrap gap-2">
                      {doctors[selectedDoctor].locations.map((loc, idx) => (
                        <Badge key={idx} variant="secondary">
                          {loc}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={`tel:${doctors[selectedDoctor].phone}`}
                      className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-all hover:shadow-lg text-center"
                    >
                      Call Now
                    </a>
                    <a
                      href={`mailto:${doctors[selectedDoctor].email}`}
                      className="flex-1 bg-accent/20 hover:bg-accent/30 text-accent font-semibold py-3 rounded-lg transition-all hover:shadow-lg text-center"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
