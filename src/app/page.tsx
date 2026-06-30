import { HeroSection } from "@/components/home/hero";
import { CompanyOverview } from "@/components/home/company-overview";
import { ServicesGrid } from "@/components/home/services-grid";
import { IndustriesSection } from "@/components/home/industries";
import { HorizontalScrollProjects } from "@/components/effects/horizontal-scroll-projects";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { OEMPartnerships } from "@/components/home/oem-partners";
import { Certifications } from "@/components/home/certifications";
import { ProcessTimeline3D } from "@/components/effects/process-timeline-3d";
import { Testimonials } from "@/components/home/testimonials";
import { ClientLogos } from "@/components/home/client-logos";
import { KnowledgeCenter } from "@/components/home/knowledge-center";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CompanyOverview />
      <ServicesGrid />
      <IndustriesSection />
      <HorizontalScrollProjects />
      <WhyChooseUs />
      <OEMPartnerships />
      <Certifications />
      <ProcessTimeline3D />
      <Testimonials />
      <ClientLogos />
      <KnowledgeCenter />
      <CTASection />
    </>
  );
}
