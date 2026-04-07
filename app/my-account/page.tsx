import Link from "next/link"

const accountSections = [
  { title: "Profile Details", detail: "Name, contact info, travel preferences, and language choices." },
  { title: "Saved Destinations", detail: "Quick access to Hunza Valley, K2 Base Camp, and other favorites." },
  { title: "Trip History", detail: "Review past tours, guides, and destination feedback." },
  { title: "Guide Connections", detail: "Track guide conversations and trip planning notes." },
]

export default function MyAccountPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">My Account</h1>
        <p className="text-foreground/70 mb-10 max-w-3xl">
          Central place to manage your profile, saved routes, and traveler preferences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {accountSections.map((section) => (
            <div key={section.title} className="bg-white border border-border rounded-2xl p-6 shadow-sm">
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
