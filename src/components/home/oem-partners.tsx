"use client";

import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

const partners = [
  "ABB",
  "Siemens",
  "Schneider Electric",
  "Rockwell Automation",
  "Mitsubishi Electric",
  "Honeywell",
  "Emerson",
  "Fuji Electric",
  "Legrand",
  "Eaton",
  "Hager",
  "Sprint Technology",
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden">
      <div
        className="animate-scroll-logos flex shrink-0 items-center gap-12 pr-12"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {[...partners, ...partners].map((partner, i) => (
          <span
            key={`${partner}-${i}`}
            className="whitespace-nowrap text-2xl font-bold tracking-tight text-iepci-navy/30 transition-colors hover:text-iepci-blue"
          >
            {partner}
          </span>
        ))}
      </div>
    </div>
  );
}

export function OEMPartnerships() {
  return (
    <section className="overflow-hidden border-y border-iepci-gray-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          label="Partnerships"
          title="OEM & Technology Partners"
          description="Authorized integration partners with leading global automation and power equipment manufacturers — strengthened by the IEPCI–Proton merger."
        />
      </div>

      <FadeIn>
        <div className="relative space-y-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
          <MarqueeRow />
          <MarqueeRow reverse />
        </div>
      </FadeIn>
    </section>
  );
}
