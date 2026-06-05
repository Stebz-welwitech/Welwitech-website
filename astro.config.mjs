// @ts-check
import {
  defineConfig,
  fontProviders,
} from "astro/config";


import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  site: 'https://welwitech.com',
  scopedStyleStrategy: 'where',

  vite: {
    // `astro preview` (production start command) runs Vite's preview server,
    // which blocks unknown Host headers. Behind the Dokploy reverse proxy the
    // forwarded Host can vary, so disable the check entirely (safe for a static
    // site served via a trusted proxy).
    preview: {
      allowedHosts: true,
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            three: ['three', 'three-stdlib'],
          },
        },
      },
    },
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Roboto Slab",
        cssVariable: "--font-roboto-slab",
        weights: ["100 900"],
      },
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
        weights: ["100 900"],
      },
    ],
  },

  integrations: [sitemap()],
});