import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const StyledSpecialMessage = styled.section`
  background: blue;
`;

const SpecialMessage = (strapiClass) => {
  return (
    <StyledSpecialMessage>
      hi
      {
        <ReactMarkdown
          children={strapiClass.strapiClass.SpecialMessage.data.id}
        />
      }
    </StyledSpecialMessage>
  );
};
export default SpecialMessage;
