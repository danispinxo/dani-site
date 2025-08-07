import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";

const TopNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">Dani Spinosa</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Research" id="research-nav-dropdown">
              <NavDropdown.Item href="/scholarship">
                Scholarship
              </NavDropdown.Item>
              <NavDropdown.Item href="/talks">Talks</NavDropdown.Item>
              <NavDropdown.Item href="/teaching">Teaching</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Writing" id="writing-nav-dropdown">
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
            <NavDropdown title="Dev" id="dev-nav-dropdown">
              <NavDropdown.Item href="/dev-portfolio">
                Dev Portfolio
              </NavDropdown.Item>
              <NavDropdown.Item href="/todo">To Do List App</NavDropdown.Item>
              <NavDropdown.Item
                href="https://github.com/danispinxo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.linkedin.com/in/dani-spinosa-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
