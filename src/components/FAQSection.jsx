import React from "react";
import styled from "styled-components";
import Accordion from "./Accordion";
import parse from "html-react-parser";

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

  p:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const FAQSection = ({ FAQs }) => {
  return (
    <StyledFAQSection>
      <h3>Frequently Asked Questions</h3>
      <ul>
        {FAQs.map((faq) => (
          <li>
            <Accordion title={faq.title}>{parse(faq.content)}</Accordion>
          </li>
        ))}
      </ul>
    </StyledFAQSection>
  );
};
export default FAQSection;
