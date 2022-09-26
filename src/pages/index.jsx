import * as React from "react";
// import useWindowSize from "../lib/useWindowSize";
import { SEO } from "../components/seo";
import Community from "../images/home/Community.png";
import WhatClasses from "../images/home/WhatClasses.png";
import WhyClassWithUs from "../images/home/WhyClassWithUs.png";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import Carousel from "../components/Carousel";
import SectionDivider from "../components/SectionDivider";
import CTACard from "../components/CTAContentCard";
import Testimonial from "../components/Testimonial";
import ClassCard from "../components/ClassCard";
import BlogCard from "../components/BlogCard";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  // const size = useWindowSize();

  const classes = data.allWpClass.nodes
    .sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    })
    .filter((actingClass) => actingClass.classGroup.program !== "Test")
    .map((actingClass) => (
      <ClassCard
        title={actingClass.title}
        slug={actingClass.slug}
        image={actingClass.classGroup.classImage?.gatsbyImage}
        days={actingClass.classGroup.day}
        program={actingClass.classGroup.program}
        price={actingClass.classGroup.price}
      />
    ));

  const posts = data.allWpPost.nodes.map((post) => {
    return (
      <BlogCard
        title={post.title}
        author={post.author.node.name}
        img={post.featuredImage.node.sourceUrl}
        slug={`blog/${post.slug}`}
      />
    );
  });

  return (
    <Layout>
      <HeroBanner />
      <Carousel
        title="Upcoming Classes & Workshops"
        items={classes}
        link="classes"
        linkDisplay="All Classes & Workshops"
      />
      <SectionDivider />
      <CTACard
        headerAlign={"left"}
        title={"Why take classes with us?"}
        image={WhyClassWithUs}
        imageAltText={"Students of Green Shirt Studio"}
        info={
          "Founded in 2009, our acting classes are accessible for everyone and offered in welcoming learning environment where you'll feel at home."
        }
        ctaText={"Learn More About Us"}
        ctaLink={"/about"}
      />
      <SectionDivider />
      <CTACard
        headerAlign={"right"}
        title={"What classes do we offer?"}
        image={WhatClasses}
        imageAltText={"Students reading lines"}
        info={
          "We offer acting classes in Chicago including our Meisner Acting Program, Specialized Classes, and Workshops."
        }
        ctaText={"All Classes & Workshops"}
        ctaLink={"/classes"}
      />
      <SectionDivider />
      <CTACard
        headerAlign={"left"}
        title={"How do we help the community?"}
        image={Community}
        imageAltText={"Wall of Polaroids"}
        info={"We offer scholarships and host free community events."}
        ctaText={"Learn More"}
        ctaLink={"/scholarships"}
      />
      <Testimonial />
      <Carousel
        title="Recent Posts"
        items={posts}
        link="blog"
        linkDisplay="View Recent Posts"
      />
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
    allWpPost(limit: 8, sort: { fields: date, order: DESC }) {
      nodes {
        title
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        slug
      }
    }
  }
`;

export const Head = () => <SEO />;
