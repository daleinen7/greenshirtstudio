import React from "react";
import parse from "html-react-parser";
import styled from "styled-components";

const StyledSpecialMessage = styled.section``;

const SpecialMessage = ({ wpClass }) => {
  return (
    <StyledSpecialMessage>
      {parse(wpClass.classGroup.optionalSpecialMessage)}
    </StyledSpecialMessage>
  );
};
export default SpecialMessage;
