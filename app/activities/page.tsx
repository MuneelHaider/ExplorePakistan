"use client"

import { useInView } from "@/components/use-intersection-observer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const activities = [
  {
    id: 1,
    name: "Trekking & Hiking",
    description: "Explore mountain trails and valleys with guided hiking expeditions.",
    icon: "⛰️",
    locations: ["Concordia & K2 Base Camp", "Fairy Meadows", "Kumrat Valley"],
  },
  {
    id: 2,
    name: "Cultural Tours",
    description: "Discover Pakistan's rich history, ancient monuments, and traditions.",
    icon: "🏛️",
    locations: ["Deewar Fort", "Lansdowne Bridge", "Murree Hills"],
  },
  {
    id: 3,
    name: "Adventure Sports",
    description: "Experience adrenaline-pumping activities like rock climbing and rafting.",
    icon: "🧗",
    locations: ["Concordia & K2 Base Camp", "Hunza Valley", "Mahodand Lake"],
  },
  {
    id: 4,
    name: "Photography Tours",
    description: "Capture stunning landscapes with professional photography guides.",
    icon: "📸",
    locations: ["Fairy Meadows", "Hunza Valley", "Mahodand Lake"],
  },
  {
    id: 5,
    name: "Desert Safaris",
    description: "Explore Balochistan's vast deserts and remote landscapes.",
    icon: "🏜️",
    locations: ["Deewar Fort", "Lansdowne Bridge", "Murree Hills"],
  },
  {
    id: 6,
    name: "Wildlife Watching",
    description: "Observe Pakistan's diverse wildlife and natural ecosystems.",
    icon: "🦅",
    locations: ["Kumrat Valley", "Mahodand Lake", "Fairy Meadows"],
  },
]

export default function ActivitiesPage() {
  const { ref, inView } = useInView()

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-16 text-center animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Discover{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Adventures</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose from a variety of exciting activities and experiences across Pakistan
          </p>
        </div>

        {/* Activities Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className={`group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 text-8xl">
                {activity.icon}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{activity.name}</h3>
                <p className="text-foreground/70 mb-4">{activity.description}</p>
                <div className="mb-4">
                  <p className="text-sm text-foreground/60 font-semibold mb-2">Popular in:</p>
                  <div className="flex flex-wrap gap-2">
                    {activity.locations.map((loc) => (
                      <span key={loc} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="/guides"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link"
                >
                  Find Guides
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
