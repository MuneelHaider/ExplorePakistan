"use client"

import { MapPin, Users, Shield, Sparkles } from "lucide-react"
import { useInView } from "react-intersection-observer"

const features = [
  {
    icon: MapPin,
    title: "Discover Destinations",
    description: "Explore Pakistan's most beautiful tourist spots with detailed information and user reviews.",
  },
  {
    icon: Users,
    title: "Expert Tour Guides",
    description: "Connect with experienced local guides who know every hidden gem and cultural treasure.",
  },
  {
    icon: Shield,
    title: "Safe & Verified",
    description: "All tour guides are verified and trusted members of our community.",
  },
  {
    icon: Sparkles,
    title: "Unique Experiences",
    description: "Create unforgettable memories with personalized tours and authentic local experiences.",
  },
]

export default function FeaturesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Experience Pakistan?</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Your gateway to authentic Pakistan travel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-gradient-to-br from-white to-muted border border-border hover:shadow-lg transform hover:scale-105 transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
