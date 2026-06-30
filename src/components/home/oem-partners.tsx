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
];

export function OEMPartnerships() {
  return (
    <section className="border-y border-iepci-gray-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          label="Partnerships"
          title="OEM Partnerships"
          description="Authorized integration partners with leading global automation and power equipment manufacturers."
        />

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {partners.map((partner, i) => (
            <FadeIn key={partner} delay={i * 0.05}>
              <div className="flex h-16 items-center justify-center rounded-xl px-8 transition-opacity hover:opacity-70">
                <span className="text-xl font-bold tracking-tight text-iepci-navy/40 transition-colors hover:text-iepci-navy">
                  {partner}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
