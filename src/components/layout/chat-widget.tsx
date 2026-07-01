"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, X, Sparkles } from "lucide-react";
import { solutionPages } from "@/data/solution-pages";
import { company } from "@/lib/constants";

type Msg = {
  role: "bot" | "user";
  text: string;
  links?: { label: string; href: string }[];
};

const greeting: Msg = {
  role: "bot",
  text: `Hi! I'm the IEPCI assistant. Since Proton Corporation Dubai merged with IEPCI, I can guide you across our full range of electrical, power, automation and energy solutions. What are you looking for?`,
};

const quickReplies = [
  "Explore solutions",
  "Get a quote",
  "Locations & contact",
  "Talk to a human",
];

function buildReply(input: string): Msg {
  const q = input.toLowerCase();

  // Match a solution page directly
  const matched = solutionPages.filter((p) => {
    const hay = `${p.title} ${p.subtitle} ${p.slug}`.toLowerCase();
    return q
      .split(/\s+/)
      .some((w) => w.length > 3 && hay.includes(w));
  });

  if (/quote|price|cost|estimate|budget/.test(q)) {
    return {
      role: "bot",
      text: "Happy to help you get a tailored quote. Share your project scope and our engineering team responds within 24 hours.",
      links: [
        { label: "Request a Quote", href: "/get-a-quote" },
        { label: "Contact Us", href: "/contact" },
      ],
    };
  }

  if (/location|office|address|where|dubai|india|uae|uk|visit/.test(q)) {
    return {
      role: "bot",
      text: `We operate across ${company.regionsServed}, with offices in Vadodara (India), Business Bay (Dubai), the UAE and the UK.`,
      links: [{ label: "See all offices", href: "/contact" }],
    };
  }

  if (/human|call|phone|talk|sales|email|support|whatsapp/.test(q)) {
    return {
      role: "bot",
      text: `You can reach our team directly. Sales: ${company.email}. We're also on WhatsApp for a quick chat.`,
      links: [
        { label: "WhatsApp us", href: `https://wa.me/${company.whatsapp}` },
        { label: "Contact page", href: "/contact" },
      ],
    };
  }

  if (matched.length > 0) {
    return {
      role: "bot",
      text:
        matched.length === 1
          ? `Here's what we offer for ${matched[0].title}:`
          : "Here are the closest solutions I found:",
      links: matched.slice(0, 4).map((p) => ({
        label: p.title,
        href: `/${p.slug}`,
      })),
    };
  }

  if (/solution|service|product|what do you|offer|capab/.test(q)) {
    return {
      role: "bot",
      text: "We deliver turnkey solutions across these areas — tap any to explore:",
      links: [
        ...solutionPages.slice(0, 4).map((p) => ({
          label: p.title,
          href: `/${p.slug}`,
        })),
        { label: "View all solutions", href: "/solutions" },
      ],
    };
  }

  return {
    role: "bot",
    text: "I can help with our solutions, project quotes, or connecting you with our team. Try a quick option below, or tell me your industry or requirement.",
    links: [
      { label: "All solutions", href: "/solutions" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  };
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([greeting]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-live-chat", handler);
    return () => window.removeEventListener("open-live-chat", handler);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open]);

  const send = (text: string) => {
    const clean = text.trim();
    if (!clean) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text: clean }]);
    setTimeout(() => {
      setMessages((m) => [...m, buildReply(clean)]);
    }, 350);
  };

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open assistant"
        className="animate-glow fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-iepci-blue text-white shadow-lg transition-transform hover:scale-110"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="bot"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Bot className="h-7 w-7" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="fixed bottom-44 right-6 z-50 flex h-[30rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-iepci-gray-200 bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-iepci-navy px-4 py-3 text-white">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-iepci-blue">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">IEPCI Assistant</p>
                <p className="flex items-center gap-1.5 text-xs text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Online · replies instantly
                </p>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto bg-iepci-gray-100 px-3 py-4"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                      m.role === "user"
                        ? "rounded-br-sm bg-iepci-blue text-white"
                        : "rounded-bl-sm bg-white text-iepci-navy shadow-soft"
                    }`}
                  >
                    <p>{m.text}</p>
                    {m.links && (
                      <div className="mt-2 flex flex-col gap-1.5">
                        {m.links.map((l) =>
                          l.href.startsWith("http") ? (
                            <a
                              key={l.label}
                              href={l.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-lg border border-iepci-blue/30 px-3 py-1.5 text-center text-xs font-medium text-iepci-blue transition hover:bg-iepci-blue hover:text-white"
                            >
                              {l.label}
                            </a>
                          ) : (
                            <Link
                              key={l.label}
                              href={l.href}
                              onClick={() => setOpen(false)}
                              className="rounded-lg border border-iepci-blue/30 px-3 py-1.5 text-center text-xs font-medium text-iepci-blue transition hover:bg-iepci-blue hover:text-white"
                            >
                              {l.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick replies */}
            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-2 border-t border-iepci-gray-200 bg-white px-3 py-2">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="rounded-full border border-iepci-gray-200 px-3 py-1 text-xs text-iepci-gray-500 transition hover:border-iepci-blue hover:text-iepci-blue"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-iepci-gray-200 bg-white px-3 py-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about solutions, quotes…"
                className="flex-1 rounded-full bg-iepci-gray-100 px-4 py-2 text-sm text-iepci-navy outline-none placeholder:text-iepci-gray-400 focus:ring-2 focus:ring-iepci-blue/30"
              />
              <button
                type="submit"
                aria-label="Send"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-iepci-blue text-white transition hover:bg-iepci-blue-dark"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
