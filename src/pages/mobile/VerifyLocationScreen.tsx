import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MapPin, CheckCircle } from 'lucide-react';
import './VerifyLocationScreen.css';

const VerifyLocationScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="verify-screen">
      {/* Header */}
      <div className="verify-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ChevronLeft size={20} />
        </button>
        <h1>Verify Location</h1>
      </div>

      {/* Body */}
      <div className="verify-body">
        {/* Pulsing Map Pin */}
        <div className="verify-pin-wrapper">
          <span className="verify-pin-pulse" />
          <span className="verify-pin-pulse-inner" />
          <div className="verify-pin-icon">
            <MapPin size={48} strokeWidth={1.8} />
          </div>
        </div>

        {/* Station info */}
        <h2 className="verify-station-name">Ganga at Rishikesh</h2>
        <p className="verify-station-code">RSH-001</p>
        <p className="verify-range-text">You are within the allowed range</p>

        {/* Green badge card */}
        <div className="verify-range-card">
          <div className="verify-range-badge">
            <CheckCircle />
            Within Range
          </div>
          <p className="verify-range-message">You can capture the reading.</p>
          <div className="verify-distance-label">Distance from site</div>
          <div className="verify-distance-value">32 m</div>
        </div>
      </div>

      {/* Continue button */}
      <div className="verify-bottom">
        <button
          className="verify-continue-btn"
          onClick={() => navigate('/capture-photo')}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default VerifyLocationScreen;
