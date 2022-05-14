import React from "react";
import styled from "styled-components";
import FAQ from "./FAQ";

const StyledFAQSection = styled.section`
  dt {
    font-weight: 900;
    font-size: 1.5rem;
  }
`;

const FAQSection = ({ FAQs }) => {
  return (
    <StyledFAQSection>
      <h3>Frequently Asked Questions</h3>
      <dl>
        {FAQs.map((faq) => (
          <FAQ q={faq.question} a={faq.answer} />
        ))}
      </dl>
    </StyledFAQSection>
  );
};
export default FAQSection;
