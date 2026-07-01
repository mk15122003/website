import type { LucideIcon } from "lucide-react";

export interface SolutionSection {
  title: string;
  description: string;
  items: string[];
  cta?: string;
}

export interface SolutionPage {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  heroLabel?: string;
  sections: SolutionSection[];
  brands?: string[];
}

export const solutionPages: SolutionPage[] = [
  {
    slug: "electrical",
    title: "Electrical Solutions",
    subtitle: "LV & MV electrical systems, panels, and power equipment",
    description:
      "With more than 20 years of experience in supply, design, installation, testing and commissioning of electrical projects across UAE, Africa, India and UK.",
    image: "11kv-switchgear-4XIjThnXVWoHoL6b.jpg",
    brands: ["Schneider", "Legrand", "ABB", "Siemens", "Eaton", "Hager"],
    sections: [
      {
        title: "Switchgear & Distribution Panels",
        description: "Complete range of LV/MV panels for industrial power distribution.",
        items: [
          "Switchgear Panels",
          "PCC & MCC Panels",
          "Power Factor Correction Panels",
          "Lighting Distribution Boards",
          "DG Synchronising & AMF Panels",
          "PLC / HMI Panels",
          "Automation Panels",
          "Protection and Control Panels",
        ],
      },
      {
        title: "LV Electric Panels",
        description: "Custom-built low voltage distribution and control panels.",
        items: [
          "Control Panels",
          "Power Distribution Boards",
          "Lighting Distribution Boards",
          "Power Factor Correction Panels",
          "RTCC Panels",
          "DG Synchronising Panels",
          "Remote Control Panels",
          "HMI Panels",
        ],
      },
      {
        title: "UPS & Power Conditioning",
        description: "Reliable backup and power quality solutions.",
        items: [
          "Line Interactive UPS",
          "Online UPS — Single & Three Phase",
          "Active Harmonic Filters",
          "Solar Inverters",
          "Voltage Stabilisers",
          "K-Rated Transformers",
          "Static Transfer Switch & PDU",
        ],
      },
      {
        title: "Engineering & Turnkey Services",
        description: "End-to-end project delivery from design to commissioning.",
        items: [
          "Design and Engineering",
          "Update and Modification Works",
          "Testing Services",
          "Turnkey Projects",
          "Manpower Supply",
          "MV Switchgears (33kV to 11kV)",
          "Ring Main Units",
          "DC Chargers & Battery Systems",
        ],
      },
      {
        title: "Diesel Generator Sets",
        description: "DG supply, synchronisation, and AMF systems.",
        items: [
          "Closed Type DG Sets",
          "Containerised DG Sets",
          "Open Type DG Sets",
          "Synchronising & AMF Panels",
          "DG Controllers",
          "Makes: Perkins, Cummins, Kirloskar, Crompton Greaves",
        ],
      },
      {
        title: "Cables & Terminations",
        description: "Complete cabling solutions for HV, MV and LV systems.",
        items: [
          "HV & MV Power Cables",
          "LV Cables & Instrument Cables",
          "Plug-in Type Cable Terminations",
          "Flame Proof & Fire Resistant Cables",
          "Network & Fibre Optic Cabling",
        ],
      },
      {
        title: "Transformers",
        description: "Power and distribution transformers for industrial applications.",
        items: [
          "Power & Distribution Transformers",
          "Auto & Step-Up/Down Transformers",
          "Air-cooled Transformers",
          "Reactors and Chokes",
          "Current & Voltage Transformers",
          "Isolation & Ultra Isolation Transformers",
        ],
      },
    ],
  },
  {
    slug: "substation",
    title: "Substation Solutions",
    subtitle: "Engineering, equipment supply, and commissioning for HV/MV substations",
    description:
      "Comprehensive substation and power system services — from detailed engineering and equipment manufacturing to installation, testing, and modification projects.",
    image: "substation-VUlMgo09rXyOVG38.jpg",
    sections: [
      {
        title: "Engineering Services",
        description: "Detailed engineering for substations and power systems.",
        items: [
          "Substation & Power System Design",
          "Primary System Design",
          "Feasibility Study Reports",
          "Power System & Harmonic Studies",
          "Structure & Hardware Design",
          "Ground Grid Design",
        ],
      },
      {
        title: "Equipment Supply",
        description: "Manufacture and supply of substation equipment up to 33kV.",
        items: [
          "11kV, 22kV, 33kV & LV Switchgears — Air, SF6 and Vacuum",
          "Power & Auxiliary Transformers",
          "Ring Main Units",
          "Protection Relays & Panels",
          "Control & Relay Panels",
          "Battery & Charger Systems",
        ],
      },
      {
        title: "Installation, Testing & Commissioning",
        description: "Professional site services for safe energization.",
        items: [
          "HV and MV Switchgear",
          "GIS Switchgear & Circuit Breakers",
          "Power Transformers & Protection Relays",
          "Shunt Reactors",
          "LV AC Systems",
          "Earth Ground Grid Systems",
        ],
      },
      {
        title: "Modification & Upgradation",
        description: "Extension and upgrade projects for existing facilities.",
        items: [
          "Extension of Existing Switchgear",
          "Protection System Upgrade",
          "Overhead Line to Cable Conversion",
          "Complete Refurbishment Projects",
          "Substation & Power Plant Modifications",
        ],
      },
    ],
  },
  {
    slug: "automation",
    title: "Industrial Automation",
    subtitle: "PLC, HMI, drives, and automation parts — sales and site services since 2003",
    description:
      "Sales and service for industrial automation parts with site services for installation, programming, and testing across all major PLC and drive platforms.",
    image: "gemini_generated_image_n2rsrgn2rsrgn2rs-WCBo2HlZu6G52tOn.png",
    sections: [
      {
        title: "Automation Products Supply",
        description: "We supply the following automation products with site services.",
        items: [
          "Automation Control Panels",
          "PLC and I/O Modules",
          "HMI Touchscreens",
          "Servo Drives",
          "Variable Frequency Drives",
          "Encoders & Sensors",
          "Programming Cables",
        ],
      },
      {
        title: "Programmable Logic Controllers",
        description: "PLC CPUs, I/O modules, and programming services.",
        items: [
          "PLC CPU Modules",
          "Input and Output Modules",
          "Programming & Commissioning",
          "Legacy System Upgrades",
        ],
      },
      {
        title: "Human Machine Interface",
        description: "HMI supply with installation and programming.",
        items: [
          "HMI Panels & Touchscreens",
          "SCADA Integration",
          "Site Installation & Testing",
        ],
      },
      {
        title: "Drives & Motion",
        description: "Servo motors, VFDs, and motion control solutions.",
        items: [
          "Servo Motor and AC Drive",
          "AC Drive VFD",
          "Servo Accessories & Encoder Cables",
          "Installation, Programming & Testing",
        ],
      },
      {
        title: "Cables & Connectors",
        description: "Industrial automation cabling and connectivity.",
        items: [
          "Programming Cables",
          "Industrial Connectors",
          "Encoder & Communication Cables",
        ],
      },
    ],
  },
  {
    slug: "fuji-electric",
    title: "Fuji Electric",
    subtitle: "Authorized solutions for power backup, solar, and motion control",
    description:
      "Fuji Electric manufactures a wide range of protective energy products configured for ground conditions, applications, and environmental sensitivity — supplied and supported by IEPCI.",
    image: "containerised-substation-IwbRN9mD36oFGHnX.jpg",
    heroLabel: "Partner Products",
    sections: [
      {
        title: "Solar Inverters",
        description: "Off-grid and bi-directional solar inverter solutions.",
        items: [
          "Sunbird 3000 — True off-grid bi-directional solar inverter",
          "32-bit DSP controllers for harsh environments",
          "Grid-tie and hybrid configurations",
        ],
      },
      {
        title: "UPS Systems",
        description: "Online and line-interactive UPS for critical loads.",
        items: [
          "Finch PG — Dual mains input with DSP technology",
          "Falcon 8500 — Three Phase Online UPS",
          "Active input power factor correction",
        ],
      },
      {
        title: "Voltage Stabilisers",
        description: "Servo controlled voltage stabilizers for rugged environments.",
        items: [
          "Air Cooled Servo Control Voltage Stabilizer",
          "Oil Cooled Servo Stabilizers",
          "Industrial & commercial applications",
        ],
      },
      {
        title: "Energy Management",
        description: "Power savings and harmonic filtering solutions.",
        items: [
          "Energy Conserver — 25%+ savings in discharge lighting",
          "IORA 3000 Active Harmonic Filter",
          "Hornbill 1000 & 2000 — Data center performance enhancement",
        ],
      },
      {
        title: "Motion Control PLCs",
        description: "Positioning and motion control PLC systems.",
        items: [
          "ALPHA 7, ALPHA 5, ALPHA 5 Smart",
          "SPH PLC — 200 kHz, 4-axis pulse output",
          "SPF Plus Motion Controller — 4-axis positioning",
        ],
      },
    ],
  },
  {
    slug: "instrumentation",
    title: "Instrumentation & Control",
    subtitle: "Process instrumentation, SCADA, and cleanroom monitoring",
    description:
      "Manufacturer and integrator of instrumentation systems for process industries, pharmaceutical facilities, and building automation.",
    image: "chatgpt-image-25-d-nn.-2026-n.-14_55_13-lo6zIr0FCqi800rQ.png",
    sections: [
      {
        title: "Indicators & Controllers",
        description: "Precision measurement and control instruments.",
        items: [
          "Data Loggers",
          "Universal Single & Dual Channel Indicators",
          "Controller/Transmitter Systems",
          "Manual Loader Stations",
          "Difference/Average Indicator Controllers",
        ],
      },
      {
        title: "Process Control & SCADA",
        description: "Controllers, data acquisition, and alarm systems.",
        items: [
          "Temperature/Pressure Controllers",
          "PID Controllers",
          "Sensors & Transmitters",
          "Data Loggers",
          "SCADA Systems",
          "Alarm Annunciators",
          "Process Parameter Scanners",
        ],
      },
      {
        title: "Field Instrumentation",
        description: "Sensors, valves, and hazardous area equipment.",
        items: [
          "Flameproof Enclosures",
          "I to P Converters & Two Wire Transmitters",
          "SMPS and Linear Power Supply",
          "Auto and Mechanical Operated Valves",
          "Level Monitoring Systems",
        ],
      },
      {
        title: "Software & SCADA",
        description: "Customized software for process and building automation.",
        items: [
          "SCADA & HMI Software Solutions",
          "Pharma Company Control Systems",
          "Energy & Power Meter Software",
          "HVAC Building Automation Software",
        ],
      },
      {
        title: "Cleanroom Monitoring",
        description: "Central monitoring for regulated environments.",
        items: [
          "Temperature, Humidity & Pressure Monitoring",
          "Particle Counting Systems",
          "21 CFR Part 11 & GMP-4 Compatible",
          "DP, Temp+RH, and Multi-parameter Indicators",
        ],
      },
    ],
  },
  {
    slug: "package-substation",
    title: "Package Substation",
    subtitle: "Compact containerised substations — design, manufacture & supply",
    description:
      "We design, manufacture and supply compact substations / package substations with 33kV and 11kV switchgears, RMU, air/oil type transformers, and LV compartments.",
    image: "containerised-substation-IwbRN9mD36oFGHnX.jpg",
    sections: [
      {
        title: "Compact Substation Overview",
        description:
          "A space-efficient outdoor power solution integrating HV switchgear, transformer, and LV distribution in a single enclosed unit.",
        items: [
          "11/0.415 kV and 33/11 kV configurations",
          "Galvanized sheet steel modular construction",
          "Quick deployment for mines and industrial sites",
          "IEC 61330 compliant design",
        ],
      },
      {
        title: "HT Compartment",
        description: "Medium voltage switchgear and protection.",
        items: [
          "11 kV 630A, 21kA Ring Main Unit — SF6 Gas Insulated",
          "3 VCB & 1 Isolator with standard accessories",
          "Makes: CG, Siemens, ABB, Schneider",
          "IEC 62271-200, IEC 60298 compliant",
        ],
      },
      {
        title: "Transformer",
        description: "Distribution transformers for compact substations.",
        items: [
          "800 kVA Copper Wound Distribution Transformer",
          "11/0.433 kV Cast Resin Dry Type",
          "Vector Dyn-11, Impedance 4.5%",
          "On Load Tap Changer options",
        ],
      },
      {
        title: "LV Compartment",
        description: "Low voltage distribution and metering.",
        items: [
          "Multifunction Meter with V, I, F, P & E",
          "RS 485 Connectivity",
          "LT CTs of appropriate rating",
          "RYB Indication LED Type",
          "Space for 3 Ph 4 Wire MCCB/ACB",
        ],
      },
    ],
  },
  {
    slug: "hydro-powerplant",
    title: "Hydro Powerplant",
    subtitle: "Comprehensive solutions for hydropower facilities",
    description:
      "We are committed to providing comprehensive solutions for hydropower plants — partnering with facilities to maximize efficiency, reliability, and clean energy output.",
    image: "jeroen-van-de-water-aqozmgct6si-unsplash-ty8RRQSXjIbgmXZq.jpg",
    sections: [
      {
        title: "Equipment Supply",
        description: "High-quality equipment essential for hydropower plants.",
        items: [
          "Turbines — Francis, Kaplan, Pelton",
          "Generators",
          "Wicket Gates & Pressure Relief Valves",
          "Governors & Control Systems",
          "Transformers & Switchgear",
        ],
      },
      {
        title: "Engineering & Services",
        description: "Full lifecycle support for hydropower projects.",
        items: [
          "Feasibility Studies & Site Assessment",
          "Electrical & Control System Design",
          "Installation & Commissioning",
          "Modification & Upgradation",
          "Ongoing Maintenance Support",
        ],
      },
      {
        title: "Technology & Innovation",
        description: "Modern advancements in hydropower engineering.",
        items: [
          "Advanced Turbine Design & Materials",
          "Improved Control Systems",
          "Small-scale Hydropower Installations",
          "Environmental Impact Reduction",
          "Efficiency Optimization",
        ],
      },
      {
        title: "Why IEPCI for Hydropower",
        description: "Proven expertise in power generation projects.",
        items: [
          "20+ years in power & automation",
          "Turnkey EPC capability",
          "Operations across India, UAE, UK & Africa",
          "IEC compliant engineering",
          "24/7 technical support",
        ],
      },
    ],
  },
  {
    slug: "modification-and-upgrade",
    title: "Modification & Upgrade",
    subtitle: "Machine refurbishing, automation upgrades, and industrial repair",
    description:
      "Extend asset life and modernize existing systems with expert modification, refurbishment, and chip-level repair services for industrial machinery and automation systems.",
    image: "gemini_generated_image_n2rsrgn2rsrgn2rs-WCBo2HlZu6G52tOn.png",
    sections: [
      {
        title: "Machine Services",
        description: "Comprehensive refurbishment and modification for industrial equipment.",
        items: [
          "Machine Refurbishing",
          "Machine Modification",
          "Industrial Repair",
          "Chip Level Repair",
        ],
      },
      {
        title: "Automation Upgrades",
        description: "Modernize legacy control systems for improved performance.",
        items: [
          "Automation System Upgrade",
          "Automation System Update",
          "PLC & HMI Retrofits",
          "Legacy to Modern Platform Migration",
        ],
      },
    ],
  },
  {
    slug: "design-engineering",
    title: "Design & Engineering",
    subtitle: "Detailed engineering for substations, power systems, and industrial facilities",
    description:
      "Multi-disciplinary engineering services from feasibility studies through detailed design for electrical, substation, and industrial power infrastructure projects.",
    image: "substation-VUlMgo09rXyOVG38.jpg",
    sections: [
      {
        title: "Electrical & Substation Design",
        description: "Complete design engineering for power infrastructure.",
        items: [
          "Substation Design",
          "Electrical Design",
          "Ground Grid Design",
          "Cable System Design",
          "Primary System Design",
          "Power System & Harmonic Studies",
        ],
      },
      {
        title: "Multi-Disciplinary Engineering",
        description: "Supporting disciplines for turnkey project delivery.",
        items: [
          "Structural Design",
          "HVAC System Design",
          "Feasibility Study Reports",
          "Hardware & Layout Design",
        ],
      },
    ],
  },
  {
    slug: "testing-commissioning",
    title: "Testing & Commissioning",
    subtitle: "Professional testing and safe energization of electrical systems",
    description:
      "Comprehensive installation, testing, and commissioning services for substations, protection systems, transformers, automation, and mechanical systems.",
    image: "containerised-substation-IwbRN9mD36oFGHnX.jpg",
    sections: [
      {
        title: "Electrical Testing",
        description: "Testing services for power infrastructure components.",
        items: [
          "Electrical Substation Testing",
          "Protection Relays Testing & Settings",
          "Transformer Testing",
          "Earthing System Testing",
          "DG Sets Commissioning",
        ],
      },
      {
        title: "Systems Commissioning",
        description: "End-to-end commissioning for integrated systems.",
        items: [
          "Automation System Commissioning",
          "Mechanical System Testing",
          "Functional Performance Tests",
          "Documentation & Handover",
        ],
      },
    ],
  },
  {
    slug: "electrical-equipment",
    title: "Electrical Equipment",
    subtitle: "MV switchgear, transformers, generators, and cabling",
    description:
      "Supply of major electrical equipment for industrial and utility projects including 11kV and 33kV switchgear, transformers, diesel generators, and cable systems.",
    image: "11kv-switchgear-4XIjThnXVWoHoL6b.jpg",
    brands: ["ABB", "Siemens", "Schneider", "CG", "Legrand"],
    sections: [
      {
        title: "Switchgear & Transformers",
        description: "Medium voltage equipment for power distribution.",
        items: [
          "11 kV and 33 kV Switchgear",
          "Ring Main Units (RMU)",
          "Power Transformers",
          "Distribution Transformers",
          "Capacitor Banks",
        ],
      },
      {
        title: "Generation & Cabling",
        description: "Backup power and cable infrastructure.",
        items: [
          "Diesel Generators",
          "Cables and Cable Trays",
          "HV/MV/LV Power Cables",
          "Plug-in Type Cable Terminations",
          "Instrument & Fire Resistant Cables",
        ],
      },
    ],
  },
  {
    slug: "sprint-technologies",
    title: "Sprint Technologies",
    subtitle: "CCTV, networking, and access control — Gulf & Africa partnership",
    description:
      "Through our partnership with UAE-based Sprint Technology LLC, IEPCI delivers manufacturing and distribution of technology solutions for the Gulf and Africa markets.",
    image: "chatgpt-image-25-d-nn.-2026-n.-14_55_13-lo6zIr0FCqi800rQ.png",
    heroLabel: "Sprint Technology LLC Partnership",
    sections: [
      {
        title: "Security Systems",
        description: "Surveillance and access control for industrial and commercial sites.",
        items: [
          "CCTV Camera Systems",
          "IP Camera Solutions",
          "Access Control Systems",
        ],
      },
      {
        title: "Networking & Infrastructure",
        description: "Structured cabling and network infrastructure.",
        items: [
          "Computer Networking",
          "Fiber Optics Cable",
          "Cable Management Systems",
          "Smart Patch Panels",
          "Face Plates & Racks",
        ],
      },
    ],
  },
  {
    slug: "solar-system",
    title: "Solar Systems",
    subtitle: "On-grid, off-grid, and hybrid solar EPC solutions",
    description:
      "Turnkey solar projects for industrial, commercial, agricultural, and residential applications — from system design through installation and grid integration.",
    image: "unnamed-ESoXPfZMRAuZ4Xys.jpg",
    sections: [
      {
        title: "Solar EPC Projects",
        description: "Complete solar power project delivery.",
        items: [
          "Solar Project Design & EPC",
          "Off-Grid Systems",
          "On-Grid Systems",
          "Hybrid Solar Solutions",
          "Agricultural & Industrial Solar",
        ],
      },
      {
        title: "Solar Equipment",
        description: "Supply of solar components and controllers.",
        items: [
          "Solar Inverters",
          "Solar Based Equipment",
          "Home Solar Systems",
          "Solar Controllers",
          "Fuji Sunbird 3000 Off-Grid Inverters",
        ],
      },
    ],
  },
  {
    slug: "power-conditioning",
    title: "Power Conditioning",
    subtitle: "UPS, stabilisers, and power quality solutions",
    description:
      "Reliable power conditioning equipment for critical loads including online UPS, line-interactive UPS, battery chargers, and voltage stabilisers.",
    image: "11kv-switchgear-4XIjThnXVWoHoL6b.jpg",
    brands: ["Fuji Electric", "Schneider", "ABB"],
    sections: [
      {
        title: "UPS Systems",
        description: "Uninterruptible power supply for critical applications.",
        items: [
          "Online UPS",
          "Line Interactive UPS",
          "Single Phase UPS",
          "Three Phase UPS",
          "Static Bypass Switch",
        ],
      },
      {
        title: "Power Quality",
        description: "Voltage regulation and battery systems.",
        items: [
          "Industrial Battery Chargers",
          "Solar Inverters",
          "Battery Voltage Stabilisers",
          "Active Harmonic Filters",
          "K-Rated Transformers",
        ],
      },
    ],
  },
  {
    slug: "valves-and-automation",
    title: "Valves & Automation",
    subtitle: "Industrial valves and valve automation solutions",
    description:
      "Supply and automation of industrial valves for process plants, water treatment, oil & gas, and utility applications.",
    image: "substation-VUlMgo09rXyOVG38.jpg",
    sections: [
      {
        title: "Industrial Valves",
        description: "Complete range of process and utility valves.",
        items: [
          "Ball Valve",
          "Gate Valve",
          "Globe Valve",
          "Butterfly Valve",
          "Pressure Reducing Valve",
        ],
      },
      {
        title: "Valve Automation",
        description: "Automated valve actuation and control integration.",
        items: [
          "Valve Automation Systems",
          "Pneumatic & Electric Actuators",
          "Control Valve Integration",
          "SCADA-Linked Valve Monitoring",
        ],
      },
    ],
  },
];

export function getSolutionPage(slug: string) {
  return solutionPages.find((p) => p.slug === slug);
}
