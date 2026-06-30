"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/data/projects";
import { iepciImage } from "@/lib/images";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  const [filter, setFilter] = useState("All");
  const industries = ["All", ...new Set(projects.map((p) => p.industry))];

  const filtered =
    filter === "All"
      ? projects.slice(0, 6)
      : projects.filter((p) => p.industry === filter).slice(0, 6);

  return (
    <section className="bg-iepci-navy py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          description="Real projects. Real impact. Delivering engineering excellence across mining, infrastructure, and industrial sectors."
          light
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setFilter(ind)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                filter === ind
                  ? "bg-iepci-blue text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              )}
            >
              {ind}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={iepciImage(project.image, 800)}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="400px"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-iepci-blue px-3 py-1 text-xs font-medium text-white">
                    {project.voltage}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1 text-sm text-white/60">
                    <MapPin className="h-3 w-3" /> {project.location}
                  </p>
                  <p className="mt-3 line-clamp-2 text-sm text-white/70">
                    {project.scope}
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-iepci-accent hover:underline"
                  >
                    View Case Study <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
