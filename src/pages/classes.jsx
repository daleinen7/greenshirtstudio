import React from "react";
import { Link } from "gatsby";
import SectionDivider from "../components/SectionDivider";
import MeisnerProgram from "../images/MeisnerProgram.png";
import special from "../images/special.png";
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
  console.log("FAQ: ", FAQs);

  const otherPrograms = [
    <Link to={"/specialized-classes"}>
      <ContentCard
        title={"Specialized Classes"}
        content={
          "Students get the benefit of training with highly experienced instructors in a specific method or style of performing arts training without barriers like high costs, large investments of time, or an audition."
        }
        image={special}
        altText="Placeholder image"
      />
    </Link>,
    <Link to={"/workshops"}>
      <ContentCard
        title={"Workshops"}
        content={
          "Great for sharpening your skills without committing too much of your time."
        }
        image={workshop}
        altText="Placeholder image"
      />
    </Link>,
    <Link to={"/professional-development"}>
      <ContentCard
        title={"Professional Development"}
        content={
          "Private coaching will accelerate your learning experience and get you closer to achieving personal and professional goals. We always offer a free consultation to answer any questions and then charge $70 per 1hr session."
        }
        image={"https://via.placeholder.com/416x290"}
        altText="Placeholder image"
      />
    </Link>,
  ];

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
        info={
          "An accessible, step by step approach that demystifies the craft of acting and gives our students a specific process to tackle any script."
        }
        ctaText={"Check out this session's class schedule"}
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
        ctaText={"Learn more about our scholarships"}
        ctaLink={"/scholarships"}
      />
      <Subscribe />
    </Layout>
  );
};
export default Classes;

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
