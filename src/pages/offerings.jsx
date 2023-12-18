import React from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import SectionDivider from '../components/SectionDivider';
import ImageAndFormHeader from '../components/ImageAndFormHeader';
import AboutHero from '../images/Events.jpg';
import Accessibility from '../images/Accessibility.png';
import Community from '../images/Community.png';
import Diversity from '../images/Diversity.png';
import Facing from '../images/Facing.png';
import ContentCardCTA from '../components/ContentCardCTA';
import ContentStack from '../components/ContentStack';
import TextContent from '../components/TextContent';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const StyledImage = styled.img`
  margin: 0 auto 4.75rem;
`;

const Offerings = ({ data }) => {
  const ourOfferings = [
    <ContentCardCTA
      title={'Group Acting Classes'}
      content={
        'Explore new ways to create and tell your story.'
      }
      image={Accessibility}
      altText="All level of actors"
      link="Learn More"
      linkAddress="#offerings-form"
    />,
    <ContentCardCTA
      title={'Private Acting Coaching'}
      content={
        'One-on-one attention to help you work towards your goals. Audition, monologue, and storytelling coaching available.'
      }
      image={Diversity}
      altText="Diverse actors"
      link="Learn More"
      linkAddress="#offerings-form"
    />,
    <ContentCardCTA
      title={'Professional Development Workshops'}
      content={'Great for sharpening your skills without committing too much of your time.'}
      image={Community}
      altText="Actors posing"
      link="Learn More"
      linkAddress="#offerings-form"
    />,
  ];

  return (
    <Layout>
      <ImageAndFormHeader
        title="Contact Us"
        image={AboutHero}
      />
      <SectionDivider />
      <ContentStack title={'Our Offerings'} content={ourOfferings} />
      <SectionDivider />
      <TextContent
        title="Our Classes"
        content={
          <>
            <p>
              Our Meisner Acting Program Levels 1 - 5 give our students a
              complete, specific, step by step technique that demystifies the
              craft of acting and gives them the tools to successfully tackle
              any script.
            </p>

            <p>
              Our Specialized Classes create training opportunities not normally
              offered in an accessible environment for performers and
              non-performers alike.
            </p>

            <p>
              Our Meisner Acting Program and Specialized Classes include the
              benefits of training with highly experienced, compassionate
              instructors in a specific method of performing arts training
              without barriers like high costs, large investments of time, or an
              audition. Our emphasis on accessibility supports the rich
              diversity of our community that, in turn, supports the
              professional and personal growth of everyone involved at our
              studio.
            </p>
          </>
        }
        link="Learn More"
        linkAddress="/classes"
      />
      <StyledImage src={Facing} alt="Actors facing each other" />

    </Layout>
  );
};
export default Offerings;

export const Head = () => (
  <SEO
    title={`Offerings - Green Shirt Studio`}
    description={`Check out one of our acting classes or workshops! We welcome students from all backgrounds and experience levels. Mesiner Acting Program, Workshops, Private Coaching and more.`}
  />
);

export const pageQuery = graphql`
  query staff {
    allWpInstructor {
      nodes {
        title
        slug
        instructors {
          title
          image {
            altText
            publicUrl
          }
        }
      }
    }
  }
`;
