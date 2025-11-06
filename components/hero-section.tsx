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
    <section className="relative w-full min-h-screen md:h-screen flex items-start justify-center overflow-hidden pt-24 md:pt-8">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-amber-50 "></div>

        {/* Animated gradient circles */}
        <div className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-l from-accent/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8 md:mt-12">
        {/* Hero Image Background */}
        <div
          className={`mb-6 md:mb-8 transition-all duration-1000 transform ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        >
          <div className="relative w-full h-56 sm:h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/pakistan-mountain-landscape-beautiful-nature.jpg"
              alt="Pakistan landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>

        {/* Text Content */}
        <div
          className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          style={{ transitionDelay: "200ms" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 md:mb-4 leading-tight">
            Discover the{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Beauty of Pakistan
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore breathtaking landscapes, connect with local tour guides, and create unforgettable memories in one of
            the world's most stunning destinations.
          </p>
        </div>

        {/* Search Bar */}
        <div
          className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center mb-6 md:mb-8">
            <div className="flex-1 sm:flex-none sm:w-72 md:w-80 relative">
              <div className="relative flex items-center">
                <MapPin className="absolute left-3 md:left-4 text-primary pointer-events-none" size={18} />
                <input
                  type="text"
                  placeholder="Where to explore?"
                  className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 rounded-full border-2 border-border focus:border-primary outline-none transition-all duration-300 bg-white hover:shadow-lg text-sm md:text-base"
                />
              </div>
            </div>
            <button className="px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base">
              <Search size={18} />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <Link
            href="/locations"
            className="px-6 md:px-8 py-2.5 md:py-3 bg-primary text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm md:text-base"
          >
            Explore Destinations
          </Link>
          <Link
            href="/guides"
            className="px-6 md:px-8 py-2.5 md:py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/5 transform hover:scale-105 transition-all duration-300 text-sm md:text-base"
          >
            Find Tour Guides
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-5 h-5 md:w-6 md:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div> */}
    </section>
  )
}
