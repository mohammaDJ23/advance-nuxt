export default {
  ssr: true,

  // this loading is for when ssr is true

  loading: { color: "#fa923f", height: "4px", duration: 5000 },

  // this loading is for when ssr is false

  loadingIndicator: {
    name: "circle",
    color: "#fa923f",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "advance-nuxt",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans",
      },
    ],
  },

  transpileDependencies: ["vuex-module-decorators"],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/styles"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~plugins/pre-load-components.ts",
    "~plugins/date-filter.ts",
    "~plugins/inject.ts",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxt/components",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    FIREBASE_URL:
      process.env.FIREBASE_URL ||
      "https://nuxt-blog-793e5-default-rtdb.firebaseio.com",
    FIREBASE_API_KEY: "AIzaSyCXcXX8O6dRWO8kH5jUu9lBXFcCCHSMepc",
  },

  // it will apply some styles when the page changes
  // the styles used in assets folder

  transition: {
    name: "fade",
    mode: "out-in",
  },
};
