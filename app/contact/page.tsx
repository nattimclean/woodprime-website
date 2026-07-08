import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { CallButton, WhatsAppButton } from "@/components/CTAButtons";
import { SITE, SERVICE_AREAS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote",
  description:
    "Get a free quote from Wood Prime & Renovation for your home renovation, basement renovation, handyman or patio project across the GTA.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brass-dark">Contact</p>
      <h1 className="max-w-2xl text-4xl font-bold text-espresso">Get a Free Quote</h1>
      <p className="mt-4 max-w-2xl text-stone">
        Tell us about your project and we'll follow up with next steps. Prefer to
        talk right away? Call or WhatsApp us directly.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3 rounded-lg border border-stone/15 bg-white p-8">
          <ContactForm />
        </div>
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-lg border border-stone/15 bg-white p-6">
            <h2 className="font-semibold text-espresso">Direct Contact</h2>
            <div className="mt-4 flex flex-col gap-3">
              <CallButton />
              <WhatsAppButton />
              <a href={`mailto:${SITE.email}`} className="text-sm text-stone hover:text-brass-dark">
                {SITE.email}
              </a>
            </div>
          </div>
          <div className="rounded-lg border border-stone/15 bg-white p-6">
            <h2 className="font-semibold text-espresso">Service Areas</h2>
            <p className="mt-2 text-sm text-stone">
              {SERVICE_AREAS.map((a) => a.name).join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
