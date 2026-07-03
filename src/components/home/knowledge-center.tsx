"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { blogPosts } from "@/data/blog";
import { iepciImage } from "@/lib/images";

export function KnowledgeCenter() {
  return (
    <section className="py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          label="Knowledge Center"
          title="Latest Engineering Insights"
          description="Expert articles on power systems, automation, SCADA, renewable energy, and electrical safety."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-2xl border border-iepci-gray-200/60 bg-white shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={iepciImage(post.image, 600)}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="400px"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-iepci-blue px-3 py-1 text-xs font-medium text-white">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2 text-xs text-iepci-gray-400">
                    <Clock className="h-3 w-3" /> {post.readTime} read
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-iepci-navy group-hover:text-iepci-blue">
                    {post.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-iepci-gray-500">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-iepci-blue">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="text-sm font-medium text-iepci-blue hover:underline"
          >
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
