import React from "react";
import ActingClassesFor from "../images/home/ActingClassesFor.svg";
import styled from "styled-components";

const StyledHeroBanner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 19.0625rem;
`;

const HeroBanner = () => {
  return (
    <StyledHeroBanner>
      <h2>
        <img src={ActingClassesFor} alt="Acting Classes For Everyone" />
      </h2>
    </StyledHeroBanner>
  );
};
export default HeroBanner;
