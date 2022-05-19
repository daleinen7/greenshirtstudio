import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const StyledDescription = styled.section`
  background: blue;
`;

const Description = (strapiClass) => {
  console.log("here:", strapiClass.strapiClass.Description.data.Description);
  return (
    <StyledDescription>
      <h3>Description</h3>
      <p>this is the:</p>
      <ReactMarkdown
        children={strapiClass.strapiClass.Description.data.Description}
      />
    </StyledDescription>
  );
};
export default Description;
