"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react"

export default function SignupPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoaded, setIsLoaded] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [userRole, setUserRole] = useState<"tourist" | "guide">(
    (searchParams.get("role") as "tourist" | "guide") || "tourist",
  )
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName) newErrors.fullName = "Name is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.password) newErrors.password = "Password is required"
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters"
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match"
    if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to terms"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    // Store user info in localStorage for demo
    localStorage.setItem(
      "user",
      JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        role: userRole,
      }),
    )

    const dashboardPath = userRole === "guide" ? "/dashboard/guide" : "/dashboard/tourist"
    router.push(dashboardPath)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-24">
      <div className="w-full max-w-md">
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-2xl font-bold text-foreground">Wanderlust</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Create Account</h1>
            <p className="text-foreground/60">Join our community of travelers and guides</p>
          </div>

          {/* Role Selection */}
          <div
            className={`mb-6 transition-all duration-1000 transform ${isLoaded ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <label className="block text-sm font-semibold text-foreground mb-3">I am a...</label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setUserRole("tourist")}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  userRole === "tourist"
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                    : "border-2 border-border text-foreground hover:border-primary"
                }`}
              >
                Tourist
              </button>
              <button
                type="button"
                onClick={() => setUserRole("guide")}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  userRole === "guide"
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                    : "border-2 border-border text-foreground hover:border-primary"
                }`}
              >
                Tour Guide
              </button>
            </div>
          </div>

          {/* Signup Form */}
          <form
            onSubmit={handleSubmit}
            className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-1000 transform ${isLoaded ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
            style={{ transitionDelay: "300ms" }}
          >
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg outline-none transition-all duration-300 ${
                    errors.fullName ? "border-destructive" : "border-border focus:border-primary"
                  }`}
                />
              </div>
              {errors.fullName && <p className="text-sm text-destructive mt-1">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg outline-none transition-all duration-300 ${
                    errors.email ? "border-destructive" : "border-border focus:border-primary"
                  }`}
                />
              </div>
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-foreground mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-12 py-3 border-2 rounded-lg outline-none transition-all duration-300 ${
                    errors.password ? "border-destructive" : "border-border focus:border-primary"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="text-sm text-destructive mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-foreground mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-12 py-3 border-2 rounded-lg outline-none transition-all duration-300 ${
                    errors.confirmPassword ? "border-destructive" : "border-border focus:border-primary"
                  }`}
                />
              </div>
              {errors.confirmPassword && <p className="text-sm text-destructive mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Terms Agreement */}
            <div className="mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-border accent-primary"
                />
                <span className="text-sm text-foreground">I agree to the Terms of Service and Privacy Policy</span>
              </label>
              {errors.agreeTerms && <p className="text-sm text-destructive mt-1">{errors.agreeTerms}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 mb-4"
            >
              Create Account
            </button>

            {/* Divider */}
            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-foreground/60">Already have an account?</span>
              </div>
            </div>

            {/* Login Link */}
            <Link
              href="/login"
              className="block w-full py-3 text-center border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all duration-300"
            >
              Sign In
            </Link>
          </form>
        </div>
      </div>
    </main>
  )
}
