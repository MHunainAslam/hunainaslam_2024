# Hunain Aslam — Portfolio

A modern, dark-mode portfolio for **Hunain Aslam**, Sr. Frontend Engineer. Built from scratch with a clean, minimal aesthetic, scroll-triggered animations, and a strong focus on performance and SEO.

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (custom theme, dark mode)
- **Framer Motion** (scroll-triggered animations & micro-interactions)
- **Lucide React** (icons) + custom brand SVGs
- **React Hook Form** (contact form validation)
- **Vercel Analytics**

## Sections

- **Hero** — animated aurora background, live status badge, stat strip
- **About** — profile photo, highlights, education, résumé link
- **Skills** — tech-stack cards, animated proficiency bars, marquee ribbon
- **Experience** — animated vertical timeline
- **Projects** — grid with hover lift/glow, tech tags, external links
- **Contact** — validated form (mailto fallback) + copy-to-clipboard details

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Customizing content

All content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts) — profile,
stats, skills, experience, education, and projects. Update it there; the UI reads
from a single source of truth.

### To do before launch

- Replace the `#` placeholders in the `projects` array with **live project URLs**.
- Swap `public/hunain.png` for a higher-resolution headshot if desired.
- (Optional) Wire the contact form to a real backend/email service (e.g. Resend,
  EmailJS) — it currently opens the visitor's mail client via `mailto:`.

## Deployment

Optimized for **Vercel** — push the branch and import, or `vercel --prod`.
