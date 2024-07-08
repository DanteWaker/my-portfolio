// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  devtools: { enabled: true },
  vite: {
    vue: {
      customElement: true
    },
    vueJsx: {
      mergeProps: true
    }
  },
  modules: ["@nuxt/ui", "@nuxt/eslint", 'nuxt-icon', "@nuxt/fonts"],
  eslint: {
    checker: true,
    config: {
      stylistic: {
        indent: 'tab',
        semi: true,
      }
    }
  },
  colorMode: {
    preference: 'light'
  },
  ui: {
    global: true,
    icons: ['mdi', 'simple-icons']
  }
})