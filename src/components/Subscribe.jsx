import React from "react";
import styled from "styled-components";

const StyledSubscribe = styled.section`
  background: var(--light-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8.875rem 0;
  h3 {
    font-size: 2rem;
    font-weight: 900;
    line-height: 2.625rem;
    text-align: center;
    max-width: 40rem;
    margin-bottom: 2rem;
  }
`;

const Subscribe = () => {
  return (
    <StyledSubscribe>
      <h3>
        Sign up to our newsletter to know when the next class is coming up
      </h3>
      <button className="button fill">Subscribe</button>
    </StyledSubscribe>
  );
};
export default Subscribe;
