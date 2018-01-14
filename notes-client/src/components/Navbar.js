//this is just a presentational component. "dumb"

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
          to="/home"
          exact
          activeStyle={{
            color: 'black'
          }}
        >Home </NavLink> |

        <NavLink
          to="/contact"
          activeStyle={{
            color: 'black'
          }}
        > Contact</NavLink> |

        <NavLink
          to="/about"
          activeStyle={{
            color: 'black'
          }}
        > About </NavLink> |

        <NavLink
          to="/"
          activeStyle={{
            color: 'black'
          }}
        > Your Book notes </NavLink>
    </div>

  )
}


export default NavBar;
