export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "web3-fe",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
            integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
            crossorigin: "anonymous",
        }, ],


        script: [
            // {
            //   src: "/bootstrap.bundle.min.js",
            // },
            {
                src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~/assets/css/style.css",
        // "~/assets/css/bootstrap.min.css",
        "~/assets/css/slick.css",
        "~/assets/css/slick-theme.css",
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};