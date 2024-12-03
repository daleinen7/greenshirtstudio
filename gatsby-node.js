const { default: slugify } = require('slugify');

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulBlogPost {
        nodes {
          title
          content {
            raw
          }
          author {
            name
            lastName
            slug
          }
          coverImage {
            gatsbyImageData
          }
          date
        }
      }
    }
  `);

  data.allContentfulBlogPost.nodes.forEach((node) => {
    actions.createPage({
      path: `/blog/${slugify(node.title, { strict: true, lower: true })}`,
      component: require.resolve('./src/templates/blog.jsx'),
      context: node,
    });
  });
};
