import {
  createSolutionPage,
  generateSolutionMetadata,
} from "@/components/pages/solution-page";

export const metadata = generateSolutionMetadata("fuji-electric");

export default function FujiElectricPage() {
  return createSolutionPage("fuji-electric");
}
