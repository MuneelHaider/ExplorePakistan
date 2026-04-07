"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { LogOut, Star, Users, Calendar, TrendingUp, Eye, MessageSquare } from "lucide-react"

export default function GuideDashboard() {
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

  const inquiries = [
    { id: 1, tourist: "John Doe", location: "Hunza Valley", date: "2024-02-15", status: "confirmed" },
    { id: 2, tourist: "Sarah Smith", location: "Concordia & K2 Base Camp", date: "2024-02-20", status: "pending" },
    { id: 3, tourist: "Mike Wilson", location: "Mahodand Lake", date: "2024-01-30", status: "completed" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 animate-in fade-in duration-500">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Welcome, Guide! 🗺️</h1>
            <p className="text-foreground/60 text-lg">Manage your tours, inquiries, and connect with travelers</p>
          </div>
          <button
            onClick={handleLogout}
            className="mt-4 md:mt-0 px-6 py-3 bg-destructive text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <LogOut size={20} />
            Sign Out
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-border hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3">
              <Calendar className="text-primary" size={24} />
            </div>
            <p className="text-foreground/60 text-sm mb-1">Upcoming Tours</p>
            <p className="text-3xl font-bold text-primary">2</p>
          </div>

          <div
            className="bg-white rounded-2xl p-6 shadow-md border border-border hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: "100ms" }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3">
              <Star className="text-primary" size={24} />
            </div>
            <p className="text-foreground/60 text-sm mb-1">Average Rating</p>
            <p className="text-3xl font-bold text-primary">4.9</p>
          </div>

          <div
            className="bg-white rounded-2xl p-6 shadow-md border border-border hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: "200ms" }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3">
              <Users className="text-primary" size={24} />
            </div>
            <p className="text-foreground/60 text-sm mb-1">Happy Tourists</p>
            <p className="text-3xl font-bold text-primary">156</p>
          </div>

          <div
            className="bg-white rounded-2xl p-6 shadow-md border border-border hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: "300ms" }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3">
              <TrendingUp className="text-primary" size={24} />
            </div>
            <p className="text-foreground/60 text-sm mb-1">Total Earnings</p>
            <p className="text-3xl font-bold text-primary">$4,250</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-4 border-b border-border animate-in fade-in slide-in-from-bottom-4">
          {["overview", "inquiries", "profile", "settings"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-semibold capitalize transition-all duration-300 border-b-2 ${
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-foreground mb-6">Active Inquiries</h2>
                <div className="space-y-4">
                  {inquiries
                    .filter((b) => b.status !== "completed")
                    .map((inquiry, idx) => (
                      <div
                        key={inquiry.id}
                        className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-left-4"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-foreground">{inquiry.tourist}</h3>
                            <p className="text-foreground/60">{inquiry.location}</p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              inquiry.status === "confirmed"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {inquiry.status === "confirmed" ? "Connected" : "Open"}
                          </span>
                        </div>
                        <p className="text-foreground/60 mb-4">{new Date(inquiry.date).toLocaleDateString()}</p>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm">
                            Message
                          </button>
                          <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-semibold hover:bg-primary/20 transition-all text-sm">
                            Details
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Quick Stats</h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Eye className="text-primary" size={24} />
                      <span className="text-foreground/60">Profile Views</span>
                    </div>
                    <p className="text-3xl font-bold text-primary">234</p>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <MessageSquare className="text-primary" size={24} />
                      <span className="text-foreground/60">Messages</span>
                    </div>
                    <p className="text-3xl font-bold text-primary">18</p>
                  </div>

                  <Link
                    href="/dashboard/guide/profile"
                    className="block w-full p-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
                  >
                    Edit Your Profile
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeTab === "inquiries" && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">All Inquiries</h2>
              <div className="space-y-4">
                {inquiries.map((inquiry) => (
                  <div
                    key={inquiry.id}
                    className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-all"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{inquiry.tourist}</h3>
                        <p className="text-foreground/60">{inquiry.location}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          inquiry.status === "completed"
                            ? "bg-green-100 text-green-700"
                            : inquiry.status === "confirmed"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {inquiry.status}
                      </span>
                    </div>
                    <p className="text-foreground/60">{new Date(inquiry.date).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "profile" && (
            <div className="bg-white rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Your Guide Profile</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Specialty</label>
                  <input
                    type="text"
                    defaultValue="Mountain Expeditions"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:border-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Price Per Day</label>
                  <input
                    type="text"
                    defaultValue="$50-100"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:border-primary outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Bio</label>
                <textarea
                  defaultValue="Expert in K2 Base Camp hiking and mountaineering with 15+ years experience"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:border-primary outline-none"
                  rows={4}
                ></textarea>
              </div>
              <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                Save Profile
              </button>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      disabled
                      defaultValue={user?.email}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-muted"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue={user?.fullName}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:border-primary outline-none"
                    />
                  </div>
                  <button className="w-full px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                    Save Changes
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Notifications</h3>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-primary" defaultChecked />
                    <span className="text-foreground">New inquiry alerts</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-primary" defaultChecked />
                    <span className="text-foreground">Messages from tourists</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-primary" />
                    <span className="text-foreground">Marketing emails</span>
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
