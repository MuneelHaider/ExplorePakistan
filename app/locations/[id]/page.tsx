"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, MapPin, Users, AlertCircle, Share2, Heart } from "lucide-react"

const locations: Record<number, any> = {
  1: {
    name: "Northern Areas",
    category: "Mountains",
    region: "Gilgit-Baltistan",
    description: "Experience the majesty of the world's highest mountains in Pakistan's Northern Areas.",
    fullDescription:
      "The Northern Areas encompass some of the world's most stunning mountain landscapes. From the towering peaks of the Karakoram Range to pristine glacial valleys, this region offers unparalleled trekking, mountaineering, and natural beauty. Experience authentic local hospitality, ancient Silk Road heritage, and some of the world's best adventure opportunities.",
    image: "/northern-areas-pakistan-mountains.jpg",
    rating: 4.9,
    reviews: 156,
    guides: 25,
    difficulty: "Hard",
    bestTime: "Jun-Sep",
    activities: ["Trekking", "Mountaineering", "Photography", "Cultural Tours"],
    highlights: ["K2 Base Camp Trek", "Fairy Meadows", "Hunza Valley", "Skardu City", "Deosai Plains"],
  },
}

export default function LocationDetailPage({ params }: { params: { id: string } }) {
  const locationId = Number.parseInt(params.id)
  const location = locations[locationId] || locations[1]
  const [isFaved, setIsFaved] = useState(false)

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img src={location.image || "/placeholder.svg"} alt={location.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <p className="text-accent font-semibold mb-2">{location.category}</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{location.name}</h1>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-1">
                <Star className="fill-accent text-accent" size={20} />
                <span className="font-bold text-lg">{location.rating}</span>
                <span>({location.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={20} />
                {location.region}
              </div>
              <div className="flex items-center gap-1">
                <Users size={20} />
                {location.guides} guides available
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 flex gap-2">
          <button
            onClick={() => setIsFaved(!isFaved)}
            className="p-3 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full transition-all duration-300 transform hover:scale-110"
          >
            <Heart size={24} className={isFaved ? "fill-red-500 text-red-500" : ""} />
          </button>
          <button className="p-3 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full transition-all duration-300 transform hover:scale-110">
            <Share2 size={24} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-xl">
                <p className="text-foreground/60 text-sm mb-1">Difficulty</p>
                <p className="text-lg font-bold text-primary">{location.difficulty}</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-xl">
                <p className="text-foreground/60 text-sm mb-1">Best Time</p>
                <p className="text-lg font-bold text-primary">{location.bestTime}</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-xl">
                <p className="text-foreground/60 text-sm mb-1">Guides</p>
                <p className="text-lg font-bold text-primary">{location.guides}</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-xl">
                <p className="text-foreground/60 text-sm mb-1">Rating</p>
                <p className="text-lg font-bold text-primary">{location.rating}</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">About this destination</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-4">{location.fullDescription}</p>
            </div>

            {/* Highlights */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Must-See Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {location.highlights.map((highlight: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 font-semibold text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-foreground font-semibold">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Popular Activities</h3>
              <div className="flex flex-wrap gap-3">
                {location.activities.map((activity: string) => (
                  <span
                    key={activity}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold hover:bg-primary/20 transition-all duration-300 cursor-pointer"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-primary via-emerald-600 to-accent rounded-2xl p-6 text-white mb-6 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Ready to explore?</h3>
              <p className="text-white/90 mb-6">Connect with our verified tour guides</p>
              <Link
                href={`/guides?location=${location.name}`}
                className="block w-full text-center bg-white text-primary py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Find Tour Guides
              </Link>
            </div>

            {/* Travel Tips */}
            <div className="bg-amber-50 border-l-4 border-accent rounded-lg p-4">
              <div className="flex gap-3 mb-3">
                <AlertCircle className="text-accent flex-shrink-0" size={24} />
                <h4 className="font-bold text-foreground">Travel Tips</h4>
              </div>
              <ul className="text-foreground/70 text-sm space-y-2">
                <li>• Book guides in advance during peak season</li>
                <li>• Bring proper weather-appropriate clothing</li>
                <li>• Stay hydrated and acclimatize properly</li>
                <li>• Check local weather before traveling</li>
                <li>• Respect local customs and traditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
