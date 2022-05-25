import React from "react";
import Accordian from "../Accordian";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const StyledDescription = styled.section`
  h3 {
    font-weight: 900;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.25rem;
  }

  ul {
    list-style-type: disc;
    li {
      font-size: 1.25rem;
    }
  }
`;

const Description = (strapiClass) => {
  console.log("here:", strapiClass.strapiClass.Description.data.Description);
  return (
    <StyledDescription>
      <Accordian title="Description">
        <ReactMarkdown
          children={strapiClass.strapiClass.Description.data.Description}
        />
      </Accordian>
    </StyledDescription>
  );
};
export default Description;
