import { createSolutionPage, generateSolutionMetadata } from "@/components/pages/solution-page";
export const metadata = generateSolutionMetadata("power-conditioning");
export default function Page() { return createSolutionPage("power-conditioning"); }
