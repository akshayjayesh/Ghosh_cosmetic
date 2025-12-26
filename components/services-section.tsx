"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import ServicesFilterBar from "@/components/services-filter-bar"
import { servicesData } from "@/lib/services-data"

const INITIAL_DISPLAY_COUNT = 6

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Services")
  const [showAll, setShowAll] = useState(false)

  // Filter services based on selected category
  const filteredServices = selectedCategory === "All Services"
    ? servicesData
    : servicesData.filter((service) => service.category === selectedCategory)

  // Determine how many to display
  const displayedServices = showAll ? filteredServices : filteredServices.slice(0, INITIAL_DISPLAY_COUNT)

  const handleBookNow = (serviceName: string) => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
      // In a real implementation, you'd also populate the form with the service name
    }
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-red-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of advanced cosmetic treatments designed to enhance your natural beauty. 
            From cutting-edge skin care solutions to surgical procedures, our expert team delivers personalized care with state-of-the-art technology.
          </p>
        </div>

        {/* Filter Bar */}
        <ServicesFilterBar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedServices.map((service, idx) => (
            <div key={service.id} className="animate-in fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
              <ServiceCard
                service={service}
                onBookNow={handleBookNow}
              />
            </div>
          ))}
        </div>

        {/* View More / Show Less Button */}
        {filteredServices.length > INITIAL_DISPLAY_COUNT && (
          <div className="flex justify-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              {showAll ? (
                <>
                  Show Less Services
                </>
              ) : (
                <>
                  View More Services ({filteredServices.length - INITIAL_DISPLAY_COUNT} more)
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
