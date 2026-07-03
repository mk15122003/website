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
  "Browse solutions",
  "Get a quote",
  "Our locations",
  "Talk to a human",
];

/**
 * Maps real-world terms, acronyms and synonyms to the solution page slugs they
 * belong to. This is what lets the assistant "understand" phrases like
 * "do you supply transformers", "PLC drives", "solar inverter" or "CCTV".
 */
const solutionAliases: Record<string, string[]> = {
  electrical: ["electrical", "electrical-equipment"],
  transformer: ["electrical-equipment", "electrical", "substation"],
  transformers: ["electrical-equipment", "electrical", "substation"],
  panel: ["electrical", "automation"],
  panels: ["electrical", "automation"],
  switchgear: ["substation", "electrical-equipment", "electrical"],
  switchgears: ["substation", "electrical-equipment", "electrical"],
  rmu: ["substation", "electrical-equipment"],
  "ring main unit": ["substation", "electrical-equipment"],
  distribution: ["electrical", "electrical-equipment"],
  mcc: ["electrical"],
  pcc: ["electrical"],
  mccb: ["electrical"],
  acb: ["electrical"],
  amf: ["electrical"],
  synchronising: ["electrical"],
  synchronizing: ["electrical"],
  capacitor: ["electrical", "power-conditioning"],
  "power factor": ["electrical", "power-conditioning"],
  pfc: ["electrical", "power-conditioning"],
  generator: ["electrical", "electrical-equipment"],
  generators: ["electrical", "electrical-equipment"],
  genset: ["electrical", "electrical-equipment"],
  dg: ["electrical", "electrical-equipment"],
  diesel: ["electrical", "electrical-equipment"],
  cable: ["electrical", "electrical-equipment", "sprint-technologies"],
  cables: ["electrical", "electrical-equipment", "sprint-technologies"],
  cabling: ["electrical", "electrical-equipment"],
  termination: ["electrical", "electrical-equipment"],
  terminations: ["electrical", "electrical-equipment"],
  wiring: ["electrical", "electrical-equipment"],
  plc: ["automation", "fuji-electric"],
  plcs: ["automation", "fuji-electric"],
  hmi: ["automation", "instrumentation"],
  scada: ["instrumentation", "automation"],
  vfd: ["automation"],
  vfds: ["automation"],
  drive: ["automation"],
  drives: ["automation"],
  servo: ["automation"],
  motor: ["automation", "fuji-electric"],
  motors: ["automation", "fuji-electric"],
  motion: ["automation", "fuji-electric"],
  encoder: ["automation"],
  automation: ["automation", "valves-and-automation"],
  ups: ["power-conditioning", "fuji-electric", "electrical"],
  stabiliser: ["power-conditioning", "fuji-electric"],
  stabilizer: ["power-conditioning", "fuji-electric"],
  stabilisers: ["power-conditioning", "fuji-electric"],
  stabilizers: ["power-conditioning", "fuji-electric"],
  battery: ["power-conditioning", "electrical"],
  batteries: ["power-conditioning", "electrical"],
  charger: ["power-conditioning", "electrical"],
  chargers: ["power-conditioning", "electrical"],
  harmonic: ["power-conditioning", "fuji-electric", "electrical"],
  harmonics: ["power-conditioning", "fuji-electric", "electrical"],
  filter: ["power-conditioning", "fuji-electric"],
  filters: ["power-conditioning", "fuji-electric"],
  solar: ["solar-system", "fuji-electric"],
  pv: ["solar-system"],
  photovoltaic: ["solar-system"],
  inverter: ["solar-system", "fuji-electric", "power-conditioning"],
  inverters: ["solar-system", "fuji-electric", "power-conditioning"],
  substation: ["substation", "package-substation", "design-engineering"],
  substations: ["substation", "package-substation", "design-engineering"],
  "package substation": ["package-substation"],
  "compact substation": ["package-substation"],
  containerised: ["package-substation"],
  containerized: ["package-substation"],
  instrument: ["instrumentation"],
  instrumentation: ["instrumentation"],
  sensor: ["instrumentation"],
  sensors: ["instrumentation"],
  transmitter: ["instrumentation"],
  transmitters: ["instrumentation"],
  controller: ["instrumentation", "automation"],
  controllers: ["instrumentation", "automation"],
  cleanroom: ["instrumentation"],
  calibration: ["instrumentation"],
  valve: ["valves-and-automation"],
  valves: ["valves-and-automation"],
  actuator: ["valves-and-automation"],
  actuators: ["valves-and-automation"],
  hydro: ["hydro-powerplant"],
  hydropower: ["hydro-powerplant"],
  hydroelectric: ["hydro-powerplant"],
  turbine: ["hydro-powerplant"],
  turbines: ["hydro-powerplant"],
  testing: ["testing-commissioning"],
  test: ["testing-commissioning"],
  commissioning: ["testing-commissioning"],
  energization: ["testing-commissioning"],
  energisation: ["testing-commissioning"],
  design: ["design-engineering"],
  engineering: ["design-engineering"],
  feasibility: ["design-engineering"],
  modification: ["modification-and-upgrade", "substation"],
  upgrade: ["modification-and-upgrade", "substation"],
  upgradation: ["modification-and-upgrade", "substation"],
  refurbish: ["modification-and-upgrade"],
  refurbishment: ["modification-and-upgrade"],
  retrofit: ["modification-and-upgrade"],
  repair: ["modification-and-upgrade"],
  fuji: ["fuji-electric"],
  cctv: ["sprint-technologies"],
  camera: ["sprint-technologies"],
  cameras: ["sprint-technologies"],
  surveillance: ["sprint-technologies"],
  "access control": ["sprint-technologies"],
  networking: ["sprint-technologies"],
  network: ["sprint-technologies"],
  fiber: ["sprint-technologies"],
  fibre: ["sprint-technologies"],
  security: ["sprint-technologies"],
  protection: ["substation", "testing-commissioning", "electrical"],
  relay: ["substation", "testing-commissioning"],
  relays: ["substation", "testing-commissioning"],
  earthing: ["substation", "testing-commissioning", "design-engineering"],
  grounding: ["substation", "testing-commissioning", "design-engineering"],
  busbar: ["electrical", "electrical-equipment"],
  busbars: ["electrical", "electrical-equipment"],
  breaker: ["electrical", "substation", "electrical-equipment"],
  breakers: ["electrical", "substation", "electrical-equipment"],
  "circuit breaker": ["electrical", "substation", "electrical-equipment"],
  mcb: ["electrical"],
  vcb: ["substation", "electrical-equipment"],
  isolator: ["substation", "electrical-equipment"],
  meter: ["instrumentation", "electrical"],
  meters: ["instrumentation", "electrical"],
  metering: ["instrumentation", "electrical"],
  lighting: ["electrical"],
  feeder: ["electrical", "substation"],
  reactor: ["electrical"],
  reactors: ["electrical"],
  choke: ["electrical"],
  gis: ["substation"],
  sf6: ["substation", "package-substation"],
  "distribution board": ["electrical"],
  "control panel": ["electrical", "automation"],
  siemens: ["automation", "electrical-equipment", "substation"],
  "allen bradley": ["automation"],
  mitsubishi: ["automation"],
  omron: ["automation"],
  schneider: ["electrical", "electrical-equipment"],
  abb: ["electrical-equipment", "automation", "substation"],
  epc: ["solar-system", "hydro-powerplant", "design-engineering"],
  turnkey: ["electrical", "design-engineering"],
  maintenance: ["modification-and-upgrade", "testing-commissioning"],
  amc: ["modification-and-upgrade", "testing-commissioning"],
  installation: ["testing-commissioning", "electrical"],
  install: ["testing-commissioning", "electrical"],
  renewable: ["solar-system", "hydro-powerplant"],
  pump: ["valves-and-automation", "automation"],
  pumps: ["valves-and-automation", "automation"],
  water: ["valves-and-automation", "instrumentation"],
  gas: ["valves-and-automation", "instrumentation"],
  pipeline: ["valves-and-automation"],
  actuation: ["valves-and-automation"],
  pneumatic: ["valves-and-automation"],
  logger: ["instrumentation"],
  annunciator: ["instrumentation"],
  temperature: ["instrumentation"],
  pressure: ["instrumentation", "valves-and-automation"],
  humidity: ["instrumentation"],
};

// Words too generic (or structural) to be useful for matching.
const STOP = new Set([
  "the", "a", "an", "and", "or", "of", "for", "to", "do", "you", "your",
  "me", "my", "is", "are", "with", "in", "on", "we", "our", "can", "i",
  "please", "hi", "hello", "hey", "what", "which", "how", "give", "get",
  "some", "any", "need", "want", "looking", "have", "has", "provide",
  "provides", "sell", "supply", "supplies", "offer", "offers", "solution",
  "solutions", "service", "services", "product", "products", "system",
  "systems", "control", "power", "industrial", "industry", "equipment",
  "company", "about", "there", "yes", "no", "ok", "okay", "help",
]);

function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function levenshtein(a: string, b: string) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

// Pre-built searchable token set per solution page.
const pageIndex = solutionPages.map((p) => {
  const blob = [
    p.title,
    p.subtitle,
    p.description,
    ...(p.brands ?? []),
    ...p.sections.flatMap((s) => [s.title, s.description, ...s.items]),
  ]
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ");
  const tokens = new Set(blob.split(/\s+/).filter((w) => w.length > 2));
  return { page: p, tokens };
});

function scoreSolutions(input: string) {
  const norm = normalize(input);
  const words = norm.split(" ").filter((w) => w && !STOP.has(w));
  const score = new Map<string, number>();
  const add = (slug: string, n: number) =>
    score.set(slug, (score.get(slug) ?? 0) + n);

  // Multi-word alias phrases (e.g. "access control", "package substation")
  for (const alias of Object.keys(solutionAliases)) {
    if (alias.includes(" ") && norm.includes(alias)) {
      solutionAliases[alias].forEach((s) => add(s, 5));
    }
  }

  for (const w of words) {
    if (solutionAliases[w]) {
      solutionAliases[w].forEach((s) => add(s, 5));
    } else if (w.length >= 5) {
      // Typo-tolerant alias match (e.g. "transfomer", "swithgear")
      for (const key of Object.keys(solutionAliases)) {
        if (
          !key.includes(" ") &&
          Math.abs(key.length - w.length) <= 1 &&
          levenshtein(key, w) <= 1
        ) {
          solutionAliases[key].forEach((s) => add(s, 4));
          break;
        }
      }
    }

    for (const { page, tokens } of pageIndex) {
      if (tokens.has(w)) {
        add(page.slug, 2);
      } else if (w.length >= 5) {
        for (const t of tokens) {
          if (t.length >= 5 && (t.includes(w) || w.includes(t))) {
            add(page.slug, 1);
            break;
          }
        }
      }
    }
  }

  return [...score.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([slug, n]) => ({
      page: solutionPages.find((p) => p.slug === slug)!,
      score: n,
    }))
    .filter((r) => r.page);
}

// Confident matches (used for a direct answer).
function findSolutions(input: string) {
  return scoreSolutions(input)
    .filter((r) => r.score >= 2)
    .slice(0, 4)
    .map((r) => r.page);
}

// Best guesses even when we're not confident (used before the fallback).
function suggestSolutions(input: string) {
  return scoreSolutions(input)
    .filter((r) => r.score >= 1)
    .slice(0, 3)
    .map((r) => r.page);
}

function buildReply(input: string): Msg {
  const q = normalize(input);
  const wordCount = q.split(" ").filter(Boolean).length;
  const matched = findSolutions(input);

  // Greeting (only when it's essentially just a greeting)
  if (
    /^(hi+|hello+|hey+|hola|namaste|yo|greetings|good (morning|afternoon|evening))\b/.test(
      q
    ) &&
    wordCount <= 3 &&
    matched.length === 0
  ) {
    return {
      role: "bot",
      text: "Hello! 👋 I'm here to help. Are you looking for a specific solution, a quote, or our contact details?",
      links: [
        { label: "Browse all solutions", href: "/solutions" },
        { label: "Get a quote", href: "/get-a-quote" },
      ],
    };
  }

  // Thanks
  if (
    /(thank|thanks|thx|thankyou|appreciate|awesome|perfect|great job|well done)\b/.test(
      q
    ) &&
    matched.length === 0
  ) {
    return {
      role: "bot",
      text: "You're welcome! If there's anything else — a quote, a product, or a chat with our engineers — just say the word.",
    };
  }

  // Farewell
  if (/\b(bye|goodbye|see ya|see you|that'?s all|nothing else)\b/.test(q)) {
    return {
      role: "bot",
      text: "Thanks for stopping by! Reach us anytime on WhatsApp or email — have a great day.",
      links: [
        { label: "WhatsApp us", href: `https://wa.me/${company.whatsapp}` },
      ],
    };
  }

  // Quote / pricing
  if (/quote|price|pricing|cost|costs|estimat|budget|rate|how much|proposal|tender|enquir|inquir/.test(q)) {
    return {
      role: "bot",
      text: "Happy to help you get a tailored quote. Share your project scope and our engineering team responds within 24 hours.",
      links: [
        { label: "Request a Quote", href: "/get-a-quote" },
        { label: "Contact Us", href: "/contact" },
      ],
    };
  }

  // Locations
  if (/location|office|offices|address|where|based|visit|country|countries|dubai|india|uae|emirat|\buk\b|britain|africa|vadodara|business bay/.test(q)) {
    return {
      role: "bot",
      text: `We operate across ${company.regionsServed}, with our head office in Vadodara (India) and offices in Business Bay (Dubai), the wider UAE, and the UK.`,
      links: [{ label: "See all offices & maps", href: "/contact" }],
    };
  }

  // Talk to a human / contact
  if (/human|agent|representative|call|phone|contact|talk|speak|sales|email|mail|support|whatsapp|reach|number/.test(q)) {
    return {
      role: "bot",
      text: `You can reach our team directly — Sales: ${company.email}, India: ${company.phones[0].number}. We're also on WhatsApp for a quick chat.`,
      links: [
        { label: "WhatsApp us", href: `https://wa.me/${company.whatsapp}` },
        { label: "All contact details", href: "/contact" },
      ],
    };
  }

  // About the company
  if (/who are you|who is|what is iepci|about (iepci|the company|you)|history|founded|proton|merger|merged|background|introduc/.test(q)) {
    return {
      role: "bot",
      text: `${company.name} (IEPCI) has delivered electrical, power and automation projects since ${company.founded}. Following the merger with Proton Corporation Dubai, we combine Gulf, African and Indian engineering expertise under one global brand.`,
      links: [
        { label: "About IEPCI", href: "/about" },
        { label: "Our solutions", href: "/solutions" },
      ],
    };
  }

  // Certifications / quality / standards
  if (/certif|iso|quality|standard|compliance|compliant|accredit|\biec\b/.test(q)) {
    return {
      role: "bot",
      text: "Our engineering follows international IEC standards (e.g. IEC 62271, IEC 61330) with rigorous testing and commissioning on every project. Our team can share full quality credentials on request.",
      links: [
        { label: "Testing & Commissioning", href: "/testing-commissioning" },
        { label: "Talk to our team", href: "/contact" },
      ],
    };
  }

  // Industries / sectors served
  if (/industr|sector|segment|who do you serve|clients|customer|application|pharma|mining|\boil\b|petrochem|textile|utility|utilities|infrastructure|marine|cement|hospital|data ?cent/.test(q)) {
    return {
      role: "bot",
      text: `We serve ${company.industrialSegments.slice(0, 6).join(", ")}, and more — across utilities, oil & gas, pharma, mining and infrastructure. Tell me your industry and I'll point you to the right solutions.`,
      links: [
        { label: "Learn about IEPCI", href: "/about" },
        { label: "All solutions", href: "/solutions" },
      ],
    };
  }

  // Support / maintenance / after-sales
  if (/maintenance|\bamc\b|after ?sales|service contract|servicing|breakdown|troubleshoot|not working|faulty|fault|spare part|spares/.test(q)) {
    return {
      role: "bot",
      text: "We provide installation, testing, maintenance, refurbishment and chip-level repair to keep your systems running. Tell us the equipment involved and our engineers will assist.",
      links: [
        { label: "Modification & Upgrade", href: "/modification-and-upgrade" },
        { label: "Testing & Commissioning", href: "/testing-commissioning" },
        { label: "Contact support", href: "/contact" },
      ],
    };
  }

  // Catalog / datasheet / brochure / specs
  if (/catalog|catalogue|brochure|datasheet|data sheet|spec sheet|specification|pdf|download|manual/.test(q)) {
    return {
      role: "bot",
      text: "Happy to share datasheets and specifications for any product. Let us know the item you're interested in and our team will send the documents across.",
      links: [
        { label: "Request documents", href: "/contact" },
        { label: "Browse solutions", href: "/solutions" },
      ],
    };
  }

  // Warranty / delivery / availability / payment
  if (/warranty|guarantee|delivery|deliver|shipping|ship|dispatch|lead time|availab|in stock|stock|payment|terms|export|import|moq|minimum order/.test(q)) {
    return {
      role: "bot",
      text: "Delivery timelines, availability, warranty and commercial terms depend on the specific product and destination. Share your requirement and our team will confirm everything with your quote.",
      links: [
        { label: "Get a quote", href: "/get-a-quote" },
        { label: "Contact our team", href: "/contact" },
      ],
    };
  }

  // Projects / portfolio
  if (/project|portfolio|case stud|track record|reference|past work|experience/.test(q)) {
    return {
      role: "bot",
      text: "We've delivered mission-critical power and automation projects across mining, infrastructure and industrial sectors. Take a look at our featured work.",
      links: [{ label: "View our projects", href: "/projects" }],
    };
  }

  // Partners / brands / OEM
  if (/partner|brand|oem|manufacturer|schneider|\babb\b|siemens|sprint|legrand|eaton|hager|authorised|authorized|distributor/.test(q)) {
    return {
      role: "bot",
      text: "We work with leading OEMs including Fuji Electric, Schneider, ABB, Siemens, Legrand and Eaton, plus our Sprint Technology partnership for CCTV & networking across the Gulf and Africa.",
      links: [
        { label: "Fuji Electric", href: "/fuji-electric" },
        { label: "Sprint Technologies", href: "/sprint-technologies" },
      ],
    };
  }

  // Careers / jobs
  if (/career|careers|job|jobs|hiring|hire|vacan|recruit|internship|employ|work with you/.test(q)) {
    return {
      role: "bot",
      text: "We're always keen to meet talented engineers. Send your CV and a note to our team and we'll be in touch.",
      links: [
        { label: `Email us`, href: `mailto:${company.email}` },
        { label: "Contact page", href: "/contact" },
      ],
    };
  }

  // Process / lead time / how you work
  if (/process|how long|lead time|delivery time|deliver|timeline|methodology|how do you work|steps|turnaround|schedule/.test(q)) {
    return {
      role: "bot",
      text: "We follow a proven 9-stage delivery process — from inquiry, design and engineering through manufacturing, installation, testing, commissioning and ongoing support. Timelines depend on scope, and we confirm them with your quote.",
      links: [
        { label: "Request a Quote", href: "/get-a-quote" },
        { label: "Contact our team", href: "/contact" },
      ],
    };
  }

  // Matched a specific solution / product
  if (matched.length > 0) {
    return {
      role: "bot",
      text:
        matched.length === 1
          ? `Yes — that falls under our ${matched[0].title}. Here's where to explore it:`
          : "Here are the solutions that best match what you asked about:",
      links: matched.map((p) => ({ label: p.title, href: `/${p.slug}` })),
    };
  }

  // Generic "what do you do"
  if (/solution|service|product|offer|provide|capab|deal in|what do you|do you (have|sell|supply|make|do)/.test(q)) {
    return {
      role: "bot",
      text: "We deliver turnkey solutions across electrical, substation, automation, instrumentation, solar, and power quality. Tap one to explore, or tell me the specific product you need.",
      links: [
        ...solutionPages.slice(0, 4).map((p) => ({
          label: p.title,
          href: `/${p.slug}`,
        })),
        { label: "View all solutions", href: "/solutions" },
      ],
    };
  }

  // Low-confidence guesses — surface our best matches instead of a dead-end
  const suggestions = suggestSolutions(input);
  if (suggestions.length > 0) {
    return {
      role: "bot",
      text: "I'm not 100% sure I understood, but this might be what you're after:",
      links: [
        ...suggestions.map((p) => ({ label: p.title, href: `/${p.slug}` })),
        { label: "None of these — talk to a human", href: `https://wa.me/${company.whatsapp}` },
      ],
    };
  }

  // Fallback — acknowledge and guide
  return {
    role: "bot",
    text: "I want to make sure I point you to the right place. Could you tell me the product or service you need — for example transformers, PLCs, UPS, solar, substations or CCTV? Or I can connect you with an engineer.",
    links: [
      { label: "Browse all solutions", href: "/solutions" },
      { label: "Get a quote", href: "/get-a-quote" },
      { label: "Talk to a human", href: `https://wa.me/${company.whatsapp}` },
    ],
  };
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([greeting]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
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
  }, [messages, open, typing]);

  const send = (text: string) => {
    const clean = text.trim();
    if (!clean) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text: clean }]);
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, buildReply(clean)]);
      setTyping(false);
    }, 550);
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

              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-3 py-2.5 shadow-soft">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-iepci-gray-400"
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                        transition={{
                          duration: 0.9,
                          repeat: Infinity,
                          delay: d * 0.15,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
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
