import { defineCollection, z } from "astro:content";

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

export type Roadmap = z.infer<typeof roadmapSchema>;

const roadmap = defineCollection({
  type: "content",
  schema: roadmapSchema,
});

export type PricingSchema = z.infer<typeof pricingSchema>;

const pricing = defineCollection({
  type: "content",
  schema: pricingSchema,
});

export const collections = {
  "client-features": productFeatures,
  "core-features": productFeatures,
  pricing: pricing,
  roadmap,
};
