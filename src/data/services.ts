import type { LucideIcon } from "lucide-react";
import {
  Zap,
  Factory,
  Cpu,
  Radio,
  Sun,
  TestTube,
  Brain,
  Cable,
  Building2,
  Gauge,
  Settings,
  Shield,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "epc-contracting",
    title: "EPC Contracting",
    description:
      "End-to-end engineering, procurement, and construction for industrial power projects with turnkey delivery.",
    icon: Building2,
    image: "substation-VUlMgo09rXyOVG38.jpg",
    features: [
      "Project management",
      "Equipment procurement",
      "Site installation",
      "Commissioning support",
    ],
  },
  {
    slug: "substations",
    title: "Substations",
    description:
      "Design, supply, and commissioning of 11kV–220kV substations including containerised solutions.",
    icon: Zap,
    image: "containerised-substation-IwbRN9mD36oFGHnX.jpg",
    features: [
      "11kV to 220kV systems",
      "Containerised substations",
      "Protection & control",
      "SCADA integration",
    ],
  },
  {
    slug: "power-transmission",
    title: "Power Transmission",
    description:
      "High and medium voltage transmission systems for reliable power delivery across industrial sites.",
    icon: Cable,
    image: "jeroen-van-de-water-aqozmgct6si-unsplash-ty8RRQSXjIbgmXZq.jpg",
    features: [
      "Overhead lines",
      "Underground cabling",
      "Switchgear systems",
      "Load flow analysis",
    ],
  },
  {
    slug: "distribution-systems",
    title: "Distribution Systems",
    description:
      "LV/MV distribution boards, MDBs, APFC panels, and synchronisation systems for stable operations.",
    icon: Gauge,
    image: "11kv-switchgear-4XIjThnXVWoHoL6b.jpg",
    features: [
      "MDB & SMDB panels",
      "APFC correction",
      "DG synchronisation",
      "UPS systems",
    ],
  },
  {
    slug: "industrial-automation",
    title: "Industrial Automation",
    description:
      "Complete automation solutions from consultation through custom design, installation, and activation.",
    icon: Factory,
    image: "chatgpt-image-25-d-nn.-2026-n.-14_55_13-lo6zIr0FCqi800rQ.png",
    features: [
      "Process automation",
      "Control panel design",
      "System integration",
      "Ongoing support",
    ],
  },
  {
    slug: "plc-programming",
    title: "PLC Programming",
    description:
      "Expert PLC programming for Siemens, Allen-Bradley, Mitsubishi, and Schneider platforms.",
    icon: Cpu,
    image: "gemini_generated_image_n2rsrgn2rsrgn2rs-WCBo2HlZu6G52tOn.png",
    features: [
      "Logic development",
      "HMI integration",
      "Fault diagnostics",
      "Legacy upgrades",
    ],
  },
  {
    slug: "scada",
    title: "SCADA Systems",
    description:
      "Supervisory control and data acquisition for real-time monitoring and remote operations.",
    icon: Radio,
    image: "substation-VUlMgo09rXyOVG38.jpg",
    features: [
      "Real-time monitoring",
      "Alarm management",
      "Historical trending",
      "Remote control",
    ],
  },
  {
    slug: "dcs",
    title: "DCS Integration",
    description:
      "Distributed control system integration for complex process plants and manufacturing facilities.",
    icon: Settings,
    image: "gemini_generated_image_n2rsrgn2rsrgn2rs-WCBo2HlZu6G52tOn.png",
    features: [
      "DCS configuration",
      "I/O mapping",
      "Redundancy design",
      "Process optimization",
    ],
  },
  {
    slug: "electrical-design",
    title: "Electrical Design",
    description:
      "Detailed engineering including SLDs, load calculations, protection coordination, and compliance.",
    icon: Shield,
    image: "11kv-switchgear-4XIjThnXVWoHoL6b.jpg",
    features: [
      "Single-line diagrams",
      "Protection studies",
      "Cable sizing",
      "IEC compliance",
    ],
  },
  {
    slug: "solar-epc",
    title: "Solar EPC",
    description:
      "Turnkey solar power solutions for industrial, commercial, and agricultural facilities.",
    icon: Sun,
    image: "unnamed-ESoXPfZMRAuZ4Xys.jpg",
    features: [
      "Site assessment",
      "System design",
      "Installation",
      "Grid integration",
    ],
  },
  {
    slug: "testing-commissioning",
    title: "Testing & Commissioning",
    description:
      "Comprehensive testing, protection relay settings, and commissioning for safe energization.",
    icon: TestTube,
    image: "containerised-substation-IwbRN9mD36oFGHnX.jpg",
    features: [
      "Relay testing",
      "Insulation testing",
      "Functional tests",
      "Documentation",
    ],
  },
  {
    slug: "ai-predictive-maintenance",
    title: "AI Predictive Maintenance",
    description:
      "AI-driven analytics and robotics for predictive maintenance and operational efficiency.",
    icon: Brain,
    image: "chatgpt-image-25-d-nn.-2026-n.-14_55_13-lo6zIr0FCqi800rQ.png",
    features: [
      "Condition monitoring",
      "Failure prediction",
      "Energy analytics",
      "IoT integration",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
