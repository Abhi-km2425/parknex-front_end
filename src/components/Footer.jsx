import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="pt-5 pb-3 text-white"
      style={{
        background: "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        fontSize: "0.95rem",
      }}
    >
      <Container>
        <Row className="mb-4">
          {/* Brand & Mission */}
          <Col md={4} className="mb-4 mb-md-0">
            <h4 className="fw-bold text-success">ParkNex</h4>
            <p className="text-white-50">
              Smarter parking, one spot at a time. Built for urban mobility and peace of mind.
            </p>
            <p className="text-white-50">
              <FaMapMarkerAlt className="me-2 text-warning" />
              Kochi, Kerala, India
            </p>
          </Col>

          {/* Navigation */}
          <Col md={2} className="mb-4 mb-md-0">
            <h6 className="text-uppercase fw-bold mb-3">Navigate</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/parking" className="footer-link">Find Parking</a></li>
              <li><a href="/booking" className="footer-link">My Bookings</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </Col>

          {/* Resources */}
          <Col md={2} className="mb-4 mb-md-0">
            <h6 className="text-uppercase fw-bold mb-3">Resources</h6>
            <ul className="list-unstyled">
              <li><a href="/faq" className="footer-link">FAQs</a></li>
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/terms" className="footer-link">Terms of Service</a></li>
            </ul>
          </Col>

          {/* Contact & Social */}
          <Col md={4}>
            <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
            <p className="text-white-50 mb-1">
              <FaEnvelope className="me-2 text-info" />
              <a href="mailto:abhijith@example.com" className="footer-link">abhijith@example.com</a>
            </p>
            <p className="text-white-50 mb-3">
              <FaPhoneAlt className="me-2 text-success" />
              +91 9876543210
            </p>
            <div className="d-flex gap-3">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaLinkedin />
              </a>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaGithub />
              </a>
              <a href="mailto:abhijith@example.com" className="footer-icon">
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col className="text-center text-white-50 pt-3 border-top border-secondary">
            <small>
              &copy; {new Date().getFullYear()} ParkNex. All rights reserved. Made with ❤️ in Kerala.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
