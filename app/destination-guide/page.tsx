 "use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const destinationGuides = [
  {
    name: "Concordia & K2 Base Camp",
    region: "Gilgit-Baltistan",
    bestTime: "Jul-Sep",
    summary: "High-altitude trekking route with glacier camps and close views of K2.",
    image: "/SALAM/Concordia & K2 Base Camp, Gilgit Baltistan.jpg",
    details: {
      altitude: "Concordia ~4,650m",
      duration: "15-20 days (full trek circuit)",
      route: "Skardu -> Askole -> Baltoro -> Concordia -> K2 Base Camp",
      travelTips: [
        "Acclimatize gradually and keep one buffer day for altitude adaptation.",
        "Hire licensed local guide + porter support for safety and logistics.",
        "Carry thermal layers, glacier-safe shoes, sunscreen, and hydration salts.",
      ],
    },
  },
  {
    name: "Hunza Valley",
    region: "Gilgit-Baltistan",
    bestTime: "Apr-Oct",
    summary: "Scenic valley with heritage forts, mountain viewpoints, and local cuisine.",
    image: "/SALAM/Hunza, Gilgit Baltistan.jpg",
    details: {
      altitude: "Hunza valley floor ~2,500m",
      duration: "4-6 days ideal",
      route: "Islamabad/Gilgit -> Karakoram Highway -> Karimabad",
      travelTips: [
        "Visit Baltit and Altit forts early morning to avoid crowds.",
        "Keep cash in small towns; card payment can be limited.",
        "Use local guides for village culture walks and historical context.",
      ],
    },
  },
  {
    name: "Fairy Meadows",
    region: "Gilgit-Baltistan",
    bestTime: "May-Oct",
    summary: "Iconic meadow base for Nanga Parbat views, stargazing, and camping.",
    image: "/SALAM/Fairy Meadows, Gilgit Baltistan.jpg",
    details: {
      altitude: "~3,300m",
      duration: "2-3 days from Raikot access",
      route: "Karakoram Highway -> Raikot Bridge -> Jeep track -> Trek to meadow",
      travelTips: [
        "Use experienced jeep drivers on the access track.",
        "Pack warm clothing even in summer due to cold nights.",
        "Start return trek before dusk for safer descent timings.",
      ],
    },
  },
  {
    name: "Kumrat Valley",
    region: "Khyber Pakhtunkhwa",
    bestTime: "May-Sep",
    summary: "Forest valley known for riverside camps, pine trails, and cool weather.",
    image: "/SALAM/Kumrat Valley, Khyber Pakhtunkhwa.jpg",
    details: {
      altitude: "~2,200m to 3,100m range",
      duration: "3-4 days",
      route: "Dir -> Thal -> Kumrat Valley road corridor",
      travelTips: [
        "4x4 transport is recommended during rainy spells.",
        "Mobile signal can be patchy; share itinerary before departure.",
        "Carry rain layer and waterproof packing for electronics.",
      ],
    },
  },
  {
    name: "Mahodand Lake",
    region: "Khyber Pakhtunkhwa",
    bestTime: "Jun-Sep",
    summary: "Crystal-clear alpine lake in Kalam, perfect for boating, picnics, and nature views.",
    image: "/SALAM/Mahodand Lake, Kalam, Khyber Pakhtunkhwa.png",
    details: {
      altitude: "~2,865m",
      duration: "1 full day from Kalam or 2-day relaxed trip",
      route: "Kalam -> Usho road -> Mahodand Lake",
      travelTips: [
        "Use a jeep from Kalam for a smoother and safer journey.",
        "Start early to enjoy better weather and fewer crowds.",
        "Carry light rainwear and a warm layer near the waterline.",
      ],
    },
  },
  {
    name: "Murree Hills",
    region: "Punjab",
    bestTime: "May-Oct",
    summary: "Popular hill station getaway with scenic roads, viewpoints, and cool weather.",
    image: "/SALAM/Murree Hills, Punjab.png",
    details: {
      altitude: "~2,291m",
      duration: "2-3 days",
      route: "Islamabad/Rawalpindi -> Murree Expressway -> Mall Road area",
      travelTips: [
        "Weekdays are calmer; weekends can be heavily crowded.",
        "Pre-book parking and stay during peak summer holidays.",
        "Carry light jackets even in warm months for evenings.",
      ],
    },
  },
  {
    name: "Deewar Fort",
    region: "Bahawalpur, Punjab",
    bestTime: "Oct-Mar",
    summary: "Historic desert fort in Cholistan with rich heritage and dramatic surroundings.",
    image: "/SALAM/Deewar Fort, Bahawalpur Punjab.jpg",
    details: {
      altitude: "Desert plains terrain",
      duration: "1-2 days",
      route: "Bahawalpur -> Cholistan desert track -> Derawar/Deewar fort region",
      travelTips: [
        "Travel with a local driver who knows desert routes.",
        "Carry extra water, sunblock, and cash for remote stops.",
        "Visit around sunset for great photography and cooler weather.",
      ],
    },
  },
  {
    name: "Lansdowne Bridge",
    region: "Sukkur, Sindh",
    bestTime: "Nov-Feb",
    summary: "Historic bridge landmark over the Indus, ideal for heritage and riverfront visits.",
    image: "/SALAM/Lansdowne Bridge Sukkur, Sindh.jpg",
    details: {
      altitude: "River-city terrain",
      duration: "Half-day to 1 day",
      route: "Sukkur city center -> Lansdowne Bridge and nearby riverfront",
      travelTips: [
        "Evening hours offer pleasant weather and better skyline views.",
        "Combine with Sukkur Barrage and local city heritage spots.",
        "Use local guide support for historical context and safer routing.",
      ],
    },
  },
]

export default function DestinationGuidePage() {
  const [openCard, setOpenCard] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Destination Guide</h1>
        <p className="text-foreground/70 mb-10 max-w-3xl">
          Plan smarter with route highlights, best seasons, and trip focus areas for Pakistan's most popular destinations.
        </p>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
          {destinationGuides.map((guide) => (
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 75, damping: 18, mass: 1.1 }}
              key={guide.name}
              className={`bg-white border border-border rounded-2xl p-6 shadow-sm transition-[box-shadow] duration-300 ${
                openCard === guide.name ? "md:col-span-2" : ""
              }`}
            >
              <h2 className="text-2xl font-bold text-foreground mb-2">{guide.name}</h2>
              <p className="text-sm text-primary font-semibold mb-2">
                {guide.region} - Best Time: {guide.bestTime}
              </p>
              <p className="text-foreground/70 mb-5">{guide.summary}</p>
              <button
                onClick={() => setOpenCard(openCard === guide.name ? null : guide.name)}
                className="text-primary font-semibold hover:underline"
              >
                View destination details
              </button>

              <AnimatePresence initial={false}>
                {openCard === guide.name && (
                  <motion.div
                    key="details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 pt-5 border-t border-border">
                      <img src={guide.image} alt={guide.name} className="w-full h-44 object-cover rounded-xl mb-4" />
                      <div className="space-y-2 text-sm text-foreground/80">
                        <p>
                          <span className="font-semibold">Altitude:</span> {guide.details.altitude}
                        </p>
                        <p>
                          <span className="font-semibold">Suggested Duration:</span> {guide.details.duration}
                        </p>
                        <p>
                          <span className="font-semibold">Common Route:</span> {guide.details.route}
                        </p>
                      </div>
                      <div className="mt-3">
                        <p className="font-semibold text-foreground mb-2">Traveler Tips</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/75">
                          {guide.details.travelTips.map((tip) => (
                            <li key={tip}>{tip}</li>
                          ))}
                        </ul>
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
