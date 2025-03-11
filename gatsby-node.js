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
      allContentfulClass(filter: { type: { ne: "Test Class" } }) {
        nodes {
          contentful_id
          title
          slug
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
          session
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
          stripePriceId
          stripeInstallmentId
        }
      }
    }
  `);

  const existing_blogs = {};
  data.allContentfulBlogPost.nodes.forEach((node) => {
    const curr_slug = `/blog/${slugify(node.title, {
      strict: true,
      lower: true,
    })}`;
    let new_slug = curr_slug;
    if (existing_blogs[curr_slug]) {
      const new_dupe_count = existing_blogs[curr_slug] + 1;
      new_slug = curr_slug + '-' + new_dupe_count;
      existing_blogs[curr_slug] = new_dupe_count;
    } else {
      existing_blogs[curr_slug] = 1;
    }
    actions.createPage({
      path: new_slug,
      component: require.resolve('./src/templates/blog.jsx'),
      context: node,
    });
  });

  // Contentful GraphQL schema messes up if a field is not used at all: https://stackoverflow.com/a/64198953, https://github.com/gatsbyjs/gatsby/discussions/29874, ugh.
  data.allContentfulClass.nodes.forEach((node) => {
    actions.createPage({
      path: `/classes/${node.slug}`,
      component: require.resolve('./src/templates/class.jsx'),
      context: node,
    });
  });
};
