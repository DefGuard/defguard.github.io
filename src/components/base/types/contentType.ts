import type { Render } from "astro:content";

export type Testmonial = {
  id: string;
  slug: string;
  body: string;
  collection: "testmonials";
  data: any;
} & { render(): Render[".md"] };
