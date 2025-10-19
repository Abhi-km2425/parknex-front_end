import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaLock,
} from "react-icons/fa";
import "animate.css";
import CustomNavbar from "../components/Navbar";

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaSearch className="text-success" />,
      title: "Quick Search",
      description: "Find available parking spots in real-time",
    },
    {
      icon: <FaMapMarkerAlt className="text-warning" />,
      title: "Live Location",
      description: "Accurate GPS-based spot detection",
    },
    {
      icon: <FaClock className="text-info" />,
      title: "Time Saving",
      description: "Book in advance, avoid the hassle",
    },
    {
      icon: <FaLock className="text-primary" />,
      title: "Secure Parking",
      description: "Verified and safe parking locations",
    },
  ];

  const testimonials = [
    {
      name: "Arjun M.",
      rating: 5,
      comment: "Saved me 20 minutes of circling around!",
      role: "Daily Commuter",
    },
    {
      name: "Priya S.",
      rating: 4,
      comment: "So convenient for mall parking during weekends.",
      role: "Weekend Shopper",
    },
    {
      name: "Rahul K.",
      rating: 5,
      comment: "Best app for office parking in Infopark!",
      role: "IT Professional",
    },
  ];

  return (
<>
<CustomNavbar/>
      <div
        className="min-vh-100 text-white"
        style={{
          background:
            "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",
          overflowX: "hidden",
        }}
      >
        {/* Hero Section */}
        <Container fluid className="vh-100 d-flex align-items-center">
          <Row className="w-100 align-items-center">
            {/* Left Content */}
            <Col lg={6} className="px-5">
              <div className="animate__animated animate__fadeInLeft">
                <h1 className="display-3 fw-bold mb-4">
                  Park<span className="text-success">Nex</span>
                </h1>
                <p className="lead text-light mb-4 fs-5">
                  Smarter parking, one spot at a time. Find, book, and park
                  effortlessly with our intelligent parking solution.
                </p>
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <Button
                    variant="success"
                    size="lg"
                    className="px-4 py-3 fw-semibold"
                    onClick={() => navigate("/parking")}
                    style={{
                      boxShadow: "0 4px 15px rgba(0, 255, 150, 0.3)",
                      transition: "all 0.3s ease",
                      minWidth: "160px",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow =
                        "0 6px 20px rgba(0, 255, 150, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow =
                        "0 4px 15px rgba(0, 255, 150, 0.3)";
                    }}
                  >
                    <FaSearch className="me-2" />
                    Find Parking
                  </Button>
                  <Button
                    variant="outline-light"
                    size="lg"
                    className="px-4 py-3 fw-semibold"
                    style={{
                      transition: "all 0.3s ease",
                      minWidth: "160px",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    How It Works
                  </Button>
                </div>
  
                {/* Stats */}
                <Row className="text-center mt-5">
                  <Col xs={4}>
                    <div className="border-end border-light">
                      <h4 className="fw-bold text-success mb-1">500+</h4>
                      <small className="text-light">Parking Spots</small>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="border-end border-light">
                      <h4 className="fw-bold text-warning mb-1">2K+</h4>
                      <small className="text-light">Happy Users</small>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <h4 className="fw-bold text-info mb-1">15+</h4>
                    <small className="text-light">Locations</small>
                  </Col>
                </Row>
              </div>
            </Col>
  
            {/* Right Image */}
            <Col
              lg={6}
              className="position-relative d-flex justify-content-center align-items-center"
            >
              <div
                className="position-absolute w-100 h-100"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,217,165,0.2), transparent)",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              ></div>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/056/089/233/small_2x/multi-level-parking-garage-design-efficient-vehicle-storage-free-png.png"
                alt="Modern Parking Solution"
                className="img-fluid animate__animated animate__fadeInRight position-relative"
                style={{
                  maxHeight: "75%",
                  zIndex: 2,
                  objectFit: "contain",
                  borderRadius: "10px",
                  boxShadow: "0 0 30px rgba(0, 217, 165, 0.3)",
                }}
              />
            </Col>
          </Row>
        </Container>
  
        {/* Features Section */}
        <Container className="py-5">
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold mb-3">Why Choose ParkNex?</h2>
              <p className="text-light lead">
                Experience the future of parking with our innovative features
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col lg={3} md={6} key={index}>
                <Card
                  className="bg-dark text-light border-0 h-100 text-center hover-card"
                  style={{ transition: "all 0.3s ease" }}
                >
                  <Card.Body className="p-4">
                    <div
                      className="feature-icon mb-3"
                      style={{ fontSize: "3rem" }}
                    >
                      {feature.icon}
                    </div>
                    <h5 className="fw-bold mb-3">{feature.title}</h5>
                    <p className="text-light opacity-75 mb-0">
                      {feature.description}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
  
        {/* Testimonials Section */}
        <Container className="py-5">
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold mb-3">What Users Say</h2>
              <p className="text-light lead">
                Join thousands of satisfied parkers
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {testimonials.map((testimonial, index) => (
              <Col lg={4} key={index}>
                <Card className="bg-dark text-light border-secondary h-100">
                  <Card.Body className="p-4">
                    <div className="d-flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < testimonial.rating
                              ? "text-warning"
                              : "text-secondary"
                          }
                        />
                      ))}
                    </div>
                    <p className="fst-italic mb-4">"{testimonial.comment}"</p>
                    <div className="d-flex align-items-center">
                      <div>
                        <h6 className="fw-bold mb-1">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
  
        {/* CTA Section */}
        <Container className="py-5 text-center">
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="bg-success border-0 text-white">
                <Card.Body className="p-5">
                  <h3 className="fw-bold mb-3">Ready to Park Smarter?</h3>
                  <p className="mb-4 fs-5">
                    Join thousands of users who have transformed their parking
                    experience
                  </p>
                  <Button
                    variant="light"
                    size="lg"
                    className="px-5 py-3 fw-bold"
                    onClick={() => navigate("/parking")}
                  >
                    Get Started Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
  
        <style jsx>{`
          .hover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 217, 165, 0.2) !important;
          }
  
          .feature-icon {
            transition: transform 0.3s ease;
          }
  
          .hover-card:hover .feature-icon {
            transform: scale(1.1);
          }
        `}</style>
      </div>
  
</>  );
};

export default LandingPage;
