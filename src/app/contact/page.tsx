import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/floating-actions";
import { ContactForm } from "@/components/shared/contact-form";
import { company } from "@/lib/constants";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${company.name} for electrical EPC, automation, and power engineering inquiries.`,
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
            Get in touch with our team for project inquiries, technical support,
            or partnership opportunities.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-iepci-navy">
                Get in Touch
              </h2>
              <p className="mt-4 text-iepci-gray-500">
                Our team operates across India, UAE, and UK. We typically
                respond to inquiries within 24 hours.
              </p>

              <div className="mt-8 space-y-6">
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-4 rounded-2xl border border-iepci-gray-200 p-4 transition-colors hover:border-iepci-blue"
                >
                  <Mail className="mt-0.5 h-5 w-5 text-iepci-blue" />
                  <div>
                    <p className="font-medium text-iepci-navy">Email</p>
                    <p className="text-sm text-iepci-gray-500">
                      {company.email}
                    </p>
                  </div>
                </a>
                {company.phones.map((p) => (
                  <a
                    key={p.number}
                    href={`tel:${p.number.replace(/\s/g, "")}`}
                    className="flex items-start gap-4 rounded-2xl border border-iepci-gray-200 p-4 transition-colors hover:border-iepci-blue"
                  >
                    <Phone className="mt-0.5 h-5 w-5 text-iepci-blue" />
                    <div>
                      <p className="font-medium text-iepci-navy">{p.label}</p>
                      <p className="text-sm text-iepci-gray-500">{p.number}</p>
                    </div>
                  </a>
                ))}
                <div className="flex items-start gap-4 rounded-2xl border border-iepci-gray-200 p-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-iepci-blue" />
                  <div>
                    <p className="font-medium text-iepci-navy">Offices</p>
                    <p className="text-sm text-iepci-gray-500">
                      {company.locations.join(" · ")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 overflow-hidden rounded-2xl border border-iepci-gray-200">
                <iframe
                  title="IEPCI Office Location"
                  src="https://maps.google.com/maps?q=Dubai,UAE&output=embed"
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
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
