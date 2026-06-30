import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Users, Globe } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/floating-actions";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { CTASection } from "@/components/home/cta-section";
import { company } from "@/lib/constants";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${company.name} - powering industry with electrical, automation, and energy solutions since 2003.`,
};

const leadership = [
  {
    name: "Rajesh Kumar",
    role: "Managing Director",
    bio: "25+ years in electrical EPC and power systems engineering across Africa and Middle East.",
  },
  {
    name: "Ahmed Al-Rashid",
    role: "Head of Automation",
    bio: "Expert in PLC, SCADA, and DCS integration with Siemens and ABB platforms.",
  },
  {
    name: "David Thompson",
    role: "UK Operations Director",
    bio: "Leading European projects with focus on renewable energy and power quality.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32">
      <section className="relative overflow-hidden bg-iepci-black py-20">
        <div className="absolute inset-0 opacity-30">
          <Image src={images.headerBg} alt="" fill className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "About" }]} />
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            About {company.shortName}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            {company.tagline}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
                <Image
                  src={images.automation}
                  alt="IEPCI team at work"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <div>
              <SectionHeading
                label="Our Story"
                title="Engineering Excellence Since 2003"
                description="Indian Electric and Power Control Inc was founded with a vision to deliver world-class electrical and automation solutions to industries worldwide. From our headquarters spanning India, UAE, and UK, we have completed over 250 projects across mining, manufacturing, infrastructure, and renewable energy sectors."
                align="left"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-iepci-gray-100/50 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="rounded-2xl bg-white p-8 shadow-soft">
                <Target className="mb-4 h-10 w-10 text-iepci-blue" />
                <h3 className="text-xl font-bold text-iepci-navy">Mission</h3>
                <p className="mt-3 text-iepci-gray-500">
                  To deliver safe, reliable, and innovative power and automation
                  solutions that maximize uptime, protection, and performance
                  for our industrial clients worldwide.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl bg-white p-8 shadow-soft">
                <Eye className="mb-4 h-10 w-10 text-iepci-blue" />
                <h3 className="text-xl font-bold text-iepci-navy">Vision</h3>
                <p className="mt-3 text-iepci-gray-500">
                  To be the most trusted EPC partner for mission-critical
                  electrical infrastructure, recognized for engineering
                  excellence, safety leadership, and turnkey delivery.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            label="Leadership"
            title="Our Leadership Team"
            description="Experienced engineers and business leaders driving innovation in power and automation."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((leader, i) => (
              <FadeIn key={leader.name} delay={i * 0.1}>
                <div className="rounded-2xl border border-iepci-gray-200/60 bg-white p-8 shadow-soft">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-iepci-blue/10">
                    <Users className="h-8 w-8 text-iepci-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-iepci-navy">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-medium text-iepci-blue">
                    {leader.role}
                  </p>
                  <p className="mt-3 text-sm text-iepci-gray-500">
                    {leader.bio}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-iepci-navy py-24">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <Globe className="mx-auto mb-4 h-12 w-12 text-iepci-accent" />
          <h2 className="text-3xl font-bold text-white">Global Presence</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Operating across {company.locations.join(", ")} with project
            experience in 15+ countries across Africa, Middle East, Europe, and
            Asia.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {company.locations.map((loc) => (
              <div
                key={loc}
                className="glass rounded-2xl px-8 py-4 text-lg font-semibold text-white"
              >
                {loc}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
