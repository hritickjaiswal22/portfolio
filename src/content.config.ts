// src/content.config.ts
import { defineCollection, z } from "@pagesmith/site";

export const posts = defineCollection({
  loader: "markdown",
  directory: "content/posts",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    series: z.string().optional(),
    order: z.number().default(0),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { posts };
