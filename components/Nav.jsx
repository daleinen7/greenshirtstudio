import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledNav = styled.nav`
  color: white;
`;

export default function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/classes">Classes</Link>
        </li>
        <li>
          <Link to="/shows-and-events">Shows & Events</Link>
        </li>
        <li>
          <Link to="/space-rental">Space Rental</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </StyledNav>
  );
}
