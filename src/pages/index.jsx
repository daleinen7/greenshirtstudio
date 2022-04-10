import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const IndexPage = () => {
  return (
    <Layout>
      <h2>Acting Classes for Everyone</h2>
      <h3>Upcoming Classes & Workshops</h3>
      <h3>Why take classes with us?</h3>
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
