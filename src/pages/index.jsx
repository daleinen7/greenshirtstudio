import * as React from "react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import Carousel from "../components/Carousel";
import CTACard from "../components/CTAContentCard";
import Testimonial from "../components/Testimonial";
import testimonials from "../lib/testimonials";

const IndexPage = () => {
  return (
    <Layout>
      <HeroBanner title={"Acting Classes for Everyone"} />
      <h3>Upcoming Classes & Workshops</h3>
      <Carousel />
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
      <h3>Recent Posts</h3>
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
