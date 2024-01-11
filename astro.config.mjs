import preact from "@astrojs/preact";
import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";

import mdx from "@astrojs/mdx";
import compress from "astro-compress";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [mdx(), compress(), preact()],
  vite: {
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/mixins" as *;`,
        },
      },
    },
  },
});
