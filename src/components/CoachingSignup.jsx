import React from "react";
import subscribeBG from "../images/subscribeBG.svg";
import styled from "styled-components";

const StyledCoachingSignup = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8.875rem 0;
  overflow: hidden;

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

  a {
    text-align: center;
  }

  @media (max-width: 785px) {
    h3 {
      font-size: 1.125rem;
      max-width: 400px;
    }
  }

  @media (max-width: 560px) {
    h3 {
      font-size: 1.125rem;
      max-width: 300px;
      line-height: 1.5rem;
    }
  }
`;

const Subscribe = () => {
  return (
    <StyledCoachingSignup>
      <div className="subscribeBG">
        <h3>Schedule your free consultation</h3>
        <a
          href="mailto:jack@greenshirtstudio.com?subject=Coaching"
          className="button fill"
        >
          Schedule Now
        </a>
      </div>
    </StyledCoachingSignup>
  );
};
export default Subscribe;
