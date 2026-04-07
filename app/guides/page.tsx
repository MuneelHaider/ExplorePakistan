"use client"

import { useState, useMemo } from "react"
import GuideCard from "@/components/guide-card"
import { Search, Star, Filter } from "lucide-react"

const allGuides = [
  {
    id: 1,
    name: "Ahmed Khan",
    specialty: "Mountain Expeditions",
    rating: 4.9,
    reviews: 156,
    bio: "Expert in K2 Base Camp and northern trekking with 15+ years experience",
    image: "/pakistani-tour-guide-professional-male.jpg",
    locations: ["Concordia & K2 Base Camp", "Hunza Valley", "Fairy Meadows"],
    languages: ["Urdu", "English", "Wakhi"],
    experience: 15,
    verified: true,
    responseTime: "2 hours",
    priceRange: "$50-100/day",
  },
  {
    id: 2,
    name: "Zainab Hassan",
    specialty: "Cultural Tours",
    rating: 4.8,
    reviews: 142,
    bio: "Passionate about sharing Pakistan's rich heritage and cultural treasures",
    image: "/pakistani-tour-guide-professional-female.jpg",
    locations: ["Deewar Fort", "Lansdowne Bridge", "Murree Hills"],
    languages: ["Urdu", "English", "Pashto"],
    experience: 12,
    verified: true,
    responseTime: "1 hour",
    priceRange: "$40-80/day",
  },
  {
    id: 3,
    name: "Muhammad Ali",
    specialty: "Adventure Sports",
    rating: 4.9,
    reviews: 178,
    bio: "Thrilling desert safaris and water sports expert with international certifications",
    image: "/pakistani-adventure-guide-professional.jpg",
    locations: ["Lansdowne Bridge", "Deewar Fort", "Murree Hills"],
    languages: ["Urdu", "English", "Sindhi"],
    experience: 18,
    verified: true,
    responseTime: "30 min",
    priceRange: "$60-120/day",
  },
  {
    id: 4,
    name: "Saira Ahmed",
    specialty: "Valley Tours",
    rating: 4.7,
    reviews: 128,
    bio: "Hunza Valley specialist with deep local knowledge and warm hospitality",
    image: "/pakistani-nature-guide-professional-woman.jpg",
    locations: ["Hunza Valley", "Fairy Meadows", "Kumrat Valley"],
    languages: ["Urdu", "English", "Hunza"],
    experience: 10,
    verified: true,
    responseTime: "3 hours",
    priceRange: "$45-90/day",
  },
  {
    id: 5,
    name: "Hassan Malik",
    specialty: "Trekking",
    rating: 4.8,
    reviews: 134,
    bio: "Expert trekking guide for Fairy Meadows and Deosai with safety certifications",
    image: "/placeholder.svg?key=x8p1m",
    locations: ["Fairy Meadows", "K2 Pakistan", "Concordia & K2 Base Camp"],
    languages: ["Urdu", "English"],
    experience: 14,
    verified: true,
    responseTime: "2 hours",
    priceRange: "$55-110/day",
  },
  {
    id: 6,
    name: "Amina Iqbal",
    specialty: "Nature & Photography",
    rating: 4.7,
    reviews: 112,
    bio: "Professional photographer and nature guide for landscape and wildlife tours",
    image: "/placeholder.svg?key=qp2k8",
    locations: ["Mahodand Lake", "Kumrat Valley", "Murree Hills"],
    languages: ["Urdu", "English"],
    experience: 11,
    verified: true,
    responseTime: "1 hour",
    priceRange: "$50-95/day",
  },
  {
    id: 7,
    name: "Rashid Ahmed",
    specialty: "Desert Tours",
    rating: 4.6,
    reviews: 98,
    bio: "Balochistan desert and Cholistan explorer with unique local insights",
    image: "/placeholder.svg?key=r6l3p",
    locations: ["Deewar Fort", "Lansdowne Bridge", "Murree Hills"],
    languages: ["Urdu", "English", "Balochi"],
    experience: 13,
    verified: true,
    responseTime: "4 hours",
    priceRange: "$40-75/day",
  },
  {
    id: 8,
    name: "Fatima Khan",
    specialty: "Wildlife Tours",
    rating: 4.8,
    reviews: 145,
    bio: "Wildlife specialist and conservation advocate for eco-tourism experiences",
    image: "/placeholder.svg?key=n9h5t",
    locations: ["Hunza Valley", "Mahodand Lake", "Fairy Meadows"],
    languages: ["Urdu", "English"],
    experience: 16,
    verified: true,
    responseTime: "2 hours",
    priceRange: "$55-105/day",
  },
]

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
