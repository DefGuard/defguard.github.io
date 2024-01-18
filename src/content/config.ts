import { defineCollection, z } from "astro:content";

const productFeatures = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
  })
})

const pricing = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    order: z.number(),
    price: z.string(),
    link: z.string(),
    linkTarget: z.string().optional(),
    buttonText: z.string().optional(),
  })
})

export const collections = {
  'client-features': productFeatures,
  'core-features': productFeatures,
  'pricing': pricing,
}
