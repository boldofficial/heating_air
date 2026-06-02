# Chicago Heating & Air — HVAC Website

A premium, responsive, SEO-optimized static website for Chicago Heating & Air, an HVAC company serving Chicago, IL.

Built with [Astro](https://astro.build) and deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

## Tech Stack

- **Framework:** Astro 6 (static site generation)
- **Deploy target:** Cloudflare Pages
- **Rendering:** Static HTML (no SSR)
- **CSS:** Scoped styles with CSS Grid/Flexbox, mobile-first
- **JS:** Minimal vanilla JavaScript (mobile nav toggle, form handler)
- **Fonts:** Inter (system sans-serif)

## Pages (11 total)

| URL | Page |
|-----|------|
| `/` | Home |
| `/services/` | HVAC Services Overview |
| `/ac-repair-chicago/` | AC Repair |
| `/furnace-repair-chicago/` | Furnace & Heating Repair |
| `/ac-installation-chicago/` | AC Installation & Replacement |
| `/emergency-hvac-service-chicago/` | Emergency HVAC Service |
| `/indoor-air-quality-chicago/` | Indoor Air Quality |
| `/hvac-maintenance-chicago/` | Maintenance & Tune-Ups |
| `/service-area/chicago/` | Service Area: Chicago, IL |
| `/contact/` | Contact / Request Service |
| `/privacy-policy/` | Privacy Policy |

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for Cloudflare Pages deployment instructions.

## Business Info

NAP data is managed centrally in `src/config/business.ts`. Update this file to change phone, address, or service information across the entire site.

## SEO Features

- Unique title & meta description per page
- Clean URLs with canonical tags
- LocalBusiness / HVACBusiness JSON-LD schema
- FAQPage schema on FAQ sections
- BreadcrumbList schema
- Open Graph & Twitter Card metadata
- Auto-generated sitemap.xml
- robots.txt included
