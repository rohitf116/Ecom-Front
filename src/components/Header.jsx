//package
import { Container, Navbar, Nav } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <Link to="/">
              <Navbar.Brand>Ecom</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link to="/cart">
                  <i className="fas fa-shopping-cart"></i> Cart
                </Link>

                <Link to="/login">
                  <i className="fas fa-user"></i> Sign In
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
