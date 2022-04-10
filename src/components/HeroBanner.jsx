import React from "react";
import styled from "styled-components";

const StyledHeroBanner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--green);
  h2 {
    font-size: 3.75rem;
    line-height: 4.5rem;
    text-align: center;
    color: var(--white);
    max-width: 30rem;
  }
  height: 19.0625rem;
`;

const HeroBanner = ({ title }) => {
  return (
    <StyledHeroBanner>
      <h2>{title}</h2>
    </StyledHeroBanner>
  );
};
export default HeroBanner;
