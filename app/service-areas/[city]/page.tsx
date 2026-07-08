import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SERVICE_AREAS } from "@/lib/site";
import { getAreaBySlug } from "@/lib/areas";
import { SERVICES } from "@/lib/services";
import { QuoteButton, CallButton } from "@/components/CTAButtons";

export function generateStaticParams() {
  return SERVICE_AREAS.map((a) => ({ city: a.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const area = getAreaBySlug(params.city);
  if (!area) return {};
  return {
    title: `Home & Basement Renovation Contractor in ${area.name}, ON`,
    description: `Wood Prime & Renovation provides home renovation, basement renovation, handyman services and patio, deck, fence & pergola builds in ${area.name}, Ontario.`,
    alternates: { canonical: `/service-areas/${area.slug}` },
  };
}

export default function AreaPage({ params }: { params: { city: string } }) {
  const area = getAreaBySlug(params.city);
  if (!area) return notFound();

  return (
    <>
      <section className="relative overflow-hidden text-cream">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-exterior.jpg"
            alt="Modern renovated home exterior at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/85 to-espresso/55" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brass-light">
            Serving {area.name}, Ontario
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight">
            Home Renovation &amp; Basement Renovation Contractor in {area.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/80">{area.blurb}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <QuoteButton />
            <CallButton className="bg-transparent border border-brass text-brass-light hover:bg-brass/10" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-espresso">Services in {area.name}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-lg border border-stone/15 bg-white p-5 text-sm font-semibold text-espresso hover:border-brass hover:text-brass-dark"
            >
              {s.name}
            </Link>
          ))}
        </div>

        <h2 className="mt-14 text-2xl font-bold text-espresso">Other Cities We Serve</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {SERVICE_AREAS.filter((a) => a.slug !== area.slug).map((a) => (
            <Link
              key={a.slug}
              href={`/service-areas/${a.slug}`}
              className="rounded-full border border-stone/20 px-4 py-1.5 text-sm text-espresso hover:border-brass hover:text-brass-dark"
            >
              {a.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
