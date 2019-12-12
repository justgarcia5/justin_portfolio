import React from "react"

import { Navbar, Nav } from "react-bootstrap";
import Logo from '../../assets/images/logo.png'

const NavBar = props => {
  return (
    <div>
      <Navbar bg="white" expand="lg">
        <Navbar.Brand href="#home"><img className="nav-logo" src={Logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
