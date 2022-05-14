import React from "react";
import styled from "styled-components";

const StyledContentStack = styled.section`
  h3 {
    text-align: center;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ContentStack = ({ title, content }) => {
  return (
    <StyledContentStack>
      <h3>{title}</h3>
      <ul>
        {content.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </StyledContentStack>
  );
};
export default ContentStack;
