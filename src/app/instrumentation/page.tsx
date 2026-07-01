import {
  createSolutionPage,
  generateSolutionMetadata,
} from "@/components/pages/solution-page";

export const metadata = generateSolutionMetadata("instrumentation");

export default function InstrumentationPage() {
  return createSolutionPage("instrumentation");
}
