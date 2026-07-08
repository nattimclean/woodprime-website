import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SERVICES, getServiceBySlug } from "@/lib/services";
import { SERVICE_AREAS } from "@/lib/site";
import { QuoteButton, CallButton } from "@/components/CTAButtons";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();

  return (
    <>
      <section className="relative overflow-hidden text-cream">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/85 to-espresso/55" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brass-light">
            {service.name}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight">{service.heroTagline}</h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <QuoteButton />
            <CallButton className="bg-transparent border border-brass text-brass-light hover:bg-brass/10" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <p className="text-lg leading-relaxed text-stone">{service.intro}</p>

        <h2 className="mt-10 text-2xl font-bold text-espresso">What's included</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-stone">
              <span className="mt-1 text-brass-dark">✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {service.subServices && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-espresso">Outdoor Living Breakdown</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {service.subServices.map((sub) => (
                <div key={sub.name} className="rounded-lg border border-stone/15 bg-white p-6">
                  <h3 className="font-semibold text-espresso">{sub.name}</h3>
                  <p className="mt-2 text-sm text-stone">{sub.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-espresso">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-6">
            {service.faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold text-espresso">{faq.q}</h3>
                <p className="mt-1 text-sm leading-relaxed text-stone">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-espresso">Service Areas</h2>
          <p className="mt-2 text-stone">
            We provide {service.shortName.toLowerCase()} services across:
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="rounded-full border border-stone/20 px-4 py-1.5 text-sm text-espresso hover:border-brass hover:text-brass-dark"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-lg bg-espresso p-8 text-center text-cream">
          <h2 className="text-xl font-bold">Ready to start your {service.shortName.toLowerCase()} project?</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <QuoteButton />
            <CallButton className="bg-transparent border border-brass text-brass-light hover:bg-brass/10" />
          </div>
        </div>
      </section>
    </>
  );
}
