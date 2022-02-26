import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <h1>Green Shirt Studio</h1>
      <Nav />
      {children}
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
