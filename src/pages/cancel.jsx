import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const StyledCancel = styled.div`
  background: white;
`;

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
