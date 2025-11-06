"use client"

import Link from "next/link"
import { Star, MapPin, Users } from "lucide-react"

interface Location {
  id: number
  name: string
  category: string
  region: string
  description: string
  image: string
  rating: number
  reviews: number
  guides: number
  difficulty: string
  bestTime: string
}

export default function LocationCard({ location, index }: { location: Location; index: number }) {
  return (
    <div
      className={`group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={location.image || "/placeholder.svg"}
          alt={location.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Difficulty Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm ${
              location.difficulty === "Easy"
                ? "bg-green-500/80"
                : location.difficulty === "Medium"
                  ? "bg-amber-500/80"
                  : "bg-red-500/80"
            }`}
          >
            {location.difficulty}
          </span>
        </div>

        {/* Best Time Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="px-3 py-1 bg-primary/90 text-white rounded-full text-xs font-semibold">
            {location.bestTime}
          </span>
        </div>
      </div>

      <div className="p-4">
        {/* Header */}
        <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-1">{location.name}</h3>
        <p className="text-sm text-accent font-semibold mb-2">{location.category}</p>

        {/* Region */}
        <div className="flex items-center gap-1 text-foreground/60 text-sm mb-3">
          <MapPin size={16} className="text-primary" />
          {location.region}
        </div>

        {/* Description */}
        <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{location.description}</p>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-accent text-accent" />
            <span className="font-semibold text-foreground">{location.rating}</span>
            <span className="text-foreground/60">({location.reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-foreground/60">
            <Users size={16} />
            <span>{location.guides} guides</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/locations/${location.id}`}
          className="block w-full text-center px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-lg font-semibold hover:from-primary/20 hover:to-accent/20 transform hover:scale-105 transition-all duration-300"
        >
          Explore More
        </Link>
      </div>
    </div>
  )
}
