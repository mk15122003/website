import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/floating-actions";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/home/cta-section";
import { services, getServiceBySlug } from "@/data/services";
import { iepciImage } from "@/lib/images";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="pt-32">
      <section className="relative overflow-hidden bg-iepci-black py-24">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={iepciImage(service.image, 1920)}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-iepci-blue/20 text-iepci-accent backdrop-blur-sm">
            <service.icon className="h-7 w-7" />
          </div>
          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            {service.description}
          </p>
          <Button asChild className="mt-8">
            <Link href="/get-a-quote">
              Request Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-iepci-navy">
                What We Deliver
              </h2>
              <ul className="mt-6 space-y-4">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-iepci-blue" />
                    <span className="text-iepci-gray-500">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
              <Image
                src={iepciImage(service.image, 1200)}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-iepci-gray-100/50 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-iepci-navy">
            Related Services
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-xl bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
              >
                <s.icon className="mb-3 h-6 w-6 text-iepci-blue" />
                <h3 className="font-semibold text-iepci-navy">{s.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-iepci-gray-400">
                  {s.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
