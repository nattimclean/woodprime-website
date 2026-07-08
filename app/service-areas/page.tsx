import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_AREAS } from "@/lib/site";
import { AREA_DETAILS } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Service Areas | Renovation Contractor Across the GTA",
  description:
    "Wood Prime & Renovation serves Oakville, Mississauga, Etobicoke, Toronto, Burlington, Milton and Hamilton with home renovation, basement renovation, handyman and patio services.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brass-dark">Service Areas</p>
      <h1 className="max-w-2xl text-4xl font-bold text-espresso">
        Renovation Services Across the Greater Toronto Area
      </h1>
      <p className="mt-4 max-w-2xl text-stone">
        We serve homeowners and realtors throughout the GTA. Select your city for
        local details, or reach out directly for a quote.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICE_AREAS.map((area) => {
          const details = AREA_DETAILS.find((a) => a.slug === area.slug);
          return (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="rounded-lg border border-stone/15 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold text-espresso">{area.name}</h2>
              <p className="mt-2 text-sm text-stone">{details?.blurb}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
