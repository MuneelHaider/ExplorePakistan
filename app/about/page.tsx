"use client"

import { useEffect, useState } from "react"
import FeaturesSection from "@/components/features-section"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-background pt-16">
      <div className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <FeaturesSection />
      </div>
    </main>
  )
}

