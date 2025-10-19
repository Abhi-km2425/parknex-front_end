import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const CustomNavbar = () => {
  const location = useLocation();

  // Mock user data - replace with actual auth state
  const isLoggedIn = false; // Change to true/false based on actual auth
  const userName = "John Doe";

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      sticky="top"
      style={{
        background:
          "linear-gradient(to right, rgba(15,32,39,0.9), rgba(32,58,67,0.9), rgba(44,83,100,0.9))",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        zIndex: 1000,
      }}
    >
      <Container fluid className="px-4">
        {/* Brand with Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center gap-2 text-white fw-bold"
        >
          <img
            src={"https://cdn-icons-png.flaticon.com/512/5516/5516570.png"}
            alt="ParkNex Logo"
            style={{ height: "32px", width: "32px", objectFit: "contain" }}
          />
          ParkNex
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Nav Items */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="gap-3 align-items-center">
            <Nav.Link
              as={Link}
              to="/"
              className={`nav-link-custom ${
                isActiveLink("/") ? "text-success fw-bold" : "text-light"
              }`}
              style={{
                borderBottom: isActiveLink("/") ? "2px solid #00d9a5" : "none",
                paddingBottom: "5px",
              }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/parking"
              className={`nav-link-custom ${
                isActiveLink("/parking") ? "text-success fw-bold" : "text-light"
              }`}
              style={{
                borderBottom: isActiveLink("/parking")
                  ? "2px solid #00d9a5"
                  : "none",
                paddingBottom: "5px",
              }}
            >
              Find Parking
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/booking"
              className={`nav-link-custom ${
                isActiveLink("/booking") ? "text-success fw-bold" : "text-light"
              }`}
              style={{
                borderBottom: isActiveLink("/booking")
                  ? "2px solid #00d9a5"
                  : "none",
                paddingBottom: "5px",
              }}
            >
              My Bookings
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/about"
              className={`nav-link-custom ${
                isActiveLink("/about") ? "text-success fw-bold" : "text-light"
              }`}
              style={{
                borderBottom: isActiveLink("/about")
                  ? "2px solid #00d9a5"
                  : "none",
                paddingBottom: "5px",
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={`nav-link-custom ${
                isActiveLink("/contact") ? "text-success fw-bold" : "text-light"
              }`}
              style={{
                borderBottom: isActiveLink("/contact")
                  ? "2px solid #00d9a5"
                  : "none",
                paddingBottom: "5px",
              }}
            >
              Contact
            </Nav.Link>

            {/* User Section */}
            {isLoggedIn ? (
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="dark"
                  id="dropdown-basic"
                  className="d-flex align-items-center gap-2 bg-transparent border-0 text-light"
                  style={{ boxShadow: "none" }}
                >
                  <div
                    className="bg-success rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "35px",
                      height: "35px",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    <FaUser />
                  </div>
                  <span className="d-none d-md-inline">{userName}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="bg-dark border-secondary">
                  <Dropdown.Item as={Link} to="/profile" className="text-light">
                    <FaUser className="me-2" />
                    My Profile
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={Link}
                    to="/bookings"
                    className="text-light"
                  >
                    📅 My Bookings
                  </Dropdown.Item>
                  <Dropdown.Divider className="border-secondary" />
                  <Dropdown.Item className="text-danger">
                    🚪 Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Nav.Link
                as={Link}
                to="/authform"
                className={`nav-link-custom ${
                  isActiveLink("/authform")
                    ? "text-success fw-bold"
                    : "text-light"
                }`}
                style={{
                  borderBottom: isActiveLink("/authform")
                    ? "2px solid #00d9a5"
                    : "none",
                  paddingBottom: "5px",
                }}
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
