import React from 'react';
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
    <nav className="links nav-link">
      <ul className="navigation">
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
        <br />
        <li>
          <NavLink to="/React-Portfolio">
              Home
          </NavLink>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Nav;