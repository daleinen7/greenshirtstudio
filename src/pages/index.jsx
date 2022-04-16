import * as React from "react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import Carousel from "../components/Carousel";
import CTACard from "../components/CTAContentCard";
import styled from "styled-components";

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
      <h3>What classes do we offer?</h3>
      <h3>How do we help the community?</h3>
      <section className="reviews"></section>
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
