"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/data/projects";
import { iepciImage } from "@/lib/images";

export function HorizontalScrollProjects() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const displayProjects = projects.slice(0, 6);

  const updateEdges = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  const scrollByCards = useCallback((dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = 32;
    const amount = card ? card.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }, []);

  return (
    <section className="relative overflow-hidden bg-iepci-navy">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(46,91,255,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="Portfolio"
            title="Featured Projects"
            description="Real projects delivering real impact across mining, infrastructure, and industrial sectors — browse at your own pace."
            align="left"
            light
          />
          <div className="hidden shrink-0 items-center gap-3 md:flex">
            <button
              type="button"
              aria-label="Previous projects"
              onClick={() => scrollByCards(-1)}
              disabled={atStart}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-iepci-accent hover:text-iepci-accent disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next projects"
              onClick={() => scrollByCards(1)}
              disabled={atEnd}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-iepci-accent hover:text-iepci-accent disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onScroll={updateEdges}
        className="snap-x snap-mandatory overflow-x-auto scroll-smooth pb-14 lg:pb-20 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div
          className="flex gap-5 px-4 sm:gap-8 lg:px-8"
          style={{ width: "max-content" }}
        >
          {displayProjects.map((project) => (
            <div
              key={project.slug}
              data-card
              className="group w-[82vw] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md sm:w-[420px]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={iepciImage(project.image, 800)}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-iepci-navy/80 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-iepci-blue px-3 py-1 text-xs font-medium text-white">
                  {project.voltage}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-iepci-accent">
                  {project.industry}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-white">
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
            </div>
          ))}

          <div className="flex w-[280px] shrink-0 snap-start items-center justify-center">
            <Link
              href="/projects"
              className="flex h-full min-h-[200px] w-full flex-col items-center justify-center rounded-3xl border border-dashed border-white/30 p-8 text-center transition-colors hover:border-iepci-accent hover:bg-white/5"
            >
              <span className="text-lg font-semibold text-white">
                View All Projects
              </span>
              <ArrowRight className="mt-2 h-6 w-6 text-iepci-accent" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
