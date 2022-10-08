import React from "react";
import { Link } from "gatsby";

const NavLinks = () => {
  return (
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
        <a
          href="https://www.eventbrite.com/cc/green-shirt-shows-events-1248579"
          activeClassName="active"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shows & Events
        </a>
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
  );
};
export default NavLinks;
