import React from "react";
import NavLinks from "./NavLinks";
import styled from "styled-components";

const StyledNav = styled.nav`
  a {
    display: block;
    font-weight: 900;
    font-size: 1rem;
    text-decoration: none;
    padding: 1rem;
    width: 100%;
    color: ${(props) =>
      props.headerColor === "green" ? "var(--white)" : " var(--black)"};
  }
  .active {
    font-weight: 900;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.635rem;
    margin: 0;
    padding: 1rem;
    list-style-type: none;
    background: white;
    width: 100%;
    position: absolute;
    z-index: 10;

    li {
      border-radius: 2px;

      :hover {
        background: var(--neon-green);
      }
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
