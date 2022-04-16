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

const StyledFooter = styled.footer`
  color: var(--white);
  background: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3.75rem;

  .main-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  h3 {
    font-weight: 900;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 19rem;

    h3 {
      margin-bottom: 1.5rem;
    }

    input[type="text"],
    input[type="email"] {
      padding: 0.875rem 0.75rem;
      border-radius: 4px;
      width: 100%;

      ::placeholder {
        font-weight: 400;
        font-size: 0.875rem;
      }
    }

    input[type="submit"] {
      color: var(--white);
      background: var(--black);
      border: 2px solid var(--white);
      border-radius: 50px;
      height: 3.5rem;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: 900;
    font-size: 0.875rem;

    margin-bottom: 1.5rem;
  }

  .map {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    a {
      color: var(--white);
      font-weight: 400;
      font-size: 1rem;
    }
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
      <StyledFooter>
        <div className="main-footer">
          <form>
            <h3>Sign up for our newsletter!</h3>
            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                id="name"
                placeholder="What is your name?"
              />
            </label>
            <label htmlFor="email">
              Email Address
              <input
                type="email"
                name="email"
                id="email"
                placeholder="How can we contact you?"
              />
            </label>
            <input type="submit" value="Subscribe" />
          </form>
          <div className="map">
            <h3>Visit Us</h3>
            <a href="https://www.google.com/maps/place/Green+Shirt+Studio/@41.9545665,-87.6758402,17z/data=!3m2!4b1!5s0x880fd240b0e4760d:0x2acbde16d52556ad!4m5!3m4!1s0x880fd2232f34c5f3:0x8802314b46718d2c!8m2!3d41.9545665!4d-87.6736515">
              4001 N Raventswood Ave, Unit 303-B Chicago, IL <br /> 60613
            </a>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.128891922789!2d-87.675840184167!3d41.95456647921637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2232f34c5f3%3A0x8802314b46718d2c!2sGreen%20Shirt%20Studio!5e0!3m2!1sen!2sus!4v1650140273910!5m2!1sen!2sus"
              width="416"
              height="238"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact">
            <h3>Contact Us</h3>
            <small>info@greenshirtstudio.com</small>
            <small>773-217-9565</small>
            <h3>Follow Us</h3>
          </div>
        </div>
        <small>&copy; {new Date().getFullYear()} Green Shirt Studio</small>
      </StyledFooter>
    </>
  );
};

export default Layout;
