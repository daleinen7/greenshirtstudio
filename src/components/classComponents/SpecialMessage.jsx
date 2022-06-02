import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const StyledSpecialMessage = styled.section``;

const SpecialMessage = (strapiClass) => {
  return (
    <StyledSpecialMessage>
      {
        <ReactMarkdown
          children={strapiClass.strapiClass.SpecialMessage.data.SpecialMessage}
        />
      }
    </StyledSpecialMessage>
  );
};
export default SpecialMessage;
