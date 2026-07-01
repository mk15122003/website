import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Users, Globe, Handshake, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/floating-actions";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { CTASection } from "@/components/home/cta-section";
import { company, partnerships } from "@/lib/constants";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description: `${company.name} — ${company.mergerNote}`,
};

const leadership = [
  {
    name: "Rajesh Kumar",
    role: "Managing Director",
    bio: "25+ years in electrical EPC and power systems engineering across Africa and the Middle East.",
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
          <span className="mb-3 inline-block rounded-full bg-iepci-blue/20 px-3 py-1 text-xs font-semibold text-iepci-accent">
            {company.formerName} + {company.shortName}
          </span>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            About {company.shortName}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            {company.mergerNote}
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
                  alt="IEPCI engineering team"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <div>
              <SectionHeading
                label="Our Story"
                title={company.oneStopTagline}
                description={`${company.name} was founded in ${company.founded} with a vision to deliver world-class electrical and automation solutions. Following the integration of ${company.formerName}, our group now serves ${company.regionsServed} with a combined team of experienced technocrats and engineering management. ${company.productsServicesIntro}`}
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
                <p className="mt-3 text-iepci-gray-500">{company.mission}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl bg-white p-8 shadow-soft">
                <Eye className="mb-4 h-10 w-10 text-iepci-blue" />
                <h3 className="text-xl font-bold text-iepci-navy">Vision</h3>
                <p className="mt-3 text-iepci-gray-500">{company.vision}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            label="Industries"
            title="Industrial Segments We Serve"
            description="Our combined group delivers projects across a wide range of industrial and infrastructure sectors."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {company.industrialSegments.map((segment) => (
              <span
                key={segment}
                className="rounded-full border border-iepci-gray-200 bg-white px-4 py-2 text-sm font-medium text-iepci-navy shadow-soft"
              >
                {segment}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-iepci-navy py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            label="Partnerships"
            title="Strategic Associations"
            description="Key partnerships that extend our product range and regional reach across the Gulf, Africa, and India."
            light
          />
          <div className="grid gap-8 md:grid-cols-2">
            {partnerships.map((partner) => (
              <div
                key={partner.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <Handshake className="mb-4 h-10 w-10 text-iepci-accent" />
                <h3 className="text-xl font-semibold text-white">
                  {partner.name}
                </h3>
                <p className="mt-1 text-sm text-iepci-accent">{partner.region}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {partner.description}
                </p>
                <ul className="mt-4 space-y-1">
                  {partner.services.map((s) => (
                    <li key={s} className="text-sm text-white/60">
                      • {s}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${partner.slug}`}
                  className="mt-4 inline-block text-sm font-medium text-iepci-accent hover:underline"
                >
                  View solutions →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            label="Innovation"
            title="Coming Soon"
            description="Expanding our capabilities into next-generation engineering technologies."
          />
          <div className="flex flex-wrap justify-center gap-4">
            {company.comingSoon.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-2xl border border-iepci-blue/20 bg-iepci-blue/5 px-6 py-4"
              >
                <Sparkles className="h-5 w-5 text-iepci-blue" />
                <span className="font-medium text-iepci-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-iepci-gray-100/50 py-24">
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
            Operating across {company.locations.join(", ")} with offices in
            Vadodara (India), Business Bay (Dubai), and the United Kingdom.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {company.offices.map((office) => (
              <div
                key={office.name}
                className="glass rounded-2xl p-6 text-left text-white"
              >
                <p className="font-semibold">{office.name}</p>
                {"address" in office && office.address && (
                  <p className="mt-2 text-sm text-white/60">{office.address}</p>
                )}
                {"email" in office && office.email && (
                  <a
                    href={`mailto:${office.email}`}
                    className="mt-2 block text-sm text-iepci-accent hover:underline"
                  >
                    {office.email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
