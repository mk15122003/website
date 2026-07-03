"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal3D } from "@/components/effects/scroll-reveal-3d";
import { TiltCard } from "@/components/effects/tilt-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { solutionPages } from "@/data/solution-pages";
import { iepciImage } from "@/lib/images";

export function SolutionsShowcase() {
  return (
    <section
      className="hidden bg-white py-14 md:block md:py-24"
      style={{ perspective: "1200px" }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal3D>
          <SectionHeading
            label="Solutions"
            title="Complete Industrial, Power & Automation Solutions"
            description="Comprehensive services for power plants, oil and gas, commercial, and industrial clients — from electrical panels to package substations and hydropower."
          />
        </ScrollReveal3D>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {solutionPages.map((page, i) => (
            <ScrollReveal3D key={page.slug} delay={i * 0.04} rotateX={12}>
              <TiltCard maxTilt={8}>
                <Link
                  href={`/${page.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-iepci-gray-200/60 bg-white shadow-soft transition-shadow hover:shadow-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={iepciImage(page.image, 600)}
                      alt={page.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-iepci-navy/70 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white">
                      {page.title}
                    </h3>
                  </div>
                  <div className="p-4">
                    <p className="line-clamp-2 text-sm text-iepci-gray-500">
                      {page.subtitle}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-iepci-blue">
                      Learn More <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </ScrollReveal3D>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/solutions"
            className="text-sm font-medium text-iepci-blue hover:underline"
          >
            View All Solutions →
          </Link>
        </div>
      </div>
    </section>
  );
}
