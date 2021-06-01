import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import HoverDropdown from '../common/HoverDropdown'
import AuthBtns from './AuthBtns'
import CurrDropdown from './CurrDropdown'
import LangDropdown from './LangDropdown'
import Searchbar from './Searchbar'

const Header = () => {
  return (
    <header className="header mb-3 bg-white box-shadow">
      <div className="row first-row py-2">
        <div className="col-3 center">
          <a href="/" className="navbar-brand em-20 boldd">
            ETSUQ <i className="fas fa-check-circle" />
          </a>
        </div>
        <div className="col py-2">
          <Searchbar />
        </div>
        <div className="col-3 p-33 text-right">
          <AuthBtns />
        </div>
      </div>
      <div className="x">
        <Navbar bg="lightt" expand="lg" className="navbar-second-row">
          <Container>
            <Navbar.Toggle aria-controls="navbar-2" />
            <Navbar.Collapse id="navbar-2" className="row navbar-2-links">
              <Nav className="col ">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#home">Dashboard</Nav.Link>
                <Nav.Link href="#link"> Register Store</Nav.Link>
                <Nav.Link href="#link"> Suggestions</Nav.Link>
                <Nav.Link href="#link"> Explore</Nav.Link>
              </Nav>
              <Nav className="col">
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
                {/* Currenty Dropdown */}
                <CurrDropdown />
                {/* langugae Dropdown  */}
                <LangDropdown />
                <HoverDropdown />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  )
}

export default Header
