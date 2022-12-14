// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [{
        name: 'description',
        content: 'Nebula Army Builder'
      }]
    }
  },
  postcss: {
    plugins: { 'postcss-nested': {} }
  },
  css: ['~~/assets/styles/factions.css'],
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-lodash',
    '@vueuse/nuxt',
    '@nuxtjs/supabase'
  ],
})
