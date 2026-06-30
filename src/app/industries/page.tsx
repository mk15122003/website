import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/floating-actions";
import { CTASection } from "@/components/home/cta-section";
import { industries } from "@/data/industries";
import { iepciImage, images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Electrical EPC and automation solutions for mining, manufacturing, oil & gas, renewable energy, and more.",
};

export default function IndustriesPage() {
  return (
    <div className="pt-32">
      <section className="relative overflow-hidden bg-iepci-black py-20">
        <div className="absolute inset-0 opacity-30">
          <Image src={images.industrial} alt="" fill className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Industries" }]} />
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Industries We Serve
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Specialized electrical and automation solutions tailored to the
            unique requirements of each industrial sector.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {industries.map((industry) => (
              <div
                key={industry.slug}
                className="group flex overflow-hidden rounded-2xl border border-iepci-gray-200/60 bg-white shadow-soft"
              >
                <div className="relative w-2/5 shrink-0">
                  <Image
                    src={iepciImage(industry.image, 600)}
                    alt={industry.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-iepci-blue/10 text-iepci-blue">
                    <industry.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-iepci-navy">
                    {industry.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-iepci-gray-500">
                    {industry.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 text-sm font-medium text-iepci-blue hover:underline"
                  >
                    Discuss your project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
