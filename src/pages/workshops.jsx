import React from 'react';
import { SEO } from '../components/seo';
import WorkshopsImg from '../images/Workshops.png';
import Layout from '../components/Layout';
import Subscribe from '../components/Subscribe';
import ContentStack from '../components/ContentStack';
import ImageAndContentHeader from '../components/ImageAndContentHeader';
import ClassCard from '../components/ClassCard';
import { graphql } from 'gatsby';
import { combineDateAndTime } from '../utils/utils';
import _ from 'lodash';

const Workshops = ({ data }) => {
  console.log(data);

  const grouped_classes = _.groupBy(
    data.allContentfulClass.nodes,
    (class_node) => class_node.dates[0].slice(0, 7)
  );

  console.log(Object.entries(grouped_classes));

  return (
    <Layout headerColor="white">
      <ImageAndContentHeader
        image={WorkshopsImg}
        title="Workshops"
        content="Great for sharpening your skills without committing too much of your time."
      />
      {Object.entries(grouped_classes)
        .sort((a, b) => new Date(a[0]) - new Date(b[0]))
        .map(([group_title, group]) => {
          const classes = group
            .sort((a, b) => {
              const a_datetime = combineDateAndTime(a.dates[0], a.startTime);
              const b_datetime = combineDateAndTime(b.dates[0], b.startTime);
              return a_datetime - b_datetime;
            })
            .map((actingClass) => (
              <ClassCard
                title={actingClass.title}
                slug={actingClass.slug}
                image={actingClass.coverImage?.gatsbyImageData}
                program={actingClass.type}
                price={actingClass.cost}
              />
            ));

          const [year, month] = group_title.split('-').map(Number);
          const date = new Date(year, month - 1); // months are 0-indexed
          const formatted_title = date.toLocaleString('en-US', {
            month: 'long',
            year: 'numeric',
          });

          return <ContentStack title={formatted_title} content={classes} />;
        })}
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
        dates
        startTime
        coverImage {
          gatsbyImageData
        }
      }
    }
  }
`;
