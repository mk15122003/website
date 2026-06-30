"use client";

import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

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

export function ProcessTimeline() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          label="Our Process"
          title="From Inquiry to Support"
          description="A proven 9-stage project delivery methodology ensuring quality, safety, and on-time execution."
        />

        <div className="relative">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-iepci-gray-200 lg:block" />
          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-9">
            {steps.map((step, i) => (
              <FadeIn key={step} delay={i * 0.05}>
                <div className="relative text-center">
                  <div className="relative z-10 mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-iepci-blue text-sm font-bold text-white shadow-soft">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm font-medium text-iepci-navy">{step}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
