import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/floating-actions";
import { ScrollReveal3D } from "@/components/effects/scroll-reveal-3d";
import { TiltCard } from "@/components/effects/tilt-card";
import { CTASection } from "@/components/home/cta-section";
import { solutionPages } from "@/data/solution-pages";
import { iepciImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Electrical, substation, automation, instrumentation, package substation, and hydropower solutions from IEPCI.",
};

export default function SolutionsHubPage() {
  return (
    <div className="pt-32">
      <section className="relative overflow-hidden bg-iepci-black py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={iepciImage("homepage-9YhJ9BInKPkvAR35.jpg", 1920)}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Solutions" }]} />
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Our Solutions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            One stop solution for all your Industrial, Power & Automation
            needs — serving UAE, Africa, India and UK since 2003.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {solutionPages.map((page, i) => (
              <ScrollReveal3D key={page.slug} delay={i * 0.05}>
                <TiltCard maxTilt={8}>
                  <Link
                    href={`/${page.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-iepci-gray-200/60 bg-white shadow-soft transition-shadow hover:shadow-card"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={iepciImage(page.image, 800)}
                        alt={page.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-iepci-navy/80 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-iepci-navy group-hover:text-iepci-blue">
                        {page.title}
                      </h2>
                      <p className="mt-2 line-clamp-2 text-sm text-iepci-gray-500">
                        {page.subtitle}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-iepci-blue">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </TiltCard>
              </ScrollReveal3D>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
