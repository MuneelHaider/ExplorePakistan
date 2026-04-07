const emergencyContacts = [
  { title: "Rescue / Ambulance (Punjab, KP, GB coverage varies)", value: "1122" },
  { title: "Police", value: "15" },
  { title: "Fire Brigade", value: "16" },
  { title: "Edhi Ambulance", value: "115" },
]

const urgentSteps = [
  "If someone is in immediate danger, call the local emergency number first (1122 / 15).",
  "Share your live location and nearest landmark (bridge, hotel, village name).",
  "If you're in mountains, move to a safe spot (away from cliffs, rivers, avalanche paths).",
  "Keep a warm layer on the injured person; prevent dehydration and shock.",
]

const travelSafetyTips = [
  "Save offline maps before you leave city coverage (Hunza, Fairy Meadows, Kumrat routes).",
  "Keep copies of passport/ID (photo + cloud) and write down key phone numbers.",
  "For remote treks (K2/Concordia), travel with a licensed guide and avoid solo movement after sunset.",
  "If weather turns, stop early and wait it out — don't push into fog, rain, or river crossings.",
]

const lostDocumentHelp = [
  "If you lose your passport/ID: report to the nearest police station and get a report copy.",
  "Contact your embassy/consulate as soon as you have stable signal; keep photos of documents ready.",
  "If your phone is lost: call your mobile provider to block the SIM and secure accounts.",
]

export default function EmergencyHelpPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Emergency Help</h1>
        <p className="text-foreground/70 mb-10 max-w-3xl">
          Practical emergency guidance for travelers in Pakistan — quick contacts, what to do first, and mountain safety basics.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4">Immediate Contacts</h2>
            <div className="space-y-3">
              {emergencyContacts.map((contact) => (
                <div key={contact.title} className="rounded-xl bg-emerald-50 p-4">
                  <p className="text-sm text-foreground/70">{contact.title}</p>
                  <p className="text-lg font-bold text-primary">{contact.value}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-foreground/60 mt-4">
              Tip: when calling, say your location first (town, road, landmark), then describe the emergency.
            </p>
          </div>

          <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4">What to Do First</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              {urgentSteps.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4">Travel Safety Tips</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              {travelSafetyTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4">Lost Passport / Phone</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              {lostDocumentHelp.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <p className="text-foreground/80">
            Visit Pakistan provides travel information and helps you find local guides. In emergencies, always contact official services first.
          </p>
        </div>
      </div>
    </main>
  )
}
