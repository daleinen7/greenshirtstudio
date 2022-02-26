import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <h1>Green Shirt Studios</h1>
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
      </footer>
    </>
  );
};

export default Layout;
