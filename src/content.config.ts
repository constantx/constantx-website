import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const commonSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  topics: z.array(z.string()).optional(),
  draft: z.boolean().optional(),
});

const thoughts = defineCollection({
  // Load Markdown and MDX files in the directory.
  loader: glob({
    base: './src/content/thoughts', pattern: '**/*.{md,mdx}', 
  }),
  // Type-check frontmatter using a schema
  schema: commonSchema.extend({
    // add more fields here
  }),
});

const pages = defineCollection({
  loader: glob({
    base: './src/content/pages', pattern: '**/*.{md,mdx}', 
  }),
  schema: commonSchema.extend({
    // add more fields here
    tagline: z.string().optional(),
  }),
});

export const collections = {
  thoughts,
  pages,
};
