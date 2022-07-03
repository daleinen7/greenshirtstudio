import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import ContentStack from "../components/ContentStack";
import { graphql } from "gatsby";

import styled from "styled-components";

const BlogPreview = styled.article`
  h3 {
    font-size: 1.25rem;
    line-height: 1.857rem;
    font-weight: 400;
    text-align: left;
  }
  a {
    color: var(--black2);
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

const Blog = ({ data }) => {
  console.log(data);
  const blogPosts = data.allWpPost.nodes.map((post) => (
    <BlogPreview>
      <Link to={`${post.slug}`}>
        {post.featuredImage?.node.sourceUrl && (
          <img src={post.featuredImage?.node.sourceUrl} alt={post.title} />
        )}
      </Link>
      <Link to={`${post.slug}`}>
        <h3>{post.title}</h3>
      </Link>
      <small>{post.author.node.name}</small>
    </BlogPreview>
  ));

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
