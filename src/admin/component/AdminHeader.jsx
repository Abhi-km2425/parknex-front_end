import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    const existingAdmin = JSON.parse(sessionStorage.getItem("existingUser"));
    setAdminName(existingAdmin?.Username || "Admin");
  }, [location]);

  const isActiveLink = (path) => location.pathname === path;

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("existingUser");
    navigate("/");
    window.location.reload();
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
            src="https://cdn-icons-png.flaticon.com/512/5516/5516570.png"
            alt="ParkNex Logo"
            style={{ height: '32px', width: '32px', objectFit: 'contain' }}
          />
          ParkNex Admin
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          {/* Centered Admin Name */}
          <div className="w-100 text-center mb-2">
            <span
              className="fw-bold text-white text-decoration-underline"
              style={{ fontSize: "1.25rem" }}
            >
              Welcome, {adminName}
            </span>
          </div>

          {/* Nav Links */}
          <Nav className="gap-3 align-items-center">
            <Nav.Link 
              as={Link} 
              to="/admin-home" 
              className={isActiveLink('/admin-home') ? 'text-success fw-bold' : 'text-light'}
            >
              Dashboard
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/admin-parking" 
              className={isActiveLink('/admin-parking') ? 'text-success fw-bold' : 'text-light'}
            >
              Parking Management
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/admin-booking" 
              className={isActiveLink('/admin-booking') ? 'text-success fw-bold' : 'text-light'}
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

            {/* Logout Button */}
            <Button 
              variant="outline-danger" 
              size="sm" 
              onClick={handleLogout}
              className="ms-2"
            >
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminHeader;
