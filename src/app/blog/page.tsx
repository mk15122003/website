import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/floating-actions";
import { blogPosts } from "@/data/blog";
import { iepciImage, images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Knowledge Center",
  description:
    "Expert articles on power systems, automation, SCADA, renewable energy, and electrical safety.",
};

const categories = [
  "All",
  "Power Systems",
  "Automation",
  "SCADA",
  "Renewable Energy",
  "Electrical Safety",
];

export default function BlogPage() {
  return (
    <div className="pt-32">
      <section className="relative overflow-hidden bg-iepci-black py-20">
        <div className="absolute inset-0 opacity-30">
          <Image src={images.powerLines} alt="" fill className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Knowledge Center" }]} />
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Knowledge Center
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Engineering insights, technical guides, and industry best practices
            from the IEPCI team.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full bg-iepci-gray-100 px-4 py-2 text-sm font-medium text-iepci-gray-500"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-2xl border border-iepci-gray-200/60 bg-white shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={iepciImage(post.image, 600)}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-iepci-blue px-3 py-1 text-xs font-medium text-white">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2 text-xs text-iepci-gray-400">
                    <Clock className="h-3 w-3" /> {post.readTime} ·{" "}
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <h2 className="text-lg font-semibold text-iepci-navy group-hover:text-iepci-blue">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm text-iepci-gray-500">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
