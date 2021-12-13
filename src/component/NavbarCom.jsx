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
import { addToBasket } from "../service/appApi";
import { useSelector } from "react-redux";

export default function NavbarCom() {
  const showName = useSelector((state) => state.baskit.value);

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
              <Link className="linkstyle" to="/Register">REGISTER</Link>
              <Link className="linkstyle" to="/UserAccount"></Link>
              {/* <Link className="linkstyle" to="/ErrorCom">Erorr</Link> */}

              <Nav.Link href="#action2"> 
              <div className="basket">
              <Link to="/InBasket">
              <img src="./image/shopping-trolley.png" width="30px" />
               </Link>
            {showName.length}
          </div></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      
       
      </Navbar>
    </>
  );
}
