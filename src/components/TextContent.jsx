import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledTextContent = styled.div`
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  margin: 6rem auto;

  h3 {
    font-family: "Zona Pro", serif;
    font-weight: 900;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }

  ul {
    padding-left: 1rem;
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
