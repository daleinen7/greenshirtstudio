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

  a:hover h4 {
    text-decoration: underline;
  }

  h3.title {
    text-align: center;
    font-weight: 900;
    font-size: 2rem;
    margin-top: 3.75rem;
    margin-bottom: 1.25rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
`;

const ContentStack = ({ title, content }) => {
  return (
    <StyledContentStack>
      {title && <h3 className="title">{title}</h3>}
      <ul>
        {content.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </StyledContentStack>
  );
};
export default ContentStack;
