"use client"

import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"

const topLocations = [
  {
    id: 1,
    name: "Concordia & K2 Base Camp",
    description: "Iconic Karakoram views at the foot of K2",
    image: "/SALAM/Concordia & K2 Base Camp, Gilgit Baltistan.jpg",
    guides: 25,
  },
  {
    id: 2,
    name: "Hunza Valley",
    description: "Mountain villages, forts, and dramatic peaks",
    image: "/SALAM/Hunza, Gilgit Baltistan.jpg",
    guides: 18,
  },
  {
    id: 3,
    name: "Fairy Meadows",
    description: "Alpine meadows with unforgettable Nanga Parbat views",
    image: "/SALAM/Fairy Meadows, Gilgit Baltistan.jpg",
    guides: 22,
  },
  {
    id: 4,
    name: "Kumrat Valley",
    description: "Lush forests, rivers, and serene camping spots",
    image: "/SALAM/Kumrat Valley, Khyber Pakhtunkhwa.jpg",
    guides: 15,
  },
]

export default function LocationsPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Popular Destinations</h2>
            <p className="text-lg text-foreground/70">Explore Pakistan's most visited and beloved locations</p>
          </div>
          <Link
            href="/locations"
            className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topLocations.map((location, index) => (
            <div
              key={location.id}
              className={`group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {location.guides} Guides
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-foreground mb-1">{location.name}</h3>
                <p className="text-foreground/60 text-sm mb-4">{location.description}</p>
                <Link
                  href={`/locations/${location.id}`}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-lg font-semibold hover:from-primary/20 hover:to-accent/20 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            View All Destinations
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
