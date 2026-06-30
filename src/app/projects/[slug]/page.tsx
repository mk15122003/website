import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, MapPin, Calendar, DollarSign } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/floating-actions";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/home/cta-section";
import { projects, getProjectBySlug } from "@/data/projects";
import { iepciImage } from "@/lib/images";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return { title: project.title, description: project.scope };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="pt-32">
      <section className="relative overflow-hidden bg-iepci-black py-24">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={iepciImage(project.image, 1920)}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Projects", href: "/projects" },
              { label: project.title },
            ]}
          />
          <span className="rounded-full bg-iepci-blue px-3 py-1 text-xs font-medium text-white">
            {project.industry} · {project.voltage}
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-2 flex items-center gap-1 text-white/70">
            <MapPin className="h-4 w-4" /> {project.location} · Client:{" "}
            {project.client}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-iepci-gray-200 bg-white p-6 shadow-soft">
              <DollarSign className="mb-2 h-6 w-6 text-iepci-blue" />
              <p className="text-sm text-iepci-gray-400">Project Value</p>
              <p className="text-xl font-bold text-iepci-navy">
                {project.value}
              </p>
            </div>
            <div className="rounded-2xl border border-iepci-gray-200 bg-white p-6 shadow-soft">
              <Calendar className="mb-2 h-6 w-6 text-iepci-blue" />
              <p className="text-sm text-iepci-gray-400">Timeline</p>
              <p className="text-xl font-bold text-iepci-navy">
                {project.timeline}
              </p>
            </div>
            <div className="rounded-2xl border border-iepci-gray-200 bg-white p-6 shadow-soft">
              <MapPin className="mb-2 h-6 w-6 text-iepci-blue" />
              <p className="text-sm text-iepci-gray-400">Location</p>
              <p className="text-xl font-bold text-iepci-navy">
                {project.location}
              </p>
            </div>
          </div>

          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-iepci-navy">
                  The Challenge
                </h2>
                <p className="mt-4 leading-relaxed text-iepci-gray-500">
                  {project.client} required a comprehensive upgrade to their
                  power infrastructure to meet growing operational demands while
                  maintaining safety and reliability standards.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-iepci-navy">
                  Our Solution
                </h2>
                <p className="mt-4 leading-relaxed text-iepci-gray-500">
                  {project.scope}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-iepci-navy">Execution</h2>
                <p className="mt-4 leading-relaxed text-iepci-gray-500">
                  IEPCI managed the complete project lifecycle including
                  detailed engineering, equipment procurement from OEM partners,
                  professional installation, comprehensive testing, and final
                  commissioning with full documentation.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-iepci-navy">Results</h2>
                <ul className="mt-4 space-y-3">
                  {project.results.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-iepci-blue" />
                      <span className="text-iepci-gray-500">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="sticky top-32 rounded-2xl border border-iepci-gray-200 bg-white p-6 shadow-soft">
                <h3 className="font-semibold text-iepci-navy">
                  Technologies Used
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-iepci-blue/10 px-3 py-1 text-xs font-medium text-iepci-blue"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Button asChild className="mt-6 w-full" variant="primary">
                  <Link href="/get-a-quote">
                    Start Similar Project <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-iepci-navy">
              Project Gallery
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((img) => (
                <div
                  key={img}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={iepciImage(img, 800)}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
