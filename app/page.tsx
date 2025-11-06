"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import LocationsPreview from "@/components/locations-preview"
import GuidesPreview from "@/components/guides-preview"
import CTASection from "@/components/cta-section"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <div className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <HeroSection />
        <FeaturesSection />
        <LocationsPreview />
        <GuidesPreview />
        <CTASection />
      </div>
    </main>
  )
}
