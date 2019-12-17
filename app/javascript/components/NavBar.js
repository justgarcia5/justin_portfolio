import React from "react"
import { Navbar, Nav, Link } from "react-bootstrap";
import { BrowserRouter as Router } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import Logo from '../../assets/images/logo.png'

const NavBar = props => {
  return (
    <div>
      <Router>
        <Navbar className="fixed-top" bg="white" expand="lg">
          <Nav.Link href="/" className="nav-link"><img className="nav-logo" src={Logo}/></Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {/* <Link smooth to="#intro" className="nav-link">Intro</Link> */}
              <HashLink smooth to="#about" className="nav-link">About</HashLink>
              <HashLink smooth to="#projects" className="nav-link">Projects</HashLink>
              <HashLink smooth to="#contact" className="nav-link">Contact</HashLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Router>
    </div>
  )
}

export default NavBar
