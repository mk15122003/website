"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { ScrollReveal3D } from "@/components/effects/scroll-reveal-3d";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    gsap.to(bg, {
      y: "-20%",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32"
      style={{ perspective: "1200px" }}
    >
      <div ref={bgRef} className="absolute inset-0 scale-110 will-change-transform">
        <Image
          src={images.powerLines}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-iepci-navy/90" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <ScrollReveal3D rotateX={22} y={60}>
          <h2
            className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
            style={{ textShadow: "0 10px 40px rgba(0,184,255,0.25)" }}
          >
            Ready to Power Your Next Project?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Get in touch today for a fast, detailed quotation. Share your
            single-line diagram, site location, required capacity, and
            timeline—we&apos;ll confirm scope and mobilize for installation and
            commissioning.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/get-a-quote">
                Request Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </ScrollReveal3D>
      </div>
    </section>
  );
}
