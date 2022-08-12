import React from "react";
import styled from "styled-components";

const StyledStudioList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3,
  p {
    max-width: 40rem;
    text-align: center;
  }

  ul {
    display: flex;
    justify-content: center;
    max-width: 90rem;
    list-style-type: none;
  }
`;

const StudioList = ({ title, content, list }) => {
  return (
    <StyledStudioList>
      <h3>{title}</h3>
      <p>{content}</p>
      <ul>
        {list.map((pic) => (
          <li>
            <img src={pic} alt="studio picture"/>
          </li>
        ))}
      </ul>
    </StyledStudioList>
  );
};
export default StudioList;
