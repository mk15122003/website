"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/shared/section-heading";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  "Inquiry",
  "Engineering",
  "Design",
  "Procurement",
  "Manufacturing",
  "Installation",
  "Testing",
  "Commissioning",
  "Support",
];

export function ProcessTimeline3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const cards = container.querySelectorAll("[data-step]");

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 20%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      cards.forEach((card, i) => {
        tl.fromTo(
          card,
          {
            opacity: 0.3,
            scale: 0.85,
            rotateY: -25,
            z: -80,
            transformPerspective: 1000,
          },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            z: 0,
            duration: 1,
            ease: "power2.out",
          },
          i * 0.5
        );
      });

      return () => tl.kill();
    });

    mm.add("(max-width: 767px)", () => {
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, rotateX: 15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          label="Our Process"
          title="From Inquiry to Support"
          description="A proven 9-stage project delivery methodology — scroll to explore each phase in 3D."
        />

        <div
          ref={containerRef}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:flex md:flex-row md:gap-3"
          style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
        >
          {steps.map((step, i) => (
            <div
              key={step}
              data-step
              className="flex flex-1 items-center gap-3 rounded-2xl border border-iepci-gray-200/60 bg-white p-3 shadow-soft md:flex-col md:items-start md:p-5"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-iepci-blue to-iepci-accent text-xs font-bold text-white shadow-lg md:mb-3 md:h-12 md:w-12 md:text-sm">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-sm font-semibold leading-tight text-iepci-navy">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
