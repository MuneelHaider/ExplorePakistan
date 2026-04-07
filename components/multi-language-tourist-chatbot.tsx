"use client"

import { useMemo, useRef, useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"

type ChatMessage = { role: "user" | "bot"; text: string }

function pickRandom<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)]
}

export default function MultiLanguageTouristChatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "bot", text: "Hello! I’m the Multi‑Language Tourist Chatbot. Ask me anything about travel in Pakistan." },
  ])

  const containerRef = useRef<HTMLDivElement | null>(null)

  const botReplies = useMemo(
    () => [
      "Great question. For the best experience, check the best season and travel tips on the Destination Guide page.",
      "If you tell me your destination and travel dates, I can suggest what to pack and what to prioritize.",
      "For safety, always keep your location shared with someone you trust and save emergency numbers before you travel.",
    ],
    [],
  )

  const send = () => {
    const text = input.trim()
    if (!text) return

    setMessages((prev) => [...prev, { role: "user", text }, { role: "bot", text: pickRandom(botReplies) }])
    setInput("")

    // Allow the message list to render then scroll.
    requestAnimationFrame(() => {
      const el = containerRef.current
      if (!el) return
      el.scrollTop = el.scrollHeight
    })
  }

  return (
    <div className="fixed right-4 bottom-4 z-[200] flex flex-col items-end">
      {open && (
        <div className="w-[320px] sm:w-[360px] h-[420px] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden mb-3">
          <div className="h-12 px-4 flex items-center justify-between bg-gradient-to-r from-primary to-accent text-white">
            <div className="font-semibold text-sm">Multi‑Language Tourist Chatbot</div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-md hover:bg-white/15 transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <div ref={containerRef} className="h-[320px] p-4 space-y-3 overflow-y-auto bg-white">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-primary text-white rounded-br-md"
                    : "bg-muted text-foreground rounded-bl-md"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="h-14 p-3 border-t border-border bg-white flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") send()
              }}
              placeholder="Type in any language…"
              className="flex-1 h-10 px-3 rounded-xl border border-border focus:border-primary outline-none text-sm"
              aria-label="Chat input"
            />
            <button
              onClick={send}
              className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center hover:opacity-95 transition-opacity"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="h-12 w-12 rounded-2xl bg-gradient-to-r from-primary to-accent text-white shadow-lg flex items-center justify-center hover:opacity-95 transition-opacity"
        aria-label="Open chat"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>
    </div>
  )
}

