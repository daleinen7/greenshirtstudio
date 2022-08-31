import React, { useState } from "react";
import openAccordion from "../images/openAccordion.svg";
import closedAccordion from "../images/closedAccordion.svg";
import styled from "styled-components";

const StyledAccordion = styled.section`
  margin-bottom: 3rem;

  .heading {
    border-top: 2px solid var(--black);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h3,
    h4 {
      font-size: 1.5rem;
      font-family: "Lato", sans-serif;
      margin-bottom: 0.75rem;
      :hover {
        text-decoration: underline;
      }
    }

    :hover {
      cursor: pointer;
    }

    img {
      margin-top: 0.875rem;
    }
  }
`;

const Accordion = ({ title, children, defaultOpen, h3 }) => {
  const [showContent, setShowContent] = useState(defaultOpen);

  const handleAccordion = () => setShowContent(!showContent);

  return (
    <StyledAccordion>
      <div className="heading" onClick={handleAccordion}>
        {!h3 ? <h4>{title}</h4> : <h3>{title}</h3>}
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
