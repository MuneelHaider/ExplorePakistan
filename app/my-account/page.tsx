"use client"
import Link from "next/link"
import { useState } from "react"

const accountSections = [
  { title: "Profile Details", detail: "Name, contact info, travel preferences, and language choices." },
  { title: "Saved Destinations", detail: "Quick access to Hunza Valley, K2 Base Camp, and other favorites." },
  { title: "Trip History", detail: "Review past tours, guides, and destination feedback." },
  { title: "Guide Connections", detail: "Track guide conversations and trip planning notes." },
]

export default function MyAccountPage() {
  const [query, setQuery] = useState("")
  const filteredSections = accountSections.filter((section) =>
    `${section.title} ${section.detail}`.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">My Account</h1>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search account sections..."
            className="w-full md:w-[380px] px-4 py-3 rounded-xl border-2 border-foreground/40 bg-white/95 focus:border-foreground/70 outline-none placeholder:text-foreground/70"
          />
        </div>
        <p className="text-foreground/70 mb-10 max-w-3xl">
          Central place to manage your profile, saved routes, and traveler preferences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {filteredSections.map((section, idx) => (
            <div
              key={section.title}
              className={`border border-border rounded-2xl p-6 shadow-sm ${idx % 2 === 0 ? "bg-white" : "bg-gradient-to-br from-white to-emerald-50/70"}`}
            >
              <h2 className="text-xl font-bold text-foreground mb-2">{section.title}</h2>
              <p className="text-foreground/70">{section.detail}</p>
            </div>
          ))}
        </div>

        <Link href="/dashboard/tourist/profile" className="text-primary font-semibold hover:underline">
          Open profile dashboard
        </Link>
      </div>
    </main>
  )
}
