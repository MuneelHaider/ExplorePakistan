"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store user info in localStorage for demo
    localStorage.setItem("user", JSON.stringify({ email, role: "tourist" }))
    router.push("/dashboard/tourist")
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-16">
      <div className="w-full max-w-md">
        {/* Left Side - Info Section (Hidden on mobile, visible on larger screens) */}
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 relative">
                <Image
                  src="/logo-visitpakistan.jpeg"
                  alt="Visit Pakistan Logo"
                  fill
                  className="object-contain rounded-lg"
                  sizes="40px"
                />
              </div>
              <span className="text-2xl font-bold text-foreground">Visit Pakistan</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Welcome Back</h1>
            <p className="text-foreground/60">Sign in to explore Pakistan's beauty</p>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit}
            className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-1000 transform ${isLoaded ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 border-2 border-border rounded-lg focus:border-primary outline-none transition-all duration-300 hover:shadow-md"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 border-2 border-border rounded-lg focus:border-primary outline-none transition-all duration-300 hover:shadow-md"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-border accent-primary"
                />
                <span className="text-sm text-foreground">Remember me</span>
              </label>
              <Link href="#" className="text-sm text-primary hover:text-accent transition-colors">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 mb-4"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-foreground/60">New to Visit Pakistan?</span>
              </div>
            </div>

            {/* Sign Up Link */}
            <Link
              href="/signup"
              className="block w-full py-3 text-center border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all duration-300"
            >
              Create Account
            </Link>
          </form>

          {/* Social Login */}
          <div
            className={`mt-8 transition-all duration-1000 transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <p className="text-center text-foreground/60 text-sm mb-4">Or continue with</p>
            <div className="flex gap-4">
              <button className="flex-1 py-3 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 font-semibold text-foreground">
                Google
              </button>
              <button className="flex-1 py-3 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 font-semibold text-foreground">
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
