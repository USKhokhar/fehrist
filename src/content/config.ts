import {z, defineCollection} from "astro:content"

const postCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        postAuthor: z.string(),
        genre: z.string(),
        gh_username: z.string(),
    })
})

export const collections = {
    'posts': postCollection
};