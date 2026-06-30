"use client";

const clients = [
  "Barrick Gold",
  "Siemens",
  "ABB",
  "Schneider Electric",
  "Katanga Beverages",
  "Katavi Mines",
  "Benjamin Mkapa Stadium",
  "Tanzania Power",
  "UAE Energy",
  "Indian Manufacturing",
];

export function ClientLogos() {
  const doubled = [...clients, ...clients];

  return (
    <section className="overflow-hidden border-y border-iepci-gray-200 bg-white py-12">
      <div className="relative">
        <div className="animate-scroll-logos flex w-max gap-16">
          {doubled.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex shrink-0 items-center px-4"
            >
              <span className="whitespace-nowrap text-lg font-semibold text-iepci-navy/25">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
