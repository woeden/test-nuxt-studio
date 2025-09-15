import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        pages: defineCollection({
            type: 'page',
            source: 'pages/**/*.md'
        }),
        bands: defineCollection({
            type: 'data',
            source: 'bands/**/*.yaml'
        })
    }
})