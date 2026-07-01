import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, RotateCcw, ArrowLeft } from 'lucide-react';
import './CapturePhotoScreen.css';

const CapturePhotoScreen = () => {
  const navigate = useNavigate();
  const [isFlashing, setIsFlashing] = useState(false);

  const handleCapture = () => {
    setIsFlashing(true);
    setTimeout(() => {
      navigate('/reading-result');
    }, 500);
  };

  return (
    <div className="capture-photo-screen">
      {/* Header */}
      <div className="capture-header">
        <button className="capture-header-back" onClick={() => navigate(-1)}>
          <ArrowLeft size={22} />
        </button>
        <div className="capture-header-content">
          <h1 className="capture-header-title">Capture Photo</h1>
          <p className="capture-header-subtitle">
            Capture live photo of the gauge post with water level
          </p>
        </div>
      </div>

      {/* Viewfinder */}
      <div className="capture-viewfinder">
        {/* Recording indicator */}
        <div className="capture-rec-indicator">
          <div className="capture-rec-dot" />
          <span>LIVE</span>
        </div>

        {/* Corner brackets */}
        <div className="capture-corners">
          <div className="capture-corner capture-corner--tl" />
          <div className="capture-corner capture-corner--tr" />
          <div className="capture-corner capture-corner--bl" />
          <div className="capture-corner capture-corner--br" />
        </div>

        {/* Simulated gauge post */}
        <div className="capture-gauge-post" />
        <div className="capture-water-line" />

        {/* Overlay text */}
        <div className="capture-overlay-text">
          Point camera at gauge post
        </div>

        {/* Flash overlay */}
        {isFlashing && <div className="capture-flash" />}
      </div>

      {/* Bottom Controls */}
      <div className="capture-controls">
        <button className="capture-btn-cancel" onClick={() => navigate(-1)}>
          <X size={20} />
        </button>

        <button className="capture-btn-shutter" onClick={handleCapture}>
          <div className="capture-btn-shutter-inner" />
        </button>

        <button className="capture-btn-rotate">
          <RotateCcw size={20} />
        </button>
      </div>
    </div>
  );
};

export default CapturePhotoScreen;
