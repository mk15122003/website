import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/floating-actions";
import { ContactForm } from "@/components/shared/contact-form";
import { company } from "@/lib/constants";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: `Request a free quote from ${company.name} for your electrical EPC or automation project.`,
};

export default function GetAQuotePage() {
  return (
    <div className="pt-32">
      <section className="relative overflow-hidden bg-iepci-black py-20">
        <div className="absolute inset-0 opacity-30">
          <Image src={images.hero} alt="" fill className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Get a Quote" }]} />
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Request Your Free Quote
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Share your single-line diagram (if available), site location,
            required capacity, and timeline—we&apos;ll confirm scope and deliver
            a detailed quotation.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <div className="rounded-2xl border border-iepci-gray-200 bg-white p-8 shadow-card">
            <ContactForm title="Project Inquiry Form" />
          </div>

          <div className="mt-8 rounded-2xl bg-iepci-gray-100 p-6 text-center text-sm text-iepci-gray-500">
            <p>
              Prefer to talk? Call us at{" "}
              <a
                href="tel:+917859984453"
                className="font-medium text-iepci-blue hover:underline"
              >
                +91 7859984453
              </a>{" "}
              or email{" "}
              <a
                href={`mailto:${company.email}`}
                className="font-medium text-iepci-blue hover:underline"
              >
                {company.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
