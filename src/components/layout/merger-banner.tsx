"use client";

import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";
import { company } from "@/lib/constants";

export function MergerBanner() {
  return (
    <div className="border-b border-iepci-blue/20 bg-gradient-to-r from-iepci-navy via-iepci-blue/90 to-iepci-navy py-2.5 text-center text-xs text-white sm:text-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-4">
        <Building2 className="hidden h-4 w-4 sm:inline" />
        <span>
          <strong>Proton Corporation Dubai</strong> is now part of{" "}
          <strong>{company.shortName}</strong> — serving {company.regionsServed}
        </span>
        <Link
          href="/about"
          className="inline-flex items-center gap-1 font-medium text-iepci-accent hover:underline"
        >
          Learn more <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
