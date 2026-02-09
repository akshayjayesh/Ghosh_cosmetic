"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formStep, setFormStep] = useState(1)
  const [hoveredField, setHoveredField] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "Facial Cosmetics",
    branch: "",
    service: "",
    date: "",
    time: "",
  })

  const facialServices = [
    "Anti-Aging (Botox/Fillers)",
    "Laser Treatments",
    "Advanced Facials",
    "Skin Tightening",
    "Dermaplaning/Microdermabrasion",
    "PRP Therapy",
  ]
  const services = facialServices
  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

  const handleNext = () => {
    if (formStep < 3) setFormStep(formStep + 1)
  }

  const handlePrev = () => {
    if (formStep > 1) setFormStep(formStep - 1)
  }

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.branch || !formData.service || !formData.date || !formData.time) {
      alert("Please fill in all the required fields")
      return
    }

    // Create WhatsApp message
    const message = `Hello! I would like to book an appointment.\n\nDetails:\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nBranch: ${formData.branch}\nPreferred Date: ${formData.date}\nPreferred Time: ${formData.time}`

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message)

    // WhatsApp Business API URL
    const whatsappUrl = `https://wa.me/919447045560?text=${encodedMessage}`

    // Open WhatsApp
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Book Your Appointment</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards your enhanced beauty
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-all h-full bg-gradient-to-br from-white to-primary/5 border border-primary/10">
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Complete Your Details</h3>
                <p className="text-sm text-muted-foreground">Fill in your information step by step</p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8 pb-8 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-muted-foreground">Step {formStep} of 3</span>
                  <span className="text-xs text-primary font-medium">{Math.round((formStep / 3) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-border rounded-full h-3 overflow-hidden shadow-sm">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-full transition-all duration-500 shadow-lg"
                    style={{ width: `${(formStep / 3) * 100}%` }}
                  />
                </div>
              </div>

              {/* Form Content */}
              <div className="min-h-64">
                {/* Step 1 */}
                {formStep === 1 && (
                  <div className="space-y-6 animate-in fade-in">
                    <div onMouseEnter={() => setHoveredField("name")} onMouseLeave={() => setHoveredField(null)}>
                      <label className="block text-sm font-semibold text-foreground mb-3">Full Name</label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
                          hoveredField === "name"
                            ? "border-primary bg-primary/5 shadow-lg"
                            : "border-border focus:ring-2 focus:ring-primary/50"
                        }`}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div onMouseEnter={() => setHoveredField("phone")} onMouseLeave={() => setHoveredField(null)}>
                      <label className="block text-sm font-semibold text-foreground mb-3">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 your phone number"
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
                          hoveredField === "phone"
                            ? "border-primary bg-primary/5 shadow-lg"
                            : "border-border focus:ring-2 focus:ring-primary/50"
                        }`}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Why we need this?</span> We'll use this info to
                        confirm your appointment and send you reminders.
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {formStep === 2 && (
                  <div className="space-y-6 animate-in fade-in">
                    <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                      <p className="text-sm text-foreground font-semibold">Facial Cosmetic Treatments</p>
                      <p className="text-xs text-muted-foreground mt-1">Explore our range of advanced aesthetic treatments</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Select Your Nearest Branch
                      </label>
                      <select
                        className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all hover:border-primary/50 cursor-pointer"
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      >
                        <option value="">Choose a branch</option>
                        <option value="Thalassery">Thalassery</option>
                        
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-4">
                        What Service Do You Need?
                      </label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {services.map((svc) => (
                          <button
                            key={svc}
                            onClick={() => setFormData({ ...formData, service: svc })}
                            className={`p-4 rounded-lg border-2 transition-all hover:scale-105 font-medium ${
                              formData.service === svc
                                ? "border-primary bg-gradient-to-r from-primary/10 to-accent/10 text-primary shadow-md"
                                : "border-border hover:border-primary/50 text-foreground hover:bg-primary/5"
                            }`}
                          >
                            {svc}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {formStep === 3 && (
                  <div className="space-y-6 animate-in fade-in">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">Preferred Date</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all cursor-pointer hover:border-primary/50"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-4">Select Time Slot</label>
                      <div className="grid grid-cols-4 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setFormData({ ...formData, time })}
                            className={`p-3 rounded-lg border-2 transition-all text-sm font-medium hover:scale-105 ${
                              formData.time === time
                                ? "border-primary bg-primary/10 text-primary shadow-md"
                                : "border-border hover:border-primary/50 hover:bg-primary/5"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm text-green-900">
                        <span className="font-semibold">Ready to book?</span> Review your details and click "Book Now"
                        to confirm your appointment.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-12 pt-8 border-t border-border">
                {formStep > 1 && (
                  <Button
                    onClick={handlePrev}
                    variant="outline"
                    className="flex-1 border-2 border-primary text-primary hover:bg-primary/5 bg-transparent hover:scale-105 transition-all py-3 font-semibold"
                  >
                    Previous
                  </Button>
                )}
                {formStep < 3 && (
                  <Button
                    onClick={handleNext}
                    className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white hover:shadow-lg hover:scale-105 transition-all py-3 font-semibold"
                  >
                    Next
                  </Button>
                )}
                {formStep === 3 && (
                  <Button onClick={handleSubmit} className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg py-6 hover:shadow-lg hover:scale-105 transition-all font-semibold">
                    Book Now
                  </Button>
                )}
              </div>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Quick Contact Card */}
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg">
              <h3 className="font-bold text-xl text-foreground mb-6">Quick Contact</h3>

              <div className="space-y-4">
                <a
                  href="tel:+919447045560"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-lg transition-all cursor-pointer group hover:scale-105"
                >
                  <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Call Us</p>
                    <p className="font-bold text-primary">+91 94470 45560</p>
                  </div>
                </a>

                <a
                  href="belvisofacialcosmetics@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-lg transition-all cursor-pointer group hover:scale-105"
                >
                  <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-bold text-primary">hello@dr.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Main Branch</p>
                    <p className="font-bold text-foreground text-sm">Thalassery</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm font-semibold text-foreground mb-3">Working Hours</p>
                <div className="space-y-1 text-sm">
                  <p className="flex justify-between hover:translate-x-1 transition-transform cursor-pointer">
                    <span className="text-muted-foreground">Mon - Sat:</span>{" "}
                    <span className="font-semibold">9:00 AM - 8:00 PM</span>
                  </p>
                  <p className="flex justify-between hover:translate-x-1 transition-transform cursor-pointer">
                    <span className="text-muted-foreground">Sunday:</span>{" "}
                    <span className="font-semibold text-green-600">Closed</span>
                  </p>
                  <p className="flex justify-between hover:translate-x-1 transition-transform cursor-pointer">
                    <span className="text-muted-foreground">Status:</span>{" "}
                    <span className="font-semibold text-green-600 animate-pulse">Open Now</span>
                  </p>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  )
}
