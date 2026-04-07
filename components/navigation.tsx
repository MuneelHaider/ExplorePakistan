"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navigation() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (!storedUser) {
      setIsLoggedIn(false)
      setUserEmail("")
      return
    }

    try {
      const parsedUser = JSON.parse(storedUser) as { email?: string }
      setIsLoggedIn(true)
      setUserEmail(parsedUser.email ?? "")
    } catch {
      setIsLoggedIn(false)
      setUserEmail("")
    }
  }, [pathname])

  const getInitial = () => {
    if (!userEmail) return "U"
    return userEmail.charAt(0).toUpperCase()
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    setIsLoggedIn(false)
    setUserEmail("")
    setIsProfileOpen(false)
    setIsOpen(false)
    router.push("/")
  }

  const navGroups = [
    {
      label: "Pakistan",
      items: [
        { label: "Explore Destinations", href: "/locations" },
        { label: "Destination Guide", href: "/destination-guide" },
        { label: "Interactive Map", href: "/interactive-map" },
      ],
    },
    {
      label: "Experiences",
      items: [
        { label: "What to Do", href: "/activities" },
        { label: "Tour Packages", href: "/tour-packages" },
        { label: "Tour Operators", href: "/tour-operators" },
        { label: "Cultural Handicrafts", href: "/cultural-handicrafts" },
        { label: "Hotels & Transport", href: "/hotels-transport" },
        { label: "Find Tour Guides", href: "/guides" },
      ],
    },
    {
      label: "Support",
      items: [
        { label: "Feedback & Complaints", href: "/feedback-complaints" },
        { label: "Emergency Help", href: "/emergency-help" },
      ],
    },
    { label: "About", items: [{ label: "About Visit Pakistan", href: "/about" }] },
  ]

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="group flex items-center h-full px-2 py-1">
            <div className="relative h-[3.75rem] w-56 sm:w-60 lg:w-64 transform group-hover:scale-[1.02] transition-transform duration-300">
              <Image
                src="/logo-visitpakistan1.jpeg"
                alt="Visit Pakistan Logo"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 240px, 256px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 mx-4 justify-center gap-2 lg:gap-3">
            {navGroups.map((group) => (
              <div key={group.label} className="relative group">
                <button
                  className={`text-foreground hover:text-primary font-medium transition-colors duration-300 text-xs lg:text-sm px-3 py-1.5 rounded-xl shrink-0 inline-flex items-center gap-1 ${
                    scrolled ? "bg-white" : "bg-white/85 backdrop-blur-sm"
                  }`}
                >
                  {group.label}
                  <ChevronDown size={14} />
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="min-w-56 bg-white border border-border rounded-xl shadow-lg p-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 rounded-lg text-sm text-foreground hover:bg-muted transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Auth Links */}
          <div className="hidden md:flex gap-3 items-center">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen((prev) => !prev)}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold flex items-center justify-center shadow-md"
                  aria-label="Open profile menu"
                >
                  {getInitial()}
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 top-full mt-2 min-w-48 bg-white border border-border rounded-xl shadow-lg p-2 z-50">
                    <p className="px-3 py-2 text-xs text-foreground/60 truncate">{userEmail || "Logged in user"}</p>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm text-foreground hover:bg-muted transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className={`px-4 py-1.5 text-foreground hover:text-primary transition-colors duration-300 text-sm lg:text-base rounded-xl ${
                    scrolled ? "bg-white" : "bg-white/85 backdrop-blur-sm"
                  }`}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="px-5 py-1.5 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium text-sm lg:text-base"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-2">
              {navGroups.map((group) => (
                <div key={group.label} className="bg-white/80 rounded-xl p-2">
                  <p className="px-2 py-1 text-xs font-semibold text-foreground/60 uppercase tracking-wide">{group.label}</p>
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors duration-300 text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                {isLoggedIn ? (
                  <>
                    <div className="px-4 py-2 rounded-lg bg-white/80 text-sm text-foreground">
                      Logged in as <span className="font-semibold">{userEmail || "user"}</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 text-left text-foreground hover:bg-muted rounded-lg transition-colors duration-300 text-sm"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors duration-300 text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg text-center font-medium text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
