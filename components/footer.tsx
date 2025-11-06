"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-emerald-50 to-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 relative transform group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/logo.png"
                  alt="Experience Pakistan Logo"
                  fill
                  className="object-contain rounded-lg"
                  sizes="40px"
                />
              </div>
              <span className="font-bold text-xl text-foreground">Experience Pakistan</span>
            </Link>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Your gateway to authentic Pakistan travel experiences. Discover breathtaking destinations and connect with expert local guides.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300">
                  Where to Go
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300">
                  What to Do
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300">
                  Find Tour Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-0.5 flex-shrink-0" size={18} />
                <span className="text-sm text-foreground/70">
                  Islamabad, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <a
                  href="tel:+923205636119"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  +92 320 5636119
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <a
                  href="mailto:info@experiencepakistan.pk"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  info@experiencepakistan.pk
                </a>
              </li>
            </ul>
          </div>

          {/* Additional Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/login" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60 text-center md:text-left">
              © {currentYear} Experience Pakistan. All rights reserved.
            </p>
            <p className="text-sm text-foreground/60 text-center md:text-right">
              Made with ❤️ in Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

