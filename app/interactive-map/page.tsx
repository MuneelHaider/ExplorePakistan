const mapPins = [
  { place: "Concordia & K2 Base Camp", region: "Gilgit-Baltistan", type: "High-altitude trek hub", q: "35.733,76.517" },
  { place: "Hunza Valley", region: "Gilgit-Baltistan", type: "Culture + scenic valley", q: "36.3167,74.65" },
  { place: "Fairy Meadows", region: "Gilgit-Baltistan", type: "Camping + viewpoints", q: "35.3869,74.5842" },
  { place: "Kumrat Valley", region: "Khyber Pakhtunkhwa", type: "Forest valley + rivers", q: "35.555,72.240" },
  { place: "Mahodand Lake", region: "Khyber Pakhtunkhwa", type: "Alpine lake excursion", q: "35.710,72.581" },
  { place: "Murree Hills", region: "Punjab", type: "Hill station break", q: "33.9062,73.3903" },
  { place: "Deewar Fort", region: "Bahawalpur, Punjab", type: "Heritage landmark", q: "28.769,71.334" },
  { place: "Lansdowne Bridge", region: "Sukkur, Sindh", type: "Historic engineering landmark", q: "27.700,68.857" },
]

export default function InteractiveMapPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Interactive Map</h1>
        <p className="text-foreground/70 mb-10 max-w-3xl">
          Find your next stop on the map. Tap any location to open it in Google Maps for directions, travel time, and nearby services.
        </p>

        <div className="bg-white border border-border rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Mapped Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mapPins.map((pin) => (
              <div key={pin.place} className="rounded-xl bg-emerald-50 p-4">
                <p className="font-bold text-foreground">{pin.place}</p>
                <p className="text-sm text-primary font-semibold">{pin.region}</p>
                <p className="text-sm text-foreground/70 mb-3">{pin.type}</p>
                <a
                  href={`https://www.google.com/maps?q=${encodeURIComponent(pin.q)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm font-semibold text-primary hover:underline mb-3"
                >
                  Open in Google Maps
                </a>
                <iframe
                  title={`${pin.place} map`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(pin.q)}&z=11&output=embed`}
                  className="w-full h-48 rounded-lg border border-border"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
