import React from "react";
import Layout from "../components/Layout";
import ImageAndContentHeader from "../components/ImageAndContentHeader";
import Subscribe from "../components/Subscribe";
import ContentStack from "../components/ContentStack";
import MeisnerProgram from "../images/MeisnerProgram.png";
import ClassCard from "../components/ClassCard";
import { graphql } from "gatsby";

const Meisner = ({ data }) => {
  const hack = `Our Meisner Acting Program consists of Levels 1 - 5, each level lasting eight weeks, totaling in 100 hours of training. Completing Levels 1 - 5 will give you a specific, step by step process to successfully tackle any script.  \n  \n  Our Meisner Acting Program is designed to welcome and challenge students of all experience levels. Level 1 is a great place to begin your acting journey or continue developing your technique.`;

  const classes = data.allWpClass.nodes
    .sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    })
    .map((actingClass) => (
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
        image={MeisnerProgram}
        title="Meisner Acting Program"
        content={hack}
      />
      <ContentStack title="October - December 2022" content={classes} />
      <Subscribe />
    </Layout>
  );
};
export default Meisner;

export const pageQuery = graphql`
  query MeisnerClasses {
    allWpClass(
      filter: { classGroup: { program: { eq: "Meisner Acting Program" } } }
    ) {
      nodes {
        title
        slug
        classGroup {
          program
          price
          day
          classImage {
            altText
            gatsbyImage(width: 416, height: 290)
          }
        }
      }
    }
  }
`;
