"use client"
import { useState } from "react"

const operators = [
  {
    name: "M/s Waljis Travel Bureau (Pvt.) Ltd",
    address: "10-Khayaban-e-Suharwardy, Aabpara, Islamabad",
    phone: "051-2624701-11",
    license: "ISB TA/TO License ID-2",
  },
  {
    name: "M/s Travel Waljis (Pvt) Ltd",
    address: "10-Khayaban-e-Suharwardy, P.O Box No. 1088, Islamabad",
    phone: "051-2624701-11",
    license: "ISB TA/TO License ID-3",
  },
  {
    name: "M/s Shakil Express (Pvt) Ltd",
    address: "Shakil Chambers, I&T Centre, Khayaban-e-Suharwardy, Islamabad",
    phone: "051-2607318-25",
    license: "ISB TA/TO License ID-57",
  },
  {
    name: "M/s Overseas Employment Corporation (Pvt.) Ltd",
    address: "1-14, Potohar Plaza, Blue Area, Islamabad",
    phone: "051-9253251",
    license: "ISB TA/TO License ID-104",
  },
  {
    name: "M/s Sun Shine Travels and Tours (Pvt.) Ltd",
    address: "Office No. 3, Safdar Mansion, First Floor, Fazal-e-Haq Road, Blue Area, Islamabad",
    phone: "051-2270323-24-25",
    license: "ISB TA/TO License ID-128",
  },
  {
    name: "M/s Express Travel International LLP",
    address: "Office No. 3, Fazal Plaza, Blue Area, Islamabad",
    phone: "051-2874379-80",
    license: "ISB TA/TO License ID-135",
  },
  {
    name: "M/s Viking Travels Pvt Ltd",
    address: "Office No. 3-4, Islamabad Hotels (Holiday Inn Hotel), Islamabad",
    phone: "051-2272140-43",
    license: "ISB TA/TO License ID-160",
  },
  {
    name: "M/s Tourist Services Center Private Limited",
    address: "03-G, F-6, Super Market, Islamabad",
    phone: "051-2826697-97",
    license: "ISB TA/TO License ID-197",
  },
  {
    name: "M/s Tourist Services Centre (Pvt.) Ltd",
    address: "3-G, F-6/3, Super Market, Islamabad",
    phone: "051-286693-7",
    license: "ISB TA/TO License ID-197",
  },
  {
    name: "M/s Adventure Tours Pakistan (ATP)",
    address: "ATP Office, Kasho Bagh, Hamid Garh Road, Near K-2 Motel, Skardu",
    phone: "051-2348666",
    license: "ISB TA/TO License ID-210",
  },
]

export default function TourOperatorsPage() {
  const [query, setQuery] = useState("")
  const filtered = operators.filter((op) =>
    `${op.name} ${op.address} ${op.phone} ${op.license}`.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Tour Operators</h1>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search company, location, or license ID..."
            className="w-full md:w-[420px] px-4 py-3 rounded-xl border-2 border-foreground/40 bg-white/95 focus:border-foreground/70 outline-none placeholder:text-foreground/70"
          />
        </div>
        <p className="text-foreground/70 mb-8 max-w-3xl">
          Verified tour operating companies you can contact directly for custom itineraries across Pakistan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((op, idx) => (
            <div
              key={`${op.name}-${op.license}`}
              className={`border border-border rounded-2xl p-5 shadow-sm ${idx % 2 === 0 ? "bg-white" : "bg-gradient-to-br from-white to-emerald-50/70"}`}
            >
              <h2 className="text-xl font-bold text-foreground">{op.name}</h2>
              <p className="text-foreground/75 mt-1">{op.address}</p>
              <p className="text-primary font-semibold mt-2">Tel: {op.phone}</p>
              <p className="text-sm text-foreground/70 mt-1">{op.license}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

