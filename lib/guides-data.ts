export interface GuideProfile {
  id: number
  name: string
  specialty: string
  rating: number
  reviews: number
  bio: string
  about: string
  image: string
  locations: string[]
  languages: string[]
  experience: number
  verified: boolean
  responseTime: string
  priceRange: string
  availability: string
  services: string[]
  specialties: string[]
  contact: {
    phone: string
    email: string
    whatsapp: string
  }
  reviews_list: Array<{
    reviewer: string
    rating: number
    text: string
    date: string
  }>
}

export const guidesData: GuideProfile[] = [
  {
    id: 1,
    name: "Jalil Ahmed",
    specialty: "Certified Cultural & Adventure Specialist",
    rating: 4.9,
    reviews: 187,
    bio: "Licensed guide for northern history trails, Pashtun culture, and rugged adventure routes.",
    about:
      "A licensed guide specialized in the historical and rugged terrains of Northern Pakistan. Jalil offers deep insights into Gandhara civilization sites and local Pashtun culture.",
    image: "/Guides/m1.jpg",
    locations: ["Peshawar", "Swat Valley", "Islamabad"],
    languages: ["English", "Urdu", "Pashto"],
    experience: 12,
    verified: true,
    responseTime: "Within 2 hours",
    priceRange: "Rs. 14,500/day",
    availability: "Year-round (Specializes in Autumn/Spring)",
    services: ["Jeep safaris", "Cultural walking tours", "Visa invitation support"],
    specialties: ["Archeological sites", "High-altitude hiking"],
    contact: {
      phone: "+92 321 4112233",
      email: "jalil.ahmed@visitpakistan.pk",
      whatsapp: "+92 321 4112233",
    },
    reviews_list: [
      { reviewer: "Emma R.", rating: 5, text: "Amazing cultural knowledge and very professional.", date: "2026-01-08" },
      { reviewer: "Tariq H.", rating: 5, text: "Helped us understand Swat history deeply.", date: "2025-11-21" },
    ],
  },
  {
    id: 2,
    name: "Muslim Ali",
    specialty: "Photographer & Explorer",
    rating: 4.8,
    reviews: 163,
    bio: "Professional travel photographer guide for documented journeys and local food experiences.",
    about:
      "Perfect for travelers wanting a documented journey. Muslim is a professional photographer who ensures every moment is captured with high-end gear.",
    image: "/Guides/m2.jpg",
    locations: ["Karachi", "Bhit Shah", "Coastal Balochistan"],
    languages: ["English", "Urdu", "Sindhi"],
    experience: 10,
    verified: true,
    responseTime: "Within 4 hours",
    priceRange: "Rs. 18,000/day (Includes digital photo album)",
    availability: "Flexible (Booking required 2 weeks in advance)",
    services: ["Professional photography", "Videography", "Local food tours"],
    specialties: ["Street photography", "Karachi nightlife"],
    contact: {
      phone: "+92 300 5577611",
      email: "muslim.ali@visitpakistan.pk",
      whatsapp: "+92 300 5577611",
    },
    reviews_list: [
      { reviewer: "Lina P.", rating: 5, text: "Our trip photos were absolutely stunning.", date: "2026-02-16" },
      { reviewer: "Saad K.", rating: 4, text: "Great guide for Karachi street life.", date: "2025-12-04" },
    ],
  },
  {
    id: 3,
    name: "Ghulam Murtaza",
    specialty: "Trekking & Expedition Leader",
    rating: 4.9,
    reviews: 201,
    bio: "Veteran Karakoram expedition leader focused on mountain safety and logistics.",
    about:
      "A veteran of the Karakoram range, Ghulam is an expert in mountain safety and logistics for serious trekkers and casual hikers alike.",
    image: "/Guides/m3.jpg",
    locations: ["Skardu", "Gilgit", "Hunza"],
    languages: ["English", "Urdu", "Wakhi", "Shina"],
    experience: 17,
    verified: true,
    responseTime: "6-12 hours (remote areas)",
    priceRange: "Rs. 19,500/day",
    availability: "May to October",
    services: ["Porter management", "Expedition logistics"],
    specialties: ["K2 Base Camp", "Deosai Plains exploration"],
    contact: {
      phone: "+92 333 7041992",
      email: "ghulam.murtaza@visitpakistan.pk",
      whatsapp: "+92 333 7041992",
    },
    reviews_list: [
      { reviewer: "Nathan L.", rating: 5, text: "Top-tier mountain safety and planning.", date: "2025-10-12" },
      { reviewer: "Areeba M.", rating: 5, text: "Best logistics support we've had.", date: "2025-09-27" },
    ],
  },
  {
    id: 4,
    name: "Kashif Raza",
    specialty: "Heritage & Architecture Expert",
    rating: 4.7,
    reviews: 149,
    bio: "Mughal history specialist and architecture storyteller for old-city experiences.",
    about:
      "Kashif brings the history of the Mughal Empire to life and is a leading expert for navigating the streets of historic city cores.",
    image: "/Guides/m4.jpg",
    locations: ["Lahore", "Harappa", "Multan"],
    languages: ["English", "Urdu", "Punjabi"],
    experience: 11,
    verified: true,
    responseTime: "Within 1 hour",
    priceRange: "Rs. 11,000/day",
    availability: "Daily (Morning and Night shifts)",
    services: ["Motorbike tours of old city zones", "Museum curation support"],
    specialties: ["Mughal architecture", "Culinary history"],
    contact: {
      phone: "+92 321 9987441",
      email: "kashif.raza@visitpakistan.pk",
      whatsapp: "+92 321 9987441",
    },
    reviews_list: [
      { reviewer: "Hassan Q.", rating: 5, text: "Incredible guide for heritage walks.", date: "2026-01-20" },
      { reviewer: "Megan T.", rating: 4, text: "Loved the architecture-focused route.", date: "2025-11-05" },
    ],
  },
  {
    id: 5,
    name: "Sherbaz Khan",
    specialty: "Silk Road & Cultural Liaison",
    rating: 4.8,
    reviews: 172,
    bio: "Hospitality-focused guide for immersive valley culture and family connections.",
    about:
      "Known for his hospitality, Sherbaz focuses on immersive cultural experiences and connecting travelers with local families in the valleys.",
    image: "/Guides/m5.jpg",
    locations: ["Hunza (Karimabad/Passu)", "Chitral"],
    languages: ["English", "Japanese", "Urdu", "Burushaski"],
    experience: 13,
    verified: true,
    responseTime: "Within 3 hours",
    priceRange: "Rs. 13,500/day",
    availability: "March to December",
    services: ["Homestay coordination", "Traditional music nights"],
    specialties: ["Kalash Festivals", "Silk Road history"],
    contact: {
      phone: "+92 334 2400057",
      email: "sherbaz.khan@visitpakistan.pk",
      whatsapp: "+92 334 2400057",
    },
    reviews_list: [
      { reviewer: "Yuki A.", rating: 5, text: "Very warm host, truly authentic local access.", date: "2026-02-02" },
      { reviewer: "Fariha S.", rating: 4, text: "Excellent cultural guide in Hunza region.", date: "2025-12-18" },
    ],
  },
  {
    id: 6,
    name: "Ayesha Noor",
    specialty: "Family Travel Facilitator",
    rating: 4.6,
    reviews: 91,
    bio: "Friendly guide for family-friendly routes, easier itineraries, and city-cultural combinations.",
    about:
      "Ayesha supports families and first-time travelers with relaxed itineraries, practical planning, and local-friendly experiences.",
    image: "/Guides/a1.jpg",
    locations: ["Islamabad", "Murree Hills", "Lahore"],
    languages: ["English", "Urdu"],
    experience: 7,
    verified: false,
    responseTime: "Within 5 hours",
    priceRange: "Rs. 9,500/day",
    availability: "Year-round",
    services: ["Family route planning", "Museum and city walks"],
    specialties: ["Beginner-friendly tours", "Weekend itineraries"],
    contact: {
      phone: "+92 321 9011477",
      email: "ayesha.noor@visitpakistan.pk",
      whatsapp: "+92 321 9011477",
    },
    reviews_list: [{ reviewer: "Rana F.", rating: 5, text: "Very smooth trip planning for family.", date: "2025-10-01" }],
  },
  {
    id: 7,
    name: "Bilal Tariq",
    specialty: "Nature Trails Guide",
    rating: 4.5,
    reviews: 83,
    bio: "Nature-focused guide for moderate trails, lake routes, and local village interactions.",
    about:
      "Bilal leads balanced outdoor itineraries for travelers looking for scenic trails without extreme expedition requirements.",
    image: "/Guides/a2.jpg",
    locations: ["Kumrat Valley", "Mahodand Lake", "Swat Valley"],
    languages: ["English", "Urdu", "Pashto"],
    experience: 8,
    verified: false,
    responseTime: "Within 6 hours",
    priceRange: "Rs. 10,500/day",
    availability: "April to November",
    services: ["Trail guidance", "Camp coordination"],
    specialties: ["Forest trails", "Lake viewpoints"],
    contact: {
      phone: "+92 333 7801234",
      email: "bilal.tariq@visitpakistan.pk",
      whatsapp: "+92 333 7801234",
    },
    reviews_list: [{ reviewer: "Umair A.", rating: 4, text: "Good trail pacing and local support.", date: "2025-09-14" }],
  },
  {
    id: 8,
    name: "Rida Shah",
    specialty: "City Culture & Food Guide",
    rating: 4.6,
    reviews: 88,
    bio: "Urban culture guide for food walks, artisan bazaars, and local heritage neighborhoods.",
    about:
      "Rida curates city-based experiences that combine food, markets, and heritage for travelers seeking authentic local life.",
    image: "/Guides/a3.jpg",
    locations: ["Karachi", "Lahore", "Islamabad"],
    languages: ["English", "Urdu", "Punjabi"],
    experience: 6,
    verified: false,
    responseTime: "Within 3 hours",
    priceRange: "Rs. 10,000/day",
    availability: "Year-round",
    services: ["Food walks", "Bazaar tours"],
    specialties: ["Culinary routes", "Local market experiences"],
    contact: {
      phone: "+92 300 6677122",
      email: "rida.shah@visitpakistan.pk",
      whatsapp: "+92 300 6677122",
    },
    reviews_list: [{ reviewer: "Ali N.", rating: 5, text: "Fantastic city-food tour experience.", date: "2025-11-09" }],
  },
]

