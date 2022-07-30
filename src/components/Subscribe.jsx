import React from "react";
import subscribeBG from "../images/subscribeBG.svg";
import styled from "styled-components";

const StyledSubscribe = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8.875rem 0;

  .subscribeBG {
    background-image: url(${subscribeBG});
    background-repeat: no-repeat;
    width: 880px;
    height: 342px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

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
      <div className="subscribeBG">
        <h3>
          Sign up to our newsletter to know when the next class is coming up
        </h3>
        <button className="button fill">Subscribe</button>
      </div>
    </StyledSubscribe>
  );
};
export default Subscribe;
