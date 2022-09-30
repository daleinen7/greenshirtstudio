import React from "react";
import { graphql } from "gatsby";
import { SEO } from "../components/seo";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../components/Layout";
import parse from "html-react-parser";

const StyledUser = styled.div`
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
      font-family: "Lato", sans-serif;
      line-height: 2.625rem;
      font-size: 1.75rem;
      font-weight: 300;
    }

    p {
      margin-top: 1rem;
    }
  }
`;

const Instructor = (props) => {
  const { wpInstructor } = props.data;

  console.log(wpInstructor);
  return (
    <Layout>
      <StyledUser>
        <div className="content">
          <GatsbyImage
            image={wpInstructor.instructors.image.gatsbyImage}
            alt={wpInstructor.instructors.title}
          />
          <h2>{wpInstructor.title}</h2>
          <h3>{wpInstructor.instructors.title}</h3>
          <div className="bio">{parse(wpInstructor.content)}</div>
        </div>
      </StyledUser>
    </Layout>
  );
};
export default Instructor;

export const Head = ({ data }) => (
  <SEO title={`${data.wpInstructor.title} - Green Shirt Studio`} />
);

export const query = graphql`
  query ($id: String!) {
    wpInstructor(id: { eq: $id }) {
      title
      content
      instructors {
        title
        image {
          altText
          gatsbyImage(width: 637)
        }
      }
    }
  }
`;
