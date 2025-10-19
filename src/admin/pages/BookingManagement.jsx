import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Form, Badge } from 'react-bootstrap';
import AdminHeader from '../component/AdminHeader';
import { FaEye, FaTimes, FaSearch, FaCalendarAlt } from 'react-icons/fa';

const BookingManagement = () => {
  const [bookings, setBookings] = useState([
    {
      id: 'BK001',
      user: 'Arjun Kumar',
      vehicle: 'KL01AB1234',
      location: 'MG Road, Kochi',
      startTime: '2024-01-20T10:00:00',
      endTime: '2024-01-20T14:00:00',
      hours: 4,
      amount: 160,
      status: 'confirmed', // confirmed, completed, cancelled
      bookingDate: '2024-01-15'
    },
    {
      id: 'BK002',
      user: 'Priya Sharma',
      vehicle: 'KL07CD5678',
      location: 'Lulu Mall Basement',
      startTime: '2024-01-21T15:00:00',
      endTime: '2024-01-21T18:00:00',
      hours: 3,
      amount: 180,
      status: 'upcoming',
      bookingDate: '2024-01-16'
    },
    {
      id: 'BK003',
      user: 'Rahul Verma',
      vehicle: 'KL03EF9012',
      location: 'Infopark Phase 1',
      startTime: '2024-01-18T09:00:00',
      endTime: '2024-01-18T17:00:00',
      hours: 8,
      amount: 400,
      status: 'completed',
      bookingDate: '2024-01-10'
    },
    {
      id: 'BK004',
      user: 'Sneha Patel',
      vehicle: 'KL05GH3456',
      location: 'MG Road, Kochi',
      startTime: '2024-01-22T11:00:00',
      endTime: '2024-01-22T13:00:00',
      hours: 2,
      amount: 80,
      status: 'cancelled',
      bookingDate: '2024-01-17'
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBookings = bookings.filter(booking => {
    const matchesFilter = filter === 'all' || booking.status === filter;
    const matchesSearch = 
      booking.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.vehicle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusVariant = (status) => {
    switch (status) {
      case 'upcoming': return 'warning';
      case 'confirmed': return 'primary';
      case 'completed': return 'success';
      case 'cancelled': return 'danger';
      default: return 'secondary';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'upcoming': return 'Upcoming';
      case 'confirmed': return 'Confirmed';
      case 'completed': return 'Completed';
      case 'cancelled': return 'Cancelled';
      default: return status;
    }
  };

  const handleCancelBooking = (id) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      setBookings(bookings.map(booking => 
        booking.id === id ? { ...booking, status: 'cancelled' } : booking
      ));
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN');
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)' }}>
      <AdminHeader />
      
      <Container className="py-4">
        {/* Header */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="text-white mb-0">Booking Management</h2>
              <div className="text-success fw-bold">
                Total Bookings: {bookings.length}
              </div>
            </div>
          </Col>
        </Row>

        {/* Filters and Search */}
        <Row className="mb-4">
          <Col md={4}>
            <Form.Select
              className="bg-dark text-light border-secondary"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Bookings</option>
              <option value="upcoming">Upcoming</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </Form.Select>
          </Col>
          <Col md={6}>
            <div className="position-relative">
              <FaSearch className="position-absolute top-50 start-3 translate-middle-y text-muted" />
              <Form.Control
                type="text"
                placeholder="Search by user, vehicle or location..."
                className="bg-dark text-light border-secondary ps-5"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </Col>
        </Row>

        {/* Bookings Table */}
        <Row>
          <Col>
            <Card className="bg-dark text-light border-0">
              <Card.Body className="p-0">
                <Table responsive hover variant="dark" className="mb-0">
                  <thead className="border-secondary">
                    <tr>
                      <th>Booking ID</th>
                      <th>User</th>
                      <th>Vehicle</th>
                      <th>Location</th>
                      <th>Date & Time</th>
                      <th>Duration</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBookings.map((booking) => (
                      <tr key={booking.id} className="border-secondary">
                        <td>
                          <strong>{booking.id}</strong>
                        </td>
                        <td>{booking.user}</td>
                        <td>{booking.vehicle}</td>
                        <td>{booking.location}</td>
                        <td>
                          <div>
                            <small>{formatDate(booking.startTime)}</small>
                            <br />
                            <small className="text-muted">
                              {formatTime(booking.startTime)} - {formatTime(booking.endTime)}
                            </small>
                          </div>
                        </td>
                        <td>{booking.hours} hrs</td>
                        <td className="text-success fw-bold">₹{booking.amount}</td>
                        <td>
                          <Badge bg={getStatusVariant(booking.status)}>
                            {getStatusText(booking.status)}
                          </Badge>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Button variant="outline-info" size="sm">
                              <FaEye />
                            </Button>
                            {(booking.status === 'upcoming' || booking.status === 'confirmed') && (
                              <Button 
                                variant="outline-danger" 
                                size="sm"
                                onClick={() => handleCancelBooking(booking.id)}
                              >
                                <FaTimes />
                              </Button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookingManagement;