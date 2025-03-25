import React from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import ImageAndContentHeader from '../components/ImageAndContentHeader';
import Subscribe from '../components/Subscribe';
import ContentStack from '../components/ContentStack';
import meisnerVideo from '../images/meisner-video.mp4';
import ClassCard from '../components/ClassCard';
import { graphql } from 'gatsby';
import _ from 'lodash';

const Meisner = ({ data }) => {
  const classes_grouped = _.groupBy(
    data.allContentfulClass.nodes,
    (class_node) => class_node.session
  );

  return (
    <Layout headerColor="white">
      <ImageAndContentHeader
        video={meisnerVideo}
        title="Meisner Acting Program"
        content={`Our Meisner Acting Program consists of Levels 1 - 5, each level lasting eight weeks, totaling in 100 hours of training. Completing Levels 1 - 5 will give you a specific, step by step process to successfully tackle any script.  \n  \n  Our Meisner Acting Program is designed to welcome and challenge students of all experience levels. Level 1 is a great place to begin your acting journey or continue developing your technique.`}
      />
      {Object.entries(classes_grouped).map(([group_title, group]) => {
        const classes_sorted = group
          .sort((a, b) => {
            const levelRegex = /Level (\d+)/;
            const a_match = a.title.match(levelRegex);
            const b_match = b.title.match(levelRegex);
            // If the class is not a level, send it to last;
            if (!a_match) return 1;
            if (!b_match) return -1;
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
            const aDayIndex = daysOfWeek.indexOf(a.day);
            const bDayIndex = daysOfWeek.indexOf(b.day);

            // First, compare by level
            if (aLevel < bLevel) return -1;
            if (aLevel > bLevel) return 1;

            // If the levels are the same, compare by day
            if (aDayIndex < bDayIndex) return -1;
            if (aDayIndex > bDayIndex) return 1;

            // If both level and day are the same, maintain the original order
            return 0;
          })
          .map((actingClass) => (
            <ClassCard
              title={actingClass.title}
              slug={actingClass.slug}
              image={actingClass.coverImage.gatsbyImageData}
              days={actingClass.day}
              program={actingClass.type}
              price={actingClass.cost}
            />
          ));

        return (
          <ContentStack
            key={group_title}
            title={group_title}
            content={classes_sorted}
          />
        );
      })}
      <Subscribe messaging="Sign up to our newsletter to hear about upcoming events Newsletter Registration" />
    </Layout>
  );
};
export default Meisner;

export const Head = () => <SEO title="Meisner Program - Green Shirt Studio" />;

export const pageQuery = graphql`
  query MeisnerClasses {
    allContentfulClass(filter: { type: { eq: "Meisner Acting Program" } }) {
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
