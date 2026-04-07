"use client"

import { useState } from "react"
import { Star, MapPin, Users, Check, AlertCircle } from "lucide-react"
import { guidesData } from "@/lib/guides-data"

export default function GuideDetailPage({ params }: { params: { id: string } }) {
  const guideId = Number.parseInt(params.id)
  const guide = guidesData.find((g) => g.id === guideId) || guidesData[0]
  const [contactMethod, setContactMethod] = useState<"phone" | "email" | "whatsapp">("whatsapp")

  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary via-emerald-600 to-accent relative h-96 overflow-hidden">
        <img
          src="/SALAM/Kumrat Valley, Khyber Pakhtunkhwa.jpg"
          alt="Kumrat Valley background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-emerald-900/40 to-amber-900/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-end pb-8">
          <div className="flex flex-col md:flex-row gap-8 items-end w-full">
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 border-4 border-white">
              <img src={guide.image || "/placeholder.svg"} alt={guide.name} className="w-full h-full object-cover" />
            </div>
            <div className="text-white pb-2">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-4xl md:text-5xl font-bold">{guide.name}</h1>
                {guide.verified ? <Check className="text-green-300" size={32} /> : null}
              </div>
              <div className="mb-3">
                {guide.verified ? (
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/85 text-white font-bold text-sm md:text-base">
                    <Check size={18} /> DTS VERIFIED
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/85 text-white font-bold text-sm md:text-base">
                    NOT VERIFIED
                  </span>
                )}
              </div>
              <p className="text-xl opacity-90 mb-3">{guide.specialty}</p>
              <div className="flex flex-wrap gap-4 text-white">
                <div className="flex items-center gap-1">
                  <Star className="fill-amber-300 text-amber-300" size={20} />
                  <span className="font-bold">{guide.rating}</span>
                  <span className="opacity-80">({guide.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={20} />
                  <span>{guide.experience}+ years experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-xl">
                <p className="text-foreground/60 text-sm mb-1">Response Time</p>
                <p className="font-bold text-primary">{guide.responseTime}</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-xl">
                <p className="text-foreground/60 text-sm mb-1">Rate</p>
                <p className="font-bold text-primary">{guide.priceRange}</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-xl">
                <p className="text-foreground/60 text-sm mb-1">Languages</p>
                <p className="font-bold text-primary">{guide.languages.length}</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-xl">
                <p className="text-foreground/60 text-sm mb-1">Availability</p>
                <p className="font-bold text-primary text-sm">{guide.availability}</p>
              </div>
            </div>

            {/* About Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">About</h2>
              <p className="text-foreground/70 text-lg leading-relaxed">{guide.about}</p>
            </div>

            {/* Specialties */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Specialties</h3>
              <div className="flex flex-wrap gap-3">
                {guide.specialties.map((spec: string) => (
                  <span key={spec} className="px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Services</h3>
              <div className="flex flex-wrap gap-3">
                {guide.services.map((service: string) => (
                  <span key={service} className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-semibold">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Locations Covered</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {guide.locations.map((loc: string) => (
                  <div key={loc} className="flex items-center gap-2 p-3 bg-emerald-50 rounded-lg">
                    <MapPin className="text-primary flex-shrink-0" size={20} />
                    <span className="font-semibold text-foreground">{loc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Recent Reviews</h3>
              <div className="space-y-4">
                {guide.reviews_list.map((review: any, idx: number) => (
                  <div key={idx} className="p-6 bg-white border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-foreground">{review.reviewer}</h4>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < review.rating ? "fill-accent text-accent" : "text-border"}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-foreground/70">{review.text}</p>
                    <p className="text-sm text-foreground/50 mt-2">{review.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-primary via-emerald-600 to-accent rounded-2xl p-6 text-white mb-6">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>

              {/* Contact Method Selector */}
              <div className="space-y-3 mb-6">
                {[
                  { method: "whatsapp", icon: "💬", label: "WhatsApp" },
                  { method: "phone", icon: "☎️", label: "Call" },
                  { method: "email", icon: "✉️", label: "Email" },
                ].map((option) => (
                  <button
                    key={option.method}
                    onClick={() => setContactMethod(option.method as any)}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      contactMethod === option.method ? "bg-white/30 backdrop-blur-sm" : "hover:bg-white/20"
                    }`}
                  >
                    {option.icon} {option.label}
                  </button>
                ))}
              </div>

              {/* Contact Details */}
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                {contactMethod === "phone" && (
                  <div>
                    <p className="text-sm opacity-80 mb-1">Phone</p>
                    <p className="text-lg font-bold break-all">{guide.contact.phone}</p>
                  </div>
                )}
                {contactMethod === "email" && (
                  <div>
                    <p className="text-sm opacity-80 mb-1">Email</p>
                    <p className="text-lg font-bold break-all">{guide.contact.email}</p>
                  </div>
                )}
                {contactMethod === "whatsapp" && (
                  <div>
                    <p className="text-sm opacity-80 mb-1">WhatsApp</p>
                    <p className="text-lg font-bold">{guide.contact.whatsapp}</p>
                  </div>
                )}
              </div>

              <button className="w-full py-3 bg-white text-primary rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Send Message
              </button>
            </div>

            {/* Languages */}
            <div className="bg-white border border-border rounded-2xl p-6 mb-6">
              <h4 className="font-bold text-foreground mb-4">Languages</h4>
              <div className="space-y-2">
                {guide.languages.map((lang: string) => (
                  <div key={lang} className="flex items-center gap-2">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    <span className="text-foreground font-semibold">{lang}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Info */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
              <div className="flex gap-3">
                <AlertCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Safety & Verification</h4>
                  <ul className="text-foreground/70 text-sm space-y-1">
                    {guide.verified ? (
                      <>
                        <li>✓ DTS verified guide profile</li>
                        <li>✓ Identity and profile documents checked</li>
                        <li>✓ First aid and route safety briefing capable</li>
                      </>
                    ) : (
                      <>
                        <li>! This guide is currently not DTS verified</li>
                        <li>! Verify identity and references before finalizing</li>
                        <li>! Prefer daytime first meet and safe public handoff</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
