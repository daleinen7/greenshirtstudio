import React from "react";
import styled from "styled-components";

const StyledHeadingEffect = styled.div`
  background: var(--neon-green);
  color: var(--white);
  position: relative;
  font-size: 3.75rem;
  padding: 2.125rem 3.125rem;
  transform: rotate(-4deg);
  margin: 0 auto 2rem;
  max-width: 37rem;

  :after {
    content: "";
    position: absolute;
    top: -1rem;
    left: -0.5rem;
    width: 100%;
    height: 100%;
    background: var(--black);
    transform: rotate(1.5deg);
    z-index: -1;
  }

  h2 {
    font-family: "Zona Pro", serif;
    position: relative;
    text-align: center;
    top: -1rem;
    left: -0.5rem;
    transform: rotate(1.5deg);
    padding: 0;
  }

  @media (max-width: 570px) {
    font-size: 2.25rem;
  }
`;

const HeadingEffect = ({ text }) => {
  return (
    <StyledHeadingEffect>
      <h2>{text}</h2>
    </StyledHeadingEffect>
  );
};
export default HeadingEffect;
