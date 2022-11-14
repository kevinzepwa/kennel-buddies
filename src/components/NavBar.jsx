import React from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
      <Navbar bg="success" variant="dark" className="stickyNa">
        <Container>
          <Navbar.Brand href="/">Kennel Buddies</Navbar.Brand>
          <Nav className="justify-content-end">
          <NavLink
            to="/"
            exact
            className="nav text-center"
            activeStyle={{
              background: "darkblue",
            }}
          >
            Home
          </NavLink>
          
          <NavLink
            to="/pets"
            exact
            className="nav"
            activeStyle={{
              background: "darkblue",
            }}
          >
            Pets
          </NavLink>

          <NavLink
            to="/favourite"
            exact
            className="nav"
            activeStyle={{
              background: "darkblue",
            }}
          >
            Favourites
          </NavLink>

          <NavLink
            to="/about"
            exact
            className="nav"
            activeStyle={{
              background: "darkblue",
            }}
          >
            About
          </NavLink>
          
          <NavLink
            to="/admin"
            exact
            className="nav"
            activeStyle={{
              background: "darkblue",
            }}
          >
            Admin
          </NavLink>
        </Nav>
        </Container>
      </Navbar>
    );
}

export default NavBar;