---
name: wsfc-www
description: Guides development of the West Sacramento FC club website. Use when adding pages, components, styles, data, or routes to this React/TypeScript/Vite/Tailwind project. Covers tech stack conventions, design system, styling patterns, accessibility requirements, and TypeScript rules specific to this codebase.
compatibility: Designed for Claude Code. Requires Node.js and npm.
metadata:
  author: wsfc
  version: "1.0"
---

# WSFC Website — Development Skill

## Stack Overview

| Layer | Tool | Version |
|---|---|---|
| UI | React | 19 |
| Language | TypeScript | 6 (strict) |
| Router | React Router DOM | 7 |
| Build | Vite | 8 |
| CSS | Tailwind CSS v4 + global CSS | 4 |
| Lint | ESLint (flat config) | 9 |
| Deploy | Cloudflare Pages | — |

## Project Layout

```
src/
  main.tsx          # Entry point
  App.tsx           # Route definitions + SiteLayout wrapper
  index.css         # Global styles + CSS design tokens
  components/
    SiteLayout.tsx  # Header, nav, footer, mobile bottom nav
    PageMeta.tsx    # Document title + meta description side effect
  pages/            # One file per route
  data/             # TypeScript data structures
  content/          # Markdown source files (not yet wired to pages)
public/             # Static assets (images, robots.txt, sitemap.xml)
```

## Adding a New Page

1. Create `src/pages/FooPage.tsx` as a default-export functional component.
2. Add `<PageMeta title="Foo" description="..." />` as the first child.
3. Register a `<Route path="/foo" element={<FooPage />} />` in `src/App.tsx`.
4. Add a nav entry to the `navItems` array in `src/components/SiteLayout.tsx`.

```tsx
// src/pages/FooPage.tsx
import PageMeta from "../components/PageMeta";

export default function FooPage() {
  return (
    <>
      <PageMeta title="Foo" description="Short description for search engines." />
      <section className="hero" aria-labelledby="foo-title">
        <h2 id="foo-title">Foo</h2>
      </section>
    </>
  );
}
```

## TypeScript Conventions

- Use `type` aliases — **never** `interface` (ESLint enforces this).
- Use `import type` for type-only imports.
- Define prop types outside the component, immediately above it.
- Use literal union types instead of enums: `"Girls" | "Boys"` not `enum Gender`.
- Use the `satisfies` operator on static data arrays for compile-time validation.
- Strict mode is on: no implicit any, no unused locals/params.

```ts
// Correct
export type Coach = {
  name: string;
  gender: "Girls" | "Boys";
};
export const coaches = [...] satisfies Coach[];

// Wrong
interface Coach { ... }
export enum Gender { ... }
```

## Styling Rules

All visual design lives in `src/index.css`. There are **no CSS modules** and **no scoped styles**.

### Design Tokens (CSS custom properties)

```css
--color-primary:           #ba0c00   /* WSFC red */
--color-secondary:         #2e5ab5   /* WSFC blue */
--color-surface:           #fdf8f0
--color-on-primary:        #ffffff
--color-on-surface:        #1a1a1a
--color-on-surface-variant:#555555
```

Always reference tokens, never hard-code colors.

### Available Utility Classes

| Class | Purpose |
|---|---|
| `hero` | Full-bleed hero section with gradient + clip-path |
| `btn-primary` | White filled button |
| `btn-secondary` | Transparent white outlined button |
| `content-card` | Standard card with shadow |
| `session-card` | Session/schedule card |
| `coach-card` | Coach profile card |
| `coach-grid` | Responsive grid for coach cards |
| `session-grid` | Responsive grid for session cards |
| `quick-links-grid` | Homepage quick-access grid |
| `section-heading` | Styled `<h3>` section title |
| `skip-link` | Accessibility skip navigation |

### Responsive Breakpoints

- Mobile-first baseline
- `@media (min-width: 480px)` — small phones landscape
- `@media (min-width: 560px)` — larger phones
- `@media (min-width: 768px)` — tablet/desktop

Desktop gets the top navigation bar; mobile gets the bottom tab bar.

### Adding New Styles

Add to `src/index.css`. Group related rules together. Use CSS custom properties from `:root` for all color and spacing values. Do not add inline `style={{}}` props unless the value is truly dynamic (e.g., a percentage from state).

## Accessibility Requirements

Every page must include:
- `<PageMeta>` for document title and meta description
- Sections labelled with either `aria-labelledby="heading-id"` or `aria-label="..."`
- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`
- Internal links via `<Link>` (React Router), never `<a href>` for same-site navigation
- Active nav state via `NavLink` with `className={({ isActive }) => ...}` callback

```tsx
<NavLink
  to="/tryouts"
  end
  className={({ isActive }) =>
    isActive ? "nav-link nav-link-active" : "nav-link"
  }
>
  Tryouts
</NavLink>
```

## Data Patterns

Static data lives in `src/data/`. Each file exports a type and a typed constant.

```ts
// src/data/example.ts
export type Item = {
  id: string;
  label: string;
};

export const items: Item[] = [
  { id: "a", label: "Alpha" },
] satisfies Item[];
```

For inline page-specific data (quick links, feature lists), define the array as a `const` inside the page file above the component — do not export it unless shared.

## Routing

Routes are declared in `src/App.tsx`. The `SiteLayout` wraps all routes via a parent route.

- Home route uses `end` to avoid false-positive active matching.
- Unknown paths fall through to `<NotFoundPage />` via `path="*"`.
- Legacy URLs redirect with `<Navigate>`.

## Build & Quality Checks

```bash
npm run dev       # Local dev server with HMR
npm run build     # tsc -b && vite build (both must pass)
npm run lint      # ESLint — must be clean before PR
npm run preview   # Preview production build locally
```

Always run `npm run build` before considering work done. TypeScript errors and lint errors are CI blockers.

## Deployment

Cloudflare Pages deploys automatically on push to `main`. The `public/_redirects` file ensures all paths serve `index.html` for client-side routing. Build output is `dist/`.
