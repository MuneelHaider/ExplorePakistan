"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, MapPin, Users, AlertCircle, Share2, Heart } from "lucide-react"

const locations: Record<number, any> = {
  1: {
    name: "Concordia & K2 Base Camp",
    category: "Mountains",
    region: "Gilgit-Baltistan",
    description: "Experience one of the world's most iconic high-altitude mountain regions.",
    fullDescription:
      "Concordia and K2 Base Camp offer the ultimate Karakoram adventure. Surrounded by towering peaks, glaciers, and dramatic landscapes, this route is a dream destination for trekkers and photographers. The journey is physically demanding but incredibly rewarding, with panoramic views and an unmatched wilderness experience.",
    image: "/SALAM/Concordia & K2 Base Camp, Gilgit Baltistan.jpg",
    rating: 4.9,
    reviews: 156,
    guides: 25,
    difficulty: "Hard",
    bestTime: "Jul-Sep",
    activities: ["Trekking", "Mountaineering", "Photography", "Cultural Tours"],
    highlights: ["K2 Base Camp", "Concordia Junction", "Baltoro Glacier", "Broad Peak Views", "Remote Campsites"],
  },
  2: {
    name: "Hunza Valley",
    category: "Nature",
    region: "Gilgit-Baltistan",
    description: "A serene valley known for mountain views, forts, and warm hospitality.",
    fullDescription:
      "Hunza Valley combines dramatic mountain scenery with rich local culture. Visitors enjoy orchard-lined villages, historic forts, and peaceful viewpoints. It is one of Pakistan's most loved destinations for scenic road trips, cultural exploration, and light adventure.",
    image: "/SALAM/Hunza, Gilgit Baltistan.jpg",
    rating: 4.8,
    reviews: 178,
    guides: 22,
    difficulty: "Easy",
    bestTime: "Apr-Oct",
    activities: ["Sightseeing", "Cultural Tours", "Photography", "Road Trips"],
    highlights: ["Baltit Fort", "Altit Fort", "Eagle's Nest", "Attabad Vicinity", "Local Bazaars"],
  },
  3: {
    name: "Fairy Meadows",
    category: "Trekking",
    region: "Gilgit-Baltistan",
    description: "Alpine meadows with stunning views of Nanga Parbat.",
    fullDescription:
      "Fairy Meadows is famous for its lush meadows and dramatic perspective of Nanga Parbat. The route includes jeep travel and a scenic trek, making it a favorite among nature lovers and trekkers who want a balance of adventure and tranquility.",
    image: "/SALAM/Fairy Meadows, Gilgit Baltistan.jpg",
    rating: 4.9,
    reviews: 145,
    guides: 20,
    difficulty: "Medium",
    bestTime: "Jun-Sep",
    activities: ["Camping", "Trekking", "Photography", "Stargazing"],
    highlights: ["Nanga Parbat Viewpoint", "Beyal Camp", "Sunrise Meadows", "Forest Trail", "Night Sky Views"],
  },
  4: {
    name: "Kumrat Valley",
    category: "Scenic",
    region: "Khyber Pakhtunkhwa",
    description: "A peaceful valley with forests, rivers, and open meadows.",
    fullDescription:
      "Kumrat Valley is a green paradise in Upper Dir, known for tall pine forests, flowing streams, and cool weather. It is ideal for travelers seeking quiet nature escapes, easy trekking routes, and camping along riverbanks.",
    image: "/SALAM/Kumrat Valley, Khyber Pakhtunkhwa.jpg",
    rating: 4.7,
    reviews: 133,
    guides: 15,
    difficulty: "Medium",
    bestTime: "May-Sep",
    activities: ["Camping", "Nature Walks", "Riverbank Picnics", "Photography"],
    highlights: ["Panjkora River", "Jahaz Banda Access", "Dense Pine Forests", "Mountain Streams", "Valley Camps"],
  },
  5: {
    name: "Mahodand Lake",
    category: "Lakes",
    region: "Kalam, Khyber Pakhtunkhwa",
    description: "An alpine lake with crystal-clear water and breathtaking surroundings.",
    fullDescription:
      "Located in the upper Usho Valley near Kalam, Mahodand Lake is a spectacular destination for families and nature enthusiasts. The turquoise lake, surrounding mountains, and open meadows make it perfect for picnics, boating, and sightseeing.",
    image: "/SALAM/Mahodand Lake, Kalam, Khyber Pakhtunkhwa.png",
    rating: 4.8,
    reviews: 127,
    guides: 14,
    difficulty: "Easy",
    bestTime: "Jun-Sep",
    activities: ["Boating", "Fishing", "Sightseeing", "Photography"],
    highlights: ["Lake Shore Views", "Kalam Route", "Meadow Picnic Spots", "Mountain Backdrop", "Road Adventure"],
  },
  6: {
    name: "Murree Hills",
    category: "Hill Station",
    region: "Punjab",
    description: "A classic hill station with cool weather and scenic views.",
    fullDescription:
      "Murree Hills remain one of the most accessible mountain getaways in Pakistan. The area offers pleasant weather, pine-lined roads, and family-friendly attractions. It is ideal for short trips, especially from nearby cities.",
    image: "/SALAM/Murree Hills, Punjab.png",
    rating: 4.5,
    reviews: 201,
    guides: 19,
    difficulty: "Easy",
    bestTime: "May-Oct",
    activities: ["Leisure Walks", "Family Tours", "Photography", "Food Exploration"],
    highlights: ["Mall Road", "Patriata", "Kashmir Point", "Pine Trails", "Sunset Views"],
  },
  7: {
    name: "Deewar Fort",
    category: "Heritage",
    region: "Bahawalpur, Punjab",
    description: "A historical desert fort reflecting regional heritage and architecture.",
    fullDescription:
      "Deewar Fort in the Cholistan region stands as a strong reminder of historic desert settlements and defensive architecture. The fort's setting and design make it a fascinating stop for heritage enthusiasts and cultural travelers.",
    image: "/SALAM/Deewar Fort, Bahawalpur Punjab.jpg",
    rating: 4.6,
    reviews: 89,
    guides: 10,
    difficulty: "Easy",
    bestTime: "Oct-Mar",
    activities: ["Heritage Tours", "History Walks", "Photography", "Cultural Visits"],
    highlights: ["Fort Ramparts", "Desert Landscape", "Historic Architecture", "Local Stories", "Sunset Photography"],
  },
  8: {
    name: "Lansdowne Bridge",
    category: "Landmark",
    region: "Sukkur, Sindh",
    description: "A landmark bridge over the Indus and an icon of engineering heritage.",
    fullDescription:
      "Lansdowne Bridge in Sukkur is a historic steel bridge and one of the region's most recognizable landmarks. It offers beautiful river views and is popular among visitors interested in architecture, city heritage, and photography.",
    image: "/SALAM/Lansdowne Bridge Sukkur, Sindh.jpg",
    rating: 4.5,
    reviews: 104,
    guides: 12,
    difficulty: "Easy",
    bestTime: "Nov-Feb",
    activities: ["City Tours", "Photography", "Riverside Walks", "Heritage Visits"],
    highlights: ["Indus River View", "Bridge Architecture", "Sukkur Barrage Nearby", "Evening Skyline", "Historic Context"],
  },
}

export default function LocationDetailPage({ params }: { params: { id: string } }) {
  const locationId = Number.parseInt(params.id)
  const location = locations[locationId] || locations[1]
  const [isFaved, setIsFaved] = useState(false)

  return (
    <main className="min-h-screen bg-white pt-16">
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
