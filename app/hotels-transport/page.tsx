"use client"
import { useState } from "react"

const hotelTransport = [
  {
    destination: "Concordia & K2 Base Camp",
    photo: "/SALAM/Concordia & K2 Base Camp, Gilgit Baltistan.jpg",
    hotels: [
      { name: "Askole Trekker Lodge", rating: "4.5", person: "Rashid Karim", phone: "+92 333 1203344", price: "PKR 14,000-24,000 / night" },
      { name: "Baltoro Base Camp Retreat", rating: "4.4", person: "Ali Mehdi", phone: "+92 321 4518812", price: "PKR 16,000-28,000 / night" },
    ],
    transports: [
      { name: "Skardu 4x4 Expedition Line", rating: "4.7", person: "Nasir Ali", phone: "+92 300 4488701", price: "PKR 35,000-55,000 / day" },
      { name: "Askole Mountain Transit", rating: "4.6", person: "Javed Iqbal", phone: "+92 334 2255402", price: "PKR 28,000-45,000 / day" },
    ],
  },
  {
    destination: "Hunza Valley",
    photo: "/SALAM/Hunza, Gilgit Baltistan.jpg",
    hotels: [
      { name: "Hunza View Residency", rating: "4.6", person: "Maria Karim", phone: "+92 321 5502201", price: "PKR 10,000-26,000 / night" },
      { name: "Karimabad Heritage Stay", rating: "4.5", person: "Qasim Jan", phone: "+92 344 8822241", price: "PKR 12,000-28,000 / night" },
    ],
    transports: [
      { name: "Northern Wheels Hunza", rating: "4.7", person: "Rehan Ali", phone: "+92 300 7781140", price: "PKR 18,000-35,000 / day" },
      { name: "Karakoram Route Vans", rating: "4.4", person: "Sajjad Khan", phone: "+92 333 9011160", price: "PKR 14,000-26,000 / day" },
    ],
  },
  {
    destination: "Fairy Meadows",
    photo: "/SALAM/Fairy Meadows, Gilgit Baltistan.jpg",
    hotels: [
      { name: "Fairy Camp Cottages", rating: "4.4", person: "Shahid Khan", phone: "+92 345 1809044", price: "PKR 8,000-18,000 / night" },
      { name: "Nanga Parbat Eco Huts", rating: "4.3", person: "Hamid Shah", phone: "+92 333 1105490", price: "PKR 9,000-19,000 / night" },
    ],
    transports: [
      { name: "Raikot Jeep Union", rating: "4.6", person: "Nadeem", phone: "+92 333 5607611", price: "PKR 13,000-20,000 / one-way" },
      { name: "Tattu Trail Transfers", rating: "4.5", person: "Arif Hussain", phone: "+92 321 4600012", price: "PKR 11,000-18,000 / one-way" },
    ],
  },
  {
    destination: "Kumrat Valley",
    photo: "/SALAM/Kumrat Valley, Khyber Pakhtunkhwa.jpg",
    hotels: [
      { name: "Kumrat Riverside Resort", rating: "4.3", person: "Hamza Khan", phone: "+92 312 6678901", price: "PKR 6,000-15,000 / night" },
      { name: "Upper Dir Forest Lodge", rating: "4.2", person: "Bashir Ullah", phone: "+92 334 3198005", price: "PKR 7,500-16,500 / night" },
    ],
    transports: [
      { name: "Upper Dir Transit Desk", rating: "4.5", person: "Fawad Ahmad", phone: "+92 334 8021170", price: "PKR 14,000-28,000 / day" },
      { name: "Kumrat Jeep Access", rating: "4.4", person: "Suleman", phone: "+92 321 3344789", price: "PKR 12,000-22,000 / day" },
    ],
  },
  {
    destination: "Mahodand Lake",
    photo: "/SALAM/Mahodand Lake, Kalam, Khyber Pakhtunkhwa.png",
    hotels: [
      { name: "Kalam Alpine Suites", rating: "4.4", person: "Sameena Bibi", phone: "+92 344 7711042", price: "PKR 7,500-20,000 / night" },
      { name: "Usho Valley Lodge", rating: "4.2", person: "Irfan Gul", phone: "+92 333 1458940", price: "PKR 8,000-19,000 / night" },
    ],
    transports: [
      { name: "Kalam Jeep Service", rating: "4.6", person: "Salman Yousaf", phone: "+92 321 9144502", price: "PKR 10,000-17,000 / round trip" },
      { name: "Usho Adventure Transport", rating: "4.5", person: "Najeeb", phone: "+92 334 6662248", price: "PKR 9,500-16,000 / round trip" },
    ],
  },
  {
    destination: "Murree Hills",
    photo: "/SALAM/Murree Hills, Punjab.png",
    hotels: [
      { name: "Murree Panorama Hotel", rating: "4.5", person: "Adeel Raza", phone: "+92 300 9184421", price: "PKR 9,000-22,000 / night" },
      { name: "Pine Crest Murree", rating: "4.3", person: "Naila Aftab", phone: "+92 333 2245611", price: "PKR 8,500-20,000 / night" },
    ],
    transports: [
      { name: "Murree Express Cabs", rating: "4.6", person: "Umer Siddiq", phone: "+92 321 7443110", price: "PKR 8,000-16,000 / day" },
      { name: "Patriata Shuttle Link", rating: "4.4", person: "Khalid", phone: "+92 333 9201118", price: "PKR 6,500-12,500 / day" },
    ],
  },
  {
    destination: "Deewar Fort",
    photo: "/SALAM/Deewar Fort, Bahawalpur Punjab.jpg",
    hotels: [
      { name: "Bahawalpur Heritage Inn", rating: "4.2", person: "Faisal Rauf", phone: "+92 321 5194370", price: "PKR 7,000-17,000 / night" },
      { name: "Cholistan Desert Lodge", rating: "4.1", person: "Imran Bhatti", phone: "+92 300 6124450", price: "PKR 8,500-18,500 / night" },
    ],
    transports: [
      { name: "Cholistan Desert Drives", rating: "4.4", person: "Waqar", phone: "+92 334 5102488", price: "PKR 13,000-24,000 / day" },
      { name: "Bahawalpur Fort Route Vans", rating: "4.2", person: "Aqeel", phone: "+92 321 8876100", price: "PKR 10,000-18,000 / day" },
    ],
  },
  {
    destination: "Lansdowne Bridge",
    photo: "/SALAM/Lansdowne Bridge Sukkur, Sindh.jpg",
    hotels: [
      { name: "Sukkur Riverside Hotel", rating: "4.3", person: "Farhan Ali", phone: "+92 333 5039988", price: "PKR 8,000-16,500 / night" },
      { name: "Indus View Residency", rating: "4.2", person: "Saima Noor", phone: "+92 300 2143300", price: "PKR 7,000-14,500 / night" },
    ],
    transports: [
      { name: "Sukkur City Transit", rating: "4.4", person: "Noman", phone: "+92 321 5134490", price: "PKR 6,000-12,000 / day" },
      { name: "Indus Route Cabs", rating: "4.3", person: "Yasir", phone: "+92 334 2297761", price: "PKR 5,500-11,000 / day" },
    ],
  },
]

export default function HotelsTransportPage() {
  const [query, setQuery] = useState("")
  const filtered = hotelTransport.filter((item) =>
    `${item.destination} ${item.hotels.map((h) => h.name).join(" ")} ${item.transports.map((t) => t.name).join(" ")}`.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Hotels & Transport</h1>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search destination, hotel, or transport..."
            className="w-full md:w-[440px] px-4 py-3 rounded-xl border-2 border-foreground/40 bg-white/95 focus:border-foreground/70 outline-none placeholder:text-foreground/70"
          />
        </div>
        <p className="text-foreground/70 mb-10 max-w-3xl">
          Stay and travel recommendations for our active destination network, optimized for comfort and route safety.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={item.destination}
              className={`border border-border rounded-2xl p-6 shadow-sm ${idx % 2 === 0 ? "bg-white" : "bg-gradient-to-br from-white to-sky-50/70"}`}
            >
              <img src={item.photo} alt={item.destination} className="w-full h-44 object-cover rounded-xl mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-3">{item.destination}</h2>
              <p className="font-semibold text-foreground mb-2">Hotels</p>
              <div className="space-y-3 mb-4">
                {item.hotels.map((hotel) => (
                  <div key={hotel.name} className="bg-emerald-50 rounded-xl p-3">
                    <p className="font-semibold text-foreground">{hotel.name}</p>
                    <p className="text-sm text-foreground/70">Rating: {hotel.rating} / 5</p>
                    <p className="text-sm text-foreground/70">Contact Person: {hotel.person}</p>
                    <p className="text-sm text-primary">Tel: {hotel.phone}</p>
                    <p className="text-sm text-foreground/70">{hotel.price}</p>
                  </div>
                ))}
              </div>

              <p className="font-semibold text-foreground mb-2">Transport Services</p>
              <div className="space-y-3">
                {item.transports.map((service) => (
                  <div key={service.name} className="bg-amber-50 rounded-xl p-3">
                    <p className="font-semibold text-foreground">{service.name}</p>
                    <p className="text-sm text-foreground/70">Rating: {service.rating} / 5</p>
                    <p className="text-sm text-foreground/70">Contact Person: {service.person}</p>
                    <p className="text-sm text-primary">Tel: {service.phone}</p>
                    <p className="text-sm text-foreground/70">{service.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
