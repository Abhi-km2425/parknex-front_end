import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLock, FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
const AboutPage = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      description: "Passionate about solving urban mobility challenges",
      avatar: "👨‍💼"
    },
    {
      name: "Sarah Martinez",
      role: "CTO",
      description: "Tech enthusiast with 10+ years in software development",
      avatar: "👩‍💻"
    },
    {
      name: "Mike Johnson",
      role: "Head of Operations",
      description: "Ensuring seamless parking experiences across cities",
      avatar: "👨‍💼"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Users" },
    { number: "15+", label: "Cities" },
    { number: "500+", label: "Parking Spots" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  const values = [
    {
      icon: <FaLock className="text-success" size={40} />, // CHANGED: FaShield to FaLock
      title: "Security First",
      description: "Your vehicle's safety is our top priority with 24/7 monitored locations"
    },
    {
      icon: <FaClock className="text-warning" size={40} />,
      title: "Time Saving",
      description: "Find and book parking in under 60 seconds, no more circling blocks"
    },
    {
      icon: <FaMapMarkerAlt className="text-info" size={40} />,
      title: "Real-Time Accuracy",
      description: "Live updates on availability and precise location tracking"
    },
    {
      icon: <FaUsers className="text-primary" size={40} />,
      title: "User Centric",
      description: "Built for drivers, by drivers who understand parking pain points"
    }
  ];
  const faqs = [
    {
      question: "How do I book a parking spot?",
      answer: "Simply search for your destination, select a spot, choose your time, and confirm booking."
    },
    {
      question: "Can I cancel my booking?",
      answer: "Yes, you can cancel up to 1 hour before your booking time for a full refund."
    },
    {
      question: "Is there customer support?",
      answer: "We provide 24/7 customer support through chat, email, and phone."
    },
    {
      question: "How are parking prices determined?",
      answer: "Prices are set by location owners and vary based on location, demand, and amenities."
    }
  ];

  return (
<>
      <CustomNavbar/>
      <div
        className="min-vh-100 text-white"
        style={{
          background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)',
          paddingTop: '100px',
          paddingBottom: '50px'
        }}
      >
        <Container>
          {/* Hero Section */}
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <h1 className="display-4 fw-bold mb-4">
                About <span className="text-success">ParkNex</span>
              </h1>
              <p className="lead fs-5">
                We're revolutionizing urban parking by making it smarter, faster, and more reliable 
                for millions of drivers worldwide.
              </p>
            </Col>
          </Row>
  
          {/* Mission & Vision */}
          <Row className="mb-5">
            <Col md={6} className="mb-4">
              <Card className="bg-dark text-light border-success h-100">
                <Card.Body className="p-4">
                  <h4 className="fw-bold text-success mb-3">🚀 Our Mission</h4>
                  <p className="mb-0">
                    To eliminate the stress of finding parking by creating a seamless, 
                    intelligent platform that connects drivers with available spots in real-time, 
                    saving time and reducing urban congestion.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="bg-dark text-light border-warning h-100">
                <Card.Body className="p-4">
                  <h4 className="fw-bold text-warning mb-3">⭐ Our Vision</h4>
                  <p className="mb-0">
                    To become the world's most trusted parking platform, transforming 
                    urban mobility through technology and creating smarter cities where 
                    parking is never a problem.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
  
          {/* Stats */}
          <Row className="text-center mb-5">
            {stats.map((stat, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card className="bg-dark text-light border-0">
                  <Card.Body>
                    <h2 className="fw-bold text-success mb-2">{stat.number}</h2>
                    <p className="mb-0 text-light">{stat.label}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
  
          {/* Our Story */}
          <Row className="mb-5">
            <Col lg={8} className="mx-auto">
              <Card className="bg-dark text-light border-0">
                <Card.Body className="p-5">
                  <h3 className="fw-bold text-center mb-4">Our Story</h3>
                  <p className="fs-6">
                    ParkNex was born from a simple yet frustrating experience: spending 30 minutes 
                    circling blocks looking for parking before an important meeting. Our founders 
                    realized that in the age of smart technology, parking remained one of the last 
                    frontiers of urban inefficiency.
                  </p>
                  <p className="fs-6">
                    Since 2023, we've been on a mission to transform this experience. What started 
                    as a small startup in Kochi has grown into a platform serving thousands of drivers 
                    across multiple cities, with plans to expand nationwide.
                  </p>
                  <p className="fs-6 mb-0">
                    Today, we continue to innovate, bringing AI-powered predictions, real-time 
                    availability, and seamless booking to drivers everywhere.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
  
          {/* Values */}
          <Row className="mb-5">
            <Col>
              <h3 className="fw-bold text-center mb-4">Our Values</h3>
              <Row className="g-4">
                {values.map((value, index) => (
                  <Col lg={3} md={6} key={index}>
                    <Card className="bg-dark text-light border-secondary text-center h-100">
                      <Card.Body className="p-4">
                        <div className="mb-3">{value.icon}</div>
                        <h5 className="fw-bold mb-3">{value.title}</h5>
                        <p className="text-light opacity-75 mb-0">{value.description}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
  
          {/* Team */}
          <Row className="mb-5">
            <Col>
              <h3 className="fw-bold text-center mb-4">Meet Our Team</h3>
              <Row className="g-4">
                {teamMembers.map((member, index) => (
                  <Col lg={4} md={6} key={index}>
                    <Card className="bg-dark text-light border-secondary text-center h-100">
                      <Card.Body className="p-4">
                        <div className="fs-1 mb-3">{member.avatar}</div>
                        <h5 className="fw-bold mb-2">{member.name}</h5>
                        <h6 className="text-success mb-3">{member.role}</h6>
                        <p className="text-light opacity-75 mb-0">{member.description}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
  
          {/* FAQ */}
          <Row className="mb-5">
            <Col lg={8} className="mx-auto">
              <h3 className="fw-bold text-center mb-4">Frequently Asked Questions</h3>
              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <Card key={index} className="bg-dark text-light border-secondary mb-3">
                    <Card.Header className="bg-dark border-secondary">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link text-white text-decoration-none w-100 text-start"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faq${index}`}
                        >
                          {faq.question}
                        </button>
                      </h5>
                    </Card.Header>
                    <div id={`faq${index}`} className="collapse" data-bs-parent="#faqAccordion">
                      <Card.Body>
                        {faq.answer}
                      </Card.Body>
                    </div>
                  </Card>
                ))}
              </div>
            </Col>
          </Row>
  
          {/* CTA */}
          <Row>
            <Col lg={6} className="mx-auto text-center">
              <Card className="bg-success border-0 text-white">
                <Card.Body className="p-5">
                  <h4 className="fw-bold mb-3">Ready to Park Smarter?</h4>
                  <p className="mb-4">
                    Join thousands of drivers who have transformed their parking experience
                  </p>
                  <Button as={Link} to="/vehicles" variant="light" size="lg" className="fw-bold">
                    Start Parking Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
               <Footer />
      
  
</>  );
};

export default AboutPage;