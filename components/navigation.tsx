"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Where to Go", href: "/locations" },
    { label: "What to Do", href: "/activities" },
    { label: "Find Tour Guides", href: "/guides" },
    { label: "About", href: "/about" },
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
          <div className="hidden md:flex gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-foreground hover:text-primary font-medium transition-colors duration-300 relative group text-sm lg:text-base px-4 py-1.5 rounded-xl ${
                  scrolled ? "bg-white" : "bg-white/85 backdrop-blur-sm"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Auth Links */}
          <div className="hidden md:flex gap-3">
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors duration-300 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
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
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
