"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollReveal3D } from "@/components/effects/scroll-reveal-3d";
import { SectionHeading } from "@/components/shared/section-heading";
import { TiltCard } from "@/components/effects/tilt-card";
import { industries } from "@/data/industries";
import { iepciImage } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger);

export function IndustriesSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll("[data-industry-card]");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 100,
        rotateX: 20,
        transformPerspective: 1200,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: grid,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="overflow-hidden py-24" style={{ perspective: "1200px" }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal3D>
          <SectionHeading
            label="Industries"
            title="Industries We Serve"
            description="Delivering specialized electrical and automation solutions across diverse industrial sectors."
          />
        </ScrollReveal3D>

        <div
          ref={gridRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          style={{ transformStyle: "preserve-3d" }}
        >
          {industries.map((industry) => (
            <div key={industry.slug} data-industry-card>
              <TiltCard maxTilt={6}>
                <Link
                  href="/industries"
                  className="group relative block overflow-hidden rounded-2xl shadow-soft"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={iepciImage(industry.image, 800)}
                      alt={industry.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-iepci-navy/90 via-iepci-navy/40 to-transparent" />
                  </div>
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-iepci-blue/20 text-iepci-accent backdrop-blur-sm">
                      <industry.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {industry.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-white/70">
                      {industry.description}
                    </p>
                  </div>
                </Link>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
