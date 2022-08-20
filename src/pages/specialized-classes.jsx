import React from "react";
import SpecializedClassesImg from "../images/SpecializedClasses.png";
import Layout from "../components/Layout";
import Subscribe from "../components/Subscribe";
import ContentStack from "../components/ContentStack";
import ImageAndContentHeader from "../components/ImageAndContentHeader";
import ClassCard from "../components/ClassCard";
import { graphql } from "gatsby";

const SpecializedClasses = ({ data }) => {
  const classes = data.allWpClass.nodes.map((actingClass) => (
    <ClassCard
      title={actingClass.title}
      slug={actingClass.slug}
      image={actingClass.classGroup.classImage.gatsbyImage}
      days={actingClass.classGroup.day}
      program={actingClass.classGroup.program}
      price={actingClass.classGroup.price}
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
      <Subscribe />
    </Layout>
  );
};
export default SpecializedClasses;

export const pageQuery = graphql`
  query SpecializedClasses {
    allWpClass(
      filter: { classGroup: { program: { eq: "Specialized Classes" } } }
    ) {
      nodes {
        title
        slug
        classGroup {
          program
          price
          classImage {
            altText
            gatsbyImage(width: 416, height: 290)
          }
        }
      }
    }
  }
`;
