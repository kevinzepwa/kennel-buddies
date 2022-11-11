import React from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
      <div>
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          // style={linkStyles}
          /* add prop for activeStyle */
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          exact
          // style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/pets"
          exact
          // style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Pets
        </NavLink>
        <NavLink
          to="/favourites"
          exact
          // style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Favourites
        </NavLink>
        <NavLink
          to="/admin"
          exact
          // style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Admin
        </NavLink>
      </div>
    );
}

export default NavBar;