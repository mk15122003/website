"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Zap,
  Factory,
  Sun,
  Cpu,
  Radio,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/constants";
import { images } from "@/lib/images";
import { services } from "@/data/services";
import { solutionPages } from "@/data/solution-pages";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Knowledge Center" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const solutionNavItems = solutionPages.map((p) => ({
  href: `/${p.slug}`,
  label: p.title.replace(" Solutions", "").replace("Industrial ", ""),
}));

const serviceIcons: Record<string, React.ReactNode> = {
  "epc-contracting": <Zap className="h-5 w-5" />,
  "industrial-automation": <Factory className="h-5 w-5" />,
  "solar-epc": <Sun className="h-5 w-5" />,
  "plc-programming": <Cpu className="h-5 w-5" />,
  scada: <Radio className="h-5 w-5" />,
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const darkHeroPaths = [
    "/",
    ...solutionPages.map((p) => `/${p.slug}`),
    "/solutions",
    "/about",
    "/projects",
    "/contact",
  ];
  const isHome = darkHeroPaths.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  const navLight = isHome && !scrolled;

  return (
    <>
      <div
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          navLight
            ? "bg-transparent"
            : scrolled
              ? "glass-light shadow-soft"
              : "bg-white/95 backdrop-blur-md"
        )}
      >
        <div className="border-b border-white/10 bg-black/90 py-2 text-center text-xs text-white/80">
          {company.oneStopTagline} — Serving {company.regionsServed} since{" "}
          {company.founded}
        </div>

        <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          <Link href="/" className="relative z-10 flex items-center gap-3">
            <Image
              src={images.logo}
              alt="IEPCI Logo"
              width={48}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                navLight
                  ? "text-white/90 hover:text-white"
                  : "text-iepci-dark hover:text-iepci-blue",
                pathname === "/" && "text-iepci-blue"
              )}
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  navLight
                    ? "text-white/90 hover:text-white"
                    : "text-iepci-dark hover:text-iepci-blue",
                  solutionPages.some((p) => pathname === `/${p.slug}`) &&
                    "text-iepci-blue"
                )}
              >
                Solutions <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 top-full z-50 mt-2 w-[680px] max-h-[70vh] -translate-x-1/2 overflow-y-auto rounded-2xl border border-iepci-gray-200 bg-white p-6 shadow-card"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="font-semibold text-iepci-navy">
                        Our Solutions
                      </h3>
                      <Link
                        href="/solutions"
                        className="text-sm text-iepci-blue hover:underline"
                      >
                        View All
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      {solutionNavItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="rounded-xl px-3 py-2.5 text-sm font-medium text-iepci-navy transition-colors hover:bg-iepci-gray-100 hover:text-iepci-blue"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  navLight
                    ? "text-white/90 hover:text-white"
                    : "text-iepci-dark hover:text-iepci-blue",
                  pathname === link.href && "text-iepci-blue"
                )}
              >
                {link.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  navLight
                    ? "text-white/90 hover:text-white"
                    : "text-iepci-dark hover:text-iepci-blue"
                )}
              >
                Services <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 top-full z-50 mt-2 w-[640px] -translate-x-1/2 rounded-2xl border border-iepci-gray-200 bg-white p-6 shadow-card"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="font-semibold text-iepci-navy">
                        Our Services
                      </h3>
                      <Link
                        href="/services"
                        className="text-sm text-iepci-blue hover:underline"
                      >
                        View All
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {services.slice(0, 8).map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-iepci-gray-100"
                        >
                          <div className="mt-0.5 text-iepci-blue">
                            {serviceIcons[service.slug] || (
                              <Zap className="h-5 w-5" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-iepci-navy">
                              {service.title}
                            </p>
                            <p className="line-clamp-1 text-xs text-iepci-gray-400">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                navLight
                  ? "text-white/90 hover:text-white"
                  : "text-iepci-dark hover:text-iepci-blue"
              )}
            >
              About
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={cn(
                "hidden rounded-lg p-2 transition-colors lg:flex",
                navLight
                  ? "text-white hover:bg-white/10"
                  : "text-iepci-dark hover:bg-iepci-gray-100"
              )}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <Button
              asChild
              variant={navLight ? "default" : "primary"}
              size="sm"
              className="hidden sm:inline-flex"
            >
              <Link href="/get-a-quote">Request Quote</Link>
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "rounded-lg p-2 lg:hidden",
                navLight ? "text-white" : "text-iepci-dark"
              )}
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </header>

        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-iepci-gray-200 bg-white px-4 py-4"
            >
              <input
                type="search"
                placeholder="Search services, projects, articles..."
                className="w-full rounded-xl border border-iepci-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-iepci-blue"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-40 bg-white pt-28 lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6">
              <Link
                href="/"
                className="rounded-xl px-4 py-3 text-lg font-medium text-iepci-navy hover:bg-iepci-gray-100"
              >
                Home
              </Link>
              <p className="px-4 pt-4 text-xs font-semibold uppercase tracking-wider text-iepci-gray-400">
                Solutions
              </p>
              {solutionNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-2.5 text-base font-medium text-iepci-navy hover:bg-iepci-gray-100"
                >
                  {item.label}
                </Link>
              ))}
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-lg font-medium text-iepci-navy hover:bg-iepci-gray-100"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/about"
                className="rounded-xl px-4 py-3 text-lg font-medium text-iepci-navy hover:bg-iepci-gray-100"
              >
                About
              </Link>
              <Link
                href="/services"
                className="rounded-xl px-4 py-3 text-lg font-medium text-iepci-navy hover:bg-iepci-gray-100"
              >
                Services
              </Link>
              <Button asChild className="mt-4">
                <Link href="/get-a-quote">Request Quote</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
