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
      allContentfulClass {
        nodes {
          name
          type
          description {
            raw
          }
          coverImage {
            gatsbyImageData
          }
          cost
          instructors {
            slug
            name
            lastName
            bio {
              raw
            }
            profilePicture {
              gatsbyImageData(width: 637)
            }
          }
          alertBannerTitle
          alertBannerContent {
            raw
          }
          day
          startTime
          endTime
          dates
          location
          isVirtual
          classSize
          age
          policies
          customAttendancePolicy {
            raw
          }
          customCancellationPolicy {
            raw
          }
          stripeProductId
          stripeInstallmentId
        }
      }
    }
  `);

  data.allContentfulBlogPost.nodes.forEach((node) => {
    actions.createPage({
      path: `/blogs/${slugify(node.title, { strict: true, lower: true })}`,
      component: require.resolve('./src/templates/blog.jsx'),
      context: node,
    });
  });

  data.allContentfulClass.nodes.forEach((node) => {
    actions.createPage({
      path: `/classes/${slugify(node.name, { strict: true, lower: true })}`,
      component: require.resolve('./src/templates/class.jsx'),
      context: node,
    });
  });
};
