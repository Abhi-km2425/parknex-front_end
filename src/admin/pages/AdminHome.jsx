import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminHeader from '../component/AdminHeader';
import { FaParking, FaCalendarCheck, FaUsers, FaRupeeSign } from 'react-icons/fa';

const AdminHome = () => {
  const stats = [
    { 
      icon: <FaParking className="text-success" size={30} />,
      title: "Total Parking Spots",
      value: "24",
      change: "+2 this week",
      link: "/admin/parking"
    },
    { 
      icon: <FaCalendarCheck className="text-warning" size={30} />,
      title: "Today's Bookings",
      value: "8",
      change: "3 upcoming",
      link: "/admin/bookings"
    },
    { 
      icon: <FaUsers className="text-info" size={30} />,
      title: "Active Users",
      value: "156",
      change: "+12 today",
      link: "/admin/users"
    },
    { 
      icon: <FaRupeeSign className="text-success" size={30} />,
      title: "Today's Revenue",
      value: "₹2,840",
      change: "From 8 bookings",
      link: "/admin/revenue"
    }
  ];

  const recentActivities = [
    { time: "10:30 AM", activity: "New booking at MG Road", user: "User #4587" },
    { time: "09:15 AM", activity: "Parking spot added", user: "Admin" },
    { time: "Yesterday", activity: "Booking cancelled", user: "User #3921" },
    { time: "Yesterday", activity: "Payment received", user: "User #4456" }
  ];

  return (
<>
 <AdminHeader />
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)' }}>
       
        
        <Container className="py-4">
          {/* Stats Cards */}
          <Row className="mb-4">
            <Col>
              <h2 className="text-white mb-4">Dashboard Overview</h2>
              <Row className="g-3">
                {stats.map((stat, index) => (
                  <Col lg={3} md={6} key={index}>
                    <Card className="bg-dark text-light border-0 h-100">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          {stat.icon}
                          <Button 
                            as={Link} 
                            to={stat.link}
                            variant="outline-light" 
                            size="sm"
                          >
                            View
                          </Button>
                        </div>
                        <h4 className="fw-bold text-success">{stat.value}</h4>
                        <h6 className="mb-2">{stat.title}</h6>
                        <small className="text-muted">{stat.change}</small>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
  
          {/* Quick Actions & Recent Activity */}
          <Row className="g-4">
            {/* Quick Actions */}
            <Col lg={6}>
              <Card className="bg-dark text-light border-0 h-100">
                <Card.Header className="bg-dark border-secondary">
                  <h5 className="mb-0">Quick Actions</h5>
                </Card.Header>
                <Card.Body>
                  <div className="d-grid gap-2">
                    <Button as={Link} to="/admin/parking" variant="success" size="lg">
                      🅿️ Manage Parking Spots
                    </Button>
                    <Button as={Link} to="/admin/bookings" variant="warning" size="lg">
                      📅 View All Bookings
                    </Button>
                    <Button as={Link} to="/admin/parking?action=add" variant="info" size="lg">
                      ➕ Add New Parking Spot
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
  
            {/* Recent Activity */}
            <Col lg={6}>
              <Card className="bg-dark text-light border-0 h-100">
                <Card.Header className="bg-dark border-secondary">
                  <h5 className="mb-0">Recent Activity</h5>
                </Card.Header>
                <Card.Body>
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="border-bottom border-secondary pb-2 mb-2">
                      <div className="d-flex justify-content-between">
                        <strong>{activity.activity}</strong>
                        <small className="text-muted">{activity.time}</small>
                      </div>
                      <small className="text-muted">By: {activity.user}</small>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  
</>  );
};

export default AdminHome;