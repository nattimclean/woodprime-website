import Image from "next/image";
import Link from "next/link";
import { QuoteButton, CallButton, WhatsAppButton } from "@/components/CTAButtons";
import ServiceCard from "@/components/ServiceCard";
import TradeNetwork from "@/components/TradeNetwork";
import { SERVICES } from "@/lib/services";
import { SERVICE_AREAS, SITE, PROCESS_STEPS, FEATURED_WORK } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-interior.jpg"
            alt="Bright open-concept kitchen and living room in a Canadian home, with hardwood floors and a fireplace"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-espresso/45" />
        </div>
        <div className="relative mx-auto flex max-w-6xl justify-end px-4 py-20 sm:px-6 sm:py-28">
          <div className="max-w-xl text-right [text-shadow:0_2px_12px_rgba(20,33,61,0.55)]">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brass-light">
              Serving the Greater Toronto Area
            </p>
            <h1 className="text-4xl font-bold leading-tight text-cream sm:text-5xl">
              Home Renovation Contractor for Oakville, Mississauga &amp; the GTA
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cream/85">
              {SITE.name} builds home renovations, basement renovations, patios, decks,
              fences and pergolas for homeowners and realtors who care about the finish
              as much as the framing. {SITE.yearsExperience} years of hands-on craftsmanship,
              zero shortcuts.
            </p>
            <div className="mt-8 flex flex-wrap justify-end gap-4">
              <QuoteButton />
              <CallButton className="border border-brass bg-transparent text-brass-light hover:bg-brass/10" />
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-stone/10 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 text-center sm:px-6 md:grid-cols-4">
          <div>
            <div className="text-2xl font-bold text-espresso">{SITE.yearsExperience}</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-stone">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-espresso">7</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-stone">GTA Cities Served</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-espresso">4</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-stone">Core Services</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-espresso">1:1</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-stone">Direct Communication</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-brass-dark">What We Build</p>
          <h2 className="text-3xl font-bold text-espresso">Four services, one standard of craftsmanship</h2>
          <p className="max-w-2xl text-stone">
            From full home renovations down to the last piece of trim.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-brass-dark">How It Works</p>
          <h2 className="mt-2 text-3xl font-bold text-espresso">Our process, start to finish</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step}>
                <div className="text-3xl font-bold text-brass/50">{step.step}</div>
                <h3 className="mt-2 font-semibold text-espresso">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brass-dark">The Kind of Work We Do</p>
            <h2 className="mt-2 text-3xl font-bold text-espresso">Styles &amp; finishes we bring to life</h2>
          </div>
          <Link href="/gallery" className="text-sm font-semibold text-brass-dark hover:text-brass">
            View gallery →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {FEATURED_WORK.map((item, i) => (
            <div
              key={item.image}
              className="group relative overflow-hidden rounded-lg"
              style={{ aspectRatio: i === 0 ? "4/3" : "1/1" }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 rounded-full bg-cream/95 px-3 py-1 text-xs font-semibold text-espresso">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-stone/70">
          Representative styles and finishes — real project photos from Wood Prime &amp; Renovation are coming soon.
        </p>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brass-dark">About Wood Prime</p>
            <h2 className="mt-2 text-3xl font-bold text-espresso">Built by someone who notices the details</h2>
            <p className="mt-4 leading-relaxed text-stone">
              {SITE.founder} has spent {SITE.yearsExperience} years in renovation and
              finish carpentry, and the difference shows in the parts most people
              never think to check — the seams, the sightlines, the way a trim piece
              meets a corner. Wood Prime & Renovation was built on the idea that a
              renovation should still look sharp five years after the crew leaves,
              not just on handover day.
            </p>
            <p className="mt-4 leading-relaxed text-stone">
              Behind every project is a trusted network of trade professionals —
              carpentry, painting, flooring, roofing, electrical, plumbing and more —
              so your renovation is handled by the right specialist at every stage,
              coordinated under one point of contact.
            </p>
            <Link href="/about" className="mt-6 inline-block text-sm font-semibold text-brass-dark hover:text-brass">
              Meet {SITE.founder} →
            </Link>
          </div>
          <div className="relative h-72 overflow-hidden rounded-xl sm:h-80">
            <Image
              src="/images/about-craft.jpg"
              alt="Carpenter measuring wood with precision outdoors"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-brass-dark text-center">
          A Trusted Network
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-espresso">
          Every trade your project needs, under one roof
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-stone">
          Wood Prime & Renovation works with a hand-picked network of skilled
          trade professionals across specialties — this is only a sample, not the
          full list — so every part of your project, not just the carpentry, is
          handled to the same standard.
        </p>
        <div className="mt-10">
          <TradeNetwork />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold text-espresso">Where We Work</h2>
        <p className="mt-2 max-w-2xl text-stone">
          Proudly serving homeowners and realtors across these communities in the GTA.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="rounded-full border border-stone/20 bg-white px-5 py-2 text-sm font-medium text-espresso transition hover:border-brass hover:text-brass-dark"
            >
              {area.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-espresso py-16 text-cream">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold">Ready to talk about your project?</h2>
          <p className="mt-3 text-cream/75">
            Tell us what you're planning and we'll get back to you with next steps —
            no pressure, no obligation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <QuoteButton />
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </>
  );
}
