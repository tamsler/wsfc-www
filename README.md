# West Sacramento Soccer Club Website

Modern React website for the West Sacramento Soccer Club Competitive Program.

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution workflow, TypeScript conventions, and PR quality checks.

## Stack

- React + Vite
- TypeScript
- Tailwind CSS with custom design tokens
- React Router for routing
- react-markdown for markdown-driven page content
- Cloudflare Pages static hosting
- GitHub as source-control and deployment origin

## Routes

- /
- /tryouts
- /fees
- /coaches
- /code-of-conduct
- /fields

Legacy compatibility redirect:

- /home redirects to /

## Content Model

Markdown-backed pages are stored in src/content:

- home.md
- tryouts.md
- fees.md
- coaches.md

Code of Conduct and Fields are rendered as embedded Google Drive documents with a fallback link that opens each document in a new tab.

## Local Development

1. Install dependencies:

	npm install

2. Start development server:

	npm run dev

3. Build production files:

	npm run build

4. Preview production build locally:

	npm run preview

## Cloudflare Pages Deployment (GitHub)

1. Push this repository to GitHub.
2. In Cloudflare Pages, create a new project and connect the GitHub repository.
3. Use the following build settings:

- Framework preset: Vite
- Build command: npm run build
- Build output directory: dist

4. Confirm SPA fallback support:

- public/_redirects contains: /* /index.html 200

5. Configure custom domain in Cloudflare Pages and update DNS records as prompted.

## Accessibility and SEO Baseline

- Semantic layout with header, nav, main, and footer landmarks
- Keyboard-accessible navigation and visible focus states
- Per-page title and description metadata
- robots.txt and sitemap.xml included in public directory

## TypeScript Conventions

- Prefer `type` aliases over `interface` for object and props typing
- Use `import type` for type-only imports
- Keep strict TypeScript settings enabled; do not weaken `tsconfig` strictness
- Run `npm run lint` and `npm run build` before opening a PR

## Content Updates

To update text content for markdown-backed pages, edit files in src/content and redeploy.
