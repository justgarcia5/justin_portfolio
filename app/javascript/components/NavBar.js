import React from "react"
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

import Logo from '../../assets/images/logo.png'

const NavBar = props => {
  return (
    <div>
      <Router>
        <Navbar className="fixed-top" bg="white" expand="lg">
          <Link smooth to="#intro" className="nav-link"><img className="nav-logo" src={Logo}/></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link smooth to="#about" className="nav-link">About</Link>
              <Link smooth to="#projects" className="nav-link">Projects</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Router>
    </div>
  )
}

export default NavBar
