"use client";

import { motion } from "framer-motion";
import {
  Award,
  Package,
  ShieldCheck,
  Globe,
  Headphones,
  Clock,
} from "lucide-react";
import { ScrollReveal3D } from "@/components/effects/scroll-reveal-3d";
import { TiltCard } from "@/components/effects/tilt-card";
import { SectionHeading } from "@/components/shared/section-heading";

const features = [
  {
    icon: Award,
    title: "Certified Engineers",
    description:
      "IEC-compliant engineering team with OEM certifications from ABB, Siemens, and Schneider.",
  },
  {
    icon: Package,
    title: "Turnkey Delivery",
    description:
      "Single-point responsibility from design through procurement, installation, and commissioning.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "ISO 45001 certified safety management with zero-compromise protocols on every project.",
  },
  {
    icon: Globe,
    title: "International Standards",
    description:
      "Projects delivered to IEC, IEEE, and local regulatory standards across 15+ countries.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock technical support and emergency response for critical power systems.",
  },
  {
    icon: Clock,
    title: "On-Time Execution",
    description:
      "Proven track record of on-schedule commissioning with zero unplanned outages.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-14 md:py-24" style={{ perspective: "1200px" }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal3D>
          <SectionHeading
            label="Why IEPCI"
            title="Why Choose Us"
            description="Trusted by procurement managers, plant heads, and project engineers worldwide for mission-critical power and automation projects."
          />
        </ScrollReveal3D>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <ScrollReveal3D key={feature.title} delay={i * 0.08} rotateX={16}>
              <TiltCard maxTilt={8}>
                <motion.div
                  className="h-full rounded-2xl border border-iepci-gray-200/60 bg-white p-8 shadow-soft transition-shadow hover:shadow-card"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-iepci-blue/10 text-iepci-blue"
                    style={{ transform: "translateZ(25px)" }}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-iepci-navy">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-iepci-gray-500">
                    {feature.description}
                  </p>
                </motion.div>
              </TiltCard>
            </ScrollReveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}
