require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  // accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["blog-post"],
  singleTypes: ["attendance-policy"],
  queryLimit: 1000,
};

module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://greenshirtstudio.com`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato\:300,400,900`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};
