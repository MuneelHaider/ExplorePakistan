"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { LogOut, Heart, Compass, User, Bell } from "lucide-react"

export default function TouristDashboard() {
  const [user, setUser] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    const userStr = localStorage.getItem("user")
    if (userStr) {
      setUser(JSON.parse(userStr))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    window.location.href = "/"
  }

  const favorites = [
    { id: 1, name: "Northern Areas", category: "Mountains", saved: true },
    { id: 2, name: "Hunza Valley", category: "Nature", saved: true },
    { id: 3, name: "Lahore", category: "Culture", saved: false },
  ]

  const trips = [
    { id: 1, destination: "Hunza Valley", guide: "Saira Ahmed", date: "2024-02-15", status: "upcoming" },
    { id: 2, destination: "Skardu", guide: "Ahmed Khan", date: "2024-01-20", status: "completed" },
    { id: 3, destination: "Northern Areas", guide: "Hassan Malik", date: "2024-03-01", status: "upcoming" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header with Profile */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 animate-in fade-in duration-500 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
              Welcome back, {user?.fullName || "Traveler"}! 🌍
            </h1>
            <p className="text-sm md:text-base text-foreground/60">
              Explore, discover, and create unforgettable memories
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 md:px-6 py-2 md:py-3 bg-destructive text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm md:text-base w-full md:w-auto justify-center md:justify-start"
          >
            <LogOut size={20} />
            Sign Out
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12">
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-md border border-border hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-2 md:mb-3">
              <Compass className="text-primary" size={20} />
            </div>
            <p className="text-foreground/60 text-xs md:text-sm mb-1">Trips Planned</p>
            <p className="text-2xl md:text-3xl font-bold text-primary">3</p>
          </div>

          <div
            className="bg-white rounded-2xl p-4 md:p-6 shadow-md border border-border hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: "100ms" }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-2 md:mb-3">
              <Heart className="text-primary" size={20} />
            </div>
            <p className="text-foreground/60 text-xs md:text-sm mb-1">Saved Locations</p>
            <p className="text-2xl md:text-3xl font-bold text-primary">2</p>
          </div>

          <div
            className="bg-white rounded-2xl p-4 md:p-6 shadow-md border border-border hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: "200ms" }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-2 md:mb-3">
              <User className="text-primary" size={20} />
            </div>
            <p className="text-foreground/60 text-xs md:text-sm mb-1">Connected Guides</p>
            <p className="text-2xl md:text-3xl font-bold text-primary">5</p>
          </div>

          <div
            className="bg-white rounded-2xl p-4 md:p-6 shadow-md border border-border hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: "300ms" }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-2 md:mb-3">
              <Bell className="text-primary" size={20} />
            </div>
            <p className="text-foreground/60 text-xs md:text-sm mb-1">Messages</p>
            <p className="text-2xl md:text-3xl font-bold text-primary">2</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 md:mb-8 flex gap-2 md:gap-4 border-b border-border overflow-x-auto animate-in fade-in slide-in-from-bottom-4">
          {["overview", "trips", "favorites", "settings"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 md:px-6 py-2 md:py-3 font-semibold capitalize transition-all duration-300 border-b-2 text-xs md:text-base whitespace-nowrap ${
                activeTab === tab
                  ? "text-primary border-primary"
                  : "text-foreground/60 border-transparent hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="animate-in fade-in duration-500">
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Your Upcoming Trips</h2>
                <div className="space-y-3 md:space-y-4">
                  {trips
                    .filter((t) => t.status === "upcoming")
                    .map((trip, idx) => (
                      <div
                        key={trip.id}
                        className="bg-white rounded-2xl p-4 md:p-6 border border-border hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-left-4"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-3 md:mb-4">
                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-foreground">{trip.destination}</h3>
                            <p className="text-foreground/60 text-sm">Guide: {trip.guide}</p>
                          </div>
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-semibold">
                            {new Date(trip.date).toLocaleDateString()}
                          </span>
                        </div>
                        <Link
                          href={`/guides/1`}
                          className="inline-block px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm"
                        >
                          View Guide Profile
                        </Link>
                      </div>
                    ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Quick Actions</h2>
                <div className="space-y-2 md:space-y-3">
                  <Link
                    href="/locations"
                    className="block w-full p-3 md:p-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center text-sm md:text-base"
                  >
                    Explore Destinations
                  </Link>
                  <Link
                    href="/guides"
                    className="block w-full p-3 md:p-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transform hover:scale-105 transition-all duration-300 text-center text-sm md:text-base"
                  >
                    Find Guides
                  </Link>
                  <Link
                    href="/dashboard/tourist/profile"
                    className="block w-full p-3 md:p-4 bg-white border-2 border-border text-foreground rounded-xl font-semibold hover:border-primary transition-all duration-300 text-center text-sm md:text-base"
                  >
                    Edit Profile
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeTab === "trips" && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">All Trips</h2>
              <div className="space-y-3 md:space-y-4">
                {trips.map((trip) => (
                  <div
                    key={trip.id}
                    className="bg-white rounded-2xl p-4 md:p-6 border border-border hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 mb-2 md:mb-3">
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-foreground">{trip.destination}</h3>
                        <p className="text-foreground/60 text-sm">With: {trip.guide}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs md:text-sm font-semibold w-fit ${
                          trip.status === "upcoming" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                        }`}
                      >
                        {trip.status === "upcoming" ? "Upcoming" : "Completed"}
                      </span>
                    </div>
                    <p className="text-foreground/60 text-sm">{new Date(trip.date).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "favorites" && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Saved Locations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {favorites
                  .filter((f) => f.saved)
                  .map((fav) => (
                    <div
                      key={fav.id}
                      className="bg-white rounded-2xl p-4 md:p-6 border border-border hover:shadow-lg transition-all"
                    >
                      <div className="flex justify-between items-start mb-3 md:mb-4 gap-2">
                        <div>
                          <h3 className="text-base md:text-lg font-bold text-foreground">{fav.name}</h3>
                          <p className="text-foreground/60 text-xs md:text-sm">{fav.category}</p>
                        </div>
                        <Heart className="fill-red-500 text-red-500 flex-shrink-0" size={20} />
                      </div>
                      <Link
                        href={`/locations/${fav.id}`}
                        className="inline-block px-3 md:px-4 py-1 md:py-2 bg-primary/10 text-primary rounded-lg font-semibold hover:bg-primary/20 transition-all text-xs md:text-sm"
                      >
                        View Location
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white rounded-2xl p-4 md:p-6 border border-border">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">Account Settings</h3>
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue={user?.email}
                      disabled
                      className="w-full px-3 md:px-4 py-2 border border-border rounded-lg bg-muted text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue={user?.fullName}
                      className="w-full px-3 md:px-4 py-2 border border-border rounded-lg focus:border-primary outline-none text-sm"
                    />
                  </div>
                  <button className="w-full px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm">
                    Save Changes
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 md:p-6 border border-border">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">Preferences</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-primary" defaultChecked />
                    <span className="text-foreground text-sm">Email notifications</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-primary" defaultChecked />
                    <span className="text-foreground text-sm">Trip reminders</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-primary" />
                    <span className="text-foreground text-sm">Marketing emails</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
