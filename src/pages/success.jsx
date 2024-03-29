import React from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import success from '../images/success.png';
import Carousel from '../components/Carousel';
import ClassCard from '../components/ClassCard';
import CTACard from '../components/CTAContentCard';
import { graphql } from 'gatsby';

const Success = ({ data }) => {
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
    allWpClass {
      nodes {
        title
        slug
        classGroup {
          day
          price
          program
          classImage {
            gatsbyImage(height: 212, layout: FIXED)
          }
        }
      }
    }
  }
`;
