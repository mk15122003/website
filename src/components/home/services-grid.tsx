"use client";

import Link from "next/link";
import { ScrollReveal3D } from "@/components/effects/scroll-reveal-3d";
import { SectionHeading, ServiceCard } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <section
      className="bg-iepci-gray-100/50 py-14 md:py-24"
      style={{ perspective: "1200px" }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal3D>
          <SectionHeading
            label="Our Expertise"
            title="Complete Industrial, Power & Automation Solutions"
            description="We offer comprehensive services for power plants, oil and gas, commercial, and industrial clients worldwide."
          />
        </ScrollReveal3D>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => (
            <ScrollReveal3D key={service.slug} delay={i * 0.04} rotateX={14}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={<service.icon className="h-6 w-6" />}
                href={`/services/${service.slug}`}
                image={service.image}
              />
            </ScrollReveal3D>
          ))}
        </div>

        <ScrollReveal3D delay={0.2}>
          <div className="mt-12 text-center">
            <Button asChild variant="primary" size="lg">
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </ScrollReveal3D>
      </div>
    </section>
  );
}
