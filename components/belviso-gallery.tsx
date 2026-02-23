"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

type Pair = {
  category: string
  treatment: string
  sessions: string
  before: string
  after: string
}

const pairs: Pair[] = [
  {
    category: "Anti-aging",
    treatment: "Botox + Fillers",
    sessions: "1–2 sessions",
    before: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F0b3d9f6b8155491dacbe8015abe64389?format=webp&width=800",
    after: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F121491a06b8e4346ac0d3abc7c60929b?format=webp&width=800",
  },
  {
    category: "Skin treatments",
    treatment: "Laser Resurfacing",
    sessions: "2–4 sessions",
    before: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fae049f8dc6094ca885989a7ec784fff5?format=webp&width=800",
    after: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fcac2de833629495cb30dbd45297babe7?format=webp&width=800",
  },
  {
    category: "Facial contouring",
    treatment: "Thread Lift",
    sessions: "1 session",
    before: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F42174657e8a642d1960e503e51422b45?format=webp&width=800",
    after: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F4cc4345eb3a84a928722ecdce35eb4f7?format=webp&width=800",
  },
  {
    category: "Acne treatment",
    treatment: "Medical Peel",
    sessions: "3 sessions",
    before: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F205555b2f36744819341090258311e0f?format=webp&width=800",
    after: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F509d78581d1442ad866b13c90520fcbf?format=webp&width=800",
  },
  {
    category: "Skin treatments",
    treatment: "Hydrafacial",
    sessions: "Monthly",
    before: "https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2F7e6a32c999a04b28927c0d65d8f15e58?format=webp&width=800&height=1200",
    after: "https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2F362aa72b9d3e4362bea32e72534d81ae?format=webp&width=800&height=1200",
  },
  {
    category: "Facial contouring",
    treatment: "RF Tightening",
    sessions: "4–6 sessions",
    before: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F65aa67f02e64455080e00a2f992c1c05?format=webp&width=800",
    after: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F2657e30426124ab0a29b71684319aa57?format=webp&width=800",
  },
]

function Comparison({ before, after, labelL, labelR, sessions }: { before: string; after: string; labelL: string; labelR: string; sessions: string }) {
  const [pos, setPos] = useState(50)

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl">
      <img
        src={before}
        alt={`${labelL} image`}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: "scale(1.1)" }}
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={after} alt={`${labelR} image`} className="w-full h-full object-cover" style={{ transform: "scale(1.1)" }} loading="lazy" decoding="async" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded">Before</div>
        <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded">After</div>
      </div>

      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-0.5 h-full bg-white/70 translate-x-[-1px]" style={{ marginLeft: `${pos}%` }} />
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(parseInt(e.target.value))}
        aria-label="Compare before and after"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2/3 accent-[color:var(--primary)]"
      />

      <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded">{sessions}</div>
    </div>
  )
}

export default function BelvisoGallery() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-red-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Real Results, Real Confidence</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore outcomes from our facial cosmetic treatments across common concerns
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pairs.map((p, i) => (
            <Card key={`${p.category}-${i}`} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <Comparison before={p.before} after={p.after} labelL={p.category} labelR={p.treatment} sessions={p.sessions} />
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{p.category}</p>
                <p className="font-semibold text-foreground">{p.treatment}</p>
                <p className="text-xs text-muted-foreground mt-1">Treatment plan: {p.sessions}</p>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-6 text-center">Images shared with patient consent</p>
      </div>
    </section>
  )
}
