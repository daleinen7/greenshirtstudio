require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Green Shirt Studio`,
    siteUrl: `https://greenshirtstudio.com`,
    twitterUsername: `@GrnShirtStudio`,
    image: `/GSSLogo.png`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-use-query-params',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/ResponsiveFavicon4x.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        // id: 'G-EL71YC0QTP',
        id: 'GTM-5N266ZQ',

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },

        // Specify optional GTM environment details.
        // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
        // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
        // dataLayerName: 'YOUR_DATA_LAYER_NAME',

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: 'YOUR_ROUTE_CHANGE_EVENT_NAME',
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: 'YOUR_SELF_HOSTED_ORIGIN',
      },
    },
    `gatsby-plugin-netlify`,
    {
      /*
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url: 'https://greenshirtstudiowp.us/graphql',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato\:300,400,900`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
  ],
};
