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