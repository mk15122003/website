"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/data/projects";
import { iepciImage } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger);

export function HorizontalScrollProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const displayProjects = projects.slice(0, 6);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const scrollWidth = track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => tween.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-iepci-navy"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(46,91,255,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          description="Scroll through our engineering portfolio — real projects delivering real impact across mining, infrastructure, and industrial sectors."
          light
        />
      </div>

      <div
        ref={trackRef}
        className="flex gap-8 px-4 pb-24 lg:px-8"
        style={{ width: "max-content" }}
      >
        {displayProjects.map((project, i) => (
          <div
            key={project.slug}
            className="group w-[85vw] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md sm:w-[420px]"
            style={{
              transform: `perspective(1200px) rotateY(${i % 2 === 0 ? -2 : 2}deg)`,
            }}
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

        <div className="flex w-[300px] shrink-0 items-center justify-center">
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
    </section>
  );
}
