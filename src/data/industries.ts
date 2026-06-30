import type { LucideIcon } from "lucide-react";
import {
  HardHat,
  Pickaxe,
  Factory,
  Fuel,
  Droplets,
  Building,
  Leaf,
  UtensilsCrossed,
  Server,
} from "lucide-react";

export interface Industry {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export const industries: Industry[] = [
  {
    slug: "mining",
    title: "Mining",
    description:
      "Robust power and automation solutions for remote mine sites including containerised substations.",
    icon: Pickaxe,
    image: "containerised-substation-IwbRN9mD36oFGHnX.jpg",
  },
  {
    slug: "cement",
    title: "Cement",
    description:
      "MV/LV distribution, motor control, and process automation for cement plants.",
    icon: HardHat,
    image: "substation-VUlMgo09rXyOVG38.jpg",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description:
      "Industrial automation, PLC programming, and control panels for production lines.",
    icon: Factory,
    image: "gemini_generated_image_n2rsrgn2rsrgn2rs-WCBo2HlZu6G52tOn.png",
  },
  {
    slug: "oil-gas",
    title: "Oil & Gas",
    description:
      "Hazardous area electrical systems, protection, and SCADA for upstream and downstream.",
    icon: Fuel,
    image: "jeroen-van-de-water-aqozmgct6si-unsplash-ty8RRQSXjIbgmXZq.jpg",
  },
  {
    slug: "water-treatment",
    title: "Water Treatment",
    description:
      "DCS integration and automation for water treatment and desalination facilities.",
    icon: Droplets,
    image: "substation-VUlMgo09rXyOVG38.jpg",
  },
  {
    slug: "infrastructure",
    title: "Infrastructure",
    description:
      "Stadiums, airports, and public facilities requiring reliable critical power systems.",
    icon: Building,
    image: "11kv-switchgear-4XIjThnXVWoHoL6b.jpg",
  },
  {
    slug: "renewable-energy",
    title: "Renewable Energy",
    description:
      "Solar EPC, grid integration, and energy management for sustainable power.",
    icon: Leaf,
    image: "unnamed-ESoXPfZMRAuZ4Xys.jpg",
  },
  {
    slug: "food-processing",
    title: "Food Processing",
    description:
      "Power distribution, APFC, and automation for beverage and food manufacturing.",
    icon: UtensilsCrossed,
    image: "gemini_generated_image_n2rsrgn2rsrgn2rs-WCBo2HlZu6G52tOn.png",
  },
  {
    slug: "data-centers",
    title: "Data Centers",
    description:
      "UPS, power quality, and redundant electrical systems for mission-critical facilities.",
    icon: Server,
    image: "11kv-switchgear-4XIjThnXVWoHoL6b.jpg",
  },
];
