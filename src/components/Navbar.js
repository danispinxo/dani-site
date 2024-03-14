import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function TopNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="navbar-brand" href="/">
          Dani Spinosa
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="navbar-link" id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navbar-link" href="/scholarship">
              Scholarship
            </Nav.Link>
            <Nav.Link className="navbar-link" href="/talks">
              Talks
            </Nav.Link>
            <Nav.Link className="navbar-link" href="/teaching">
              Teaching
            </Nav.Link>
            <NavDropdown
              className="navbar-link"
              title="Writing"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="navbar-link" href="/public-writing">
                Public Writing
              </NavDropdown.Item>
              <NavDropdown.Item
                className="navbar-link"
                href="/creative-writing"
              >
                Creative Writing
              </NavDropdown.Item>
              <NavDropdown.Item
                className="navbar-link"
                href="/digital-projects"
              >
                Digital Projects
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="navbar-link" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
