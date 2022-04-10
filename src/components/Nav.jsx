import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledNav = styled.nav`
  a {
    font-weight: 400;
    font-size: 1rem;
    text-decoration: none;
    padding: 0.5rem;
    color: var(--white);
  }
  .active {
    font-weight: 900;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  ul {
    display: flex;

    li {
      margin: 1.875rem 1rem;
    }
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/classes" activeClassName="active">
            Classes
          </Link>
        </li>
        <li>
          <Link to="/shows-and-events" activeClassName="active">
            Shows & Events
          </Link>
        </li>
        <li>
          <Link to="/space-rental" activeClassName="active">
            Space Rental
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </li>
        <li>
          <Link to="/blog" activeClassName="active">
            Blog
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
}
