export const company = {
  name: "Indian Electric and Power Control Inc",
  shortName: "IEPCI",
  formerName: "Proton Corporation Dubai",
  tagline:
    "Powering Industry with Electrical, Automation, AI & Robotics since 2003",
  description:
    "Delivering mission-critical electrical, power, automation, and energy solutions since 2003.",
  mergerNote:
    "Proton Corporation Dubai is now part of IEPCI — combining decades of Gulf, African, and Indian engineering expertise under one global brand.",
  oneStopTagline:
    "One Stop Solution for all your Industrial, Power & Automation Needs",
  regionsServed: "UAE, Africa, India and UK",
  email: "sales@indianelectricpower.com",
  emails: [
    { label: "Sales", address: "sales@indianelectricpower.com" },
    { label: "UAE / Dubai", address: "iepci.dxb@gmail.com" },
    { label: "Proton Legacy", address: "mail@protoncorpo.com" },
  ],
  phones: [
    { label: "India", number: "+91 7859984453" },
    { label: "UAE (IEPCI)", number: "+971 559973252" },
    { label: "UAE (Business Bay)", number: "+971 509325425" },
    { label: "UAE (Business Bay)", number: "+971 585200353" },
    { label: "UK", number: "+44 7487535352" },
  ],
  offices: [
    {
      name: "India — Vadodara (Head Office)",
      address:
        "M 1-2 Sarasvati Industrial Estate, Opposite Chhani Jakat Naka, Vadodara 390002, India",
      email: "iepci.dxb@gmail.com",
      phones: ["+91 7859984453"],
    },
    {
      name: "UAE — Dubai (Business Bay)",
      address:
        "The Binary by Omniyat, Plot No 177-0, Business Bay, Dubai, United Arab Emirates",
      email: "mail@protoncorpo.com",
      phones: ["+971 509325425", "+971 585200353"],
    },
    {
      name: "UAE — Operations",
      email: "iepci.dxb@gmail.com",
      phones: ["+971 559973252"],
    },
    {
      name: "United Kingdom",
      phones: ["+44 7487535352"],
    },
  ],
  locations: ["India", "UAE", "UK", "Africa"],
  founded: 2003,
  whatsapp: "917859984453",
  mission:
    "To be the most preferred company for customers and employees. We strive to provide the most innovative solutions.",
  vision:
    "To be the leading integrated electrical, power, and automation group across emerging markets — delivering turnkey engineering excellence with safety, innovation, and on-time execution.",
  productsServicesIntro:
    "We together as a group bring a vast range of experience and expertise in supply, installation, testing, commissioning, and repair works across industrial and infrastructure sectors.",
  industrialSegments: [
    "Power Utilities",
    "Petrochemical Plants",
    "Pharmaceutical Plants",
    "Textile Plants",
    "Engineering Plants",
    "Colleges & Education",
    "Shopping Malls",
    "Distribution Substations",
    "Power Generation Plants",
    "LV Distribution",
    "Infrastructure Development",
    "Mining",
    "Oil & Gas",
    "Renewable Energy",
  ],
  comingSoon: ["Robotics Solutions", "Artificial Intelligence Solutions"],
  social: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
} as const;

export const partnerships = [
  {
    name: "Sprint Technology LLC",
    region: "UAE",
    description:
      "IEPCI has partnered with UAE-based Sprint Technology LLC to cater to the Gulf and Africa markets. Sprint Technology provides manufacturing and distribution for CCTV, networking, access control, and low-voltage technology solutions.",
    services: [
      "CCTV & IP Camera Systems",
      "Computer Networking",
      "Access Control Systems",
      "Fiber Optics & Cable Management",
      "Smart Patch Panels & Racks",
    ],
    slug: "sprint-technologies",
  },
  {
    name: "Fuji Electric India",
    region: "India / Global",
    description:
      "IEPCI has partnered with Fuji Electric India to provide products and services for UPS, voltage stabilisers, harmonic filtering systems, and solar solutions across industrial and commercial sectors.",
    services: [
      "UPS Systems",
      "Voltage Stabilisers",
      "Harmonic Filtering",
      "Solar Inverters & Systems",
      "Motion Control PLCs",
    ],
    slug: "fuji-electric",
  },
] as const;
