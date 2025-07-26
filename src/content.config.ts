import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
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




export const collections = { blog  };
