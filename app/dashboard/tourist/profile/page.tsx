"use client"

import { useState, useEffect } from "react"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function TouristProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const userStr = localStorage.getItem("user")
    if (userStr) {
      setUser(JSON.parse(userStr))
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pt-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/dashboard/tourist"
          className="flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8"
        >
          <ChevronLeft size={20} />
          Back to Dashboard
        </Link>

        <div className="bg-white rounded-2xl shadow-lg border border-border animate-in fade-in slide-in-from-top-4 duration-700">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent h-32 relative">
            <div className="absolute -bottom-12 left-8 w-32 h-32 rounded-2xl border-4 border-white shadow-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
              <span className="text-6xl">👤</span>
            </div>
          </div>

          {/* Content */}
          <div className="pt-20 px-8 pb-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">{user?.fullName || "Your Profile"}</h1>
              <p className="text-foreground/60">{user?.email}</p>
            </div>

            {isEditing ? (
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue={user?.fullName}
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Bio</label>
                  <textarea
                    placeholder="Tell us about yourself..."
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary outline-none transition-all"
                    rows={4}
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Favorite Destinations</label>
                  <input
                    type="text"
                    placeholder="e.g., Northern Areas, Hunza Valley"
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex-1 px-4 py-3 bg-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex-1 px-4 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-sm text-foreground/60 font-semibold mb-2">Bio</p>
                  <p className="text-foreground">
                    Passionate traveler seeking authentic experiences and cultural immersion across Pakistan.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 font-semibold mb-2">Favorite Destinations</p>
                  <div className="flex flex-wrap gap-2">
                    {["Northern Areas", "Hunza Valley", "Skardu"].map((dest) => (
                      <span key={dest} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full px-4 py-3 bg-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Edit Profile
                </button>
              </div>
            )}

            {/* Account Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary mb-1">3</p>
                <p className="text-sm text-foreground/60">Trips Completed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary mb-1">5</p>
                <p className="text-sm text-foreground/60">Guides Connected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
