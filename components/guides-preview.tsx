"use client"

import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { Star, ArrowRight } from "lucide-react"
import { guidesData } from "@/lib/guides-data"

const topGuides = guidesData.slice(0, 4)

export default function GuidesPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Featured Tour Guides</h2>
            <p className="text-lg text-foreground/70">Meet our top-rated local experts</p>
          </div>
          <Link
            href="/guides"
            className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topGuides.map((guide, index) => (
            <div
              key={guide.id}
              className={`rounded-2xl overflow-hidden bg-white border border-border shadow-md hover:shadow-xl transition-all duration-500 group ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={guide.image || "/placeholder.svg"}
                  alt={guide.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-1">{guide.name}</h3>
                <p className="text-sm text-accent font-semibold mb-2">{guide.specialty}</p>
                <p className="text-sm text-foreground/60 mb-4">{guide.bio}</p>

                <div className="flex items-center gap-1 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(guide.rating) ? "fill-accent text-accent" : "text-border"}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground ml-1">{guide.rating}</span>
                  <span className="text-xs text-foreground/50">({guide.reviews})</span>
                </div>

                <Link
                  href={`/guides/${guide.id}`}
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            View All Guides
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
