"use client"

import { useState } from "react"
import { ChevronDown, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Service } from "@/lib/services-data"

interface ServiceCardProps {
  service: Service;
  onBookNow: (serviceName: string) => void;
}

// Mapping of service titles to background image asset IDs
const SERVICE_BACKGROUND_IMAGES: Record<string, string> = {
  // Advanced Skin Care
  "Advanced Acne Treatment": "4ee8526c3bac495f955e0fd48447d108",
  "HydraFacial Treatment": "f7cf9f2bd68e4312a3d193d115a993ba",
  "Brightening & De-tan Solutions": "a4523a883bf34e2480e5350f94583363",
  "Scar Reduction & Pore Refinement": "fdd533ed6ceb4bc3837ed0c8bdb8c475",
  "Non-Surgical Face Lifting": "a3284f2af9654593a986081625a22ece",
  "Medical Wart Removal": "1597ec58944141d3a1aa94f72f82baa2",
  "Permanent Hair Reduction": "f7cf9f2bd68e4312a3d193d115a993ba",
  // Hair Restoration
  "Non-Surgical Hair Restoration": "eea5698e744841cd8357c62f07b62dee",
  "Surgical Hair Transplant": "3d2cf2bee4014444aa10f0f5d82ae144",
  // Permanent Makeup
  "Permanent Lip Coloring": "a736be3bea6b4693b45b25f482382cf4",
  "Eyebrow Microblading": "0d649408fdcf41b181a8754e22a8e622",
  "BB Glow Foundation Treatment": "e9cb05abfe804bb796a688cbfa739083",
  "Scalp Micropigmentation": "6c4585d09c2e45718505cd0096242b01",
  // Facial Plastic Surgery
  "Chin Augmentation Surgery": "5cf92769fa8743fc8e037572fadd6921",
  "Surgical Jawline Definition": "93803858f7854f03882308e2746b2fcf",
  "Ear Reshaping Surgery": "1257f1ed33274a688b9f6109a7d7b7bf",
  "Dimpleplasty": "e92d298dddc04ba7ab2c302cbf69e03f",
  "Blepharoplasty (Eye Bag Surgery)": "896669a004064822a9cf909b55dd1559",
}

export default function ServiceCard({ service, onBookNow }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Get background image URL for the service
  const getBackgroundImageUrl = (title: string): string | null => {
    const imageId = SERVICE_BACKGROUND_IMAGES[title]
    if (imageId) {
      return `url(https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2F${imageId})`
    }
    return null
  }

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
          {getBackgroundImageUrl(service.title) ? (
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: getBackgroundImageUrl(service.title) || undefined,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          )}
          
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
