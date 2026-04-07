"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const shops = [
  {
    name: "Mart Stencils Pakistan",
    image: "/handicrafts/Mart stencils Pakistan.jpeg",
    location: "Murree Hills",
    specialty: "Decorative stencils, handcrafted wall motifs, souvenir design kits",
    owner: "Asad Rafiq",
    contact: "+92 333 4489001",
    address: "Cart Road Bazaar, Near Mall Road, Murree, Punjab",
    history:
      "Started as a family stencil studio in 2009 and later expanded into a tourist-focused craft outlet specializing in home decor motifs.",
  },
  {
    name: "Pakistan Crafts Gallery",
    image: "/handicrafts/Pakistan crafts gallery.jpeg",
    location: "Lansdowne Bridge",
    specialty: "Regional crafts collection, Sindhi textiles, wood and metal artifacts",
    owner: "Bilal Hussain",
    contact: "+92 321 7702190",
    address: "Clock Tower Market, Sukkur City, Sindh",
    history:
      "Founded in 2012 to bring together regional artisans from Sindh and South Punjab under one retail gallery for travelers.",
  },
  {
    name: "Mansoor Blue Pottery",
    image: "/handicrafts/Mansoor Blue pottery.jpeg",
    location: "Deewar Fort",
    specialty: "Traditional blue pottery, ceramic tableware, hand-painted decor",
    owner: "Mansoor Ahmed",
    contact: "+92 300 1145528",
    address: "Heritage Street, Bahawalpur City, Punjab",
    history:
      "A third-generation pottery workshop preserving traditional hand-painted blue ceramic techniques with modern utility designs.",
  },
  {
    name: "Hafiz Handicraft Sillanwali",
    image: "/handicrafts/Hafiz handicraft sillanwali.jpeg",
    location: "Hunza Valley",
    specialty: "Embroidery pieces, handmade textiles, gift-ready cultural items",
    owner: "Hafiz Imran",
    contact: "+92 334 9981126",
    address: "Karimabad Main Market, Hunza, Gilgit-Baltistan",
    history:
      "Known for hand-embroidered textiles and shawls, this shop began as a small family stall and now serves visitors from across Pakistan.",
  },
  {
    name: "Indus Heritage Trust",
    image: "/handicrafts/Indus heritage trust.jpeg",
    location: "Mahodand Lake",
    specialty: "Heritage replicas, folk art crafts, curated artisan collections",
    owner: "Nadia Rahman",
    contact: "+92 345 6024408",
    address: "Kalam Tourist Bazaar, Swat, Khyber Pakhtunkhwa",
    history:
      "Established in 2015 as an artisan support initiative, partnering with local makers to preserve traditional craft narratives.",
  },
  {
    name: "Pakistan Handicrafts Shop",
    image: "/handicrafts/Pakistan handicrafts shop.jpeg",
    location: "Kumrat Valley",
    specialty: "General handicrafts bazaar, pottery, shawls, home decor keepsakes",
    owner: "Umar Hayat",
    contact: "+92 331 7715520",
    address: "Thal Gateway Market, Upper Dir, Khyber Pakhtunkhwa",
    history:
      "A traveler-friendly handicraft storefront developed to connect valley visitors with locally sourced handmade products.",
  },
]

export default function CulturalHandicraftsPage() {
  const [query, setQuery] = useState("")
  const [activeShop, setActiveShop] = useState<string | null>(null)
  const filtered = shops.filter((shop) =>
    `${shop.name} ${shop.location} ${shop.specialty} ${shop.owner} ${shop.address}`.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Cultural Handicrafts</h1>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search shops, locations, or craft types..."
            className="w-full md:w-[460px] px-4 py-3 rounded-xl border-2 border-foreground/40 bg-white/95 focus:border-foreground/70 outline-none placeholder:text-foreground/70"
          />
        </div>
        <p className="text-foreground/70 mb-10 max-w-3xl">
          Discover affiliated handicraft shops across Pakistan offering authentic artisan products and cultural souvenirs.
        </p>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {filtered.map((shop, idx) => (
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 70, damping: 18, mass: 1.1 }}
              key={shop.name}
              onClick={() => setActiveShop(activeShop === shop.name ? null : shop.name)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setActiveShop(activeShop === shop.name ? null : shop.name)
                }
              }}
              className={`border border-border rounded-2xl overflow-hidden shadow-sm ${
                idx % 2 === 0 ? "bg-white" : "bg-gradient-to-br from-white to-amber-50/70"
              } ${activeShop === shop.name ? "md:col-span-2" : ""} ${
                activeShop && activeShop !== shop.name ? "opacity-70 scale-[0.99]" : "opacity-100 scale-100"
              } transition-all duration-700 cursor-pointer`}
            >
              <img src={shop.image} alt={shop.name} className="w-full h-52 object-cover" />
              <div className="p-5">
                <h2 className="text-xl font-bold text-foreground mb-2">{shop.name}</h2>
                <p className="text-sm text-primary font-semibold mb-2">Available In: {shop.location}</p>
                <p className="text-sm text-foreground/75">{shop.specialty}</p>

                <AnimatePresence initial={false}>
                  {activeShop === shop.name && (
                    <motion.div
                      key="shop-details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-border space-y-2">
                        <p className="text-sm text-foreground/80">
                          <span className="font-semibold">Owner:</span> {shop.owner}
                        </p>
                        <p className="text-sm text-foreground/80">
                          <span className="font-semibold">Contact:</span> {shop.contact}
                        </p>
                        <p className="text-sm text-foreground/80">
                          <span className="font-semibold">Shop Address:</span> {shop.address}
                        </p>
                        <p className="text-sm text-foreground/75">
                          <span className="font-semibold">History:</span> {shop.history}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}

