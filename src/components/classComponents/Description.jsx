import React from "react";
import Accordian from "../Accordian";
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
      <Accordian title="Description">{parse(wpClass.content)}</Accordian>
    </StyledDescription>
  );
};
export default Description;
