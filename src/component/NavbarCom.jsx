import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Navbar,
} from "react-bootstrap";

export default function NavbarCom() {
  return (
    <>
      <Navbar expand="lg" id="styleNavbar">
        <Container fluid>
          <Navbar.Brand >Hi , shop NOW</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            > 
            <Link className="linkstyle" to="/">HOME</Link>
              <Link className="linkstyle" to="/Product">PRODUCT</Link>
              <Link className="linkstyle" to="/LoginCom">LOGIN</Link>
              <Nav.Link href="#action1">REGISTER</Nav.Link>

              <Nav.Link href="#action2"></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        
        {/* <img src="./image/shopping-basket.jpg"/> */}
      </Navbar>
    </>
  );
}
