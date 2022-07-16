import * as React from "react";
import Community from "../images/home/Community.png";
import WhatClasses from "../images/home/WhatClasses.png";
import WhyClassWithUs from "../images/home/WhyClassWithUs.png";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import Carousel from "../components/Carousel";
import CTACard from "../components/CTAContentCard";
import Testimonial from "../components/Testimonial";
import ClassCard from "../components/ClassCard";
import BlogCard from "../components/BlogCard";
import fakePosts from "../lib/fakePosts";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const classes = data.allWpClass.nodes.map((actingClass) => (
    <ClassCard
      title={actingClass.title}
      image={actingClass.classGroup.classImage.gatsbyImage}
      days={actingClass.classGroup.day}
      program={actingClass.classGroup.program}
      price={actingClass.classGroup.price}
    />
  ));

  const posts = fakePosts.map((post) => {
    return <BlogCard title={post.title} author={post.author} />;
  });

  return (
    <Layout>
      <HeroBanner />
      <Carousel title="Upcoming Classes & Workshops" items={classes} />
      <CTACard
        headerAlign={"left"}
        title={"Why take classes with us?"}
        image={WhyClassWithUs}
        imageAltText={"placeholder image"}
        info={
          "We make high quality performing arts training accessible for everyone in a welcoming learning environment where you’ll feel at home."
        }
        ctaText={"Learn more about us"}
        ctaLink={"/about"}
      />
      <CTACard
        headerAlign={"right"}
        title={"What classes do we offer?"}
        image={WhatClasses}
        imageAltText={"placeholder image"}
        info={
          "We offer acting classes in Chicago including our Meisner Acting Program, Specialized Classes, and Workshops."
        }
        ctaText={"Learn more about our classes"}
        ctaLink={"/about"}
      />
      <CTACard
        headerAlign={"left"}
        title={"How do we help the community?"}
        image={Community}
        imageAltText={"placeholder image"}
        info={"Something about scholarships"}
        ctaText={"Sign-up or contribute to our scholarships"}
        ctaLink={"/scholarships"}
      />
      <Testimonial />
      <Carousel title="Recent Posts" items={posts} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allWpClass {
      nodes {
        title
        slug
        classGroup {
          day
          price
          program
          classImage {
            gatsbyImage(width: 304, height: 212, layout: FIXED)
          }
        }
      }
    }
  }
`;
