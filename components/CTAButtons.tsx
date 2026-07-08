import { SITE } from "@/lib/site";

const BASE = "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition";

// Note: when a custom `className` is passed, it fully REPLACES the default
// color/background classes instead of being appended alongside them. Tailwind
// resolves conflicting utility classes (e.g. text-espresso vs text-cream) by
// stylesheet order, not by attribute order, so mixing default + override
// color classes on the same element causes unpredictable/invisible results.
// Always pass a complete color set (bg + text + hover) when overriding.

export function CallButton({ className }: { className?: string }) {
  return (
    <a
      href={`tel:${SITE.phoneHref}`}
      className={`${BASE} ${className || "bg-brass text-espresso hover:bg-brass-light"}`}
    >
      Call {SITE.phoneDisplay}
    </a>
  );
}

export function WhatsAppButton({ className, message }: { className?: string; message?: string }) {
  const defaultMessage =
    "Hi! I'm reaching out from the Wood Prime & Renovation website and I'd like more information about your services.";
  const href = `${SITE.whatsappHref}?text=${encodeURIComponent(message || defaultMessage)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${BASE} ${className || "bg-[#25D366] text-white hover:bg-[#20bd5a]"}`}
    >
      WhatsApp Us
    </a>
  );
}

export function QuoteButton({ className }: { className?: string }) {
  return (
    <a
      href="/contact"
      className={`${BASE} ${className || "bg-brass text-espresso hover:bg-brass-light"}`}
    >
      Request a Callback
    </a>
  );
}
