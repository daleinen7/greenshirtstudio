import React from 'react';
import Accordion from '../Accordion';
import styled from 'styled-components';

const StyledDescription = styled.section`
  white-space: pre-wrap;

  h3 {
    font-weight: 900;
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.375rem;
    font-weight: 600;
    margin-top: 0.75rem;
  }

  p {
    font-size: 1.25rem;
    margin-top: 0.75rem;
  }

  ul {
    list-style-type: disc;
    li {
      font-size: 1.25rem;
    }
  }
`;

const Description = ({ description }) => {
  return (
    <StyledDescription>
      <Accordion title="Description" defaultOpen={true} h3>
        {description}
      </Accordion>
    </StyledDescription>
  );
};
export default Description;
