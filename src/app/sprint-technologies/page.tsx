import { createSolutionPage, generateSolutionMetadata } from "@/components/pages/solution-page";
export const metadata = generateSolutionMetadata("sprint-technologies");
export default function Page() { return createSolutionPage("sprint-technologies"); }
