"use client"

import { useState } from "react"
import { ChevronDown, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Service } from "@/lib/services-data"

interface ServiceCardProps {
  service: Service;
  onBookNow: (serviceName: string) => void;
}

export default function ServiceCard({ service, onBookNow }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="h-full bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
        {/* Image Section */}
        <div className="relative w-full aspect-video overflow-hidden bg-gradient-to-br from-red-50 to-red-100 group">
          <img
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          
          {service.popular && (
            <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Star size={12} className="fill-white" />
              Most Popular
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {service.title}
          </h3>

          <p className="text-sm text-gray-600 mb-4">
            {service.shortDescription}
          </p>

          {/* Expanded Content */}
          {isExpanded && service.detailedDescription && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300 mb-4 pb-4 border-t border-gray-200">
              <p className="text-sm text-gray-700 mt-4 mb-4">
                {service.detailedDescription}
              </p>

              {service.features && service.features.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-900 mb-2">Key Benefits:</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-red-600 font-bold mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(service.duration || service.recovery) && (
                <div className="grid grid-cols-2 gap-3 text-xs">
                  {service.duration && (
                    <div className="bg-red-50 rounded-lg p-2">
                      <p className="text-gray-600 font-medium">Duration</p>
                      <p className="text-gray-900 font-semibold">{service.duration}</p>
                    </div>
                  )}
                  {service.recovery && (
                    <div className="bg-red-50 rounded-lg p-2">
                      <p className="text-gray-600 font-medium">Recovery</p>
                      <p className="text-gray-900 font-semibold">{service.recovery}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Price */}
          <p className="text-base font-bold text-red-600 mb-4">
            {service.price}
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
            <button
              onClick={() => onBookNow(service.title)}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              Book Now
            </button>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex-1 border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              {isExpanded ? (
                <>
                  Show Less
                  <ChevronDown size={16} className="rotate-180" />
                </>
              ) : (
                <>
                  More Details
                  <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
