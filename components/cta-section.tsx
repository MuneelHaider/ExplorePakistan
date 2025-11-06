"use client"

import Link from "next/link"
import { useInView } from "react-intersection-observer"

export default function CTASection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section
      ref={ref}
      className="py-20 px-4 bg-gradient-to-r from-primary via-emerald-600 to-accent relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Explore Pakistan?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers discovering the magic of Pakistan with verified local guides
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Started as Tourist
            </Link>
            <Link
              href="/signup?role=guide"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              Become a Tour Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
