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
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        // 'master' has to be checked on Contentful
        // https://stackoverflow.com/questions/60892938/accessing-your-contentful-space-failed-with-gatsby-source-contentful
        // https://github.com/gatsbyjs/gatsby/issues/19392
        environment: process.env.ENVIRONMENT == 'production' ? 'master' : 'uat',
      },
    },
    'gatsby-plugin-image',
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
