"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Hero3DScene } from "@/components/effects/hero-3d-scene-lazy";
import { TiltCard } from "@/components/effects/tilt-card";
import { images } from "@/lib/images";
import { company } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 22, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Countries Served" },
  { value: 250, suffix: "+", label: "Projects Completed" },
  { value: 80, suffix: "+", label: "Expert Engineers" },
];

const features = [
  "Turnkey solutions",
  "Fast professional installation",
  "Engineering and Testing",
  "Economical solutions",
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.92]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -80]);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    gsap.to(bg, {
      scale: 1.15,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[110vh] overflow-hidden bg-iepci-black"
      style={{ perspective: "1200px" }}
    >
      <Hero3DScene />

      {/* Aurora glow blobs */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="animate-aurora absolute left-[10%] top-[15%] h-[28rem] w-[28rem] rounded-full bg-iepci-blue/30 blur-[140px]" />
        <div className="animate-aurora absolute right-[8%] top-[30%] h-96 w-96 rounded-full bg-iepci-accent/25 blur-[130px] [animation-delay:-6s]" />
      </div>

      <motion.div
        ref={bgRef}
        style={{ y: bgY }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={images.hero}
          alt="Industrial power infrastructure"
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black" />
      </motion.div>

      {/* Depth grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,184,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,184,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: "perspective(500px) rotateX(60deg) scale(2)",
          transformOrigin: "center top",
        }}
      />

      <motion.div
        ref={contentRef}
        style={{
          opacity: contentOpacity,
          scale: contentScale,
          y: contentY,
        }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pb-32 pt-40 text-center lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-iepci-accent/30 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iepci-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-iepci-accent" />
          </span>
          Proton Corporation Dubai is now part of IEPCI
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-iepci-accent"
          style={{ transformStyle: "preserve-3d" }}
        >
          {company.description}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40, rotateX: 25 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          style={{
            transformStyle: "preserve-3d",
            textShadow: "0 20px 60px rgba(0,184,255,0.2)",
          }}
        >
          <span className="text-shimmer">{company.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg text-white/70 sm:text-xl"
        >
          {company.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg">
            <Link href="/get-a-quote">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/services">Explore Services</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
          style={{ transformStyle: "preserve-3d" }}
        >
          {stats.map((stat) => (
            <TiltCard key={stat.label} maxTilt={8}>
              <div className="glass rounded-2xl p-4 text-center">
                <p className="text-3xl font-bold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-xs text-white/60">{stat.label}</p>
              </div>
            </TiltCard>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1">
            <motion.span
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-iepci-accent"
            />
          </span>
        </motion.div>
      </motion.div>

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
