export type Service = {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  intro: string;
  image: string;
  imageAlt: string;
  bullets: string[];
  subServices?: { name: string; description: string }[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "home-renovation",
    name: "Home Renovation",
    shortName: "Home Renovation",
    metaTitle: "Home Renovation Contractor in Oakville, Mississauga & the GTA | Wood Prime",
    metaDescription:
      "Full home renovations across Oakville, Mississauga, Burlington, Toronto and the GTA. Kitchens, additions, whole-home remodels built with 20+ years of craftsmanship.",
    heroTagline: "Whole-home renovations built around how you actually live",
    image: "/images/service-home-renovation.jpg",
    imageAlt: "Renovated luxury kitchen with marble backsplash and modern cabinetry",
    intro:
      "From a single room refresh to a full gut renovation, Wood Prime & Renovation plans and builds home renovations that hold up to close inspection. We work directly with homeowners and realtors across the GTA who care about the details other contractors skip — clean sightlines, tight seams, and finishes that still look sharp years later. Every project draws on our network of carpentry, painting, flooring and finishing professionals, coordinated under one point of contact.",
    bullets: [
      "Full home remodels and room-by-room renovations",
      "Kitchen and bathroom renovations",
      "Home additions and layout reconfigurations",
      "Flooring, trim, millwork and custom finishing carpentry",
      "Pre-listing renovations for realtors and sellers",
      "Detailed project timelines and transparent quoting",
    ],
    faqs: [
      {
        q: "Do you handle full gut renovations or just cosmetic updates?",
        a: "Both. We take on everything from cosmetic refreshes — paint, flooring, trim — to full gut renovations that touch layout, electrical and plumbing coordination, and structural finishing.",
      },
      {
        q: "Do you work with realtors preparing a home for sale?",
        a: "Yes. We regularly partner with realtors across Oakville, Mississauga and Toronto on pre-listing renovations that are scoped to maximize resale value without over-improving the property.",
      },
      {
        q: "How do you quote a home renovation project?",
        a: "We start with an on-site walkthrough, then provide a detailed written quote broken down by scope of work, so you know exactly what you're paying for before any work begins.",
      },
    ],
  },
  {
    slug: "basement-renovation",
    name: "Basement Renovation",
    shortName: "Basement Renovation",
    metaTitle: "Basement Renovation Contractor in Toronto & the GTA | Wood Prime",
    metaDescription:
      "Basement finishing and renovation in Toronto, Mississauga, Oakville, Etobicoke and Burlington. Rec rooms, basement suites and full basement remodels.",
    heroTagline: "Turn unused square footage into finished, functional space",
    image: "/images/service-basement.jpg",
    imageAlt: "Finished basement recreation room with modern seating and TV setup",
    intro:
      "A finished basement is one of the highest-value renovations you can make to a GTA home — but only when it's built properly. Wood Prime & Renovation finishes basements with the same standard of framing, insulation and finish carpentry we'd want in our own homes, so the space feels like a natural extension of the house, not an afterthought. We bring in trusted flooring, electrical and plumbing professionals from our trade network as each stage requires.",
    bullets: [
      "Basement finishing and full remodels",
      "Recreation rooms, home theatres and home gyms",
      "Basement bedrooms and bathrooms",
      "Secondary suites and in-law layouts",
      "Framing, insulation, drywall and trim",
      "Coordination with electrical and plumbing trades",
    ],
    faqs: [
      {
        q: "Can you help design the layout, or do I need a designer first?",
        a: "We can work from a design you already have, or help you lay out the space during our initial walkthrough based on how you plan to use it.",
      },
      {
        q: "Do you finish basements for secondary suites?",
        a: "Yes, we build out basement suites and in-law layouts. Permit and legal-suite requirements vary by municipality, and we'll walk you through what applies to your property.",
      },
      {
        q: "How long does a typical basement renovation take?",
        a: "Most full basement finishing projects run 4 to 8 weeks depending on scope, layout complexity, and whether a bathroom is included. We'll give you a firm timeline after the walkthrough.",
      },
    ],
  },
  {
    slug: "handyman-services",
    name: "Handyman Services",
    shortName: "Handyman",
    metaTitle: "Handyman Services in Oakville, Mississauga, Burlington & the GTA | Wood Prime",
    metaDescription:
      "Reliable handyman services across the GTA — repairs, small renovations, installations and home maintenance done right the first time. Serving Oakville, Mississauga, Burlington and more.",
    heroTagline: "The small jobs, done with the same care as the big ones",
    image: "/images/service-handyman.jpg",
    imageAlt: "Close-up of a carpenter's hands sanding wood outdoors with precision",
    intro:
      "Not every project needs a full renovation crew — but it still deserves to be done properly. Our handyman services cover the repairs, installs and small projects that keep a home running well, handled by the same team that builds full renovations, with the same standard for finish.",
    bullets: [
      "General repairs and maintenance",
      "Trim, door and drywall repairs",
      "Fixture, hardware and shelving installation",
      "Small carpentry and finishing projects",
      "Punch-list and pre-sale touch-ups",
      "Seasonal home maintenance",
    ],
    faqs: [
      {
        q: "Do you take on small jobs, or only larger renovation projects?",
        a: "We take on both. Handyman requests are handled alongside our renovation work, so no job is too small to get our full attention.",
      },
      {
        q: "Can you handle a punch list before I list my home?",
        a: "Yes — this is one of the most common requests we get from homeowners and realtors preparing a property for sale.",
      },
    ],
  },
  {
    slug: "patio-renovation",
    name: "Patio, Deck, Fence & Pergola Renovation",
    shortName: "Patio & Outdoor",
    metaTitle: "Deck, Fence & Pergola Builder in the GTA | Patio Renovation | Wood Prime",
    metaDescription:
      "Custom decks, fences and pergolas across Oakville, Burlington, Mississauga and the GTA. Patio renovations built for how you actually use your outdoor space.",
    heroTagline: "Outdoor spaces built to be lived in, not just looked at",
    image: "/images/service-patio.jpg",
    imageAlt: "Contemporary patio with wooden pergola and outdoor dining set",
    intro:
      "A well-built deck, fence or pergola changes how a family uses their backyard. Wood Prime & Renovation designs and builds outdoor living spaces across the GTA — from a new deck and privacy fence to a full patio renovation with a custom pergola — using construction methods built for Ontario's freeze-thaw winters, backed by our network of skilled carpentry and finishing professionals.",
    bullets: [
      "Custom deck design and construction",
      "Privacy, perimeter and decorative fencing",
      "Pergolas and shade structures",
      "Full patio and outdoor living renovations",
      "Composite and natural wood decking options",
      "Built to withstand Ontario winters",
    ],
    subServices: [
      {
        name: "Decks",
        description:
          "Custom-built decks in wood or composite decking, designed to fit your yard, your home's architecture, and how your family actually spends time outdoors.",
      },
      {
        name: "Fences",
        description:
          "Privacy fencing, perimeter fencing and decorative fencing built to last through Ontario's freeze-thaw cycles, with clean lines and solid, properly set posts.",
      },
      {
        name: "Pergolas",
        description:
          "Custom pergolas that define an outdoor living or dining space, built to complement your deck or patio and stand up to the elements year after year.",
      },
    ],
    faqs: [
      {
        q: "Do you build the whole patio, or just one element like a deck or fence?",
        a: "Both. We take on full patio renovations that combine decking, fencing and a pergola, or a single standalone project — whatever the space needs.",
      },
      {
        q: "What decking materials do you work with?",
        a: "We build with both natural wood and composite decking, and we'll walk you through the trade-offs on cost and maintenance so you can choose what's right for your home.",
      },
      {
        q: "Do fences and decks need a permit in my municipality?",
        a: "It depends on the city, the height of the structure and its proximity to property lines. We handle this as part of the planning process for every project.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
