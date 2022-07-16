import React from "react";
import Accordion from "../Accordion";
import parse from "html-react-parser";
import styled from "styled-components";

const StyledDescription = styled.section`
  p {
    margin-bottom: 1rem;
  }
`;

const Description = ({ wpClass }) => {
  return (
    <StyledDescription>
      <Accordion title="Description" defaultOpen={true}>
        {parse(wpClass.content)}
      </Accordion>
    </StyledDescription>
  );
};
export default Description;
