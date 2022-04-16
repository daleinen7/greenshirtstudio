import * as React from "react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import Carousel from "../components/Carousel";
import CTACard from "../components/CTAContentCard";
import Testimonial from "../components/Testimonial";
import ClassCard from "../components/ClassCard";
import BlogCard from "../components/BlogCard";
import fakeClasses from "../lib/fakeClasses";
import fakePosts from "../lib/fakePosts";
import testimonials from "../lib/testimonials";

const IndexPage = () => {
  const classes = fakeClasses.map((actingClass) => (
    <ClassCard
      title={actingClass.title}
      days={actingClass.days}
      program={actingClass.program}
      price={actingClass.price}
    />
  ));

  const posts = fakePosts.map((post) => {
    return <BlogCard title={post.title} author={post.author} />;
  });

  return (
    <Layout>
      <HeroBanner title={"Acting Classes for Everyone"} />
      <Carousel title="Upcoming Classes & Workshops" items={classes} />
      <CTACard
        headerAlign={"left"}
        title={"Why take classes with us?"}
        image={"https://via.placeholder.com/752x494"}
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
        image={"https://via.placeholder.com/752x494"}
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
        image={"https://via.placeholder.com/752x494"}
        imageAltText={"placeholder image"}
        info={"Something about scholarships"}
        ctaText={"Sign-up or contribute to our scholarships"}
        ctaLink={"/about"}
      />
      <Testimonial quotes={testimonials} />
      <Carousel title="Recent Posts" items={posts} />
    </Layout>
  );
};

export default IndexPage;

// export const pageQuery = graphql`
//   query IndexQuery {
//     allStrapiArticle {
//       edges {
//         node {
//           id
//           title
//           content
//         }
//       }
//     }
//   }
// `;
