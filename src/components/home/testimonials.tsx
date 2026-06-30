"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

const testimonials = [
  {
    quote:
      "We upgraded our MV switchgear and commissioning was completed on schedule with zero unplanned outages. Clear communication, strong safety standards, and excellent workmanship throughout.",
    author: "Operations Manager",
    company: "Manufacturing Plant",
    rating: 5,
  },
  {
    quote:
      "The new MDBs, APFC panel, and DG synchronisation system stabilized our power and eliminated recurring tripping issues. The team handled design, installation, and testing professionally.",
    author: "Facility Head",
    company: "Commercial Complex",
    rating: 5,
  },
  {
    quote:
      "From compact substation to UPS and protection systems, they delivered a full turnkey package with thorough testing and documentation. Reliable partner for critical power projects.",
    author: "Project Engineer",
    company: "Industrial Site",
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-iepci-navy py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          light
        />

        <FadeIn>
          <div className="relative rounded-3xl bg-white/5 p-8 backdrop-blur-sm sm:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="mb-6 flex justify-center gap-1">
                  {Array.from({ length: testimonials[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-iepci-accent text-iepci-accent"
                      />
                    )
                  )}
                </div>
                <blockquote className="text-lg leading-relaxed text-white/90 sm:text-xl">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>
                <div className="mt-8">
                  <p className="font-semibold text-white">
                    {testimonials[current].author}
                  </p>
                  <p className="text-sm text-white/60">
                    {testimonials[current].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="rounded-full border border-white/20 p-2 text-white transition-colors hover:bg-white/10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === current
                        ? "w-8 bg-iepci-accent"
                        : "w-2 bg-white/30"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="rounded-full border border-white/20 p-2 text-white transition-colors hover:bg-white/10"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
