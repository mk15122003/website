import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/floating-actions";
import { ChatWidget } from "@/components/layout/chat-widget";
import { SmoothScrollProvider } from "@/components/effects/smooth-scroll";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { CursorGlow } from "@/components/effects/cursor-glow";
import { MergerBanner } from "@/components/layout/merger-banner";
import { company } from "@/lib/constants";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${company.shortName} | ${company.name}`,
    template: `%s | ${company.shortName}`,
  },
  description: company.description,
  keywords: [
    "Electrical EPC",
    "Industrial Automation",
    "Power Engineering",
    "Substations",
    "SCADA",
    "PLC Programming",
    "Solar EPC",
    "IEPCI",
    "Indian Electric and Power Control",
  ],
  openGraph: {
    title: company.name,
    description: company.tagline,
    type: "website",
    url: "https://indianelectricpower.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  alternateName: company.shortName,
  url: "https://indianelectricpower.com",
  email: company.email,
  foundingDate: "2003",
  description: company.description,
  areaServed: company.locations,
  telephone: company.phones.map((p) => p.number),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <SmoothScrollProvider>
          <ScrollProgress />
          <CursorGlow />
          <MergerBanner />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <ChatWidget />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
