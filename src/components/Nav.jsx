import React from "react";
import { Link } from "gatsby";
import NavLinks from "./NavLinks";
import styled from "styled-components";

const StyledNav = styled.nav`
  a {
    font-weight: 400;
    font-size: 1rem;
    text-decoration: none;
    padding: 0.5rem;
    color: ${(props) =>
      props.headerColor === "green" ? "var(--white)" : " var(--black)"};
    :hover {
      border-bottom: 3px solid var(--black);
    }
  }
  .active {
    font-weight: 900;
    background: rgba(255, 255, 255, 0.1);
  }

  ul {
    display: flex;
    list-style-type: none;

    li {
      margin: 1.875rem 1rem;
    }
  }
`;

export default function Nav({ headerColor }) {
  return (
    <StyledNav headerColor={headerColor}>
      <NavLinks />
    </StyledNav>
  );
}
