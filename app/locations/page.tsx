"use client"

import { useState, useMemo } from "react"
import LocationCard from "@/components/location-card"
import { Search, MapPin, Filter } from "lucide-react"

const allLocations = [
  {
    id: 1,
    name: "Concordia & K2 Base Camp",
    category: "Mountains",
    region: "Gilgit-Baltistan",
    description: "Epic high-altitude trekking route with unmatched views of K2 and surrounding giants.",
    image: "/SALAM/Concordia & K2 Base Camp, Gilgit Baltistan.jpg",
    rating: 4.9,
    reviews: 156,
    guides: 25,
    difficulty: "Hard",
    bestTime: "Jul-Sep",
  },
  {
    id: 2,
    name: "Hunza Valley",
    category: "Nature",
    region: "Gilgit-Baltistan",
    description: "Spectacular valley known for forts, orchards, and panoramic mountain scenery.",
    image: "/SALAM/Hunza, Gilgit Baltistan.jpg",
    rating: 4.7,
    reviews: 142,
    guides: 18,
    difficulty: "Easy",
    bestTime: "Apr-Oct",
  },
  {
    id: 3,
    name: "Fairy Meadows",
    category: "Trekking",
    region: "Gilgit-Baltistan",
    description: "Beautiful meadow trail with close views of Nanga Parbat and starlit night skies.",
    image: "/SALAM/Fairy Meadows, Gilgit Baltistan.jpg",
    rating: 4.8,
    reviews: 178,
    guides: 22,
    difficulty: "Medium",
    bestTime: "Jun-Sep",
  },
  {
    id: 4,
    name: "Kumrat Valley",
    category: "Scenic",
    region: "Khyber Pakhtunkhwa",
    description: "Dense pine forests, flowing streams, and peaceful valleys ideal for camping.",
    image: "/SALAM/Kumrat Valley, Khyber Pakhtunkhwa.jpg",
    rating: 4.6,
    reviews: 128,
    guides: 15,
    difficulty: "Medium",
    bestTime: "May-Sep",
  },
  {
    id: 5,
    name: "Mahodand Lake",
    category: "Lakes",
    region: "Khyber Pakhtunkhwa",
    description: "Crystal-clear alpine lake in Kalam surrounded by meadows and mountains.",
    image: "/SALAM/Mahodand Lake, Kalam, Khyber Pakhtunkhwa.png",
    rating: 4.9,
    reviews: 145,
    guides: 20,
    difficulty: "Easy",
    bestTime: "Jun-Sep",
  },
  {
    id: 6,
    name: "Murree Hills",
    category: "Hill Station",
    region: "Punjab",
    description: "Cool-weather retreat with scenic roads, viewpoints, and family-friendly stays.",
    image: "/SALAM/Murree Hills, Punjab.png",
    rating: 4.8,
    reviews: 134,
    guides: 19,
    difficulty: "Easy",
    bestTime: "May-Oct",
  },
  {
    id: 7,
    name: "Deewar Fort",
    category: "Heritage",
    region: "Bahawalpur, Punjab",
    description: "Historic desert fort architecture representing the cultural legacy of southern Punjab.",
    image: "/SALAM/Deewar Fort, Bahawalpur Punjab.jpg",
    rating: 4.7,
    reviews: 112,
    guides: 16,
    difficulty: "Easy",
    bestTime: "Oct-Mar",
  },
  {
    id: 8,
    name: "Lansdowne Bridge",
    category: "Landmark",
    region: "Sukkur, Sindh",
    description: "A remarkable historic bridge over the Indus, ideal for cultural and city photography tours.",
    image: "/SALAM/Lansdowne Bridge Sukkur, Sindh.jpg",
    rating: 4.6,
    reviews: 98,
    guides: 12,
    difficulty: "Easy",
    bestTime: "Nov-Feb",
  },
]

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<"rating" | "reviews" | "name">("rating")

  const categories = [...new Set(allLocations.map((loc) => loc.category))]
  const difficulties = ["Easy", "Medium", "Hard"]

  const filteredLocations = useMemo(() => {
    return allLocations
      .filter((location) => {
        const matchesSearch =
          location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          location.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          location.region.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = !selectedCategory || location.category === selectedCategory
        const matchesDifficulty = !selectedDifficulty || location.difficulty === selectedDifficulty
        return matchesSearch && matchesCategory && matchesDifficulty
      })
      .sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating
        if (sortBy === "reviews") return b.reviews - a.reviews
        return a.name.localeCompare(b.name)
      })
  }, [searchQuery, selectedCategory, selectedDifficulty, sortBy])

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 text-center animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Explore{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Pakistan</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover breathtaking destinations, adventure trails, and cultural treasures across Pakistan
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
                placeholder="Search destinations, regions, or activities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 border-2 border-primary rounded-xl focus:outline-none focus:shadow-lg transition-all duration-300 bg-white text-lg"
              />
            </div>
          </div>

          {/* Filters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div className="bg-white rounded-xl p-5 border border-border shadow-md">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Filter size={18} className="text-primary" />
                Category
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === null ? "bg-primary text-white" : "text-foreground hover:bg-muted"
                  }`}
                >
                  All Categories
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === cat ? "bg-primary text-white" : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className="bg-white rounded-xl p-5 border border-border shadow-md">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Filter size={18} className="text-primary" />
                Difficulty
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedDifficulty(null)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                    selectedDifficulty === null ? "bg-primary text-white" : "text-foreground hover:bg-muted"
                  }`}
                >
                  All Levels
                </button>
                {difficulties.map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                      selectedDifficulty === diff ? "bg-primary text-white" : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {diff}
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
                  { value: "name", label: "A to Z" },
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
          Showing {filteredLocations.length} of {allLocations.length} destinations
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredLocations.map((location, index) => (
            <LocationCard key={location.id} location={location} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredLocations.length === 0 && (
          <div className="text-center py-16">
            <MapPin size={64} className="mx-auto text-muted-foreground mb-4 opacity-50" />
            <h3 className="text-2xl font-bold text-foreground mb-2">No destinations found</h3>
            <p className="text-foreground/60 mb-6">Try adjusting your filters or search query</p>
            <button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory(null)
                setSelectedDifficulty(null)
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
