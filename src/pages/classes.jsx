import React from "react";
import { Link } from "gatsby";
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

import styled from "styled-components";

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 3rem;
`;

const Classes = () => {
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

  const FAQs = [
    {
      question: "What is “The Meisner Technique?”",
      answer:
        "Renowned actor and acting instructor Sanford Meisner developed a groundbreaking technique that demystified the craft of acting. The process that he taught to countless professional actors was built on listening, being present and learning to live truthfully under imaginary circumstances.",
    },
    {
      question: "What is “The Meisner Technique?”",
      answer:
        "Renowned actor and acting instructor Sanford Meisner developed a groundbreaking technique that demystified the craft of acting. The process that he taught to countless professional actors was built on listening, being present and learning to live truthfully under imaginary circumstances.",
    },
    {
      question: "What is “The Meisner Technique?”",
      answer:
        "Renowned actor and acting instructor Sanford Meisner developed a groundbreaking technique that demystified the craft of acting. The process that he taught to countless professional actors was built on listening, being present and learning to live truthfully under imaginary circumstances.",
    },
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
      <ContentStack title={"Other Programs"} content={otherPrograms} />
      <FAQSection FAQs={FAQs} />
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
