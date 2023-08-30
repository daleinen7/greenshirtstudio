import React from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import ImageAndContentHeader from '../components/ImageAndContentHeader';
import Subscribe from '../components/Subscribe';
import ContentStack from '../components/ContentStack';
import MeisnerProgram from '../images/MeisnerProgram.png';
import ClassCard from '../components/ClassCard';
import { graphql } from 'gatsby';

const Meisner = ({ data }) => {
  const hack = `Our Meisner Acting Program consists of Levels 1 - 5, each level lasting eight weeks, totaling in 100 hours of training. Completing Levels 1 - 5 will give you a specific, step by step process to successfully tackle any script.  \n  \n  Our Meisner Acting Program is designed to welcome and challenge students of all experience levels. Level 1 is a great place to begin your acting journey or continue developing your technique.`;

  const classes = data.allWpClass.nodes
    .sort((a, b) => {
      const levelRegex = /Level (\d+)/;
      const aLevel = parseInt(a.title.match(levelRegex)[1]);
      const bLevel = parseInt(b.title.match(levelRegex)[1]);

      const daysOfWeek = [
        'Sundays',
        'Mondays',
        'Tuesdays',
        'Wednesdays',
        'Thursdays',
        'Fridays',
        'Saturdays',
      ];
      const aDayIndex = daysOfWeek.indexOf(a.classGroup.day);
      const bDayIndex = daysOfWeek.indexOf(b.classGroup.day);

      // First, compare by level
      if (aLevel < bLevel) {
        return -1;
      }
      if (aLevel > bLevel) {
        return 1;
      }

      // If the levels are the same, compare by day
      if (aDayIndex < bDayIndex) {
        return -1;
      }
      if (aDayIndex > bDayIndex) {
        return 1;
      }

      // If both level and day are the same, maintain the original order
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
      <ContentStack
        title={data.allWpSession.nodes[0].title}
        content={classes}
      />
      <Subscribe messaging="Sign up to our newsletter to hear about upcoming events Newsletter Registration" />
    </Layout>
  );
};
export default Meisner;

export const Head = () => (
  <SEO title={`Meisner Program - Green Shirt Studio`} />
);

export const pageQuery = graphql`
  query MeisnerClasses {
    allWpSession {
      nodes {
        title
      }
    }
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
