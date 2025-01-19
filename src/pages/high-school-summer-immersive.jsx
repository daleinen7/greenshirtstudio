import React from 'react';
import { SEO } from '../components/seo';
import HighSchoolSummerImmersiveImg from '../images/highschoolsummerimmersive.jpg';
import Layout from '../components/Layout';
import Subscribe from '../components/Subscribe';
import ContentStack from '../components/ContentStack';
import ImageAndContentHeader from '../components/ImageAndContentHeader';
import ClassCard from '../components/ClassCard';
import { graphql } from 'gatsby';

const HighSchoolSummerImmersive = ({ data }) => {
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
        image={HighSchoolSummerImmersiveImg}
        title="High School Summer Immersive"
        content=" "
      />
      <ContentStack title="Upcoming Classes" content={classes} />
      <Subscribe
        messaging="Sign up to our newsletter to hear about upcoming events Newsletter
          Registration"
      />
    </Layout>
  );
};
export default HighSchoolSummerImmersive;

export const Head = () => (
  <SEO title={`High School Summer Immersive - Green Shirt Studio`} />
);

export const pageQuery = graphql`
  query SpecializedClasses {
    allContentfulClass(
      filter: { type: { eq: "High School Summer Intensive" } }
    ) {
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
