import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/services";
import { QuoteButton } from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Renovation Services in the GTA",
  description:
    "Home renovation, basement renovation, handyman services, and patio, deck, fence & pergola builds across Oakville, Mississauga, Toronto and the GTA.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brass-dark">Our Services</p>
      <h1 className="max-w-2xl text-4xl font-bold text-espresso">
        Renovation and Handyman Services Across the GTA
      </h1>
      <p className="mt-4 max-w-2xl text-stone">
        Every project — big or small — gets the same standard of craftsmanship and
        the same direct communication, from first walkthrough to final walkthrough.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
      <div className="mt-14 text-center">
        <QuoteButton />
      </div>
    </div>
  );
}
