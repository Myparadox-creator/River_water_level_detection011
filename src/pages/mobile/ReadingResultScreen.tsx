import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Droplets } from 'lucide-react';
import './ReadingResultScreen.css';

const ReadingResultScreen = () => {
  const navigate = useNavigate();
  const [waterLevel, setWaterLevel] = useState('1.48');
  const [remarks, setRemarks] = useState('');
  const confidencePercent = 92;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/reading-submitted');
  };

  return (
    <div className="reading-result-screen">
      {/* Light Header */}
      <div className="rr-header">
        <button className="rr-header-back" onClick={() => navigate(-1)}>
          <ArrowLeft size={22} />
        </button>
        <h1 className="rr-header-title">Reading Result</h1>
      </div>

      {/* Content */}
      <div className="rr-content">
        {/* AI Detection Card */}
        <div className="rr-detection-card">
          <div className="rr-detection-icon">
            <Droplets size={22} />
          </div>
          <p className="rr-detection-label">Detected Water Level</p>
          <h2 className="rr-detection-value">
            1.48<span>m</span>
          </h2>

          {/* Confidence bar */}
          <div className="rr-confidence">
            <div className="rr-confidence-header">
              <span className="rr-confidence-label">Confidence</span>
              <span className="rr-confidence-value">{confidencePercent}%</span>
            </div>
            <div className="rr-confidence-track">
              <div
                className="rr-confidence-fill"
                style={{ width: `${confidencePercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="rr-note">You can edit the value if needed</p>

        {/* Form */}
        <form className="rr-form-card" onSubmit={handleSubmit}>
          <div className="rr-form-group">
            <label className="rr-form-label" htmlFor="waterLevel">
              Water Level (in meters)
            </label>
            <input
              id="waterLevel"
              type="number"
              step="0.01"
              className="rr-form-input"
              value={waterLevel}
              onChange={(e) => setWaterLevel(e.target.value)}
            />
          </div>

          <div className="rr-form-group">
            <label className="rr-form-label" htmlFor="remarks">
              Remarks (Optional)
            </label>
            <textarea
              id="remarks"
              className="rr-form-textarea"
              placeholder="Enter remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
          </div>
        </form>
      </div>

      {/* Submit Button */}
      <div className="rr-submit-area">
        <button className="rr-submit-btn" onClick={handleSubmit}>
          <Send size={18} />
          Submit Reading
        </button>
      </div>
    </div>
  );
};

export default ReadingResultScreen;
