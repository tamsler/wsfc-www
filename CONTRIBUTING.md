# Contributing

Thanks for contributing to the West Sacramento Futbol Club website.

## Development Setup

1. Install dependencies:

   npm install

2. Start local development:

   npm run dev

3. Run quality checks before opening a PR:

   npm run lint
   npm run build

## TypeScript Standards

- Prefer `type` aliases over `interface` where applicable
- Use `import type` for type-only imports
- Keep strict TypeScript settings enabled
- Do not weaken ESLint or TypeScript rules to bypass errors

## Content and Routing

- Markdown page content lives in `src/content`
- Keep route structure aligned with:
  - `/`
  - `/tryouts`
  - `/fees`
  - `/coaches`
  - `/code-of-conduct`
  - `/about`
  - `/fields`

## Pull Request Checklist

- Changes are scoped and intentional
- Lint passes locally
- Build passes locally
- Accessibility and metadata are preserved where relevant
- README is updated when behavior or workflow changes
