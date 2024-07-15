// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-15',
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  modules: ['nuxt-quasar-ui'],
  quasar: {
    /* */
  },
});