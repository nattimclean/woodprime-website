import { SITE } from "@/lib/site";

export function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={`tel:${SITE.phoneHref}`}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-brass px-6 py-3 text-sm font-semibold text-espresso transition hover:bg-brass-light ${className}`}
    >
      Call {SITE.phoneDisplay}
    </a>
  );
}

export function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={SITE.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-md border border-cream/40 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream/10 ${className}`}
    >
      WhatsApp Us
    </a>
  );
}

export function QuoteButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="/contact"
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-brass px-6 py-3 text-sm font-semibold text-espresso transition hover:bg-brass-light ${className}`}
    >
      Get a Free Quote
    </a>
  );
}
