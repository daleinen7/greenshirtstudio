import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const StyledSuccess = styled.div`
  background: white;
`;

const Success = () => {
  return (
    <Layout>
      <StyledSuccess>
        <h3>Success</h3>
      </StyledSuccess>
    </Layout>
  );
};
export default Success;
