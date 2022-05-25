import React, { useState } from "react";
import openAccordian from "../images/openAccordian.svg";
import styled from "styled-components";

const Accordian = ({ title, children }) => {
  const [showContent, setShowContent] = useState(true);

  const handleAccordian = () => setShowContent(!showContent);

  return (
    <section>
      <div className="heading" onClick={handleAccordian}>
        <h3>{title}</h3>
        <img src={openAccordian} alt="Open Accordian" />
      </div>
      <div className={showContent ? "" : "visually-hidden"}>{children}</div>
    </section>
  );
};
export default Accordian;
