"use client"
import { useState } from "react"

const categories = [
  "Guide behavior or communication",
  "Hotel or transport mismatch",
  "Destination information issue",
  "Information mismatch or outdated details",
]

const serviceStandards = [
  "Acknowledgement within 24 hours",
  "Resolution updates every 48 hours",
  "Priority handling for safety-related reports",
]

export default function FeedbackComplaintsPage() {
  const [feedbackText, setFeedbackText] = useState("")
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = () => {
    if (!feedbackText.trim()) return
    setShowModal(true)
    setFeedbackText("")
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Feedback & Complaints</h1>
        <p className="text-foreground/70 mb-10 max-w-3xl">
          Share trip feedback or report issues so we can improve destination information and guide quality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4">Report Categories</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              {categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4">Response Standards</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              {serviceStandards.map((standard) => (
                <li key={standard}>{standard}</li>
              ))}
            </ul>
            <p className="text-sm text-foreground/60 mt-5">
              For urgent risk or emergency matters, use the Emergency Help section immediately.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white border border-border rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground mb-3">Send Your Feedback</h2>
          <p className="text-foreground/70 mb-4">Your feedback helps us improve location information and guide discovery.</p>
          <textarea
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="Write your feedback here..."
            className="w-full min-h-36 p-4 border border-border rounded-xl outline-none focus:border-primary"
          />
          <button
            onClick={handleSubmit}
            className="mt-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold"
          >
            Submit Feedback
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] px-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">Feedback Submitted</h3>
            <p className="text-foreground/70 mb-5">Thank you for your input. We appreciate your support.</p>
            <button
              onClick={() => setShowModal(false)}
              className="px-5 py-2 rounded-lg bg-primary text-white font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
