"use client";

import { Shield, Leaf, HardHat, Zap, CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

const certifications = [
  {
    icon: CheckCircle,
    title: "ISO 9001",
    description: "Quality Management System certification for consistent engineering excellence.",
  },
  {
    icon: Leaf,
    title: "ISO 14001",
    description: "Environmental management ensuring sustainable project delivery practices.",
  },
  {
    icon: HardHat,
    title: "ISO 45001",
    description: "Occupational health and safety management for zero-harm workplaces.",
  },
  {
    icon: Zap,
    title: "IEC Compliance",
    description: "Full adherence to International Electrotechnical Commission standards.",
  },
  {
    icon: Shield,
    title: "Safety Certifications",
    description: "Comprehensive safety training and site certification for all personnel.",
  },
];

export function Certifications() {
  return (
    <section className="bg-iepci-gray-100/50 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          label="Compliance"
          title="Certifications & Standards"
          description="Our commitment to quality, safety, and environmental responsibility is backed by internationally recognized certifications."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.title} delay={i * 0.06}>
              <div className="rounded-2xl border border-iepci-gray-200/60 bg-white p-6 text-center shadow-soft">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-iepci-blue/10 text-iepci-blue">
                  <cert.icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-iepci-navy">{cert.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-iepci-gray-400">
                  {cert.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
