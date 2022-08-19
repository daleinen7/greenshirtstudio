import React from "react";
import styled from "styled-components";

const StyledContentStack = styled.section`
  margin: 0 auto;
  margin-bottom: 4.75rem;
  max-width: 90rem;

  a {
    text-decoration: none;
    color: var(--black);
  }

  h3 {
    text-align: center;
    font-weight: 900;
    font-size: 2rem;
    margin-top: 3.75rem;
    margin-bottom: 1.25rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style-type: none;
    gap: 2rem;
    margin: 0 auto;
    padding: 0 4rem;
  }

  @media (max-width: 1000px) {
    ul {
      padding: 2rem;
    }
  }
  @media (max-width: 800px) {
    ul {
      gap: 1rem;
    }
  }
  @media (max-width: 650px) {
    ul {
      grid-template-columns: repeat(1, 1fr);
      width: 100%;
      padding: 1rem;
      gap: 1.5rem;

      li {
        display: flex;
        justify-content: center;
      }
    }
  }
`;

const ContentStack = ({ title, content }) => {
  return (
    <StyledContentStack>
      {title && <h3>{title}</h3>}
      <ul>
        {content.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </StyledContentStack>
  );
};
export default ContentStack;
