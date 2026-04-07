"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const packages = [
  {
    name: "Concordia Glacier Expedition",
    duration: "11 Days / 10 Nights",
    destinations: "Concordia & K2 Base Camp",
    guide: { name: "Ghulam Murtaza", image: "/Guides/m3.jpg" },
    difficulty: "Hard",
    groupSize: "6-10 travelers",
    budget: "PKR 460,000 - 610,000 / person (est.)",
    highlights: ["Baltoro glacier camps", "Concordia panorama", "K2 Base Camp approach", "Night sky camps"],
    includes: "Lead guide, logistics planning, campsite coordination, altitude safety briefings",
  },
  {
    name: "Concordia Photo Trek Lite",
    duration: "8 Days / 7 Nights",
    destinations: "Concordia & K2 Base Camp",
    guide: { name: "Jalil Ahmed", image: "/Guides/m1.jpg" },
    difficulty: "Hard",
    groupSize: "4-8 travelers",
    budget: "PKR 390,000 - 520,000 / person (est.)",
    highlights: ["Concordia photo points", "Sunrise glacier views", "Guided acclimatization"],
    includes: "Trail support, route pacing, photography timing recommendations",
  },
  {
    name: "Hunza Heritage Explorer",
    duration: "6 Days / 5 Nights",
    destinations: "Hunza Valley",
    guide: { name: "Sherbaz Khan", image: "/Guides/m5.jpg" },
    difficulty: "Easy",
    groupSize: "2-10 travelers",
    budget: "PKR 155,000 - 240,000 / person (est.)",
    highlights: ["Baltit and Altit Fort", "Karimabad walk", "Sunrise viewpoints", "Local food tour"],
    includes: "Local destination guide, culture walk support, daily route recommendations, stay planning",
  },
  {
    name: "Hunza Scenic Family Retreat",
    duration: "5 Days / 4 Nights",
    destinations: "Hunza Valley",
    guide: { name: "Ayesha Noor", image: "/Guides/a1.jpg" },
    difficulty: "Easy",
    groupSize: "3-12 travelers",
    budget: "PKR 135,000 - 210,000 / person (est.)",
    highlights: ["Eagle's Nest viewpoints", "Local handicraft bazaars", "Relaxed day plans"],
    includes: "Family pacing, guide support, stay recommendations, scenic transfer planning",
  },
  {
    name: "Fairy Meadows Classic Trek",
    duration: "4 Days / 3 Nights",
    destinations: "Fairy Meadows",
    guide: { name: "Ghulam Murtaza", image: "/Guides/m3.jpg" },
    difficulty: "Medium",
    groupSize: "4-10 travelers",
    budget: "PKR 95,000 - 165,000 / person (est.)",
    highlights: ["Meadow overnight", "Nanga Parbat views", "Raikot route support"],
    includes: "Trail assistance, transport guidance, campsite recommendations",
  },
  {
    name: "Fairy Meadows Adventure Plus",
    duration: "6 Days / 5 Nights",
    destinations: "Fairy Meadows",
    guide: { name: "Jalil Ahmed", image: "/Guides/m1.jpg" },
    difficulty: "Medium",
    groupSize: "5-11 travelers",
    budget: "PKR 145,000 - 230,000 / person (est.)",
    highlights: ["Extended hiking loops", "Camping + viewpoint sessions", "Night photography"],
    includes: "Guide-led trek days, weather planning, route flexibility support",
  },
  {
    name: "Kumrat Nature Escape",
    duration: "4 Days / 3 Nights",
    destinations: "Kumrat Valley",
    guide: { name: "Bilal Tariq", image: "/Guides/a2.jpg" },
    difficulty: "Medium",
    groupSize: "4-14 travelers",
    budget: "PKR 120,000 - 210,000 / person (est.)",
    highlights: ["Riverside walks", "Pine forest trails", "Campfire evenings"],
    includes: "Guide accompaniment, route and weather planning, 4x4 itinerary suggestions",
  },
  {
    name: "Kumrat Explorer Camp Circuit",
    duration: "5 Days / 4 Nights",
    destinations: "Kumrat Valley",
    guide: { name: "Jalil Ahmed", image: "/Guides/m1.jpg" },
    difficulty: "Medium",
    groupSize: "5-12 travelers",
    budget: "PKR 140,000 - 225,000 / person (est.)",
    highlights: ["Forest valley circuit", "Local village visits", "Sunset river points"],
    includes: "Guide support, camp setup suggestions, local contact coordination",
  },
  {
    name: "Mahodand Lake Day Escape",
    duration: "3 Days / 2 Nights",
    destinations: "Mahodand Lake",
    guide: { name: "Bilal Tariq", image: "/Guides/a2.jpg" },
    difficulty: "Easy",
    groupSize: "3-12 travelers",
    budget: "PKR 80,000 - 140,000 / person (est.)",
    highlights: ["Lake shore picnic", "Boat activity options", "Scenic mountain views"],
    includes: "Route planning, local guide contact, weather window guidance",
  },
  {
    name: "Mahodand Photography Retreat",
    duration: "4 Days / 3 Nights",
    destinations: "Mahodand Lake",
    guide: { name: "Ayesha Noor", image: "/Guides/a1.jpg" },
    difficulty: "Easy",
    groupSize: "2-8 travelers",
    budget: "PKR 92,000 - 155,000 / person (est.)",
    highlights: ["Sunrise lake shots", "Landscape coaching", "Night sky sessions"],
    includes: "Photo-focused schedule, location briefings, transport planning support",
  },
  {
    name: "Murree Weekend Break",
    duration: "3 Days / 2 Nights",
    destinations: "Murree Hills",
    guide: { name: "Kashif Raza", image: "/Guides/m4.jpg" },
    difficulty: "Easy",
    groupSize: "2-14 travelers",
    budget: "PKR 65,000 - 120,000 / person (est.)",
    highlights: ["Mall Road walk", "Scenic viewpoints", "Family-friendly pace"],
    includes: "Guide support, stay suggestions, local transport coordination",
  },
  {
    name: "Murree Hills Explorer",
    duration: "4 Days / 3 Nights",
    destinations: "Murree Hills",
    guide: { name: "Rida Shah", image: "/Guides/a3.jpg" },
    difficulty: "Easy",
    groupSize: "4-12 travelers",
    budget: "PKR 82,000 - 145,000 / person (est.)",
    highlights: ["Patriata excursion", "Forest viewpoints", "Sunset route drive"],
    includes: "Route curation, destination host contacts, guide accompaniment",
  },
  {
    name: "Deewar Fort Heritage Trail",
    duration: "3 Days / 2 Nights",
    destinations: "Deewar Fort",
    guide: { name: "Kashif Raza", image: "/Guides/m4.jpg" },
    difficulty: "Easy",
    groupSize: "3-10 travelers",
    budget: "PKR 78,000 - 138,000 / person (est.)",
    highlights: ["Fort heritage tour", "Desert landscape drive", "Cultural storytelling"],
    includes: "Heritage guide, transport advisory, on-ground local coordination",
  },
  {
    name: "Deewar Fort Desert Experience",
    duration: "4 Days / 3 Nights",
    destinations: "Deewar Fort",
    guide: { name: "Rida Shah", image: "/Guides/a3.jpg" },
    difficulty: "Medium",
    groupSize: "4-12 travelers",
    budget: "PKR 105,000 - 178,000 / person (est.)",
    highlights: ["Desert sunrise", "Fort exploration", "Traditional food experience"],
    includes: "Guide assistance, desert route planning, seasonal weather advisory",
  },
  {
    name: "Lansdowne Bridge Heritage Walk",
    duration: "2 Days / 1 Night",
    destinations: "Lansdowne Bridge",
    guide: { name: "Muslim Ali", image: "/Guides/m2.jpg" },
    difficulty: "Easy",
    groupSize: "2-10 travelers",
    budget: "PKR 52,000 - 98,000 / person (est.)",
    highlights: ["Bridge history walk", "Indus riverfront", "Local city food spots"],
    includes: "Guide-led walk, city route planning, local support contacts",
  },
  {
    name: "Sukkur Landmark Discovery",
    duration: "3 Days / 2 Nights",
    destinations: "Lansdowne Bridge",
    guide: { name: "Muslim Ali", image: "/Guides/m2.jpg" },
    difficulty: "Easy",
    groupSize: "3-12 travelers",
    budget: "PKR 68,000 - 125,000 / person (est.)",
    highlights: ["Lansdowne Bridge", "Sukkur Barrage area", "Evening skyline points"],
    includes: "Guide support, local transfers, customized city activity planning",
  },
]

export default function TourPackagesPage() {
  const [openCard, setOpenCard] = useState<string | null>(null)
  const [imageOk, setImageOk] = useState<Record<string, boolean>>({})
  const [query, setQuery] = useState("")
  const filteredPackages = packages.filter((pkg) =>
    `${pkg.name} ${pkg.destinations} ${pkg.guide.name} ${pkg.difficulty}`.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Tour Packages</h1>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search packages, guides, or destinations..."
            className="w-full md:w-[440px] px-4 py-3 rounded-xl border-2 border-foreground/40 bg-white/95 focus:border-foreground/70 outline-none placeholder:text-foreground/70"
          />
        </div>
        <p className="text-foreground/70 mb-10 max-w-3xl">
          Curated package options built around the destinations and guides already available in Visit Pakistan.
        </p>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
          {filteredPackages.map((pkg, idx) => (
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 75, damping: 18, mass: 1.1 }}
              key={pkg.name}
              className={`border border-border rounded-2xl p-6 shadow-sm ${
                openCard === pkg.name ? "md:col-span-2" : ""
              } ${idx % 2 === 0 ? "bg-white" : "bg-gradient-to-br from-white to-amber-50/70"}`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <h2 className="text-2xl font-bold text-foreground">{pkg.name}</h2>
                <span className="text-primary font-semibold">{pkg.duration}</span>
              </div>
              <p className="text-foreground/80 mb-2">
                <span className="font-semibold">Destinations:</span> {pkg.destinations}
              </p>
              <p className="text-foreground/70 mb-4">
                <span className="font-semibold">Includes:</span> {pkg.includes}
              </p>
              <button
                onClick={() => setOpenCard(openCard === pkg.name ? null : pkg.name)}
                className="text-primary font-semibold hover:underline"
              >
                View full package details
              </button>

              <AnimatePresence initial={false}>
                {openCard === pkg.name && (
                  <motion.div
                    key="details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 pt-5 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-5">
                      <div className="md:col-span-2">
                        <p className="text-sm text-foreground/80 mb-2">
                          <span className="font-semibold">Difficulty:</span> {pkg.difficulty}
                        </p>
                        <p className="text-sm text-foreground/80 mb-2">
                          <span className="font-semibold">Group Size:</span> {pkg.groupSize}
                        </p>
                        <p className="text-sm text-foreground/80 mb-3">
                          <span className="font-semibold">Estimated Budget:</span> {pkg.budget}
                        </p>
                        <p className="font-semibold text-foreground mb-2">Highlights</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/75">
                          {pkg.highlights.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-emerald-50 rounded-xl p-4">
                        <p className="text-sm text-foreground/60 mb-2">Recommended Guide</p>
                        {imageOk[pkg.name] !== false ? (
                          <img
                            src={pkg.guide.image}
                            alt={pkg.guide.name}
                            className="w-full h-36 object-cover rounded-lg mb-3"
                            onError={() => setImageOk((prev) => ({ ...prev, [pkg.name]: false }))}
                          />
                        ) : (
                          <div className="w-full h-36 rounded-lg mb-3 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                            <span className="text-2xl font-bold text-primary">
                              {pkg.guide.name
                                .split(" ")
                                .slice(0, 2)
                                .map((s) => s[0])
                                .join("")}
                            </span>
                          </div>
                        )}
                        <p className="font-semibold text-foreground">{pkg.guide.name}</p>
                        <p className="text-xs text-foreground/70 mt-1">
                          Profile and contact available on the guides page.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}
