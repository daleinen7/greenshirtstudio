import React, { useState } from "react";
import openAccordian from "../images/openAccordian.svg";
import styled from "styled-components";

const StyledAccordion = styled.section`
  .heading {
    h3 {
      font-size: 1.5rem;
    }
    display: flex;
    justify-content: space-between;
    :hover {
      cursor: pointer;
    }
  }
`;

const Accordian = ({ title, children }) => {
  const [showContent, setShowContent] = useState(true);

  const handleAccordian = () => setShowContent(!showContent);

  return (
    <StyledAccordion>
      <div className="heading" onClick={handleAccordian}>
        <h3>{title}</h3>
        <img src={openAccordian} alt="Open Accordian" />
      </div>
      <div className={showContent ? "" : "visually-hidden"}>{children}</div>
    </StyledAccordion>
  );
};
export default Accordian;
