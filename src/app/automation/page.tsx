import {
  createSolutionPage,
  generateSolutionMetadata,
} from "@/components/pages/solution-page";

export const metadata = generateSolutionMetadata("automation");

export default function AutomationPage() {
  return createSolutionPage("automation");
}
