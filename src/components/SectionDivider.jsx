import React from "react";
import styled from "styled-components";

const StyledSectionDivider = styled.div`
  background-color: var(--light-gray);
  margin: 0;
  width: 100%;
  height: 1px;
`;

const SectionDivider = () => {
  return <StyledSectionDivider />;
};
export default SectionDivider;
