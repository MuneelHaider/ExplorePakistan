"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, MapPin } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-8">
      {/* Full background video */}
      <video
        src="/SALAM/SP - Scenic Beauty (TV Release - HD) 007.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-label="Scenic beauty of Pakistan"
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 text-center">
        {/* Text Content */}
        <div
          className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          style={{ transitionDelay: "100ms" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight">
            Discover the{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Beauty of Pakistan
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore breathtaking landscapes, connect with local tour guides, and create unforgettable memories in one of
            the world's most stunning destinations.
          </p>
        </div>

        {/* Search Bar */}
        <div
          className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center mb-6 md:mb-8 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <div className="relative flex items-center">
                <MapPin className="absolute left-3 md:left-4 text-primary pointer-events-none" size={18} />
                <input
                  type="text"
                  placeholder="Where to explore?"
                  className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 rounded-full border-2 border-white/40 focus:border-primary outline-none transition-all duration-300 bg-white/95 hover:shadow-lg text-sm md:text-base"
                />
              </div>
            </div>
            <button className="w-full sm:w-auto sm:flex-none mt-2 px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base max-w-[200px] mx-auto sm:max-w-none sm:mx-0">
              <Search size={18} />
              <span>Search</span>
            </button>
          </div>
        </div>
 
        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-10 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <Link
            href="/locations"
            className="w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 rounded-full text-white border-2 border-white/80 font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm md:text-base max-w-[220px] mx-auto sm:max-w-none sm:mx-0"
          >
            Explore Destinations
          </Link>
          <Link
            href="/guides"
            className="w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 border-2 border-primary bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 text-sm md:text-base max-w-[220px] mx-auto sm:max-w-none sm:mx-0"
          >
            Find Tour Guides
          </Link>
        </div>
      </div>
    </section>
  )
}
