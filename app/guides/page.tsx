"use client"

import { useState, useMemo } from "react"
import GuideCard from "@/components/guide-card"
import { Search, Star, Filter } from "lucide-react"
import { guidesData } from "@/lib/guides-data"

const allGuides = guidesData

export default function GuidesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [minRating, setMinRating] = useState(0)
  const [sortBy, setSortBy] = useState<"rating" | "reviews" | "experience">("rating")

  const specialties = [...new Set(allGuides.map((g) => g.specialty))]
  const locations = [...new Set(allGuides.flatMap((g) => g.locations))]

  const filteredGuides = useMemo(() => {
    return allGuides
      .filter((guide) => {
        const matchesSearch =
          guide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          guide.bio.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesSpecialty = !selectedSpecialty || guide.specialty === selectedSpecialty
        const matchesLocation = !selectedLocation || guide.locations.includes(selectedLocation)
        const matchesRating = guide.rating >= minRating
        return matchesSearch && matchesSpecialty && matchesLocation && matchesRating
      })
      .sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating
        if (sortBy === "reviews") return b.reviews - a.reviews
        return b.experience - a.experience
      })
  }, [searchQuery, selectedSpecialty, selectedLocation, minRating, sortBy])

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 text-center animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Find Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Perfect Guide</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Connect with verified, experienced tour guides across Pakistan
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary" size={24} />
              <input
                type="text"
                placeholder="Search by name or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 border-2 border-primary rounded-xl focus:outline-none focus:shadow-lg transition-all duration-300 bg-white text-lg"
              />
            </div>
          </div>

          {/* Filters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Specialty Filter */}
            <div className="bg-white rounded-xl p-5 border border-border shadow-md">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Filter size={18} className="text-primary" />
                Specialty
              </h3>
              <div className="space-y-2 max-h-56 overflow-y-auto">
                <button
                  onClick={() => setSelectedSpecialty(null)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                    selectedSpecialty === null ? "bg-primary text-white" : "text-foreground hover:bg-muted"
                  }`}
                >
                  All Specialties
                </button>
                {specialties.map((spec) => (
                  <button
                    key={spec}
                    onClick={() => setSelectedSpecialty(spec)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
                      selectedSpecialty === spec ? "bg-primary text-white" : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {spec}
                  </button>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div className="bg-white rounded-xl p-5 border border-border shadow-md">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Filter size={18} className="text-primary" />
                Location
              </h3>
              <div className="space-y-2 max-h-56 overflow-y-auto">
                <button
                  onClick={() => setSelectedLocation(null)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                    selectedLocation === null ? "bg-primary text-white" : "text-foreground hover:bg-muted"
                  }`}
                >
                  All Locations
                </button>
                {locations.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setSelectedLocation(loc)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
                      selectedLocation === loc ? "bg-primary text-white" : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div className="bg-white rounded-xl p-5 border border-border shadow-md">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Star size={18} className="text-accent" />
                Rating
              </h3>
              <div className="space-y-2">
                {[0, 4, 4.5, 4.7].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setMinRating(rating)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                      minRating === rating ? "bg-primary text-white" : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {rating === 0 ? "All Ratings" : `${rating}+ ⭐`}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Filter */}
            <div className="bg-white rounded-xl p-5 border border-border shadow-md">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Filter size={18} className="text-primary" />
                Sort By
              </h3>
              <div className="space-y-2">
                {[
                  { value: "rating", label: "Highest Rated" },
                  { value: "reviews", label: "Most Reviewed" },
                  { value: "experience", label: "Most Experienced" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value as any)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                      sortBy === option.value ? "bg-primary text-white" : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 text-foreground/70 font-semibold">
          Showing {filteredGuides.length} of {allGuides.length} guides
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGuides.map((guide, index) => (
            <GuideCard key={guide.id} guide={guide} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredGuides.length === 0 && (
          <div className="text-center py-16">
            <Search size={64} className="mx-auto text-muted-foreground mb-4 opacity-50" />
            <h3 className="text-2xl font-bold text-foreground mb-2">No guides found</h3>
            <p className="text-foreground/60 mb-6">Try adjusting your filters or search query</p>
            <button
              onClick={() => {
                setSearchQuery("")
                setSelectedSpecialty(null)
                setSelectedLocation(null)
                setMinRating(0)
              }}
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
