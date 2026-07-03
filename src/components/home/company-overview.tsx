"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { ScrollReveal3D } from "@/components/effects/scroll-reveal-3d";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: 22, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "+", label: "Countries Served" },
  { value: 250, suffix: "+", label: "Completed Projects" },
  { value: 80, suffix: "+", label: "Engineers" },
  { value: 9, suffix: "", label: "Industries Served" },
];

export function CompanyOverview() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { rotateY: -18, rotateX: 8, scale: 0.9, opacity: 0.5 },
      {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="overflow-hidden py-14 md:py-24" style={{ perspective: "1200px" }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div
            ref={imageRef}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card will-change-transform"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src={images.substation}
              alt="IEPCI substation project"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-iepci-blue/20 to-transparent" />
          </div>

          <div>
            <ScrollReveal3D>
              <SectionHeading
                label="About IEPCI"
                title="High-voltage power solutions made simple"
                description="At Indian Electric and Power Control, we help industries plan, install, and maintain reliable high-voltage power systems with a smooth, safety-first process. From load assessment and system design to commissioning and compliance testing, our expert team ensures efficient delivery tailored to your site."
                align="left"
              />
            </ScrollReveal3D>
            <ScrollReveal3D delay={0.15}>
              <Button asChild variant="outline">
                <Link href="/about">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </ScrollReveal3D>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {metrics.map((m, i) => (
                <ScrollReveal3D key={m.label} delay={i * 0.08} rotateX={12} y={40}>
                  <div className="rounded-2xl border border-iepci-gray-200/60 bg-white p-4 shadow-soft">
                    <p className="text-2xl font-bold text-iepci-navy">
                      <AnimatedCounter value={m.value} suffix={m.suffix} />
                    </p>
                    <p className="mt-1 text-xs text-iepci-gray-400">
                      {m.label}
                    </p>
                  </div>
                </ScrollReveal3D>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
