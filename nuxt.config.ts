// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  vite: {
    vue: {
      customElement: true
    },
    vueJsx: {
      mergeProps: true
    }
  },
  modules: ["@nuxt/ui", "@nuxt/eslint"],
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