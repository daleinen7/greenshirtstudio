import React from "react";
import { graphql } from "gatsby";
import parse from "html-react-parser";

import styled from "styled-components";
import Layout from "../../components/Layout";

const StyledBlogPost = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.6875rem auto;
  padding: 0 4rem;

  .content {
    max-width: 40rem;

    h2 {
      margin-top: 3rem;
      margin-bottom: 0.375rem;
      line-height: 4.875rem;
      font-weight: 800;
      font-size: 3.75rem;
    }

    h3 {
      margin-bottom: 1.5rem;
      line-height: 2.625rem;
      font-size: 1.75rem;
      font-weight: 300;
    }
  }
`;

const BlogPostPage = (props) => {
  const { wpPost } = props.data;
  return (
    <Layout>
      <StyledBlogPost>
        <header>
          <h2>{wpPost.title}</h2>
        </header>
        {wpPost.featuredImage?.node?.sourceUrl && (
          <img src={wpPost.featuredImage.node?.sourceUrl} alt={wpPost.title} />
        )}
        <div className="content">{parse(wpPost.content)}</div>
      </StyledBlogPost>
    </Layout>
  );
};
export default BlogPostPage;

export const query = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      author {
        node {
          name
          description
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;
