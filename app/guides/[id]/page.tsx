"use client"

import { useState } from "react"
import { Star, MapPin, Users, Check, AlertCircle } from "lucide-react"

const guides: Record<number, any> = {
  1: {
    name: "Ahmed Khan",
    specialty: "Mountain Expeditions",
    rating: 4.9,
    reviews: 156,
    bio: "Expert in K2 Base Camp hiking and mountaineering with 15+ years experience",
    image: "/SALAM/Concordia & K2 Base Camp, Gilgit Baltistan.jpg",
    locations: ["Concordia & K2 Base Camp", "Hunza Valley", "Fairy Meadows", "Kumrat Valley", "Mahodand Lake"],
    languages: ["Urdu", "English", "Wakhi"],
    experience: 15,
    verified: true,
    responseTime: "2 hours",
    priceRange: "$50-100/day",
    about:
      "Ahmed Khan is a highly experienced mountaineer and trekking guide with 15 years in the industry. He has guided hundreds of trekkers across Pakistan's northern mountains, including multiple Concordia and K2 Base Camp expeditions. His passion for the mountains is evident in his thorough preparation and attention to safety.",
    specialties: [
      "High-altitude trekking",
      "Mountaineering",
      "Rock climbing",
      "Winter expeditions",
      "Photography tours",
    ],
    contact: {
      phone: "+92 (300) 1234567",
      email: "ahmed@wanderlust.pk",
      whatsapp: "+92 (300) 1234567",
    },
    availability: "Available Mon-Sun",
    reviews_list: [
      {
        reviewer: "John Doe",
        rating: 5,
        text: "Ahmed was fantastic! His knowledge of the mountains is incredible.",
        date: "2024-01-15",
      },
      {
        reviewer: "Sarah Smith",
        rating: 5,
        text: "Professional, safe, and incredibly knowledgeable. Highly recommended!",
        date: "2024-01-10",
      },
      {
        reviewer: "Mike Wilson",
        rating: 4,
        text: "Great guide, very experienced. Would definitely use again.",
        date: "2024-01-05",
      },
    ],
  },
}

export default function GuideDetailPage({ params }: { params: { id: string } }) {
  const guideId = Number.parseInt(params.id)
  const guide = guides[guideId] || guides[1]
  const [contactMethod, setContactMethod] = useState<"phone" | "email" | "whatsapp">("whatsapp")

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary via-emerald-600 to-accent relative h-96 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-end pb-8">
          <div className="flex flex-col md:flex-row gap-8 items-end w-full">
            <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 border-4 border-white">
              <img src={guide.image || "/placeholder.svg"} alt={guide.name} className="w-full h-full object-cover" />
            </div>
            <div className="text-white pb-2">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-4xl md:text-5xl font-bold">{guide.name}</h1>
                {guide.verified && <Check className="text-green-300" size={32} />}
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
            <div className="bg-gradient-to-br from-primary via-emerald-600 to-accent rounded-2xl p-6 text-white mb-6 sticky top-24">
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
                    <li>✓ Identity verified</li>
                    <li>✓ Background checked</li>
                    <li>✓ Insurance covered</li>
                    <li>✓ First aid certified</li>
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
