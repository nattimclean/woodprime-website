import Link from "next/link";
import Logo from "./Logo";
import { NAV_LINKS, SERVICE_AREAS, SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            Home renovation, basement renovation, handyman services and outdoor
            living builds across the Greater Toronto Area.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-brass-light">Services</h3>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-brass-light">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-brass-light">Service Areas</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {SERVICE_AREAS.map((a) => (
              <li key={a.slug}>
                <Link href={`/service-areas/${a.slug}`} className="hover:text-brass-light">
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-brass-light">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`tel:${SITE.phoneHref}`} className="hover:text-brass-light">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-brass-light">
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-brass-light">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 px-4 py-6 text-center text-xs text-cream/50 sm:px-6">
        © {new Date().getFullYear()} {SITE.name}. Serving the Greater Toronto Area. All rights reserved.
      </div>
    </footer>
  );
}
