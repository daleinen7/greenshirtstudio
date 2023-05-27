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
  const classes = data.allWpClass.nodes.map((actingClass) => (
    <ClassCard
      title={actingClass.title}
      slug={actingClass.slug}
      image={actingClass.classGroup?.classImage?.gatsbyImage}
      days={actingClass.classGroup.day}
      program={actingClass.classGroup.program}
      price={actingClass.classGroup.price}
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
      <Subscribe />
    </Layout>
  );
};
export default HighSchoolSummerImmersive;

export const Head = () => (
  <SEO title={`High School Summer Immersive - Green Shirt Studio`} />
);

export const pageQuery = graphql`
  query HighSchoolSummerImmersive {
    allWpClass(
      filter: {
        classGroup: { program: { eq: "High School Summer Immersive" } }
      }
    ) {
      nodes {
        title
        slug
        classGroup {
          program
          price
          classImage {
            altText
            gatsbyImage(height: 290)
          }
        }
      }
    }
  }
`;
