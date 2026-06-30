import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/constants";
import { images } from "@/lib/images";
import { services } from "@/data/services";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Projects" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Knowledge Center" },
  ],
  services: services.slice(0, 6).map((s) => ({
    href: `/services/${s.slug}`,
    label: s.title,
  })),
  support: [
    { href: "/contact", label: "Contact" },
    { href: "/get-a-quote", label: "Get a Quote" },
    { href: "/industries", label: "Industries" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-iepci-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image
              src={images.logo}
              alt="IEPCI"
              width={56}
              height={56}
              className="mb-4 h-12 w-auto brightness-0 invert"
            />
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/70">
              One stop solution for all your Power and Automation needs.
              Delivering mission-critical electrical solutions across India,
              UAE, and UK since 2003.
            </p>
            <div className="space-y-3 text-sm text-white/80">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 hover:text-iepci-accent"
              >
                <Mail className="h-4 w-4" /> {company.email}
              </a>
              {company.phones.map((p) => (
                <a
                  key={p.number}
                  href={`tel:${p.number.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 hover:text-iepci-accent"
                >
                  <Phone className="h-4 w-4" /> {p.label}: {p.number}
                </a>
              ))}
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {company.locations.join(" · ")}
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {footerLinks.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-iepci-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {footerLinks.services.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-iepci-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Newsletter</h4>
            <p className="mb-4 text-sm text-white/70">
              Get engineering insights and project updates.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
              />
              <Button variant="primary" size="sm" type="submit">
                Join
              </Button>
            </form>
            <div className="mt-6 flex gap-4">
              {Object.entries(company.social).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  className="text-sm capitalize text-white/60 hover:text-iepci-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
