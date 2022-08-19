import React from "react";
import parse from "html-react-parser";
import styled from "styled-components";

const StyledSpecialMessage = styled.section`
  border: 2px solid var(--salmon);
  border-radius: 2px;
  padding: 1.25rem;
  margin-bottom: 2rem;
`;

const SpecialMessage = ({ wpClass }) => {
  return (
    <StyledSpecialMessage>
      {parse(wpClass.classGroup.optionalSpecialMessage)}
    </StyledSpecialMessage>
  );
};
export default SpecialMessage;
