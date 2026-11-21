# Jerome R. Martinez — Portfolio

Personal portfolio built with **React + Vite + React Router + Tailwind CSS v4** (mobile-first). One fixed screen, no page scrolling:
Home, About, Skills, Projects and Contact are panels you switch between from the dock in the header or the
buttons on Home. The n Bloom loading screen plays once per browser session (see `src/components/Loader.jsx`).

## Run locally
```bash
npm install
npm run dev      # development
npm run build    # production build -> dist/
npm run preview  # preview the build
```

## Styling (Tailwind, mobile-first)
All styling is Tailwind utility classes in the components. Un-prefixed classes are the phone layout;
`sm:` (640px), `md:` (768px) and `lg:` (1024px) add tablet and desktop. Colours, fonts and animations are
defined once in `src/index.css` under `@theme`, and shared button/section class strings are in `src/components/ui.js`.
The Contact page turns dark through the `dk:` variant (any element inside `data-dark`).

## Edit your content
Everything (name, intro, skills, projects, contact) lives in `src/data/content.js`.
- **Contact:** `github` is set. `email`, `phone` (with `phoneDisplay` / `phoneHref`) and `linkedin` (with
  `linkedinHandle`) are empty: fill them in and their rows, the footer links and the Email button appear on their own.
- **Projects:** each entry in `projects` renders through `src/components/ProjectCard.jsx`. Add `links: [{ label: "Repo", href: "https://..." }]` to show link buttons.
- **Routes:** `/`, `/about`, `/skills`, `/projects`, `/contact`; any other URL shows `src/pages/NotFound.jsx`.
- **Photos:** Home uses `src/assets/hero-cutout-bw.webp`, About uses `src/assets/portrait-bw.webp`.

## Hosting note
The site uses `BrowserRouter`, so the host must serve `index.html` for unknown paths
(Netlify/Vercel/Cloudflare Pages do this; for GitHub Pages switch to `HashRouter` in `src/main.jsx`).
