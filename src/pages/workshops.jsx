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
        image={WorkshopsImg}
        title="Workshops"
        content="Great for sharpening your skills without committing too much of your time."
      />
      <ContentStack title="Upcoming Workshops" content={classes} />
      <Subscribe />
    </Layout>
  );
};
export default Workshops;

export const Head = () => <SEO title={`Workshops - Green Shirt Studio`} />;

export const pageQuery = graphql`
  query Workshops {
    allWpClass(filter: { classGroup: { program: { eq: "Workshops" } } }) {
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
