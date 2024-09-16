import { z, defineCollection } from "astro:content";

export const collections = {
	events: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			date: z.string(),
			description: z.string().optional(),
			organizer: z.string(),
			location: z.string(),
			image: z.string().optional(),
		})
	}),
};
