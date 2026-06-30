import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/floating-actions";
import { ServiceCard } from "@/components/shared/section-heading";
import { services } from "@/data/services";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Complete electrical EPC, substations, industrial automation, SCADA, solar, and testing services.",
};

export default function ServicesPage() {
  return (
    <div className="pt-32">
      <section className="relative overflow-hidden bg-iepci-black py-20">
        <div className="absolute inset-0 opacity-30">
          <Image src={images.switchgear} alt="" fill className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Comprehensive electrical, power, and automation solutions from
            engineering through commissioning and support.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                icon={<service.icon className="h-6 w-6" />}
                href={`/services/${service.slug}`}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
