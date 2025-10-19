import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const AdminHeader = () => {
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      sticky="top"
      style={{
        background: 'linear-gradient(to right, rgba(15,32,39,0.9), rgba(32,58,67,0.9), rgba(44,83,100,0.9))',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        zIndex: 1000,
      }}
    >
      <Container fluid className="px-4">
        {/* Brand */}
        <Navbar.Brand as={Link} to="/admin" className="d-flex align-items-center gap-2 text-white fw-bold">
          <img
            src={"https://cdn-icons-png.flaticon.com/512/5516/5516570.png"}
            alt="ParkNex Logo"
            style={{ height: '32px', width: '32px', objectFit: 'contain' }}
          />
          ParkNex Admin
        </Navbar.Brand>

        {/* Nav Links */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="gap-3">
            <Nav.Link 
              as={Link} 
              to="/admin-home" 
              className={isActiveLink('/admin') ? 'text-success fw-bold' : 'text-light'}
            >
              Dashboard
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/admin-parking" 
              className={isActiveLink('/parking') ? 'text-success fw-bold' : 'text-light'}
            >
              Parking Management
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/admin-booking" 
              className={isActiveLink('/admin/bookings') ? 'text-success fw-bold' : 'text-light'}
            >
              Booking Management
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/" 
              className="text-warning"
            >
              Back to Main Site
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminHeader;