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
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/scholarship">Scholarship</Nav.Link>
            <Nav.Link href="/talks">Talks</Nav.Link>
            <Nav.Link href="/teaching">Teaching</Nav.Link>
            <NavDropdown title="Writing" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/public-writing">
                Public Writing
              </NavDropdown.Item>
              <NavDropdown.Item href="/creative-writing">
                Creative Writing
              </NavDropdown.Item>
              <NavDropdown.Item href="/digital-projects">
                Digital Projects
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
