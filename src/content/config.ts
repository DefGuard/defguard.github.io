// Simple content collections config with no rehype plugins
import { defineCollection, z } from "astro:content";

// Schema definitions
const blogSchema = z.object({
  title: z.string(),
  publishDate: z.date(),
  description: z.string(),
  draft: z.boolean().optional().default(false),
  author: z.string().optional(),
  companyName: z.string().optional(),
  companyDescription: z.string().optional(),
  companyWebsite: z.string().optional(),
  image: z.string().optional(),
});

const productFeatures = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

const pricingSchema = z.object({
  name: z.string(),
  order: z.number(),
  price: z.number(),
  annualPrice: z.number().optional(),
  priceLink: z.string(),
  annualPriceLink: z.string().optional(),
  discount: z.number().optional(),
  disabled: z.boolean().optional().default(false),
  linkTarget: z.string().optional(),
  buttonText: z.string().optional(),
});

const roadmapSchema = z.object({
  title: z.string(),
  version: z.number(),
});

// Export types
export type Roadmap = z.infer<typeof roadmapSchema>;
export type Blog = z.infer<typeof blogSchema>;
export type PricingSchema = z.infer<typeof pricingSchema>;

// Collection definitions
const roadmap = defineCollection({
  type: "content",
  schema: roadmapSchema,
});

const pricing = defineCollection({
  type: "content",
  schema: pricingSchema,
});

const blog = defineCollection({
  type: "content",
  schema: blogSchema,
});

// Export collections
export const collections = {
  "client-features": productFeatures,
  "core-features": productFeatures,
  pricing,
  roadmap,
  blog,
};
