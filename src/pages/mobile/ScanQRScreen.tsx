import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MapPin, CheckCircle } from 'lucide-react';
import { mockSites } from '../../data/mockData';
import './ScanQRScreen.css';

const ScanQRScreen: React.FC = () => {
  const navigate = useNavigate();
  const [isScanned, setIsScanned] = useState(false);

  // Simulate scanning - detect after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScanned(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Use first mock site as the detected site
  const detectedSite = mockSites[0];

  return (
    <div className="scanqr-screen">
      {/* Header */}
      <div className="scanqr-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ChevronLeft size={20} />
        </button>
        <h1>Scan QR Code</h1>
      </div>

      {/* Instruction */}
      <p className="scanqr-instruction">
        Scan the QR code at the monitoring site
      </p>

      {/* Scanner viewfinder */}
      <div className="scanqr-viewfinder">
        <div className={`scanqr-box ${isScanned ? 'scanned' : ''}`}>
          <span className="scanqr-corner tl" />
          <span className="scanqr-corner tr" />
          <span className="scanqr-corner bl" />
          <span className="scanqr-corner br" />
          {!isScanned && <span className="scanqr-scanline" />}
        </div>
      </div>

      {/* Auto-detect text or detected card */}
      {!isScanned ? (
        <p className="scanqr-auto-text">Site ID will be detected automatically</p>
      ) : (
        <div className="scanqr-detected-card">
          <div className="scanqr-detected-icon">
            <MapPin size={20} />
          </div>
          <div className="scanqr-detected-info">
            <div className="scanqr-detected-name">{detectedSite.siteName}</div>
            <div className="scanqr-detected-code">{detectedSite.siteCode}</div>
          </div>
          <div className="scanqr-detected-check">
            <CheckCircle size={20} />
          </div>
        </div>
      )}

      {/* Continue button */}
      <div className="scanqr-bottom">
        <button
          className="scanqr-continue-btn"
          disabled={!isScanned}
          onClick={() => navigate('/verify-location')}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ScanQRScreen;
