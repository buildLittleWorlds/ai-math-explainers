# The Mathematics of Discovery

An Astro atlas of ten AI-assisted mathematical milestones from 2025–2026, with generated steampunk teaching plates, sourced explanations, and browser-based experiments.

Live URL: https://buildlittleworlds.github.io/ai-math-explainers/

## Development

Use Node 24. Run `npm ci`, then `npm run dev`. To verify production output, run `npm run build && npm test`.

The home page lives in `src/pages/index.astro`. Ten routes share `src/pages/discoveries/[slug].astro`, using the content in `src/data/discoveries.ts`. Original illustrations remain in `assets/`; Astro creates responsive WebP versions during build. Each activity is implemented in `src/lib/experiments.mjs`, with reusable mathematics in `src/lib/math.mjs`.

## Deployment

Push to `main` to run the GitHub Pages workflow. It builds and tests before deployment. The site/base configuration targets the repository's project URL. No server, API keys or database are required.

## Scope and verification

The historical descriptions cite primary announcements or mathematical papers checked September 8, 2026. This is educational interpretation, not an independent proof audit. Every activity is a labeled small example, not the original discovery or proof. In particular, the fluid graph is a toy function and the dependency example does not execute Lean.

Tests check all ten controls and reset behavior in a simulated DOM, mathematical invariants, all eleven generated pages, and local links/assets. They do not establish visual layout in a real browser. An optional feature-detected WebMCP readout is contract-tested with a mock; browser-standard support is not assumed.
