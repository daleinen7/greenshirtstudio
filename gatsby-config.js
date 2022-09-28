require("dotenv").config({
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
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/ResponsiveFavicon4x.png",
      },
    },
    {
      /*
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url: "https://greenshirtstudiowp.us/graphql",
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
