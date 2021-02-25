import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/"><img src="plane.png" alt="icon plane" height="40"></img></Navbar.Brand>
  <Nav.Link href="/user"><img src="user_Icon.png" alt="icon user" height="40"></img></Nav.Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
    </Nav>
    <Nav className="mr-auto">
      <Nav.Link href="/select">Select</Nav.Link>
    </Nav>
    <Nav className="mr-auto">
      <Nav.Link href="/confirm">Confirm</Nav.Link>
    </Nav>
    <Nav className="mr-auto">
      <Nav.Link href="/reservation">Reservation</Nav.Link>
    </Nav>
    <Nav className="mr-auto">
      <Nav.Link href="/user">Profil</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
};

export default NavBar;
