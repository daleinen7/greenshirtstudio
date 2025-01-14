import React from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import success from '../images/success.png';
import Carousel from '../components/Carousel';
import ClassCard from '../components/ClassCard';
import CTACard from '../components/CTAContentCard';
import { graphql } from 'gatsby';

const Success = ({ data }) => {
  const classes = data.allContentfulClass.nodes.map((actingClass) => (
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
    <Layout>
      <CTACard
        headerAlign={'left'}
        title={"You've completed registration!"}
        image={success}
        imageAltText={'placeholder image'}
        info={
          "We've received your payment and registration. You will receive an email receipt containing more details about the class."
        }
        ctaText={'Check out other classes'}
        ctaLink={'/classes'}
      />
      <Carousel title="Upcoming Classes & Workshops" items={classes} />
    </Layout>
  );
};
export default Success;

export const Head = () => <SEO title={`Success! - Green Shirt Studio`} />;

export const pageQuery = graphql`
  query SuccessQuery {
    allContentfulClass(filter: { type: { ne: "Test Class" } }) {
      nodes {
        contentful_id
        title
        type
        cost
        day
        slug
        coverImage {
          gatsbyImageData(width: 304, height: 212, layout: FIXED)
        }
      }
    }
  }
`;
