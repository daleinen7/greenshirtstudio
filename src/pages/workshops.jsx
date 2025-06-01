import React from 'react';
import { SEO } from '../components/seo';
import WorkshopsImg from '../images/Workshops.png';
import Layout from '../components/Layout';
import Subscribe from '../components/Subscribe';
import ContentStack from '../components/ContentStack';
import ImageAndContentHeader from '../components/ImageAndContentHeader';
import ClassCard from '../components/ClassCard';
import { graphql } from 'gatsby';

const Workshops = ({ data }) => {
  const classes = data.allContentfulClass.nodes.map((actingClass) => (
    <ClassCard
      title={actingClass.title}
      slug={actingClass.slug}
      image={actingClass.coverImage.gatsbyImageData}
      program={actingClass.type}
      price={actingClass.cost}
    />
  ));

  return (
    <Layout headerColor="white">
      <ImageAndContentHeader
        image={WorkshopsImg}
        title="Workshops"
        content="Great for sharpening your skills without committing too much of your time."
      />
      <ContentStack title="Upcoming Workshops" content={classes} />
      <Subscribe
        messaging={
          'Sign up to our newsletter to hear about upcoming events Newsletter Registration'
        }
      />
    </Layout>
  );
};
export default Workshops;

export const Head = () => <SEO title={`Workshops - Green Shirt Studio`} />;

export const pageQuery = graphql`
  query SpecializedClasses {
    allContentfulClass(filter: { type: { eq: "Workshop" } }) {
      nodes {
        contentful_id
        slug
        title
        type
        cost
        day
        session
        coverImage {
          gatsbyImageData
        }
      }
    }
  }
`;
