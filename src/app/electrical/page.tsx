import {
  createSolutionPage,
  generateSolutionMetadata,
} from "@/components/pages/solution-page";

export const metadata = generateSolutionMetadata("electrical");

export default function ElectricalPage() {
  return createSolutionPage("electrical");
}
