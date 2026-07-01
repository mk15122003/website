import {
  createSolutionPage,
  generateSolutionMetadata,
} from "@/components/pages/solution-page";

export const metadata = generateSolutionMetadata("hydro-powerplant");

export default function HydroPowerplantPage() {
  return createSolutionPage("hydro-powerplant");
}
