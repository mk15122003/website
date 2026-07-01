"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { GlossyObject } from "@/components/effects/glossy-object-lazy";
import { glossyScroll } from "@/components/effects/glossy-scroll";
import { company } from "@/lib/constants";

const stats = [
  { value: 22, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Countries Served" },
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 80, suffix: "+", label: "Expert Engineers" },
];

const features = [
  "Turnkey solutions",
  "Fast professional installation",
  "Engineering & testing",
  "Economical & reliable",
];

const panelClass =
  "relative flex h-screen flex-col items-center justify-center px-6 text-center md:items-start md:pl-16 md:pr-[46%] md:text-left lg:pl-24";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export function PremiumHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Drive only the 3D object's rotation/camera from scroll.
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    glossyScroll.p = v;
  });

  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.25, 1]);

  return (
    <section ref={sectionRef} className="relative bg-iepci-black">
      {/* Sticky visual layer: the glossy object stays pinned while panels scroll over it */}
      <div className="sticky top-0 -mb-[100vh] h-screen overflow-hidden">
        <motion.div
          style={{ scale: glowScale }}
          className="pointer-events-none absolute inset-0"
        >
          <div className="animate-aurora absolute right-[6%] top-1/2 h-[42rem] w-[42rem] -translate-y-1/2 rounded-full bg-iepci-blue/25 blur-[150px]" />
          <div className="animate-aurora absolute right-[18%] top-[18%] h-96 w-96 rounded-full bg-iepci-accent/20 blur-[120px] [animation-delay:-6s]" />
        </motion.div>

        {/* Perspective grid floor */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-[0.12]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,184,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,184,255,0.6) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: "perspective(400px) rotateX(65deg)",
            transformOrigin: "center bottom",
            maskImage: "linear-gradient(to top, black, transparent)",
          }}
        />

        {/* Glossy 3D object — offset right on desktop */}
        <div className="pointer-events-none absolute inset-0 translate-y-[-4%] md:left-[24%] md:translate-y-0 lg:left-[28%]">
          <GlossyObject />
        </div>

        {/* Readability scrim so text never merges with the object */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-iepci-black/70 via-iepci-black/25 to-iepci-black/80 md:bg-gradient-to-r md:from-iepci-black md:via-iepci-black/70 md:to-transparent" />

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll to explore
          </span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1">
            <motion.span
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-iepci-accent"
            />
          </span>
        </div>
      </div>

      {/* Scrolling content panels (rendered above the sticky layer) */}
      <div className="relative z-10">
        {/* Panel 1 — Brand intro */}
        <motion.div
          className={panelClass}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.5 }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.div
            variants={reveal}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-iepci-accent/30 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iepci-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-iepci-accent" />
            </span>
            Proton Corporation Dubai is now part of IEPCI
          </motion.div>
          <motion.h1
            variants={reveal}
            className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-shimmer">{company.shortName}</span>
          </motion.h1>
          <motion.p
            variants={reveal}
            className="mt-5 max-w-xl text-lg text-white/70 sm:text-xl"
          >
            {company.tagline}
          </motion.p>
          <motion.div
            variants={reveal}
            className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <Button asChild size="lg">
              <Link href="/get-a-quote">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Panel 2 — Value proposition */}
        <motion.div
          className={panelClass}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.5 }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.p
            variants={reveal}
            className="text-sm font-medium uppercase tracking-widest text-iepci-accent"
          >
            One group · One-stop engineering
          </motion.p>
          <motion.h2
            variants={reveal}
            className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-5xl"
          >
            From electrical panels to substations, automation, solar &
            hydropower —
            <span className="text-shimmer"> engineered end to end.</span>
          </motion.h2>
          <motion.p
            variants={reveal}
            className="mt-6 max-w-xl text-white/60"
          >
            Design, supply, installation, testing and commissioning across{" "}
            {company.regionsServed}.
          </motion.p>
        </motion.div>

        {/* Panel 3 — Proof / stats */}
        <motion.div
          className={panelClass}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.5 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.h2
            variants={reveal}
            className="max-w-2xl text-3xl font-bold text-white sm:text-5xl"
          >
            Trusted on <span className="text-shimmer">mission-critical</span>{" "}
            power projects
          </motion.h2>
          <motion.div
            variants={reveal}
            className="mt-10 grid w-full max-w-xl grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-5 text-center">
                <p className="text-3xl font-bold text-white sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-xs text-white/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>
          <motion.div variants={reveal} className="mt-10">
            <Button asChild size="lg">
              <Link href="/projects">
                View Our Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust strip */}
      <div className="relative z-10 bg-white py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4">
          {features.map((f) => (
            <div
              key={f}
              className="flex items-center gap-2 text-sm text-iepci-gray-500"
            >
              <CheckCircle2 className="h-4 w-4 text-iepci-blue" />
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
