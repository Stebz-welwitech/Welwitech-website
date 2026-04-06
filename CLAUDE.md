# CLAUDE.md - WELWITECH Astro Project

## Project Overview

WELWITECH is a digital studio website built with **Astro 5.x**, featuring advanced 3D graphics (Three.js), scroll-based animations (GSAP), and smooth scrolling (Lenis). Static site, no backend.

**Live URL:** https://welwitech2.netlify.app/
**Site config:** https://welwitech.com
**Deployment:** Netlify
**Language:** French (`lang="fr"`)

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Astro 5.16.x (static, SSG) |
| 3D/WebGL | Three.js 0.180, OGL, three-stdlib |
| Animation | GSAP 3.13 (ScrollTrigger, Draggable, SplitText) |
| Smooth Scroll | Lenis 1.3 |
| State | @pmndrs/vanilla |
| Styling | Pure CSS (PostCSS pipeline, no Tailwind) |
| Fonts | Google Fonts via Astro experimental `fonts` API (Roboto Slab + Inter) |
| SEO | @astrojs/sitemap, JSON-LD Schema.org, OG/Twitter meta |
| TypeScript | Strict mode (`astro/tsconfigs/strict`) |
| Formatting | Prettier + prettier-plugin-astro |

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build to ./dist/
npm run preview   # Preview production build
```

## Project Structure

```
src/
  pages/          # Single page: index.astro
  layouts/        # Layout.astro (master wrapper with SEO meta, JSON-LD)
  components/     # 24 Astro components
  styles/         # Global CSS architecture
  utils/          # TypeScript utilities (globalTicker, observers, reveals)
  i18n/           # Internationalization (French, extendable)
  assets/         # logo-icon.png, SVG logos
  types.ts        # Shared interfaces (Link, Image)
public/           # Static assets (images, favicon.svg, robots.txt)
```

## Color System (aligned with Welwitech gradient logo)

| Token | Hex | Role |
|-------|-----|------|
| `--rgb-brand-1` | `#7B2FF7` | Vivid purple (primary) |
| `--rgb-brand-2` | `#00B4D8` | Electric blue (accent) |
| `--rgb-brand-3` | `#f0edff` | Soft lavender (surfaces) |
| `--rgb-brand-4` | `#F9A825` | Warm amber (accent) |
| `--rgb-brand-5` | `#C850C0` | Vivid magenta (gradient mid) |
| `--color-bg` | `#fafafe` | Cool white background |
| `--color-text` | `#12121e` | Deep navy-black |
| `--color-text-alt` | `#6c708a` | Slate grey |

**Gradient tokens:**
- `--gradient-brand`: full logo gradient (purple -> magenta -> blue -> amber)
- `--gradient-brand-subtle`: transparent version for backgrounds

## Page Sections (order)

1. **HeroHome** — Title + subtitle + CTA "Reserver un appel"
2. **Introducing** — "On ne vend pas des heures. On livre des produits."
3. **Expertises** — 4 cards: UX/UI, Mobile, Web/SaaS, IA/Agents (`#expertises`)
4. **StepsTimeline** — 5-step method (`#methode`)
5. **GalleryText** — Portfolio (SYN, NomadTax, ScanVault)
6. **Statements** — 3 differentiators (full-screen scroll)
7. **Testimonial** — Client quote
8. **TextMarquee** — Tech stack ticker
9. **Plans** — 3 tiers: Starter 1890€ / Studio 6900€ / Enterprise 18000€ (`#tarifs`)
10. **Guarantees** — 7 guarantees
11. **Faqs** — 6 Q&A (`#faq`)
12. **Team** — 3 founders: Maurice, Stephane, Jess (`#equipe`)
13. **ImageMarquee** — Client logos
14. **Contact** — Form + email + location (`#contact`)
15. **Footer** — CTA band, 4-column grid, big WELWITECH text

## Key Components

| Component | Role |
|-----------|------|
| GL.astro | Three.js 3D scene (icosahedron, refraction shaders, logo colors) |
| GlPlaces.astro | Configurable 3D object placement |
| HeroHome.astro | Hero with multi-color gradient background |
| Expertises.astro | 2x2 grid of expertise cards |
| StepsTimeline.astro | Scroll-pinned vertical timeline |
| GalleryText.astro | Portfolio section with draggable gallery |
| Statements.astro | Full-screen scroll differentiators |
| Testimonial.astro | Client quote with gradient decorative mark |
| Plans.astro | Pricing cards (supports N items) |
| Guarantees.astro | Guarantee items with accent borders |
| Team.astro | Team member cards with gradient avatars |
| Contact.astro | Contact form on lavender background |
| Faqs.astro | Accordion FAQ |
| Button.astro | Reusable CTA with clip-path hover animation |
| Header.astro | Floating glass header with scroll behavior |
| Footer.astro | Multi-section footer with gradient accents |

## CSS Architecture

- **PostCSS plugins:** postcss-extend-rule, postcss-preset-env, postcss-global-data, cssnano
- **Global files shared:** `_extends.css`, `_media.css`
- **Scoped strategy:** `scopedStyleStrategy: 'where'`
- **Breakpoints:** `--mq-desktop-xl` (1920px+), `--mq-tablet` (987px), `--mq-phone` (576px)
- **Utilities:** `%u-container`, `%u-sr-only`, `%u-text`, `%u-heading`
- **24 easing functions** as CSS custom properties

## Important Patterns

### Text Reveals
`data-sy-reveal="words"` on headings, `data-sy-reveal="lines"` on paragraphs. Handled by `utils/reveals.ts`.

### Floating Header
Uses `position: fixed` with glass effect (`backdrop-filter: blur`) on scroll. Body classes: `is-nav-small`, `is-nav-hidden`, `is-nav-opened`.

### Logo
PNG icon (`src/assets/logo-icon.png`) + text "Welwitech" — not an SVG component. Imported as `logoIcon.src`.

### 3D Scene Colors
GL.astro uses logo-aligned colors: base `#7B2FF7`, waves `["#C850C0", "#00B4D8", "#F9A825"]`.

## Do NOT

- Do not add Tailwind CSS
- Do not use React/Vue/Svelte — pure Astro only
- Do not change brand colors without matching the logo gradient
- Do not modify PostCSS plugin order in `postcss.config.cjs`
- Do not refactor GL.astro script (tightly coupled closures, fragile)
