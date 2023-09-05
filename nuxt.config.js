export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "quwi-test-task",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  components: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth", "@nuxtjs/toast"],
  toast: {
    position: "top-right",
  },
  axios: {
    baseURL: process.env.API_BASE_URL,
    browserBaseURL: process.env.API_BASE_URL,
  },
  router: {
    middleware: ["isAuth"],
  },
  auth: {
    watchLoggedIn: true,
    strategies: {
      local: {
        endpoints: {
          login: { url: "auth/login", method: "post", propertyName: "token" },
          logout: { url: "auth/logout", method: "post" },
          user: false,
        },
        tokenRequired: true,
        tokenName: "Authorization",
      },
    },
  },
  server: {
    port: 3000, // default: 3000
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
