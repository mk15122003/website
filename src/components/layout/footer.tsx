import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/constants";
import { images } from "@/lib/images";
import { services } from "@/data/services";
import { solutionPages } from "@/data/solution-pages";

const featuredSolutionSlugs = [
  "electrical",
  "substation",
  "automation",
  "instrumentation",
  "package-substation",
  "hydro-powerplant",
  "solar-system",
  "fuji-electric",
];

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Projects" },
    { href: "/industries", label: "Industries" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Knowledge Center" },
    { href: "/contact", label: "Contact" },
  ],
  solutions: featuredSolutionSlugs
    .map((slug) => solutionPages.find((p) => p.slug === slug))
    .filter((p): p is (typeof solutionPages)[number] => Boolean(p))
    .map((p) => ({
      href: `/${p.slug}`,
      label: p.title.replace(" Solutions", ""),
    })),
  services: services.slice(0, 6).map((s) => ({
    href: `/services/${s.slug}`,
    label: s.title,
  })),
};

function LinkColumn({
  title,
  links,
  footer,
}: {
  title: string;
  links: { href: string; label: string }[];
  footer?: { href: string; label: string };
}) {
  return (
    <div>
      <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h4>
      <ul className="space-y-3 text-sm text-white/60">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="transition-colors hover:text-iepci-accent">
              {l.label}
            </Link>
          </li>
        ))}
        {footer && (
          <li>
            <Link
              href={footer.href}
              className="inline-flex items-center gap-1 font-medium text-iepci-accent hover:underline"
            >
              {footer.label} <ArrowRight className="h-3 w-3" />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-iepci-navy text-white">
      {/* Newsletter band */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Stay ahead with engineering insights
            </h3>
            <p className="mt-1 text-sm text-white/60">
              Project updates and industry know-how from the IEPCI group — no spam.
            </p>
          </div>
          <form className="flex w-full max-w-md gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
            />
            <Button variant="primary" size="sm" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl bg-white px-4 py-3 shadow-soft"
            >
              <Image
                src={images.logo}
                alt={company.name}
                width={150}
                height={44}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {company.oneStopTagline}. Delivering mission-critical electrical,
              power, and automation solutions since {company.founded}.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-white/70">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2.5 hover:text-iepci-accent"
              >
                <Mail className="h-4 w-4 shrink-0 text-iepci-accent" />
                {company.email}
              </a>
              <p className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-iepci-accent" />
                <span>
                  India +91 7859984453 · UAE +971 559973252 · UK +44 7487535352
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-iepci-accent" />
                {company.locations.join(" · ")}
              </p>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-2">
            <LinkColumn title="Company" links={footerLinks.company} />
          </div>
          <div className="lg:col-span-3">
            <LinkColumn
              title="Solutions"
              links={footerLinks.solutions}
              footer={{ href: "/solutions", label: "View all solutions" }}
            />
          </div>
          <div className="lg:col-span-3">
            <LinkColumn
              title="Services"
              links={footerLinks.services}
              footer={{ href: "/services", label: "All services" }}
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {Object.entries(company.social).map(([name, url]) => (
              <a
                key={name}
                href={url}
                className="capitalize text-white/50 transition-colors hover:text-iepci-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
