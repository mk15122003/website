export interface Project {
  slug: string;
  title: string;
  client: string;
  location: string;
  country: string;
  industry: string;
  voltage: string;
  year: number;
  scope: string;
  technologies: string[];
  value: string;
  timeline: string;
  results: string[];
  image: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: "katavi-mines-power-expansion",
    title: "Katavi Mines Power Expansion Project",
    client: "Katavi Mines",
    location: "Tanzania",
    country: "Tanzania",
    industry: "Mining",
    voltage: "33kV",
    year: 2024,
    scope:
      "End-to-end design, supply, installation, testing, and commissioning of a mine power upgrade including 33/11 kV 5 MVA and 1 MVA transformers, switchgear, overhead line, LV cabling, and integrated SCADA protection system.",
    technologies: ["Schneider Switchgear", "SCADA", "33/11kV Transformers", "Protection Relays"],
    value: "$4.2M",
    timeline: "14 months",
    results: [
      "Higher capacity and protection for mine operations",
      "Zero unplanned outages during commissioning",
      "Full SCADA integration with existing network",
    ],
    image: "substation-VUlMgo09rXyOVG38.jpg",
    gallery: [
      "substation-VUlMgo09rXyOVG38.jpg",
      "containerised-substation-IwbRN9mD36oFGHnX.jpg",
      "11kv-switchgear-4XIjThnXVWoHoL6b.jpg",
    ],
  },
  {
    slug: "barrick-gold-containerised-substation",
    title: "Containerised Substation – Barrick Gold Mines",
    client: "Barrick Gold",
    location: "Tanzania",
    country: "Tanzania",
    industry: "Mining",
    voltage: "33kV",
    year: 2023,
    scope:
      "Design, supply, installation, testing, and commissioning of a containerised substation with 33/0.4 kV 1.5 MVA transformer, Schneider switchgear, and complete SCADA protection system.",
    technologies: ["Schneider Electric", "SCADA", "Containerised Substation", "Protection System"],
    value: "$1.8M",
    timeline: "8 months",
    results: [
      "Quickly deployable power solution",
      "Safe and reliable mine operations",
      "Full remote monitoring capability",
    ],
    image: "containerised-substation-IwbRN9mD36oFGHnX.jpg",
    gallery: [
      "containerised-substation-IwbRN9mD36oFGHnX.jpg",
      "substation-VUlMgo09rXyOVG38.jpg",
    ],
  },
  {
    slug: "benjamin-mkapa-stadium",
    title: "Benjamin Mkapa Stadium",
    client: "Stadium Authority",
    location: "Tanzania",
    country: "Tanzania",
    industry: "Infrastructure",
    voltage: "33kV",
    year: 2023,
    scope:
      "Replacement of 33 kV switchgear, DC system with online UPS, distribution boards, LV switchgears, MDB panels, and lighting fixtures with full testing and commissioning.",
    technologies: ["33kV Switchgear", "UPS", "LV Distribution", "Lighting Systems"],
    value: "$2.1M",
    timeline: "10 months",
    results: [
      "Improved reliability and operational safety",
      "Compliant performance certification",
      "Enhanced spectator experience lighting",
    ],
    image: "11kv-switchgear-4XIjThnXVWoHoL6b.jpg",
    gallery: ["11kv-switchgear-4XIjThnXVWoHoL6b.jpg"],
  },
  {
    slug: "katanga-beverages-congo",
    title: "Katanga Beverages – Congo",
    client: "Katanga Beverages",
    location: "DR Congo",
    country: "DR Congo",
    industry: "Food Processing",
    voltage: "LV",
    year: 2022,
    scope:
      "Design and supply of 6300A and 5000A MDBs, 1500 kVAr APFC panel, DG synchronisation, 100 kVA online UPS, cable junction boxes, SMDBs, and DBs with full integration and commissioning.",
    technologies: ["APFC Panel", "DG Sync", "UPS", "MDB Panels"],
    value: "$1.2M",
    timeline: "6 months",
    results: [
      "Stabilized power eliminating tripping issues",
      "Optimized power factor correction",
      "Seamless DG integration",
    ],
    image: "gemini_generated_image_n2rsrgn2rsrgn2rs-WCBo2HlZu6G52tOn.png",
    gallery: ["gemini_generated_image_n2rsrgn2rsrgn2rs-WCBo2HlZu6G52tOn.png"],
  },
  {
    slug: "siemens-nx-air-switchgear",
    title: "Siemens NX Air Switchgear Expansion",
    client: "Industrial Client",
    location: "Africa",
    country: "Africa",
    industry: "Manufacturing",
    voltage: "11kV",
    year: 2024,
    scope:
      "Expansion of Siemens NX Air switchgear with custom fabricated 11kV system for increased capacity and protection.",
    technologies: ["Siemens NX Air", "11kV Switchgear", "Custom Fabrication"],
    value: "$850K",
    timeline: "5 months",
    results: [
      "Increased switchgear capacity",
      "Custom-engineered 11kV solution",
      "On-schedule commissioning",
    ],
    image: "11kv-switchgear-4XIjThnXVWoHoL6b.jpg",
    gallery: ["11kv-switchgear-4XIjThnXVWoHoL6b.jpg"],
  },
  {
    slug: "automation-control-panel-india",
    title: "Automation & Control Panel",
    client: "Manufacturing Plant",
    location: "India",
    country: "India",
    industry: "Manufacturing",
    voltage: "LV",
    year: 2024,
    scope:
      "Design, manufacturing, and commissioning of industrial automation and control panels with PLC integration.",
    technologies: ["PLC", "HMI", "Control Panels", "VFD"],
    value: "$320K",
    timeline: "3 months",
    results: [
      "Automated process control",
      "Reduced manual intervention",
      "Improved production efficiency",
    ],
    image: "gemini_generated_image_n2rsrgn2rsrgn2rs-WCBo2HlZu6G52tOn.png",
    gallery: ["gemini_generated_image_n2rsrgn2rsrgn2rs-WCBo2HlZu6G52tOn.png"],
  },
  {
    slug: "abb-system-house-tanzania",
    title: "33kV ABB System House",
    client: "Industrial Client",
    location: "Tanzania",
    country: "Tanzania",
    industry: "Manufacturing",
    voltage: "33kV",
    year: 2023,
    scope:
      "Complete 33kV ABB system house design, supply, installation, and commissioning.",
    technologies: ["ABB Switchgear", "33kV Systems", "Protection Relays"],
    value: "$1.5M",
    timeline: "9 months",
    results: [
      "Reliable MV power distribution",
      "ABB-certified installation",
      "Full documentation delivered",
    ],
    image: "substation-VUlMgo09rXyOVG38.jpg",
    gallery: ["substation-VUlMgo09rXyOVG38.jpg"],
  },
  {
    slug: "agricultural-solar-uae",
    title: "Agricultural Facility Solar Setup",
    client: "Agricultural Facility",
    location: "UAE",
    country: "UAE",
    industry: "Renewable Energy",
    voltage: "LV",
    year: 2023,
    scope:
      "Turnkey solar EPC for agricultural facility including system design, panel installation, and grid integration.",
    technologies: ["Solar PV", "Inverters", "Grid Integration", "Monitoring"],
    value: "$680K",
    timeline: "4 months",
    results: [
      "40% reduction in energy costs",
      "Sustainable power supply",
      "Real-time energy monitoring",
    ],
    image: "unnamed-ESoXPfZMRAuZ4Xys.jpg",
    gallery: ["unnamed-ESoXPfZMRAuZ4Xys.jpg"],
  },
  {
    slug: "office-solar-retrofit-sevilla",
    title: "Office Building Solar Retrofit",
    client: "Commercial Client",
    location: "Sevilla",
    country: "Spain",
    industry: "Infrastructure",
    voltage: "LV",
    year: 2022,
    scope:
      "Solar retrofit for office building with rooftop installation and energy management integration.",
    technologies: ["Solar PV", "EMS", "Rooftop Mounting"],
    value: "$450K",
    timeline: "3 months",
    results: [
      "Reduced carbon footprint",
      "Lower operational costs",
      "Green building certification support",
    ],
    image: "unnamed-ESoXPfZMRAuZ4Xys.jpg",
    gallery: ["unnamed-ESoXPfZMRAuZ4Xys.jpg"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const projectFilters = {
  industries: [...new Set(projects.map((p) => p.industry))],
  countries: [...new Set(projects.map((p) => p.country))],
  voltages: [...new Set(projects.map((p) => p.voltage))],
  years: [...new Set(projects.map((p) => p.year))].sort((a, b) => b - a),
};
