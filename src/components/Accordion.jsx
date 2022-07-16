import React, { useState } from "react";
import openAccordion from "../images/openAccordion.svg";
import closedAccordion from "../images/closedAccordion.svg";
import styled from "styled-components";

const StyledAccordion = styled.section`
  .heading {
    border-top: 2px solid var(--black);
    margin-top: 3rem;
    max-width: 40rem;

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

const Accordion = ({ title, children, defaultOpen }) => {
  const [showContent, setShowContent] = useState(defaultOpen);

  const handleAccordion = () => setShowContent(!showContent);

  return (
    <StyledAccordion>
      <div className="heading" onClick={handleAccordion}>
        <h3>{title}</h3>
        {showContent ? (
          <img src={openAccordion} alt="Open Accordion" />
        ) : (
          <img src={closedAccordion} alt="Closed Accordion" />
        )}
      </div>
      <div className={showContent ? "" : "visually-hidden"}>{children}</div>
    </StyledAccordion>
  );
};
export default Accordion;
