import React from "react";
import styled from "styled-components";

const StyledSpecialMessage = styled.section`
  background: blue;
`;

const SpecialMessage = () => {
  return (
    <StyledSpecialMessage>
      <h3>Special Message</h3>
    </StyledSpecialMessage>
  );
};
export default SpecialMessage;
