import {
  createSolutionPage,
  generateSolutionMetadata,
} from "@/components/pages/solution-page";

export const metadata = generateSolutionMetadata("substation");

export default function SubstationPage() {
  return createSolutionPage("substation");
}
