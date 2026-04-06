# SKILL.md - Frontend Design & Astro Development Skills

## Active Skills

### 1. Frontend Design (`frontend-design`)
Create distinctive, production-grade frontend interfaces with high design quality. Used for building web components, pages, and applications with creative, polished output.

**When to use:** Building new pages, sections, components, or UI elements for this project.

**Design System Reference:**
- Color palette: `--rgb-brand-1` to `--rgb-brand-5`, `--color-text`, `--color-bg` (#f7f8f2)
- Typography: Roboto Slab (headings), Inter (body) via CSS variables
- Spacing: Container max-width 72rem, padding via `%u-container`
- Animations: GSAP ScrollTrigger, SplitText reveals, Lenis smooth scroll
- 3D: Three.js icosahedron scene with refraction shaders

### 2. Astro Framework (`astro`)
**Documentation:** https://docs.astro.build/en/getting-started/
**Context7 Library ID:** `/withastro/docs`

**Key Astro Patterns for this project:**

#### Component Structure
```astro
---
// Frontmatter: imports, props, server-side logic
import type { Image } from '../types';
const { title, image } = Astro.props;
---

<section class="my-component">
  <h2>{title}</h2>
  <slot />
</section>

<style>
  .my-component {
    @extend %u-container;
    /* Scoped styles - use project CSS custom properties */
  }
</style>

<script>
  // Client-side JS - runs in the browser
  import gsap from 'gsap';
  // Animation logic here
</script>
```

#### Page Structure
```astro
---
import Layout from '../layouts/Layout.astro';
import HeroHome from '../components/HeroHome.astro';
---

<Layout>
  <HeroHome />
  <!-- More sections -->
</Layout>
```

#### CSS Breakpoints
```css
@media (--mq-tablet) { /* <= 987px */ }
@media (--mq-phone) { /* <= 576px */ }
@media (--mq-desktop-xl) { /* >= 1920px */ }
```

#### CSS Utilities (PostCSS Extends)
```css
.my-class {
  @extend %u-container;   /* Centered container with padding */
  @extend %u-text;         /* Base text styling */
  @extend %u-heading;      /* Heading styling */
}
```

#### Animation Pattern
```typescript
// Standard reveal animation setup
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Use IntersectionObserver or ScrollTrigger for scroll-based effects
```

## Astro Quick Reference

| Concept | Pattern |
|---------|---------|
| Props | `const { prop } = Astro.props;` in frontmatter |
| Slots | `<slot />` for content injection |
| Layouts | Wrap pages with `<Layout>` component |
| Scoped styles | `<style>` in component (auto-scoped via `:where()`) |
| Client JS | `<script>` tag (bundled, runs once) |
| Static assets | Place in `public/`, reference as `/filename.ext` |
| Images | Import from `src/assets/` for optimization |
| Dynamic routes | `[slug].astro` with `getStaticPaths()` |
| Content collections | Define in `src/content/config.ts` (not yet used) |
| Env variables | `import.meta.env.PUBLIC_*` for client, `import.meta.env.*` for server |

## Design Principles for WELWITECH

1. **Motion-first** - Every section should have scroll-triggered animations
2. **3D accents** - Use Three.js/WebGL for visual impact, not decoration
3. **Performance** - Intersection observers for lazy animation, no layout thrashing
4. **Accessibility** - Skip links, semantic HTML, ARIA labels, `prefers-reduced-motion` respect
5. **Responsive** - Mobile-first with custom media breakpoints, fluid typography
6. **Pure CSS** - No utility frameworks; use CSS custom properties + PostCSS extends
7. **Minimal JS** - Astro's zero-JS-by-default philosophy; only add JS for interactivity

## Documentation Lookup

When working on this project, use Context7 to fetch latest Astro docs:
- **Library ID:** `/withastro/docs`
- **Query examples:** "How to create content collections", "Astro image optimization", "View Transitions API"

For GSAP: search for `gsap` library on Context7
For Three.js: search for `three.js` library on Context7
