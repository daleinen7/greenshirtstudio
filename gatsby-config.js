require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://greenshirtstudio.com`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      /*
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url: process.env.WPGRAPHQL_URL || `http://greenshirtstudio.com/graphql`,
      },
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
