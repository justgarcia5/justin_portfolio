import React from "react"
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import Logo from '../images/logo.png'
import Resume from '../images/documents/resume.png'

const NavBar = props => {
  return (
    <div>
    {props.current_admin &&
      <Router>
        <Navbar className="fixed-top" bg="white" expand="lg">
          <Nav.Link href="/" className="nav-link"><img className="nav-logo" src={Logo}/></Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto mr-2"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {/* <Link smooth to="#intro" className="nav-link">Intro</Link> */}
              <Nav.Link href="" className="disabled">Logged in as Admin</Nav.Link>
              <Nav.Link href="/" className="nav-link">Home</Nav.Link>
              <Nav.Link href="/contacts" className="nav-link">Messages</Nav.Link>
              <Nav.Link href="/admins/edit" className="nav-link">Edit</Nav.Link>
              <Nav.Link href="/admins/sign_out" className="nav-link" rel="nofollow" data-method="delete">Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Router>
    }

    {!props.current_admin &&
      <Router>
        <Navbar className="fixed-top px-5" bg="white" expand="lg">
          <Nav.Link href="/" className="nav-link"><img className="nav-logo" src={Logo}/></Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto mr-2" />
          <Navbar.Collapse id="basic-navbar-nav" className="mr-2">
            <Nav className="ml-auto mr-2">
              <Link to={Resume} className="nav-link" target='_blank' >Resume</Link>
              <HashLink smooth to="#about" className="nav-link">About</HashLink>
              <HashLink smooth to="#projects" className="nav-link">Projects</HashLink>
              <HashLink smooth to="#contact" className="nav-link">Contact</HashLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Router>
    }
    </div>
  )
}

const styles = {
  container: {
    width: '92vw'
  }
}

export default NavBar
