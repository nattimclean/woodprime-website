import type { Metadata } from "next";
import Image from "next/image";
import { QuoteButton } from "@/components/CTAButtons";
import { FEATURED_WORK } from "@/lib/site";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "A look at the styles and finishes Wood Prime & Renovation brings to home renovation, basement renovation and outdoor living projects across the GTA.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brass-dark">Our Work</p>
      <h1 className="max-w-2xl text-4xl font-bold text-espresso">Styles &amp; Finishes We Bring to Life</h1>
      <p className="mt-4 max-w-2xl text-stone">
        A look at the kind of work Wood Prime &amp; Renovation specializes in — from
        kitchens and basements to decks, fences and pergolas. Real photos from
        completed WoodPrime projects are coming soon; reach out and we're happy to
        share references directly in the meantime.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURED_WORK.map((item) => (
          <div key={item.image} className="group relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 rounded-full bg-cream/95 px-3 py-1 text-xs font-semibold text-espresso">
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-14 text-center">
        <QuoteButton />
      </div>
    </div>
  );
}
