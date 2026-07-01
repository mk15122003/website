import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/floating-actions";
import { CTASection } from "@/components/home/cta-section";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/effects/tilt-card";
import { ScrollReveal3D } from "@/components/effects/scroll-reveal-3d";
import {
  solutionPages,
  getSolutionPage,
  type SolutionPage,
} from "@/data/solution-pages";
import { iepciImage } from "@/lib/images";

export function generateSolutionStaticParams() {
  return solutionPages.map((p) => ({ slug: p.slug }));
}

export function generateSolutionMetadata(slug: string): Metadata {
  const page = getSolutionPage(slug);
  if (!page) return { title: "Not Found" };
  return {
    title: page.title,
    description: page.description,
  };
}

export function SolutionPageView({ page }: { page: SolutionPage }) {
  return (
    <div className="pt-32">
      <section className="relative overflow-hidden bg-iepci-black py-24">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={iepciImage(page.image, 1920)}
            alt={page.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: page.title }]} />
          {page.heroLabel && (
            <span className="mb-3 inline-block rounded-full bg-iepci-blue/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-iepci-accent">
              {page.heroLabel}
            </span>
          )}
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {page.title}
          </h1>
          <p className="mt-2 text-lg text-iepci-accent">{page.subtitle}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {page.description}
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link href="/get-a-quote">
              Submit Inquiry <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {page.brands && page.brands.length > 0 && (
        <section className="border-b border-iepci-gray-200 bg-white py-8">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <p className="mb-4 text-center text-sm font-medium text-iepci-gray-400">
              Authorized brands & OEM partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {page.brands.map((brand) => (
                <span
                  key={brand}
                  className="text-lg font-semibold text-iepci-navy/30"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24" style={{ perspective: "1200px" }}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {page.sections.map((section, i) => (
              <ScrollReveal3D key={section.title} delay={i * 0.06} rotateX={14}>
                <TiltCard maxTilt={6}>
                  <div className="h-full rounded-2xl border border-iepci-gray-200/60 bg-white p-8 shadow-soft">
                    <h2 className="text-xl font-bold text-iepci-navy">
                      {section.title}
                    </h2>
                    <p className="mt-2 text-sm text-iepci-gray-500">
                      {section.description}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-iepci-gray-500"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-iepci-blue" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/get-a-quote"
                      className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-iepci-blue hover:underline"
                    >
                      Submit Inquiry <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
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

export function createSolutionPage(slug: string) {
  const page = getSolutionPage(slug);
  if (!page) notFound();
  return <SolutionPageView page={page} />;
}
