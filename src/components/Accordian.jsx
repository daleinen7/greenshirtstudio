import React, { useState } from "react";
import openAccordian from "../images/openAccordian.svg";
import styled from "styled-components";

const StyledAccordian = styled.div`
  width: 100%;
  border-top: 2px solid var(--black);
  display: flex;
  flex-direction: column;

  .heading {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 0;
  }
`;

const Accordian = ({ title, children }) => {
  const [showContent, setShowContent] = useState(true);

  const handleAccordian = () => setShowContent(!showContent);

  return (
    <StyledAccordian>
      <div className="heading" onClick={handleAccordian}>
        <h3>{title}</h3>
        <img src={openAccordian} alt="Open Accordian" />
      </div>
      <div className={showContent ? "" : "visually-hidden"}>{children}</div>
    </StyledAccordian>
  );
};
export default Accordian;
