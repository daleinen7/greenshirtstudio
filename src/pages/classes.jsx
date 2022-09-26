import React from "react";
import { Link } from "gatsby";
import { SEO } from "../components/seo";
import SectionDivider from "../components/SectionDivider";
import MeisnerProgram from "../images/MeisnerProgram.png";
import special from "../images/special.png";
import coaching from "../images/coaching.png";
import workshop from "../images/workshop.png";
import Scholarships from "../images/Scholarships.png";
import Layout from "../components/Layout";
import HeadingEffect from "../components/HeadingEffect";
import CTACard from "../components/CTAContentCard";
import ContentStack from "../components/ContentStack";
import ContentCard from "../components/ContentCard";
import FAQSection from "../components/FAQSection";
import Subscribe from "../components/Subscribe";
import { graphql } from "gatsby";

import styled from "styled-components";

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 3rem;
`;

const Classes = ({ data }) => {
  const FAQs = data.allWpFaq.nodes.map((faq) => faq);

  const otherPrograms = [
    <Link to={"/specialized-classes"}>
      <ContentCard
        title={"Specialized Classes"}
        content={"Explore new ways to create and tell your story."}
        image={special}
        altText="Acting group exercise"
      />
    </Link>,
    <Link to={"/workshops"}>
      <ContentCard
        title={"Workshops"}
        content={
          "Great for sharpening your skills without committing too much of your time."
        }
        image={workshop}
        altText="Instructor leading class"
      />
    </Link>,
    <Link to={"/private-coaching"}>
      <ContentCard
        title={"Private Coaching"}
        content={
          "One-on-one attention to help you work towards your goals. Audition, monologue, and storytelling coaching available."
        }
        image={coaching}
        altText="promising students awaiting coaching"
      />
    </Link>,
  ];

  const hack = `A step by step approach that demystifies the craft of acting and offers a specific process to tackle a script.   \n  \n 
  All experience levels are invited to join Level 1: Living Truthfully.`;

  return (
    <Layout>
      <StyledHero>
        <HeadingEffect text="Classes" />
      </StyledHero>
      <CTACard
        headerAlign={"left"}
        title={"Meisner Acting Program"}
        image={MeisnerProgram}
        imageAltText={"placeholder image"}
        info={hack}
        ctaText={"View Class Schedule"}
        ctaLink={"/meisner"}
      />
      <SectionDivider />
      <ContentStack title={"Other Programs"} content={otherPrograms} />
      <SectionDivider />
      <FAQSection FAQs={FAQs} />
      <SectionDivider />
      <CTACard
        headerAlign={"right"}
        title={"Can't pay for classes?"}
        image={Scholarships}
        imageAltText={"placeholder image"}
        info={"Learn how we can help you pay for it."}
        ctaText={"Learn More"}
        ctaLink={"/scholarships"}
      />
      <Subscribe />
    </Layout>
  );
};
export default Classes;

export const Head = () => <SEO title="Classes - Green Shirt Studio" />;

export const pageQuery = graphql`
  query FAQuery {
    allWpFaq {
      nodes {
        title
        content
      }
    }
  }
`;
