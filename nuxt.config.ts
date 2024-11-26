// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,

  runtimeConfig: {
    apiUrl: process.env.API_URL,
    wsUrl: process.env.WS_URL,
    googleAuthUrl: process.env.GOOGLE_AUTH_URL,
    appleAuthUrl: process.env.APPLE_AUTH_URL,
    domain: process.env.APP_DOMAIN,
    public: {
      apiUrl: process.env.API_URL,
      wsUrl: process.env.WS_URL,
      googleAuthUrl: process.env.GOOGLE_AUTH_URL,
      appleAuthUrl: process.env.APPLE_AUTH_URL,
      domain: process.env.APP_DOMAIN,
    },
  },

  css: [
    // '~/assets/styles/fontawesome/css/all.min.css',
    '~/assets/styles/index.scss',
    // 'bootstrap/dist/css/bootstrap.css',
  ],
  app: {
    head: {
      htmlAttrs: { lang: 'en', class: 'dark' },
      charset: 'utf-8',
      // viewport: 'width=500, initial-scale=1',
      viewport: 'content=width=device-width, initial-scale=1',

      title: 'Feis.ai',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },

        // <link rel="preconnect" href="https://fonts.googleapis.com">
        // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        // <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Manrope&display=swap" rel="stylesheet">        { rel: 'stylesheet',href: 'https://fonts.googleapis.com/css?family=Libre Franklin' },

        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Manrope:wght@200..800&family=Noto+Color+Emoji&display=swap' },


        // { rel: 'stylesheet',href: 'https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Manrope&display=swap' },

        // <link rel="preconnect" href="https://fonts.googleapis.com">
        // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        // <link href="" rel="stylesheet">
      ],
      script: [
        // { src: 'https://js.stripe.com/v3/pricing-table.js', async: true },
        // { src: 'https://js.stripe.com/v3/buy-button.js', async: true },
        // { src: 'https://js.stripe.com/v3/', async: true },
      ],

      meta: [
        { name: 'description', content: 'WannaBeAi' },
        // https://www.favicon-generator.org/
        // {rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon/apple-icon-57x57.png'},
        // {rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon/apple-icon-60x60.png'},
        // {rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon/apple-icon-72x72.png'},
        // {rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon/apple-icon-76x76.png'},
        // {rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon/apple-icon-114x114.png'},
        // {rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/apple-icon-120x120.png'},
        // {rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/apple-icon-144x144.png'},
        // {rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/apple-icon-152x152.png'},
        // {rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-icon-180x180.png'},
        // {rel: 'icon', sizes: '192x192', type: 'image/png', href: '/favicon/android-icon-192x192.png'},
        // {rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon/favicon-32x32.png'},
        // {rel: 'icon', sizes: '96x96', type: 'image/png', href: '/favicon/favicon-96x96.png'},
        // {rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon/favicon-16x16.png'},
        // {name: 'msapplication-TileImage', content: '/favicon/ms-icon-144x144.png'},

        { name: 'msapplication-TileColor', content: '#410963' },
        { name: 'theme-color', content: '#410963' },
        { name: 'msapplication-navbutton-color', content: '#410963' },
        { name: 'apple-mobile-web-app-status-bar-style', content: '#410963' },
      ],
    },
    // pageTransition: {
    //   name: 'fade',
    //   mode: 'out-in',
    //   duration: 300,
    //   // onBeforeEnter: (el) => {},
    //   // onEnter: (el, done) => {},
    //   // onAfterEnter: (el) => {},
    // },
  },


  modules: ['@pinia/nuxt', '@element-plus/nuxt', 'vue3-carousel-nuxt'],

  elementPlus: {
    globalConfig: { size: 'large', zIndex: 3000 },
  },
  globalConfig: { size: 'large', zIndex: 3000 },

})
