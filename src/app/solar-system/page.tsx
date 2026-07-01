import { createSolutionPage, generateSolutionMetadata } from "@/components/pages/solution-page";
export const metadata = generateSolutionMetadata("solar-system");
export default function Page() { return createSolutionPage("solar-system"); }
