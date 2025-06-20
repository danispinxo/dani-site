import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";

const TopNavbar = () => {
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
            <NavDropdown
              className="navbar-link"
              title="Dev"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="navbar-link" href="/dev-portfolio">
                Portfolio
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-link" href="/todo">
                To Do List App
              </NavDropdown.Item>
              <NavDropdown.Item
                className="navbar-link"
                href="https://github.com/danispinxo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Personal Github
              </NavDropdown.Item>
              <NavDropdown.Item
                className="navbar-link"
                href="https://github.com/dani-hatch"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hatch Coding Github
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="navbar-link" href="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link className="navbar-link" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
