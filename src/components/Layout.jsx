import React from "react";
import Nav from "./Nav";
import Cart from "./Cart";
import logo from "../images/logo.svg";
import { StaticImage } from "gatsby-plugin-image";
import GlobalStyles from "../styles/globalStyles";
import Reset from "../styles/reset";

import styled from "styled-components";

const StyledHeader = styled.header`
  background: var(--green);
  height: 6rem;
  display: flex;
  justify-content: center;

  .header-wrapper {
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 81rem;
    padding: 0 2.375rem 0 1.25rem;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <StyledHeader>
        <div className="header-wrapper">
          <h1>
            <img src={logo} alt={`Green Shirt Studio`} />
          </h1>
          <Nav />
          <Cart />
        </div>
      </StyledHeader>
      <main>{children}</main>
      <footer>
        <form>
          <h3>Sign up for our newsletter!</h3>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="What is your name?"
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="How can we contact you?"
            />
          </label>
        </form>
        <div className="map">
          <h3>Visit Us</h3>
          <small>4001 N Raventswood Ave, Unit 303-B Chicago, IL 60613</small>
          {/* map goes here */}
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <small>info@greenshirtstudio.com</small>
          <small>773-217-9565</small>
          <h3>Follow Us</h3>
        </div>
      </footer>
    </>
  );
};

export default Layout;
