const hotelTransport = [
  {
    destination: "Hunza Valley",
    photo: "/SALAM/Hunza, Gilgit Baltistan.jpg",
    hotels: "Boutique mountain lodges, family guest houses",
    hotelContact: "Hunza Stay Desk - +92 321 5502201",
    hotelPerson: "Contact: Maria Karim (Guest Relations)",
    hotelPrice: "PKR 10,000 - 26,000 / night",
    transport: "Private van from Gilgit, shared coaster options",
    transportContact: "Northern Wheels - +92 300 7781140",
    transportPerson: "Coordinator: Rehan Ali",
    transportPrice: "PKR 18,000 - 35,000 / day (vehicle class dependent)",
  },
  {
    destination: "Fairy Meadows",
    photo: "/SALAM/Fairy Meadows, Gilgit Baltistan.jpg",
    hotels: "Cabin-style camps, seasonal eco-lodges",
    hotelContact: "Meadows Camp Line - +92 345 1809044",
    hotelPerson: "Contact: Shahid Khan",
    hotelPrice: "PKR 8,000 - 18,000 / night",
    transport: "4x4 jeep transfer + short guided trek",
    transportContact: "Raikot Jeep Union - +92 333 5607611",
    transportPerson: "Dispatcher: Nadeem",
    transportPrice: "PKR 13,000 - 20,000 / one-way jeep slot",
  },
  {
    destination: "Kumrat Valley",
    photo: "/SALAM/Kumrat Valley, Khyber Pakhtunkhwa.jpg",
    hotels: "Riverside camps, basic hotels in nearby towns",
    hotelContact: "Kumrat Valley Stays - +92 312 6678901",
    hotelPerson: "Contact: Hamza Khan",
    hotelPrice: "PKR 6,000 - 15,000 / night",
    transport: "SUV/jeep access recommended",
    transportContact: "Upper Dir Transit Desk - +92 334 8021170",
    transportPerson: "Coordinator: Fawad Ahmad",
    transportPrice: "PKR 14,000 - 28,000 / day",
  },
  {
    destination: "Mahodand Lake",
    photo: "/SALAM/Mahodand Lake, Kalam, Khyber Pakhtunkhwa.png",
    hotels: "Kalam stays with same-day excursion plans",
    hotelContact: "Kalam Hotel Circuit - +92 344 7711042",
    hotelPerson: "Contact: Sameena Bibi",
    hotelPrice: "PKR 7,500 - 20,000 / night",
    transport: "4x4 from Kalam to lake-side tracks",
    transportContact: "Kalam Jeep Service - +92 321 9144502",
    transportPerson: "Dispatcher: Salman Yousaf",
    transportPrice: "PKR 10,000 - 17,000 / round trip",
  },
]

export default function HotelsTransportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Hotels & Transport</h1>
        <p className="text-foreground/70 mb-10 max-w-3xl">
          Stay and travel recommendations for our active destination network, optimized for comfort and route safety.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hotelTransport.map((item) => (
            <div key={item.destination} className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <img src={item.photo} alt={item.destination} className="w-full h-44 object-cover rounded-xl mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-3">{item.destination}</h2>
              <p className="text-foreground/80 mb-1">
                <span className="font-semibold">Hotels:</span> {item.hotels}
              </p>
              <p className="text-sm text-foreground/70 mb-1">{item.hotelPerson}</p>
              <p className="text-sm text-primary mb-1">{item.hotelContact}</p>
              <p className="text-sm text-foreground/70 mb-3">{item.hotelPrice}</p>
              <p className="text-foreground/70 mb-1">
                <span className="font-semibold">Transport:</span> {item.transport}
              </p>
              <p className="text-sm text-foreground/70 mb-1">{item.transportPerson}</p>
              <p className="text-sm text-primary mb-1">{item.transportContact}</p>
              <p className="text-sm text-foreground/70">{item.transportPrice}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
