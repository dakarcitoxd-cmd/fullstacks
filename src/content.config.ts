// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Nuevo loader requerido en Astro V6

const blog = defineCollection({
  // Cargamos los archivos usando glob indicando la ruta y extensiones
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    rating: z.number().min(1).max(10),
    platform: z.string(),
    image: z.string(),
    pubDate: z.coerce.date(), // Usamos z.coerce.date() para que maneje las fechas de forma flexible
    description: z.string(),
  }),
});

export const collections = { blog };