import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, Card, Badge, Row, Col } from 'react-bootstrap';
import { FaCalendar, FaCar } from 'react-icons/fa';
import { createBookingAPI } from '../service/allAPI';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function BookingModal({ show, onHide, spot }) {
  const [bookingDetails, setBookingDetails] = useState({
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    vehicleNumber: '',
    totalHours: 0,
    totalPrice: 0
  });
const [token, setToken] = useState("");


  // Initialize with default values when spot changes
  useEffect(() => {
    if (spot && show) {
      const today = new Date().toISOString().split('T')[0];
      const defaultEndTime = new Date();
      defaultEndTime.setHours(defaultEndTime.getHours() + 2);
      
      const defaultEndTimeString = defaultEndTime.toTimeString().slice(0, 5);

      setBookingDetails({
        startDate: today,
        endDate: today,
        startTime: "10:00",
        endTime: defaultEndTimeString,
        vehicleNumber: "",
        totalHours: 2,
        totalPrice: spot.pricePerHour * 2
      });
    }
  }, [spot, show]);

  // Calculate total hours and price
  const calculateBookingDetails = (startDate, endDate, startTime, endTime) => {
    if (!startDate || !endDate || !startTime || !endTime) return;

    const startDateTime = new Date(`${startDate}T${startTime}`);
    const endDateTime = new Date(`${endDate}T${endTime}`);
    
    const diffMs = endDateTime - startDateTime;
    const totalHours = Math.max(0, (diffMs / (1000 * 60 * 60)).toFixed(1));
    const totalPrice = totalHours * (spot?.pricePerHour || 0);

    setBookingDetails(prev => ({
      ...prev,
      totalHours,
      totalPrice
    }));
  };

  const handleInputChange = (field, value) => {
    setBookingDetails(prev => {
      const updated = { ...prev, [field]: value };
      
      // Recalculate if date/time fields change
      if (['startDate', 'endDate', 'startTime', 'endTime'].includes(field)) {
        const { startDate, endDate, startTime, endTime } = updated;
        if (startDate && endDate && startTime && endTime) {
          const startDateTime = new Date(`${startDate}T${startTime}`);
          const endDateTime = new Date(`${endDate}T${endTime}`);
          const diffMs = endDateTime - startDateTime;
          const totalHours = Math.max(0, (diffMs / (1000 * 60 * 60)).toFixed(1));
          const totalPrice = totalHours * (spot?.pricePerHour || 0);
          
          updated.totalHours = totalHours;
          updated.totalPrice = totalPrice;
        }
      }
      
      return updated;
    });
  };



const navigate = useNavigate();

const handleBookingSubmit = async () => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    toast("Please login first");
    navigate("/authform");
  }

  const bookingData = {
    parkingId: spot.id,
    vehicleNumber: bookingDetails.vehicleNumber,
    startTime: `${bookingDetails.startDate}T${bookingDetails.startTime}`,
    endTime: `${bookingDetails.endDate}T${bookingDetails.endTime}`,
    totalHours: bookingDetails.totalHours,
    totalPrice: bookingDetails.totalPrice
  };

  const reqHeader = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  };

  console.log("Sending booking data:", bookingData);
  
  try {
    const result = await createBookingAPI(bookingData, reqHeader);
    console.log("API response:", result);
    
    if (result.data) {
      toast.success("Booking confirmed!");
      onHide();
    } else {
      alert("Booking failed: " + (result.message || "Unknown error"));
    }
  } catch (error) {
    console.log("Booking error:", error);
    toast.error("Booking error: " + error.message);
  }
};
  if (!spot) return null;


return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <FaCalendar className="me-2 text-success" />
          Book Parking Spot
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        {/* Spot Details */}
        <Card className="bg-light border-0 mb-4">
          <Card.Body>
            <h6 className="fw-bold mb-2">{spot.location}</h6>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">{spot.address}</small>
              <Badge bg="success" className="ms-2">
                ₹{spot.pricePerHour}/hr
              </Badge>
            </div>
          </Card.Body>
        </Card>

        <Form>
          <Row className="g-3">
            {/* Vehicle Number */}
            <Col md={12}>
              <Form.Label className="fw-semibold">
                <FaCar className="me-2" />
                Vehicle Number
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your vehicle number (e.g., KL01AB1234)"
                value={bookingDetails.vehicleNumber}
                onChange={(e) => handleInputChange('vehicleNumber', e.target.value)}
              />
              <Form.Text className="text-muted">
                Please enter your vehicle's license plate number
              </Form.Text>
            </Col>

            {/* Start Date & Time */}
            <Col md={6}>
              <Form.Label className="fw-semibold">Start Date</Form.Label>
              <Form.Control
                type="date"
                value={bookingDetails.startDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => handleInputChange('startDate', e.target.value)}
              />
            </Col>

            <Col md={6}>
              <Form.Label className="fw-semibold">Start Time</Form.Label>
              <Form.Control
                type="time"
                value={bookingDetails.startTime}
                onChange={(e) => handleInputChange('startTime', e.target.value)}
              />
            </Col>

            {/* End Date & Time */}
            <Col md={6}>
              <Form.Label className="fw-semibold">End Date</Form.Label>
              <Form.Control
                type="date"
                value={bookingDetails.endDate}
                min={bookingDetails.startDate || new Date().toISOString().split('T')[0]}
                onChange={(e) => handleInputChange('endDate', e.target.value)}
              />
            </Col>

            <Col md={6}>
              <Form.Label className="fw-semibold">End Time</Form.Label>
              <Form.Control
                type="time"
                value={bookingDetails.endTime}
                onChange={(e) => handleInputChange('endTime', e.target.value)}
              />
            </Col>
          </Row>

          {/* Booking Summary */}
          {(bookingDetails.totalHours > 0) && (
            <Card className="bg-success text-white border-0 mt-4">
              <Card.Body>
                <Row className="text-center">
                  <Col md={4}>
                    <h6 className="mb-1">Duration</h6>
                    <h5 className="fw-bold mb-0">{bookingDetails.totalHours} hrs</h5>
                  </Col>
                  <Col md={4}>
                    <h6 className="mb-1">Rate</h6>
                    <h5 className="fw-bold mb-0">₹{spot.pricePerHour}/hr</h5>
                  </Col>
                  <Col md={4}>
                    <h6 className="mb-1">Total Amount</h6>
                    <h4 className="fw-bold mb-0">₹{bookingDetails.totalPrice}</h4>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          )}
        </Form>
      </Modal.Body>
      
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button 
          variant="success" 
          onClick={handleBookingSubmit}
          disabled={!bookingDetails.vehicleNumber || !bookingDetails.startDate || !bookingDetails.endDate || bookingDetails.totalHours <= 0}
        >
          Confirm Booking - ₹{bookingDetails.totalPrice}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BookingModal;