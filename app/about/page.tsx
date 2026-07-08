import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { QuoteButton, CallButton } from "@/components/CTAButtons";
import TradeNetwork from "@/components/TradeNetwork";

export const metadata: Metadata = {
  title: "About Wood Prime & Renovation",
  description:
    "20+ years of hands-on renovation and finish carpentry experience, backed by a trusted network of carpentry, painting, flooring and roofing professionals across the Greater Toronto Area.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brass-dark">About Us</p>
      <h1 className="text-4xl font-bold text-espresso">
        Renovation work judged by the details, not just the demo day photos
      </h1>

      <div className="relative mt-8 h-72 overflow-hidden rounded-xl sm:h-96">
        <Image
          src="/images/work-workshop.jpg"
          alt="Craftsman working with wood in a workshop"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
        />
      </div>

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-stone">
        <p>
          {SITE.name} is built around {SITE.founder}'s {SITE.yearsExperience} years of
          hands-on experience in renovation and finish carpentry. Over two decades on
          job sites across the GTA, the lesson has stayed the same: the parts of a
          renovation that make it feel truly finished are usually the parts most
          contractors rush past.
        </p>
        <p>
          That's the standard this business is built on — not just getting a project
          done, but getting the terminations right: the seams, the transitions, the
          way trim meets a corner, the way a deck board sits flush against the house.
          Most people won't consciously notice good finishing work. They'll just
          notice that the space feels right.
        </p>
        <p>
          We work directly with homeowners planning a renovation for their own
          family, and with realtors preparing a property for sale — from a full home
          renovation or basement finish, to handyman repairs, to a new deck, fence
          or pergola out back.
        </p>
        <p>
          No single person can be an expert in every trade, so {SITE.founder} works
          with a hand-picked network of trade professionals — carpentry, painting,
          flooring, roofing, electrical, plumbing, drywall, tiling, windows, doors,
          landscaping and more — brought in as each project needs them. You still
          deal with one point of contact from start to finish; the right specialist
          just handles the right part of the job.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-center text-xl font-semibold text-espresso">Our trade network</h2>
        <p className="mt-2 text-center text-sm text-stone">A sample of the specialties we coordinate — not the full list.</p>
        <div className="mt-6">
          <TradeNetwork />
        </div>
      </div>

      <div className="mt-12 rounded-lg border border-stone/15 bg-white p-8">
        <h2 className="text-xl font-semibold text-espresso">What guides how we work</h2>
        <ul className="mt-4 space-y-3 text-stone">
          <li>
            <span className="font-semibold text-espresso">Detail-first craftsmanship —</span>{" "}
            the finishing touches are treated as part of the job, not an afterthought.
          </li>
          <li>
            <span className="font-semibold text-espresso">Direct communication —</span>{" "}
            you work with the person actually building your project.
          </li>
          <li>
            <span className="font-semibold text-espresso">Transparent quoting —</span>{" "}
            a clear, itemized scope of work before anything starts.
          </li>
        </ul>
      </div>

      <div className="mt-14 flex flex-wrap gap-4">
        <QuoteButton />
        <CallButton className="border border-brass bg-transparent text-brass-dark hover:bg-brass/10" />
      </div>
    </div>
  );
}
