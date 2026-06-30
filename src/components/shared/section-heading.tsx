"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TiltCard } from "@/components/effects/tilt-card";
import { iepciImage } from "@/lib/images";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-iepci-blue"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-iepci-navy"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-white/70" : "text-iepci-gray-500"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  image?: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  href,
  image,
}: ServiceCardProps) {
  return (
    <TiltCard maxTilt={10}>
      <motion.div
        className="group relative h-full overflow-hidden rounded-2xl border border-iepci-gray-200/60 bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
        style={{ transformStyle: "preserve-3d" }}
      >
        {image && (
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ transform: "translateZ(20px)" }}
          >
            <Image
              src={iepciImage(image, 600)}
              alt=""
              fill
              className="object-cover"
              sizes="400px"
            />
            <div className="absolute inset-0 bg-iepci-navy/90" />
          </div>
        )}
        <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-iepci-blue/10 text-iepci-blue transition-colors group-hover:bg-iepci-blue group-hover:text-white">
            {icon}
          </div>
          <h3 className="mb-2 text-lg font-semibold text-iepci-navy transition-colors group-hover:text-white">
            {title}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-iepci-gray-500 transition-colors group-hover:text-white/80">
            {description}
          </p>
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-sm font-medium text-iepci-blue transition-colors group-hover:text-iepci-accent"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </TiltCard>
  );
}
