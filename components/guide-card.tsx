"use client"

import Link from "next/link"
import { Star, MapPin, Clock, CheckCircle } from "lucide-react"

interface Guide {
  id: number
  name: string
  specialty: string
  rating: number
  reviews: number
  bio: string
  image: string
  locations: string[]
  languages: string[]
  experience: number
  verified: boolean
  responseTime: string
  priceRange: string
}

export default function GuideCard({ guide, index }: { guide: Guide; index: number }) {
  return (
    <div
      className={`group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={guide.image || "/placeholder.svg"}
          alt={guide.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Verification Badge */}
        {guide.verified && (
          <div className="absolute top-3 right-3 bg-green-500/90 text-white px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold backdrop-blur-sm">
            <CheckCircle size={14} />
            DTS Verified
          </div>
        )}

        {/* Experience Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="px-3 py-1 bg-primary/90 text-white rounded-full text-xs font-semibold">
            {guide.experience}+ yrs
          </span>
        </div>
      </div>

      <div className="p-5">
        {/* Header */}
        <h3 className="text-lg font-bold text-foreground mb-1">{guide.name}</h3>
        <p className="text-sm text-accent font-semibold mb-2">{guide.specialty}</p>

        {/* Bio */}
        <p className="text-foreground/70 text-sm mb-4 line-clamp-2 h-10">{guide.bio}</p>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(guide.rating) ? "fill-accent text-accent" : "text-border"}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-foreground">{guide.rating}</span>
          <span className="text-xs text-foreground/50">({guide.reviews})</span>
        </div>

        {/* Response Time */}
        <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
          <Clock size={16} className="text-primary" />
          Responds in {guide.responseTime}
        </div>

        {/* Locations */}
        <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
          <MapPin size={16} className="text-primary flex-shrink-0" />
          <span className="line-clamp-1">{guide.locations.slice(0, 2).join(", ")}</span>
        </div>

        {/* Price */}
        <div className="mb-4 p-3 bg-amber-50 rounded-lg">
          <p className="text-sm text-foreground/60">From</p>
          <p className="font-bold text-primary">{guide.priceRange}</p>
        </div>

        {/* CTA */}
        <Link
          href={`/guides/${guide.id}`}
          className="block w-full text-center px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          View Profile
        </Link>
      </div>
    </div>
  )
}
