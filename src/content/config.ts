import { defineCollection, z } from "astro:content";

const clientFeatures = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
  })
})

export const collections = {
  'client-features': clientFeatures,
}
