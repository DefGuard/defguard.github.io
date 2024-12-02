import { z } from "zod";

export const testimonialSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string().optional(),
  imagePrimary: z.string().min(1),
  imageSecondary: z.string().min(1),
  markdownRaw: z.string().optional(),
});

export type TestimonialData = z.infer<typeof testimonialSchema>;
