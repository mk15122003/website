export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "mv-switchgear-selection-guide",
    title: "Medium Voltage Switchgear Selection: A Complete Guide",
    excerpt:
      "Key factors for selecting MV switchgear including fault levels, protection coordination, and OEM compatibility.",
    category: "Power Systems",
    date: "2026-03-15",
    readTime: "8 min",
    image: "11kv-switchgear-4XIjThnXVWoHoL6b.jpg",
    author: "IEPCI Engineering Team",
  },
  {
    slug: "plc-vs-dcs-industrial-automation",
    title: "PLC vs DCS: Choosing the Right Automation Architecture",
    excerpt:
      "Understanding when to deploy PLC-based control versus distributed control systems for process plants.",
    category: "Automation",
    date: "2026-03-08",
    readTime: "6 min",
    image: "gemini_generated_image_n2rsrgn2rsrgn2rs-WCBo2HlZu6G52tOn.png",
    author: "IEPCI Automation Team",
  },
  {
    slug: "scada-cybersecurity-best-practices",
    title: "SCADA Cybersecurity Best Practices for Industrial Sites",
    excerpt:
      "Essential security measures to protect SCADA systems from cyber threats in critical infrastructure.",
    category: "SCADA",
    date: "2026-02-28",
    readTime: "7 min",
    image: "substation-VUlMgo09rXyOVG38.jpg",
    author: "IEPCI Technology Team",
  },
  {
    slug: "solar-epc-roi-industrial",
    title: "Solar EPC ROI for Industrial Facilities",
    excerpt:
      "How industrial clients achieve payback on solar investments through proper system sizing and integration.",
    category: "Renewable Energy",
    date: "2026-02-20",
    readTime: "5 min",
    image: "unnamed-ESoXPfZMRAuZ4Xys.jpg",
    author: "IEPCI Energy Team",
  },
  {
    slug: "electrical-safety-commissioning",
    title: "Electrical Safety During Testing & Commissioning",
    excerpt:
      "Critical safety protocols and IEC compliance requirements for energizing new electrical installations.",
    category: "Electrical Safety",
    date: "2026-02-12",
    readTime: "9 min",
    image: "containerised-substation-IwbRN9mD36oFGHnX.jpg",
    author: "IEPCI Safety Team",
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
