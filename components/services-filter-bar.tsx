"use client"

import { categories } from "@/lib/services-data"

interface ServicesFilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ServicesFilterBar({
  selectedCategory,
  onCategoryChange,
}: ServicesFilterBarProps) {
  return (
    <div className="flex justify-center flex-wrap gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            selectedCategory === category
              ? "bg-red-600 text-white shadow-lg hover:shadow-xl hover:scale-105"
              : "bg-white text-red-600 border-2 border-red-600 hover:bg-red-50 hover:scale-105"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
