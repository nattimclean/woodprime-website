"use client";

import { useRef } from "react";
import { GOOGLE_REVIEWS_URL, TESTIMONIALS } from "@/lib/site";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-brass" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.61.99-5.79-4.21-4.1 5.82-.85L10 1.5z"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth || 320) + 24;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  // No real reviews loaded yet. Point people to Google instead of showing
  // nothing, and never fabricate placeholder quotes here.
  if (TESTIMONIALS.length === 0) {
    return (
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-brass-dark">
            What Clients Say
          </p>
          <h2 className="mt-2 text-3xl font-bold text-espresso">Reviews are on their way</h2>
          <p className="mt-4 leading-relaxed text-stone">
            We're collecting reviews from recent Wood Prime &amp; Renovation clients on
            Google. Check back soon, or ask us directly for references from current
            projects.
          </p>
          {GOOGLE_REVIEWS_URL && (
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-md bg-brass px-6 py-3 text-sm font-semibold text-espresso transition hover:bg-brass-light"
            >
              See our Google reviews
            </a>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brass-dark">
              What Clients Say
            </p>
            <h2 className="mt-2 text-3xl font-bold text-espresso">
              Trusted by homeowners across the GTA
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => scrollByCard(-1)}
              className="rounded-full border border-stone/20 p-2 text-espresso transition hover:border-brass hover:text-brass-dark"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={() => scrollByCard(1)}
              className="rounded-full border border-stone/20 p-2 text-espresso transition hover:border-brass hover:text-brass-dark"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name + t.location}
              data-card
              className="w-[85vw] shrink-0 snap-start rounded-xl border border-stone/10 bg-cream p-6 shadow-sm sm:w-[360px]"
            >
              <Stars rating={t.rating} />
              <p className="mt-4 text-sm leading-relaxed text-espresso">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-espresso">{t.name}</p>
              <p className="text-xs text-stone">{t.location}</p>
            </div>
          ))}
        </div>

        {GOOGLE_REVIEWS_URL && (
          <div className="mt-4 text-center">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-brass-dark hover:text-brass"
            >
              Read more reviews on Google →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
