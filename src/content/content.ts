import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    rating: z.number().min(1).max(10),
    platform: z.string(),
    image: z.string(),
    pubDate: z.date(),
    description: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};