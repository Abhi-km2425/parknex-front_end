import React from 'react'

function Preloader() {
  return (
<div 
  className="position-fixed top-0 start-0 w-100 vh-100 d-flex justify-content-center align-items-center" 
  style={{ 
    zIndex: 9999,
    background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)'
  }}
>
  {/* Radial Glow */}
  <div
    className="position-absolute"
    style={{
      width: '500px',
      height: '500px',
      background: 'radial-gradient(circle at center, rgba(0,217,165,0.2), transparent)',
    }}
  ></div>

  {/* Image */}
  <img 
    src="https://www.gifsgratuits.fr/parking/p-(4).gif" 
    alt="Loading..." 
    className="position-relative"
    style={{
      zIndex: 10,
      boxShadow: '0 0 30px rgba(0, 217, 165, 0.3)',
      borderRadius: '10px'
    }}
  />
</div> )
}

export default Preloader