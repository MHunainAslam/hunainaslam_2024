# Hunain Aslam — Portfolio

Premium personal portfolio for a Senior Frontend Engineer, built as a fast,
SEO-friendly, single-page site.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (dark by default, light mode toggle via `next-themes`)
- **Framer Motion** for scroll-reveal + micro-interactions
- **lucide-react** icons (brand marks inlined in `src/components/ui/BrandIcons.tsx`)
- Deploy-ready for **Vercel** (`@vercel/analytics` included)

## Sections

Navbar → Hero → About → Skills → Experience (timeline) → Projects → Testimonials
→ Contact → Footer.

## Editing content

All copy, links, skills, experience and projects live in **`src/lib/data.ts`** —
edit that one file to update the site. Contact details live in the `profile`
object there.

## Resume download

The Hero "Resume" button links to `/resume.pdf`. Drop your CV at
`public/resume.pdf` to enable it.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Deploy

Push to GitHub and import the repo into Vercel — no extra config needed.
