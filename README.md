# Wood Prime & Renovation — Website

Next.js 14 (App Router) + Tailwind CSS site for Wood Prime & Renovation,
built for deployment on Vercel with the domain **woodprime.ca**.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Project structure

- `app/` – pages (App Router), one folder per route
- `app/services/[slug]` – dynamic service pages (home renovation, basement
  renovation, handyman, patio/deck/fence/pergola)
- `app/service-areas/[city]` – dynamic local-SEO city pages (Oakville,
  Mississauga, Etobicoke, Toronto, Burlington, Milton, Hamilton)
- `app/sitemap.ts` / `app/robots.ts` – auto-generated sitemap.xml and robots.txt
- `app/opengraph-image.tsx` – auto-generated social share image
- `components/JsonLd.tsx` – structured data (schema.org HomeAndConstructionBusiness)
- `lib/site.ts`, `lib/services.ts`, `lib/areas.ts` – all editable business
  content (phone, email, service copy, city copy) in one place

## Editing content

To update phone number, email, or WhatsApp link: edit `lib/site.ts`.
To update service descriptions/FAQs: edit `lib/services.ts`.
To update city page copy: edit `lib/areas.ts`.

## Deploy: GitHub + Vercel + woodprime.ca

### 1. Push this project to GitHub

```bash
cd woodprime-website
git init
git add .
git commit -m "Initial website"
gh repo create woodprime-website --private --source=. --remote=origin
git push -u origin main
```

(No GitHub CLI? Create an empty repo at github.com/new, then:
`git remote add origin <repo-url> && git branch -M main && git push -u origin main`)

You can use your existing GitHub account with a new repository — a separate
GitHub account is only needed if you want the business to have fully
independent ownership/billing later. A new repo under your account is enough
to keep it organized and separately deployable.

### 2. Deploy on Vercel

1. Go to vercel.com → **Add New Project**.
2. Import the `woodprime-website` GitHub repo.
3. Framework preset: Next.js (auto-detected). No environment variables needed.
4. Click **Deploy**.

You can deploy this under your existing Vercel account as a new project —
Vercel's free tier supports unlimited separate projects, so there's no need
for a second account unless you want separate billing/ownership.

### 3. Point woodprime.ca (currently at WHC) to Vercel

1. In the Vercel project → **Settings → Domains** → add `woodprime.ca` and
   `www.woodprime.ca`.
2. Vercel will show the DNS records to add (typically an `A` record for the
   apex domain pointing to `76.76.21.21`, and a `CNAME` for `www` pointing to
   `cname.vercel-dns.com` — Vercel shows the exact current values).
3. Log in to your WHC account → DNS management for woodprime.ca → replace/add
   those records.
4. DNS propagation can take anywhere from a few minutes to 24–48 hours.
   Vercel will show the domain as "Valid" once it detects the change and will
   auto-issue an SSL certificate.

### 4. After launch

- Submit the site to [Google Search Console](https://search.google.com/search-console)
  and submit `https://woodprime.ca/sitemap.xml`.
- Create/claim a **Google Business Profile** for local map-pack visibility —
  this matters as much as the website itself for local SEO in Oakville,
  Mississauga, Burlington, etc.
- Replace the gallery placeholders in `app/gallery/page.tsx` with real project
  photos as soon as they're available — real photos are one of the biggest
  trust and conversion factors for renovation sites.
