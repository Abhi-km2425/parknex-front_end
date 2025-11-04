import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, Navbar } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Contact form submitted:', formData);
    setShowAlert(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Hide alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            {/* Header */}
            <Row className="text-center mb-5">
              <Col lg={8} className="mx-auto">
                <h1 className="display-5 fw-bold mb-3">Contact Us</h1>
                <p className="lead text-light opacity-75">
                  Get in touch with our team. We're here to help you with any questions.
                </p>
              </Col>
            </Row>
    
            <Row className="g-4">
              {/* Contact Information */}
              <Col lg={4}>
                <Card className="bg-dark text-white border-0 h-100">
                  <Card.Body className="p-4">
                    <h5 className="fw-bold mb-4">Get In Touch</h5>
                    
                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-3">
                        <FaPhone className="text-success me-3" />
                        <div>
                          <h6 className="mb-1">Phone</h6>
                          <p className="mb-0">+91 98765 43210</p>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center mb-3">
                        <FaEnvelope className="text-success me-3" />
                        <div>
                          <h6 className="mb-1">Email</h6>
                          <p className="mb-0">support@parknex.com</p>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center mb-3">
                        <FaMapMarkerAlt className="text-success me-3" />
                        <div>
                          <h6 className="mb-1">Address</h6>
                          <p className="mb-0">Kochi, Kerala, India</p>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center">
                        <FaClock className="text-success me-3" />
                        <div>
                          <h6 className="mb-1">Support Hours</h6>
                          <p className="mb-0">24/7 Available</p>
                        </div>
                      </div>
                    </div>
    
                    <div className="mt-4">
                      <h6 className="fw-bold mb-3">Quick Support</h6>
                      <p className="small">
                        For urgent parking-related issues during your booking, 
                        call our support line for immediate assistance.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
    
              {/* Contact Form */}
              <Col lg={8}>
                <Card className="bg-dark text-light border-0">
                  <Card.Body className="p-4">
                    {showAlert && (
                      <Alert variant="success" className="mb-4">
                        Thank you for your message! We'll get back to you within 24 hours.
                      </Alert>
                    )}
                    
                    <h5 className="fw-bold mb-4">Send us a Message</h5>
                    
                    <Form onSubmit={handleSubmit}>
                      <Row className="g-3">
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Your Name *</Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              className="bg-dark text-light border-secondary"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </Form.Group>
                        </Col>
                        
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Email Address *</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              className="bg-dark text-light border-secondary"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </Form.Group>
                        </Col>
                        
                        <Col md={12}>
                          <Form.Group>
                            <Form.Label>Subject *</Form.Label>
                            <Form.Control
                              type="text"
                              name="subject"
                              className="bg-dark text-light border-secondary"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                            />
                          </Form.Group>
                        </Col>
                        
                        <Col md={12}>
                          <Form.Group>
                            <Form.Label>Message *</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={5}
                              name="message"
                              className="bg-dark text-light border-secondary"
                              value={formData.message}
                              onChange={handleChange}
                              required
                            />
                          </Form.Group>
                        </Col>
                        
                        <Col md={12}>
                          <Button 
                            variant="success" 
                            type="submit" 
                            size="lg"
                            className="px-4"
                          >
                            Send Message
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
             <Footer />
    
</>  );
};

export default ContactPage;