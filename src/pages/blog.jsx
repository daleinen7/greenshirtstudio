import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import ContentStack from "../components/ContentStack";
import { graphql } from "gatsby";

const Blog = ({ data }) => {
  const blogPosts = data.allWpPost.nodes.map((post) => (
    <>
      <Link to={`blog/${post.slug}`}>
        <img src={post.featuredImage?.node.sourceUrl} alt={post.title} />
      </Link>
      <Link to={`blog/${post.slug}`}>
        <h3>{post.title}</h3>
      </Link>
      <small>{post.author.node.name}</small>
    </>
  ));

  console.log("Data: ", data.allWpPost.nodes[0].featuredImage.node.sourceUrl);

  return (
    <Layout>
      <h2>Blog</h2>
      <ContentStack content={blogPosts} />
    </Layout>
  );
};
export default Blog;

export const blogsQuery = graphql`
  query blogsQuery {
    allWpPost {
      nodes {
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
          }
        }
        title
        slug
      }
    }
  }
`;
