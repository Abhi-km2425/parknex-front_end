import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      style={{
        background: 'linear-gradient(to right, rgba(15,32,39,0.7), rgba(32,58,67,0.7), rgba(44,83,100,0.7))',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        zIndex: 1000,
      }}
    >
      <Container fluid className="px-4">
        {/* Brand with Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2 text-white fw-bold">
          <img
            src={"https://cdn-icons-png.flaticon.com/512/5516/5516570.png"}
            alt="ParkNex Logo"
            style={{ height: '32px', width: '32px', objectFit: 'contain' }}
          />
          ParkNex
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Nav Items */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="gap-3">
            <Nav.Link as={Link} to="/" className="text-light nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/vehicles" className="text-light nav-link-custom">
              Find Parking
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing" className="text-light nav-link-custom">
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-light nav-link-custom">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-light nav-link-custom">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
