import React from "react";
import { Container, Row, Col, Card, Button, Image, Badge } from "react-bootstrap";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaUserEdit, FaEnvelope, FaPhone, FaCalendarCheck } from "react-icons/fa";

const ProfilePage = () => {
  const user = {
    name: "Abhijith",
    email: "abhijith@example.com",
    phone: "+91 9876543210",
    avatar: "https://tse1.mm.bing.net/th/id/OIP.NOAYhuLR9iu4fpWU6GsNtQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    joined: "March 2023",
    stats: {
      total: 18,
      completed: 14,
      cancelled: 3,
    },
  };

  return (
    <>
     <CustomNavbar />
         
          <div
            className="min-vh-100 text-white"
            style={{
              background: "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",
              paddingTop: "100px",
              paddingBottom: "50px",
            }}
          >
            <Container>
              <Row className="justify-content-center mb-5">
                <Col md={8}>
                  <Card className="bg-dark text-light border-0 shadow-lg">
                    <Card.Body className="p-4">
                      <Row className="align-items-center">
                        <Col md={4} className="text-center mb-3 mb-md-0">
                          <Image
                            src={user.avatar}
                            roundedCircle
                            fluid
                            style={{ width: "120px", height: "120px", objectFit: "cover" }}
                          />
                          <Button variant="outline-light" size="sm" className="mt-3">
                            <FaUserEdit className="me-2" />
                            Edit Profile
                          </Button>
                        </Col>
                        <Col md={8}>
                          <h3 className="fw-bold mb-2">{user.name}</h3>
                          <p className="mb-1">
                            <FaEnvelope className="me-2 text-success" />
                            {user.email}
                          </p>
                          <p className="mb-1">
                            <FaPhone className="me-2 text-warning" />
                            {user.phone}
                          </p>
                          <p className="mb-0">
                            <FaCalendarCheck className="me-2 text-info" />
                            Joined: {user.joined}
                          </p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
    
              <Row className="text-center">
                <Col>
                  <h4 className="fw-bold mb-4">Booking Summary</h4>
                  <Row className="justify-content-center g-4">
                    <Col md={3}>
                      <Card bg="dark" text="light" className="border border-success">
                        <Card.Body>
                          <h5>Total Bookings</h5>
                          <h2 className="text-success fw-bold">{user.stats.total}</h2>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={3}>
                      <Card bg="dark" text="light" className="border border-info">
                        <Card.Body>
                          <h5>Completed</h5>
                          <h2 className="text-info fw-bold">{user.stats.completed}</h2>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={3}>
                      <Card bg="dark" text="light" className="border border-danger">
                        <Card.Body>
                          <h5>Cancelled</h5>
                          <h2 className="text-danger fw-bold">{user.stats.cancelled}</h2>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
   
          </div>
    

         <Footer />
          </>
  );
};

export default ProfilePage;
