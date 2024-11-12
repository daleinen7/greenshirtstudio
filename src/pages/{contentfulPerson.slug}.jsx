import React from 'react';
import { graphql } from 'gatsby';
import { SEO } from '../components/seo';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
import parse from 'html-react-parser';
import { concatenateName, producePositionString } from '../utils/utils';

const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.6875rem auto;
  padding: 0 4rem;

  /* .gatsby-image-wrapper {
    width: 100%;
  } */

  .content {
    max-width: 40rem;

    h2 {
      margin-top: 0.5rem;
      margin-bottom: 0.375rem;
      line-height: 4.875rem;
      font-weight: 800;
      font-size: 3.75rem;
    }

    h3 {
      margin-bottom: 1.5rem;
      font-family: 'Lato', sans-serif;
      line-height: 2.625rem;
      font-size: 1.75rem;
      font-weight: 300;
    }

    p {
      font-size: 1.25rem;
      margin-top: 1rem;
    }
  }
`;

const Instructor = (props) => {
  const { contentfulPerson } = props.data;
  console.log(contentfulPerson);
  const concatenated_name = concatenateName(
    contentfulPerson.name,
    contentfulPerson.lastName
  );

  return (
    <Layout>
      <StyledUser>
        <div className="content">
          <GatsbyImage
            image={contentfulPerson.profilePicture.gatsbyImageData}
            alt={concatenated_name}
          />
          <h2>{concatenated_name}</h2>
          <h3>{producePositionString(contentfulPerson.positions)}</h3>
          <div className="bio">{contentfulPerson.bio.raw}</div>
        </div>
      </StyledUser>
    </Layout>
  );
};
export default Instructor;

export const Head = ({ data }) => (
  <SEO title={`${data.contentfulPerson.name} - Green Shirt Studio`} />
);

export const query = graphql`
  query ($id: String!) {
    contentfulPerson(id: { eq: $id }) {
      name
      lastName
      positions {
        name
      }
      bio {
        raw
      }
      profilePicture {
        gatsbyImageData(width: 637, height: 637)
      }
    }
  }
`;
