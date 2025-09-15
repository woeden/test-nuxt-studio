import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        pages: defineCollection({
            type: 'page',
            source: 'pages/**/*.md',
        }),
        bands: defineCollection({
            type: 'data',
            source: 'bands/**/*.yaml',
            schema: z.object({
                styles:z.array(z.string())

            })
        })
    }
})