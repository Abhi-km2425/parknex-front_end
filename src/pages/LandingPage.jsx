import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'animate.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid vh-100 text-white"
      style={{
        background: 'linear-gradient(to right, #0F2027, #203A43, #2C5364)',
        overflow: 'hidden',
      }}
    >
      <div className="row h-100 align-items-center">
        {/* Left Panel */}
        <div className="col-md-6 d-flex flex-column justify-content-center px-5">
          <h1 className="display-3 fw-bold animate__animated animate__fadeInLeft">
            ParkNex
          </h1>
          <p className="lead text-light animate__animated animate__fadeInLeft animate__delay-1s">
            Smarter parking, one spot at a time.
          </p>
          <button
            className="btn btn-success btn-lg mt-3 animate__animated animate__fadeInLeft animate__delay-2s"
            onClick={() => navigate('/vehicles')}
            style={{
              boxShadow: '0 0 10px rgba(0, 255, 150, 0.5)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          >
            Find Parking
          </button>
        </div>

        {/* Right Panel */}
        <div className="col-md-6 position-relative d-flex justify-content-center align-items-center">
          {/* Radial Glow Behind Image */}
          <div
            className="position-absolute w-100 h-100"
            style={{
              background: 'radial-gradient(circle at center, rgba(0,217,165,0.2), transparent)',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          ></div>

          {/* Your Car Image */}
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/056/089/233/small_2x/multi-level-parking-garage-design-efficient-vehicle-storage-free-png.png" // Replace with your actual image path
            alt="Futuristic car"
            className="img-fluid animate__animated animate__fadeInRight"
            style={{
              maxHeight: '75%',
              zIndex: 2,
              objectFit: 'contain',
              borderRadius: '10px',
              boxShadow: '0 0 30px rgba(0, 217, 165, 0.3)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
