import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Developer's Name</h1>
    <nav>
      <NavLink to="/" exact activeClassName="active">About Me</NavLink>
      <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      <NavLink to="/resume" activeClassName="active">Resume</NavLink>
    </nav>
  </header>
);

export default Header;