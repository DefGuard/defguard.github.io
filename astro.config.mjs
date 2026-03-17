import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";
// Remove direct import and let Astro handle plugin loading

import mdx from "@astrojs/mdx";

import playformCompress from "@playform/compress";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: "https://defguard.net",
  trailingSlash: "ignore",
  prefetch: true,
  build: {
    assets: 'assets',
  },
  // Keep configuration simple to avoid conflicts
  mdx: {
    // Will inherit from markdown config
  },
  integrations: [
    react(),
    mdx(),
    playformCompress(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
        },
      },
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  markdown: {
    rehypePlugins: [
      // Add id attributes to headings (h1-h6) for direct section linking
      rehypeSlug,
      [rehypeExternalLinks, {
        target: "_blank",
        rel: ["nofollow", "noopener", "noreferrer"],
      }],
    ],
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    },
  },
  vite: {
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
          additionalData: `@use "@/styles/mixins" as *;`,
        },
      },
    },
    server: {
      // Allow all ngrok subdomains for development sharing (e.g., via ngrok tunnels)
      allowedHosts: ['.ngrok-free.app'],
    },
  },
});
