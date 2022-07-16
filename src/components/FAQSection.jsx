import React from "react";
import styled from "styled-components";
import Accordion from "./Accordion";

const StyledFAQSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 40rem;
  margin: 0 auto;

  h3 {
    font-size: 2rem;
    font-weight: 900;
  }

  ul {
    width: 100%;
    list-style-type: none;
  }
`;

const FAQSection = ({ FAQs }) => {
  return (
    <StyledFAQSection>
      <h3>Frequently Asked Questions</h3>
      <ul>
        {FAQs.map((faq) => (
          <li>
            <Accordion title={faq.question} children={faq.answer} />
          </li>
        ))}
      </ul>
    </StyledFAQSection>
  );
};
export default FAQSection;
