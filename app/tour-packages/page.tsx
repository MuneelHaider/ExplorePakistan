"use client"
import { useState } from "react"

const packages = [
  {
    name: "Karakoram Signature Trek",
    duration: "10 Days / 9 Nights",
    destinations: "Concordia & K2 Base Camp, Fairy Meadows",
    guide: { name: "Ahmed Khan", image: "/pakistani-tour-guide-professional-male.jpg" },
    difficulty: "Hard",
    groupSize: "6-12 travelers",
    budget: "PKR 420,000 - 560,000 / person (est.)",
    highlights: ["Baltoro glacier camps", "Concordia panorama", "K2 Base Camp day", "Fairy Meadows extension"],
    includes: "Guide leadership, route planning, camp logistics, porter coordination, safety briefing",
  },
  {
    name: "Hunza Culture & Views",
    duration: "6 Days / 5 Nights",
    destinations: "Hunza Valley, local forts, scenic viewpoints",
    guide: { name: "Saira Ahmed", image: "/pakistani-nature-guide-professional-woman.jpg" },
    difficulty: "Easy",
    groupSize: "2-10 travelers",
    budget: "PKR 155,000 - 240,000 / person (est.)",
    highlights: ["Baltit and Altit Fort", "Karimabad walk", "Sunrise viewpoints", "Local food tour"],
    includes: "Local destination guide, culture walk support, daily route recommendations, stay planning",
  },
  {
    name: "Northern Lakes Escape",
    duration: "5 Days / 4 Nights",
    destinations: "Kumrat Valley, Mahodand Lake",
    guide: { name: "Amina Iqbal", image: "/pakistani-nature-guide-professional-woman.jpg" },
    difficulty: "Medium",
    groupSize: "4-14 travelers",
    budget: "PKR 120,000 - 210,000 / person (est.)",
    highlights: ["Riverside camp views", "Mahodand lake day trip", "Forest trail walks", "Photography stops"],
    includes: "Guide accompaniment, route and weather planning, 4x4 itinerary suggestions",
  },
]

export default function TourPackagesPage() {
  const [openCard, setOpenCard] = useState<string | null>(null)
  const [imageOk, setImageOk] = useState<Record<string, boolean>>({})

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Tour Packages</h1>
        <p className="text-foreground/70 mb-10 max-w-3xl">
          Curated package options built around the destinations and guides already available in Visit Pakistan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`bg-white border border-border rounded-2xl p-6 shadow-sm ${
                openCard === pkg.name ? "md:col-span-2" : ""
              }`}
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

              <div
                className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                  openCard === pkg.name ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
                }`}
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
                    <p className="text-xs text-foreground/70 mt-1">Profile and contact available on the guides page.</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
