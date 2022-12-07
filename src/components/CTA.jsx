import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledCTA = styled.div`
  background: var(--neon-green);
  padding: 4rem;

  h3 {
    margin-bottom: 2rem;
  }

  .quote-area {
    text-align: center;
  }

  .quote-block {
    max-width: 53.5rem;
    min-height: 18.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 3rem;
    background: var(--black);
    color: var(--black);
    transform: rotate(0deg);

    margin: 0 auto;
    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--white);
      transform: rotate(-4deg);
      z-index: -1;
    }
  }

  .band-aid {
    padding: 2rem;
  }

  .hack {
    overflow: hidden;
    width: 100%;
  }

  @media (max-width: 580px) {
    padding: 4rem 2rem;
    .quote-block {
      padding: 1rem;
    }

    .button {
      padding: 1.5rem;
      display: inline-block;
    }
  }

  @media (max-width: 400px) {
    padding: 3rem 1rem;
  }
`;

const CTA = ({ heading, buttonText, buttonLink }) => {
  return (
    <StyledCTA>
      <div className="band-aid">
        <div className="quote-block">
          <div className="quote-area">
            <h3>{heading}</h3>
            <Link to={buttonLink} className="button fill">
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </StyledCTA>
  );
};
export default CTA;
