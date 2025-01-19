import React from 'react';
import { SEO } from '../components/seo';
import SpecializedClassesImg from '../images/SpecializedClasses.png';
import Layout from '../components/Layout';
import Subscribe from '../components/Subscribe';
import ContentStack from '../components/ContentStack';
import ImageAndContentHeader from '../components/ImageAndContentHeader';
import ClassCard from '../components/ClassCard';
import { graphql } from 'gatsby';

const SpecializedClasses = ({ data }) => {
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
        image={SpecializedClassesImg}
        title="Specialized Classes"
        content="Explore new ways to create and tell your story."
      />
      <ContentStack title="Upcoming Classes" content={classes} />
      <Subscribe
        messaging={
          'Sign up to our newsletter to hear about upcoming events Newsletter Registration'
        }
      />
    </Layout>
  );
};
export default SpecializedClasses;

export const Head = () => (
  <SEO title={`Specialized Classes - Green Shirt Studio`} />
);

export const pageQuery = graphql`
  query SpecializedClasses {
    allContentfulClass(filter: { type: { eq: "Specialized Class" } }) {
      nodes {
        contentful_id
        slug
        title
        type
        cost
        day
        session
        coverImage {
          gatsbyImageData(width: 416, height: 290)
        }
      }
    }
  }
`;
