import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h3 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    line-height: 100%;
  }

  p {
    font-size: 1.25rem;
    line-height: 150%;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Content = ({ heading, paragraph }) => {
  return (
    <StyledContent>
      <h3>{heading}</h3>
      <p>{paragraph}</p>
    </StyledContent>
  );
};
export default Content;
