import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledTextContent = styled.div`
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  margin: 6rem auto;

  h3 {
    font-family: 'Zona Pro', serif;
    font-weight: 900;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  h3:not(:first-child) {
    margin-top: 3rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    line-height: 1.875rem;
  }

  ul {
    font-size: 1.25rem;
    padding-left: 1rem;
    margin: 0;
    li {
      list-style-type: circle;
    }
  }
  .link {
    margin: 2rem 0;
  }

  @media (max-width: 785px) {
    padding: 0 1rem;
  }

  @media (max-width: 560px) {
    margin: 3.75rem auto;

    h3 {
      font-size: 1.5rem;
      line-height: 1.9375rem;
    }

    p,
    li,
    a {
      line-height: 1.3125rem;
      font-size: 0.875rem;
    }
  }
`;

const TextContent = ({ title, content, link, linkAddress }) => {
  return (
    <StyledTextContent>
      <h3>{title}</h3>
      {content}
      {link && (
        <div className="link">
          <Link className="button fill" to={linkAddress}>
            {link}
          </Link>
        </div>
      )}
    </StyledTextContent>
  );
};
export default TextContent;
