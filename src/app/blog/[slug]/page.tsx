import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/floating-actions";
import { CTASection } from "@/components/home/cta-section";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { iepciImage } from "@/lib/images";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="pt-32">
      <article>
        <div className="relative h-[40vh] min-h-[300px] overflow-hidden bg-iepci-black">
          <Image
            src={iepciImage(post.image, 1920)}
            alt={post.title}
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="mx-auto max-w-3xl px-4 pb-12 lg:px-8">
              <Breadcrumbs
                items={[
                  { label: "Knowledge Center", href: "/blog" },
                  { label: post.title },
                ]}
              />
              <span className="rounded-full bg-iepci-blue px-3 py-1 text-xs font-medium text-white">
                {post.category}
              </span>
              <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                {post.title}
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-white/60">
                <span>{post.author}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
          <p className="text-lg leading-relaxed text-iepci-gray-500">
            {post.excerpt}
          </p>
          <div className="prose prose-lg mt-8 max-w-none text-iepci-gray-500">
            <p>
              At Indian Electric and Power Control, our engineering teams bring
              decades of hands-on experience across power systems, industrial
              automation, and energy management. This article explores key
              considerations and best practices that our project engineers
              apply on every engagement.
            </p>
            <p>
              Whether you are planning a substation upgrade, implementing SCADA
              for remote monitoring, or evaluating solar EPC options, our team
              is ready to provide technical guidance tailored to your specific
              operational requirements and regulatory environment.
            </p>
            <p>
              Contact our engineering team for a detailed consultation on your
              next project. We provide free initial assessments and detailed
              proposals without obligation.
            </p>
          </div>

          <Link
            href="/blog"
            className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-iepci-blue hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Knowledge Center
          </Link>
        </div>
      </article>

      <CTASection />
    </div>
  );
}
