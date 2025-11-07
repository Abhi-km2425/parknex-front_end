import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button, Form, Badge } from "react-bootstrap";
import { FaStar, FaMapMarkerAlt, FaClock, FaSearch, FaDirections } from "react-icons/fa";
import BookingModal from "../components/BookingModal";
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getAllParkingAPI } from '../service/allAPI';

function ParkingPage() {
      const [selectedLocation, setSelectedLocation] = useState("");
      const [searchQuery, setSearchQuery] = useState("");
      const [showBookingModal, setShowBookingModal] = useState(false);
      const [selectedSpot, setSelectedSpot] = useState(null);
      
    
const [parkingSpots, setParkingSpots] = useState([]);


useEffect(() => {
  fetchParkingSpots();
}, []);

const fetchParkingSpots = async () => {
  try {
    const result = await getAllParkingAPI();
    if (result.status === 200) {
      setParkingSpots(result.data);
    }
  } catch (error) {
    console.error("Error fetching parking spots:", error);
  }
};



      const handleBookNow = (spot) => {
        setSelectedSpot(spot);
         console.log("Selected spot:", spot);
        setShowBookingModal(true);
      };
    
const filteredSpots = selectedLocation 
  ? parkingSpots.filter(spot => spot.location === selectedLocation)
  : parkingSpots.filter(spot => 
      spot.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spot.availability?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
      const getAvailabilityColor = (availability) => {
        switch (availability) {
          case "Available": return "success";
          case "Limited": return "warning";
          case "Full": return "danger";
          default: return "secondary";
        }
      };
    
  return (
    <>   
    <CustomNavbar/>
     <div
      className="min-vh-100 text-white"
      style={{
        background: "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",
        paddingTop: "80px",
          paddingBottom: "40px",
      }}
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold display-6 mb-3">Find Your Perfect Parking Spot</h1>
          <p className="text-light opacity-75 fs-5">Search and book parking spaces in seconds</p>
        </div>

        {/* Search Section */}
        <Row className="mb-5 justify-content-center">
          <Col lg={8}>
            <div className="bg-dark rounded-3 p-4 shadow-lg">
              <Row className="g-3">
                <Col md={6}>
                  <div className="position-relative">
                    <FaSearch className="position-absolute top-50 start-3 translate-middle-y text-muted" />
                    <Form.Control
                      type="text"
                      placeholder="Search locations..."
                      className="bg-dark text-light border-secondary ps-5 custom-placeholder"
                      value={searchQuery}
                     
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setSelectedLocation("");
                      }}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <Form.Select
                    className="bg-dark text-light border-secondary"
                    value={selectedLocation}
                    onChange={(e) => {
                      setSelectedLocation(e.target.value);
                      setSearchQuery("");
                    }}
                  >
                    <option value="">All Locations</option>
                    {parkingSpots.map((spot) => (
                      <option key={spot.id} value={spot.location}>
                        {spot.location}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Parking Spots Grid */}
<Row className="g-4">
  {filteredSpots.map((spot) => (
    <Col md={6} lg={4} key={spot._id || spot.id}>
      <Card className="bg-dark text-light shadow-lg h-100 border-0">
        <div 
          className="card-image-top position-relative"
          style={{
            height: "160px",
            background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${spot.image || "https://via.placeholder.com/300x160?text=Parking+Image"})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="position-absolute top-0 end-0 m-3">
            <Badge bg={getAvailabilityColor(spot.availability || "Available")}>
              {spot.availability || "Available"}
            </Badge>
          </div>
          <div className="position-absolute bottom-0 start-0 m-3">
            <Badge bg="dark">
              <FaMapMarkerAlt className="me-1" />
              {spot.distance || "—"}
            </Badge>
          </div>
        </div>
        
        <Card.Body className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <Card.Title className="fw-bold">{spot.location}</Card.Title>
            <div className="text-warning d-flex align-items-center">
              <FaStar className="me-1" />
              <span>{spot.rating || "—"}</span>
            </div>
          </div>

          <div className="mb-3">
            <div className="d-flex justify-content-between mb-2">
              <span>Price:</span>
              <span className="fw-bold text-success">₹{spot.pricePerHour || "—"}/hr</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Available Spots:</span>
              <span>{spot.availableSpots || "—"}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Peak Hours:</span>
              <span>
                <FaClock className="me-1" />
                {spot.peakHours || "—"}
              </span>
            </div>
          </div>

          <div className="mt-auto d-grid gap-2">
            <Button
              variant={spot.availability === "Full" ? "secondary" : "success"}
              disabled={spot.availability === "Full"}
              onClick={() => handleBookNow(spot)}
            >
              {spot.availability === "Full" ? "Fully Booked" : "Book Now"}
            </Button>
            <Button
              variant="outline-light"
              size="sm"
              onClick={() => window.open(`https://maps.google.com/?q=${spot.location}`, '_blank')}
            >
              <FaDirections className="me-2" />
              Get Directions
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
      </Container>

      {/* Booking Modal */}
      <BookingModal
      fetchParkingSpots={fetchParkingSpots}
        show={showBookingModal}
        onHide={() => setShowBookingModal(false)}
        spot={selectedSpot}
      />
    </div>
             <Footer />
    
</>
  )
}

export default ParkingPage