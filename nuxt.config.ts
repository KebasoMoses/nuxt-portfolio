// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/icon'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  content: {
    highlight: {
      theme: {
        default: 'min-light',
        dark: 'min-dark'
      }
    }
  },
  future: {
    compatibilityVersion: 4,
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})