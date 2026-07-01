import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/floating-actions";
import { ContactForm } from "@/components/shared/contact-form";
import { company } from "@/lib/constants";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${company.name} — offices in India, Dubai (Business Bay), UAE, and UK.`,
};

export default function ContactPage() {
  return (
    <div className="pt-32">
      <section className="relative overflow-hidden bg-iepci-black py-20">
        <div className="absolute inset-0 opacity-30">
          <Image src={images.substation} alt="" fill className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Reach our team across India, Dubai, UAE, and UK. We typically respond
            within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-iepci-navy">
                Office Locations
              </h2>
              <p className="mt-4 text-iepci-gray-500">
                {company.mergerNote}
              </p>

              <div className="mt-8 space-y-6">
                {company.offices.map((office) => (
                  <div
                    key={office.name}
                    className="rounded-2xl border border-iepci-gray-200 p-6"
                  >
                    <p className="font-semibold text-iepci-navy">
                      {office.name}
                    </p>
                    {"address" in office && office.address && (
                      <p className="mt-2 flex items-start gap-2 text-sm text-iepci-gray-500">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-iepci-blue" />
                        {office.address}
                      </p>
                    )}
                    {"email" in office && office.email && (
                      <a
                        href={`mailto:${office.email}`}
                        className="mt-2 flex items-center gap-2 text-sm text-iepci-blue hover:underline"
                      >
                        <Mail className="h-4 w-4" />
                        {office.email}
                      </a>
                    )}
                    {office.phones?.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="mt-1 flex items-center gap-2 text-sm text-iepci-gray-500 hover:text-iepci-blue"
                      >
                        <Phone className="h-4 w-4" />
                        {phone}
                      </a>
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="mb-4 font-semibold text-iepci-navy">
                  General Inquiries
                </h3>
                <div className="space-y-3">
                  {company.emails.map((e) => (
                    <a
                      key={e.address}
                      href={`mailto:${e.address}`}
                      className="flex items-center gap-2 text-sm text-iepci-gray-500 hover:text-iepci-blue"
                    >
                      <Mail className="h-4 w-4" />
                      <span>
                        <strong className="text-iepci-navy">{e.label}:</strong>{" "}
                        {e.address}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-10 overflow-hidden rounded-2xl border border-iepci-gray-200">
                <iframe
                  title="IEPCI Dubai Office — Business Bay"
                  src="https://maps.google.com/maps?q=The+Binary+by+Omniyat+Business+Bay+Dubai&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-iepci-gray-200 bg-white p-8 shadow-soft">
              <ContactForm title="Send a Message" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
