import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" className="navbar-dark bg-dark fixed-top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-info">Post-App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;