import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Briefcase } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/floating-actions";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/constants";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join ${company.name} and build your career in electrical engineering and industrial automation.`,
};

const openings = [
  {
    title: "Senior Electrical Design Engineer",
    location: "India / UAE",
    type: "Full-time",
    department: "Engineering",
  },
  {
    title: "SCADA & Automation Engineer",
    location: "Tanzania / UAE",
    type: "Full-time",
    department: "Automation",
  },
  {
    title: "Project Manager – EPC",
    location: "UK / India",
    type: "Full-time",
    department: "Projects",
  },
  {
    title: "Commissioning Engineer",
    location: "Africa / Middle East",
    type: "Contract",
    department: "Field Services",
  },
  {
    title: "PLC Programmer",
    location: "India",
    type: "Full-time",
    department: "Automation",
  },
  {
    title: "Business Development Manager",
    location: "UAE / UK",
    type: "Full-time",
    department: "Sales",
  },
];

export default function CareersPage() {
  return (
    <div className="pt-32">
      <section className="relative overflow-hidden bg-iepci-black py-20">
        <div className="absolute inset-0 opacity-30">
          <Image src={images.automation} alt="" fill className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Careers" }]} />
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Build Your Career at {company.shortName}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Join a global team of engineers delivering mission-critical power
            and automation projects across 15+ countries.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-iepci-navy">
            Open Positions
          </h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="flex flex-col justify-between gap-4 rounded-2xl border border-iepci-gray-200/60 bg-white p-6 shadow-soft sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="text-lg font-semibold text-iepci-navy">
                    {job.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-iepci-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" /> {job.department}
                    </span>
                  </div>
                </div>
                <Button asChild variant="outline" size="sm">
                  <Link href="/contact">Apply Now</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
