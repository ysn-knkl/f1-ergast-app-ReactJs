import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import f1Logo from "../assets/f1-logo.png";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="true">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={f1Logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
