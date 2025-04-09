export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: "https://fonts.cdnfonts.com/css/helvetica-neue-55"
      }
    ]
  },
  // ssr: true,
  // nitro: {
  //   preset: 'static'
  // },
  css: [
    './assets/scss/main.scss'
  ],
  vite: {
    css: {
      preprocessorOptions:{
        scss: {
          additionalData: '@use "./assets/scss/_variables.scss" as *;'
        }
      }
    }
  }
})
