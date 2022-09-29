import React from "react";
import { SEO } from "../components/seo";
import Layout from "../components/Layout";
import styled from "styled-components";

const StyledCancel = styled.div`
  background: white;
`;

export const Head = () => (
  <SEO title={`Cancel Checkout - Green Shirt Studio`} />
);

const Cancel = () => {
  return (
    <Layout>
      <StyledCancel>
        <h3>Cancel</h3>
      </StyledCancel>
    </Layout>
  );
};
export default Cancel;
