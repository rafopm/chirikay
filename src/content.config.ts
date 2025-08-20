import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Tipo de colección (markdown o data)
  type: 'content',
  // Schema para frontmatter
  schema: z.object({
    order: z.number(),
    title: z.string(),
    metatitle: z.string(),
    description: z.string(),
    metadescription: z.string(),
    imgurl: z.string(),
    imgthumburl: z.string(),
    alt: z.string(),
    pubDate: z.coerce.date(),
  }),
});

export const collections = { blog };