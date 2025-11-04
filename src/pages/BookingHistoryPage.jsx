import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaCalendar,
  FaCar,
  FaReceipt,
  FaTimes,
} from "react-icons/fa";
import CustomNavbar from "../components/Navbar";
import { getUserBookingsAPI } from "../service/allAPI";

const BookingHistoryPage = () => {
  const [filter, setFilter] = useState("all"); // all, upcoming, completed, cancelled
  const [searchTerm, setSearchTerm] = useState("");
  const [bookings, setBookings] = useState([]); // Real bookings state
  const [token, setToken] = useState("");

  const getStatusVariant = (status) => {
    switch (status) {
      case "upcoming":
        return "warning";
      case "completed":
        return "success";
      case "cancelled":
        return "danger";
      default:
        return "secondary";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "upcoming":
        return "Upcoming";
      case "completed":
        return "Completed";
      case "cancelled":
        return "Cancelled";
      default:
        return status;
    }
  };

  // Replace your current filteredBookings with this:
  const filteredBookings = (Array.isArray(bookings) ? bookings : []).filter(
    (booking) => {
      const matchesFilter = filter === "all" || booking.status === filter;
      const matchesSearch =
        booking.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.vehicleNumber?.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    }
  );
  const handleCancelBooking = (bookingId) => {
    // Mock cancel functionality
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      alert(`Booking ${bookingId} cancelled successfully!`);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Replace your current fetchBookings function with this:
  const getApiHandler = async () => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        console.warn("No token found in sessionStorage");
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const result = await getUserBookingsAPI(headers);
      setBookings(result.data);
      console.log(result);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
      console.log("Token found and set.");
      getApiHandler();
    } else {
      console.warn("No token found in sessionStorage.");
      // Optional: redirect to login or show alert
      // navigate("/login");
    }
  }, []);

  return (
    <>
      <CustomNavbar />
      <div
        className="min-vh-100 text-white"
        style={{
          background:
            "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",
          paddingTop: "100px",
          paddingBottom: "50px",
        }}
      >
        <Container>
          {/* Header */}
          <Row className="mb-4">
            <Col>
              <h1 className="fw-bold">My Bookings</h1>
              <p className="text-light opacity-75">
                Manage your parking reservations
              </p>
            </Col>
          </Row>

          {/* Filters and Search */}
          <Row className="mb-4">
            <Col md={6}>
              <Form.Select
                className="bg-dark text-light border-secondary"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Bookings</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="Search by location or vehicle number..."
                className="bg-dark text-light border-secondary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
          </Row>

          {/* Bookings List */}
          <Row>
            <Col>
              {filteredBookings.length === 0 ? (
                <Card className="bg-dark text-light text-center border-0">
                  <Card.Body className="py-5">
                    <div className="fs-1 mb-3">🚗</div>
                    <h5>No bookings found</h5>
                    <p className="text-muted mb-4">
                      {searchTerm || filter !== "all"
                        ? "Try adjusting your search or filter"
                        : "You haven't made any bookings yet"}
                    </p>
                    <Button as={Link} to="/vehicles" variant="success">
                      Find Parking Spots
                    </Button>
                  </Card.Body>
                </Card>
              ) : (
                filteredBookings.map((booking) => (
                  <Card
                    key={booking.id}
                    className="bg-dark text-light border-secondary mb-3"
                  >
                    <Card.Body>
                      <Row className="align-items-center">
                        <Col md={6}>
                          <div className="d-flex align-items-start mb-2">
                            <FaMapMarkerAlt className="text-success mt-1 me-2" />
                            <div>
                              <h6 className="fw-bold mb-1">
                                {booking.location}
                              </h6>
                              <small className="text-muted">
                                {booking.address}
                              </small>
                            </div>
                          </div>

                          <div className="d-flex flex-wrap gap-4">
                            <div className="d-flex align-items-center">
                              <FaCalendar className="text-muted me-2" />
                              <small>{formatDate(booking.startTime)}</small>
                            </div>
                            <div className="d-flex align-items-center">
                              <FaCar className="text-muted me-2" />
                              <small>{booking.vehicleNumber}</small>
                            </div>
                            <div>
                              <small>
                                {formatTime(booking.startTime)} -{" "}
                                {formatTime(booking.endTime)}
                              </small>
                            </div>
                          </div>
                        </Col>

                        <Col md={3} className="text-center">
                          <div className="mb-2">
                            <Badge
                              bg={getStatusVariant(booking.status)}
                              className="fs-6"
                            >
                              {getStatusText(booking.status)}
                            </Badge>
                          </div>
                          <h5 className="text-success fw-bold">
                            ₹{booking.totalPrice}
                          </h5>
                          <small className="text-muted">
                            {booking.totalHours} hours
                          </small>
                        </Col>

                        <Col md={3}>
                          <div className="d-grid gap-2">
                            {booking.status === "confirmed" && (
                              <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => handleCancelBooking(booking.id)}
                              >
                                <FaTimes className="me-1" />
                                Cancel
                              </Button>
                            )}
                            <Button variant="outline-light" size="sm">
                              <FaReceipt className="me-1" />
                              View Details
                            </Button>
                            {booking.status === "completed" && (
                              <Button variant="outline-info" size="sm">
                                Download Receipt
                              </Button>
                            )}
                            {booking.status === "cancelled" && (
                              <Button
                                as={Link}
                                to="/vehicles"
                                variant="outline-success"
                                size="sm"
                              >
                                Re-book
                              </Button>
                            )}
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                ))
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BookingHistoryPage;
