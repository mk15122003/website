"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/floating-actions";
import { projects, projectFilters } from "@/data/projects";
import { iepciImage, images } from "@/lib/images";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [industry, setIndustry] = useState("All");
  const [country, setCountry] = useState("All");
  const [voltage, setVoltage] = useState("All");
  const [year, setYear] = useState("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (industry !== "All" && p.industry !== industry) return false;
      if (country !== "All" && p.country !== country) return false;
      if (voltage !== "All" && p.voltage !== voltage) return false;
      if (year !== "All" && p.year !== Number(year)) return false;
      return true;
    });
  }, [industry, country, voltage, year]);

  const FilterBtn = ({
    value,
    current,
    onChange,
    label,
  }: {
    value: string;
    current: string;
    onChange: (v: string) => void;
    label: string;
  }) => (
    <button
      onClick={() => onChange(value)}
      className={cn(
        "rounded-full px-3 py-1.5 text-xs font-medium transition-all",
        current === value
          ? "bg-iepci-blue text-white"
          : "bg-iepci-gray-100 text-iepci-gray-500 hover:bg-iepci-gray-200"
      )}
    >
      {label}
    </button>
  );

  return (
    <div className="pt-32">
      <section className="relative overflow-hidden bg-iepci-black py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={images.containerisedSubstation}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Projects" }]} />
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Our Projects
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Real projects. Real impact. Explore our portfolio of electrical EPC
            and automation projects worldwide.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="mr-2 self-center text-sm font-medium text-iepci-navy">
                Industry:
              </span>
              <FilterBtn
                value="All"
                current={industry}
                onChange={setIndustry}
                label="All"
              />
              {projectFilters.industries.map((i) => (
                <FilterBtn
                  key={i}
                  value={i}
                  current={industry}
                  onChange={setIndustry}
                  label={i}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="mr-2 self-center text-sm font-medium text-iepci-navy">
                Country:
              </span>
              <FilterBtn
                value="All"
                current={country}
                onChange={setCountry}
                label="All"
              />
              {projectFilters.countries.map((c) => (
                <FilterBtn
                  key={c}
                  value={c}
                  current={country}
                  onChange={setCountry}
                  label={c}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="mr-2 self-center text-sm font-medium text-iepci-navy">
                Voltage:
              </span>
              <FilterBtn
                value="All"
                current={voltage}
                onChange={setVoltage}
                label="All"
              />
              {projectFilters.voltages.map((v) => (
                <FilterBtn
                  key={v}
                  value={v}
                  current={voltage}
                  onChange={setVoltage}
                  label={v}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="mr-2 self-center text-sm font-medium text-iepci-navy">
                Year:
              </span>
              <FilterBtn
                value="All"
                current={year}
                onChange={setYear}
                label="All"
              />
              {projectFilters.years.map((y) => (
                <FilterBtn
                  key={y}
                  value={String(y)}
                  current={year}
                  onChange={setYear}
                  label={String(y)}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-2xl border border-iepci-gray-200/60 bg-white shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={iepciImage(project.image, 800)}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-iepci-blue px-3 py-1 text-xs font-medium text-white">
                    {project.voltage}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-iepci-blue">
                    {project.industry}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-iepci-navy">
                    {project.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1 text-sm text-iepci-gray-400">
                    <MapPin className="h-3 w-3" /> {project.location}
                  </p>
                  <p className="mt-3 line-clamp-2 text-sm text-iepci-gray-500">
                    {project.scope}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-12 text-center text-iepci-gray-400">
              No projects match the selected filters.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
