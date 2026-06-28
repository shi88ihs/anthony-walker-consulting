import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(['AI & Automation', 'Linux & Cloud', 'Field IT', 'Docker & VPS']),
    tags: z.array(z.string()),
    challenge: z.string(),
    outcome: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}$/),
    draft: z.boolean().default(false),
  }),
});

export const collections = { 'case-studies': caseStudies };
