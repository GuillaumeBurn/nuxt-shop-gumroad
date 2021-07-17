module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/axios", mode: "server" },
    { src: "~/plugins/lottie", mode: "client" },
    { src: "~/plugins/i18n.js" }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "@nuxtjs/style-resources",
    "@nuxtjs/recaptcha"
  ],
  styleResources: {
    scss: ["assets/scss/abstracts/_variables.scss"]
  },
  recaptcha: {
    hideBadge: true,
    siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
    version: 3,
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: { proxy: true },
  proxy: {
    "/api/": {
      target: "https://api.gumroad.com/v2",
      pathRewrite: { "^/api/": "" }
    }
  },
  /*
   ** Build configuration
   */
  build: { vendor: ["vue-i18n"] },
  serverMiddleware: [
    // Will register file from project api directory to handle /api/* requires
    { path: "/api/contact", handler: "~/api/index.js" }
  ],
  router: {
    middleware: "i18n"
  },
  generate: {
    routes: [
      "/en",
      "/en/shop",
      "/en/services",
      "/en/blog",
      "/en/about",
      "/en/contact",
      "/fr",
      "/fr/shop",
      "/fr/services",
      "/fr/blog",
      "/fr/about",
      "/fr/contact"
    ]
  },
  server: {
    port: "3033"
  },
  telemetry: false
};
