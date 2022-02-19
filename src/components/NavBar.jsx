import React from "react";
import "../App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from './img/rollingvet3d.png';


const NavBar = () => {
  return (
    <div className="">
      
      <Navbar className="bg-celeste" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/" className="text-white">
            {" "}
            <img
              src={logo}
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt="Logo Rolling Vet"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="text-white">
                INICIO
              </Nav.Link>
              <Nav.Link href="/QuienesSomos" className="text-white">
                QUIENES SOMOS
              </Nav.Link>
              <Nav.Link href="/NuestrosServicios" className="text-white">
                NUESTROS SERVICIOS
              </Nav.Link>
              <Nav.Link href="/Login" className="text-white">
                LOGIN
              </Nav.Link>
              <Nav.Link href="/Contactanos" className="text-white">
                CONTACTANOS
              </Nav.Link>
              <Nav.Link href="/Adm" className="text-white">
                ADM
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
