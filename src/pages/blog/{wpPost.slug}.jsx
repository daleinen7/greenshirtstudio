import React from "react";
import { graphql } from "gatsby";
import parse from "html-react-parser";
import Layout from "../../components/Layout";
import styled from "styled-components";

const StyledBlogPost = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.6875rem auto;
  padding: 0 4rem;
  margin-bottom: 4.75rem;

  h2 {
    margin-top: 3rem;
    margin-bottom: 0.375rem;
    line-height: 4.875rem;
    font-family: "Zona Pro", serif;
    font-weight: 800;
    font-size: 3.75rem;
    text-align: center;
  }

  .author-date {
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 3rem;
  }

  .content {
    max-width: 40rem;

    h3,
    h4 {
      margin-bottom: 1.5rem;
      line-height: 2.625rem;
      font-size: 1.75rem;
      font-weight: 300;
    }

    p {
      font-size: 1.25rem;
      margin-top: 1.5rem;
      line-height: 1.857rem;
    }
  }
`;

const BlogPostPage = (props) => {
  const { wpPost } = props.data;

  console.log(wpPost);

  const date = new Date(wpPost.date);

  const shareSplit = wpPost.content.split("<div class=");

  const content = shareSplit[0];

  return (
    <Layout>
      <StyledBlogPost>
        <header>
          <h2>{wpPost.title}</h2>
          <div className="author-date">
            {wpPost.author.node.name} |{" "}
            {date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </header>
        {wpPost.featuredImage?.node?.sourceUrl && (
          <img src={wpPost.featuredImage.node?.sourceUrl} alt={wpPost.title} />
        )}
        <div className="content">{parse(content)}</div>
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
      date
    }
  }
`;
