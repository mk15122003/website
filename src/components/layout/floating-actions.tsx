"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { company } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

export function LiveChatButton() {
  return (
    <button
      onClick={() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("open-live-chat"));
        }
      }}
      className="fixed bottom-24 right-6 z-50 hidden rounded-full bg-iepci-blue px-4 py-2 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 sm:block"
    >
      Live Chat
    </button>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-iepci-gray-400">
        <li>
          <Link href="/" className="hover:text-iepci-blue">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span>/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-iepci-blue">
                {item.label}
              </Link>
            ) : (
              <span className="text-iepci-navy">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
