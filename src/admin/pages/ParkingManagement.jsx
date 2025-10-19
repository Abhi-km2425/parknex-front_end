import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Form, Badge, Modal } from 'react-bootstrap';
import AdminHeader from '../component/AdminHeader';
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';

const ParkingManagement = () => {
  const [parkingSpots, setParkingSpots] = useState([
    {
      id: 1,
      name: "MG Road Parking",
      location: "MG Road, Kochi",
      pricePerHour: 40,
      availableSpots: 15,
      totalSpots: 20,
      status: "active",
      features: ["Covered", "Security", "EV Charging"]
    },
    {
      id: 2,
      name: "Lulu Mall Basement",
      location: "Lulu Mall, Edappally",
      pricePerHour: 60,
      availableSpots: 3,
      totalSpots: 50,
      status: "active",
      features: ["Covered", "Valet"]
    },
    {
      id: 3,
      name: "Infopark Phase 1",
      location: "Infopark, Kakkanad",
      pricePerHour: 50,
      availableSpots: 0,
      totalSpots: 30,
      status: "full",
      features: ["24/7 Access", "Camera Security"]
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newParking, setNewParking] = useState({
    name: '',
    location: '',
    pricePerHour: '',
    totalSpots: '',
    availableSpots: '',
    features: []
  });

  const filteredSpots = parkingSpots.filter(spot =>
    spot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    spot.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteSpot = (id) => {
    if (window.confirm('Are you sure you want to delete this parking spot?')) {
      setParkingSpots(parkingSpots.filter(spot => spot.id !== id));
    }
  };

  const getStatusVariant = (status) => {
    switch (status) {
      case 'active': return 'success';
      case 'full': return 'warning';
      case 'inactive': return 'danger';
      default: return 'secondary';
    }
  };

  const handleAddParking = () => {
    const newSpot = {
      id: parkingSpots.length + 1,
      ...newParking,
      pricePerHour: parseInt(newParking.pricePerHour),
      totalSpots: parseInt(newParking.totalSpots),
      availableSpots: parseInt(newParking.availableSpots),
      status: newParking.availableSpots > 0 ? 'active' : 'full'
    };
    
    setParkingSpots([...parkingSpots, newSpot]);
    setShowModal(false);
    setNewParking({
      name: '',
      location: '',
      pricePerHour: '',
      totalSpots: '',
      availableSpots: '',
      features: []
    });
  };

  const handleFeatureToggle = (feature) => {
    setNewParking(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const featuresList = ['Covered', 'Security', 'EV Charging', 'Valet', '24/7 Access', 'Camera Security'];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)' }}>
      <AdminHeader />
      
      <Container className="py-4">
        {/* Header */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="text-white mb-0">Parking Management</h2>
              <Button variant="success" onClick={() => setShowModal(true)}>
                <FaPlus className="me-2" />
                Add New Spot
              </Button>
            </div>
          </Col>
        </Row>

        {/* Search */}
        <Row className="mb-4">
          <Col md={6}>
            <div className="position-relative">
              <FaSearch className="position-absolute top-50 start-3 translate-middle-y text-muted" />
              <Form.Control
                type="text"
                placeholder="Search parking spots..."
                className="bg-dark text-light border-secondary ps-5"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </Col>
        </Row>

        {/* Parking Spots Table */}
        <Row>
          <Col>
            <Card className="bg-dark text-light border-0">
              <Card.Body className="p-0">
                <Table responsive hover variant="dark" className="mb-0">
                  <thead className="border-secondary">
                    <tr>
                      <th>Parking Name</th>
                      <th>Location</th>
                      <th>Price/Hour</th>
                      <th>Availability</th>
                      <th>Status</th>
                      <th>Features</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSpots.map((spot) => (
                      <tr key={spot.id} className="border-secondary">
                        <td>
                          <strong>{spot.name}</strong>
                        </td>
                        <td>{spot.location}</td>
                        <td>₹{spot.pricePerHour}</td>
                        <td>
                          {spot.availableSpots}/{spot.totalSpots}
                        </td>
                        <td>
                          <Badge bg={getStatusVariant(spot.status)}>
                            {spot.status.toUpperCase()}
                          </Badge>
                        </td>
                        <td>
                          <div className="d-flex flex-wrap gap-1">
                            {spot.features.map((feature, index) => (
                              <Badge key={index} bg="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Button variant="outline-warning" size="sm">
                              <FaEdit />
                            </Button>
                            <Button 
                              variant="outline-danger" 
                              size="sm"
                              onClick={() => handleDeleteSpot(spot.id)}
                            >
                              <FaTrash />
                            </Button>
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

      {/* Add Parking Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>Add New Parking Spot</Modal.Title>
        </Modal.Header>
        
        <Modal.Body className="bg-dark text-white">
          <Form>
            <Row className="g-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Parking Name *</Form.Label>
                  <Form.Control
                    type="text"
                    className="bg-dark text-light border-secondary"
                    value={newParking.name}
                    onChange={(e) => setNewParking({...newParking, name: e.target.value})}
                    required
                  />
                </Form.Group>
              </Col>
              
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Location *</Form.Label>
                  <Form.Control
                    type="text"
                    className="bg-dark text-light border-secondary"
                    value={newParking.location}
                    onChange={(e) => setNewParking({...newParking, location: e.target.value})}
                    required
                  />
                </Form.Group>
              </Col>
              
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Price/Hour (₹) *</Form.Label>
                  <Form.Control
                    type="number"
                    className="bg-dark text-light border-secondary"
                    value={newParking.pricePerHour}
                    onChange={(e) => setNewParking({...newParking, pricePerHour: e.target.value})}
                    min="1"
                    required
                  />
                </Form.Group>
              </Col>
              
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Total Spots *</Form.Label>
                  <Form.Control
                    type="number"
                    className="bg-dark text-light border-secondary"
                    value={newParking.totalSpots}
                    onChange={(e) => setNewParking({...newParking, totalSpots: e.target.value})}
                    min="1"
                    required
                  />
                </Form.Group>
              </Col>
              
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Available Spots *</Form.Label>
                  <Form.Control
                    type="number"
                    className="bg-dark text-light border-secondary"
                    value={newParking.availableSpots}
                    onChange={(e) => setNewParking({...newParking, availableSpots: e.target.value})}
                    min="0"
                    max={newParking.totalSpots}
                    required
                  />
                </Form.Group>
              </Col>
              
              <Col md={12}>
                <Form.Label>Features</Form.Label>
                <div className="d-flex flex-wrap gap-3">
                  {featuresList.map(feature => (
                    <Form.Check
                      key={feature}
                      type="checkbox"
                      id={feature}
                      label={feature}
                      className="text-light"
                      checked={newParking.features.includes(feature)}
                      onChange={() => handleFeatureToggle(feature)}
                    />
                  ))}
                </div>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        
        <Modal.Footer className="bg-dark border-secondary">
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAddParking}>
            Add Parking Spot
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ParkingManagement;