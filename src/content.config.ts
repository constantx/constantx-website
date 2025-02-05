import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const commonSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  topics: z.array(z.string()).optional(),
  draft: z.boolean().optional(),
});

const posts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/` directory.
  loader: glob({
    base: './src/content/posts', pattern: '**/*.{md,mdx}', 
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
  posts,
  pages,
};
