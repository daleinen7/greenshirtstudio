import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledTextContent = styled.div`
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  margin: 9.375rem auto 0;

  h3 {
    font-weight: 900;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const TextContent = ({ title, content, link, linkAddress }) => {
  return (
    <StyledTextContent>
      <h3>{title}</h3>
      {content}
      <Link to={linkAddress}>{link}</Link>
    </StyledTextContent>
  );
};
export default TextContent;
