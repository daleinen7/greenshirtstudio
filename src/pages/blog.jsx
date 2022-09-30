import React from "react";
import { SEO } from "../components/seo";
import Layout from "../components/Layout";
import ContentStack from "../components/ContentStack";
import { graphql } from "gatsby";
import BlogCardLarge from "../components/BlogCardLarge";
import HeadingEffect from "../components/HeadingEffect";
import styled from "styled-components";

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 3rem;
`;

export const Head = () => (
  <SEO
    title={`Blog - Green Shirt Studio`}
    description={`Acting blog with advice about acting technique, auditioning, career, Chicago theater, and more.`}
  />
);

const Blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero>
        <HeadingEffect text={"Blog"} />
      </StyledHero>
      <ContentStack
        content={data.allWpPost.nodes.map((post) => {
          return (
            <BlogCardLarge
              title={post.title}
              author={post.author.node.name}
              img={post.featuredImage?.node.sourceUrl}
              slug={post.slug}
            />
          );
        })}
      />
    </Layout>
  );
};
export default Blog;

export const blogsQuery = graphql`
  query blogsQuery {
    allWpPost(sort: { order: DESC, fields: date }) {
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
