import React from "react";
import styled from "styled-components";

const StyledStudioList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4.625rem;

  h3,
  p {
    max-width: 40rem;
    text-align: center;
  }

  ul {
    display: flex;
    justify-content: center;
    max-width: 90rem;
    margin: 0 auto;
    padding: 2rem 0;
    list-style-type: none;
    gap: 2rem;
  }

  @media (max-width: 1440px) {
    ul {
      padding: 2rem 1rem;
    }
  }

  @media (max-width: 1032px) {
    ul {
      gap: 1rem;
    }
  }
`;

const StudioList = ({ title, content, list }) => {
  return (
    <StyledStudioList>
      <h3>{title}</h3>
      <p>{content}</p>
      <ul>
        {list.map((pic, idx) => (
          <li key={idx}>
            <img src={pic} alt="studio" />
          </li>
        ))}
      </ul>
    </StyledStudioList>
  );
};
export default StudioList;
