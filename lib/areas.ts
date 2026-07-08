export type AreaCopy = {
  slug: string;
  name: string;
  blurb: string;
};

export const AREA_DETAILS: AreaCopy[] = [
  {
    slug: "oakville",
    name: "Oakville",
    blurb:
      "From Bronte to Old Oakville, we renovate homes for owners who expect finish carpentry and detailing to match the quality of the neighbourhood.",
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    blurb:
      "Full home renovations, basement finishing and outdoor builds for homeowners across Mississauga, from Port Credit to Streetsville.",
  },
  {
    slug: "etobicoke",
    name: "Etobicoke",
    blurb:
      "Renovation and handyman services for Etobicoke's mix of established homes and new builds, close to the Toronto core.",
  },
  {
    slug: "toronto",
    name: "Toronto",
    blurb:
      "Basement renovations, home renovations and finishing work for Toronto homeowners and realtors preparing properties for sale.",
  },
  {
    slug: "burlington",
    name: "Burlington",
    blurb:
      "Home renovations, basements and custom decks, fences and pergolas for Burlington homeowners who want outdoor spaces to match their interiors.",
  },
  {
    slug: "milton",
    name: "Milton",
    blurb:
      "Renovation and handyman services for Milton's growing communities, from newer subdivisions to established neighbourhoods.",
  },
  {
    slug: "hamilton",
    name: "Hamilton",
    blurb:
      "Full home renovations, basement finishing and outdoor living builds for homeowners across Hamilton and the surrounding area.",
  },
];

export function getAreaBySlug(slug: string) {
  return AREA_DETAILS.find((a) => a.slug === slug);
}
