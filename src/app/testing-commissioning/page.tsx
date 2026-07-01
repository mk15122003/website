import { createSolutionPage, generateSolutionMetadata } from "@/components/pages/solution-page";
export const metadata = generateSolutionMetadata("testing-commissioning");
export default function Page() { return createSolutionPage("testing-commissioning"); }
