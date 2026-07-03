"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { solutionPages } from "@/data/solution-pages";
import { iepciImage } from "@/lib/images";

const orbitItems = solutionPages.slice(0, 8);

export function SolutionsOrbit() {
  const count = orbitItems.length;
  const radius = 460;
  const angle = 360 / count;

  return (
    <section className="relative overflow-hidden bg-iepci-black py-16 md:py-28">
      {/* aurora glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-aurora absolute -left-32 top-10 h-96 w-96 rounded-full bg-iepci-blue/30 blur-[120px]" />
        <div className="animate-aurora absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-iepci-accent/25 blur-[120px] [animation-delay:-7s]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-widest text-iepci-accent"
        >
          One Group · One Stop
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-3 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
        >
          A Universe of <span className="text-shimmer">Engineering Solutions</span>
        </motion.h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/60">
          Proton Corporation Dubai and IEPCI — now one team. Explore the full
          spectrum of capabilities orbiting around your project.
        </p>

        {/* 3D rotating ring */}
        <div className="orbit-stage mt-20 hidden h-[420px] md:block">
          <div
            className="orbit-ring relative mx-auto h-[280px]"
            style={{ width: 1 }}
          >
            {orbitItems.map((page, i) => (
              <div
                key={page.slug}
                className="orbit-card absolute left-1/2 top-0"
                style={{
                  transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`,
                }}
              >
                <Link
                  href={`/${page.slug}`}
                  className="group relative -ml-[130px] block h-[280px] w-[260px] overflow-hidden rounded-2xl border border-white/10 shadow-glass"
                >
                  <Image
                    src={iepciImage(page.image, 520)}
                    alt={page.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="260px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-iepci-black via-iepci-black/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                    <h3 className="text-lg font-semibold text-white">
                      {page.title}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-iepci-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Discover <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-iepci-accent/0 transition group-hover:ring-iepci-accent/60" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile fallback grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:hidden">
          {orbitItems.map((page) => (
            <Link
              key={page.slug}
              href={`/${page.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={iepciImage(page.image, 360)}
                alt={page.title}
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-iepci-black to-transparent" />
              <h3 className="absolute inset-x-0 bottom-0 p-3 text-left text-sm font-semibold text-white">
                {page.title}
              </h3>
            </Link>
          ))}
        </div>

        <div className="mt-14">
          <Link
            href="/solutions"
            className="animate-glow inline-flex items-center gap-2 rounded-full bg-iepci-blue px-7 py-3 text-sm font-semibold text-white transition hover:bg-iepci-blue-dark"
          >
            Explore All Solutions <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
