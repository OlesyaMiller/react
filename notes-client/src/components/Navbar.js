import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
          to="/"
          exact
          activeStyle={{
            color: 'white'
          }}
        >Home </NavLink> |

        <NavLink
          to="/contact"
          activeStyle={{
            color: 'white'
          }}
        > Contact</NavLink> |
        <NavLink
          to="/about"
          activeStyle={{
            color: 'white'
          }}
        > About </NavLink>
    </div>

  )
}


export default NavBar;
