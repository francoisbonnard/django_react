import React from "react";
import { Navbar, Nav, Container, Row } from "react-bootstrap";

function MyHeader() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container fluid>
          <Navbar.Brand href="/">ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
              <Nav.Link href="/login"><i className="fas fa-user"></i>Login</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MyHeader;
