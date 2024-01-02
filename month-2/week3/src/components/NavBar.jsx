
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" activeClassName="active" exact>
        Home
      </NavLink>
      <NavLink to="/cart" activeClassName="active">
        Cart
      </NavLink>
    </nav>
  );
};

export default NavBar;
