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
  link: z.string(),
  discount: z.number().optional(),
  disabled: z.boolean().optional().default(false),
  linkTarget: z.string().optional(),
  buttonText: z.string().optional(),
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
};
