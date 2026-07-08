import Link from "next/link";
import Image from "next/image";
import { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-stone/15 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="text-lg font-semibold text-espresso">{service.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone">{service.heroTagline}</p>
        </div>
        <span className="mt-4 inline-flex items-center text-sm font-semibold text-brass-dark group-hover:text-brass">
          Learn more →
        </span>
      </div>
    </Link>
  );
}
