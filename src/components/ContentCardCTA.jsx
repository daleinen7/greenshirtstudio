import React from 'react';
import { Link } from "gatsby";
import styled from 'styled-components';

const StyledContentCardWithCTA = styled.div`
  max-width: 26rem;

  h4 {
    margin: 1rem 0 0.24rem;
    font-weight: 900;
    font-size: 1.5rem;
  }

  img {
    height: 18.125rem;
    width: 30.625rem;
  }

  p {
    color: var(--dark-gray);
    line-height: 1.5rem;
  }

  .button {
    display: block;
    width: 165px;
    min-width: unset;
    margin-top: 25px;
  }

  @media (max-width: 785px) {
    h4 {
      font-family: 'Lato', sans-serif;
    }
  }
`;

const ContentCardCTA = ({ title, content, image, altText, link, linkAddress }) => {
  return (
    <StyledContentCardWithCTA>
      <img src={image} alt={altText} />
      <h4>{title}</h4>
      <p>{content}</p>
      {link && (
        <div className="link">
          <Link className="button fill" to={linkAddress}>
            {link}
          </Link>
        </div>
      )}
    </StyledContentCardWithCTA>
  );
};
export default ContentCardCTA;
