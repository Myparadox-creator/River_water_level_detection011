import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, FileText } from 'lucide-react';
import './SubmissionSuccessScreen.css';

const SubmissionSuccessScreen = () => {
  const navigate = useNavigate();

  const summaryData = [
    { label: 'Site ID', value: 'RSH-001' },
    { label: 'Water Level', value: '1.48 m' },
    { label: 'Date & Time', value: '20 May 2025, 09:41 AM' },
    { label: 'Location', value: '30.086° N, 78.267° E' },
  ];

  return (
    <div className="submission-success-screen">
      {/* Header */}
      <div className="ss-header">
        <button className="ss-header-back" onClick={() => navigate('/home')}>
          <ArrowLeft size={22} />
        </button>
        <h1 className="ss-header-title">Reading Submitted</h1>
      </div>

      {/* Content */}
      <div className="ss-content">
        {/* Animated checkmark */}
        <div className="ss-check-container">
          <svg className="ss-check-circle" viewBox="0 0 100 100">
            <circle
              className="ss-check-circle-bg"
              cx="50"
              cy="50"
              r="46"
            />
            <circle
              className="ss-check-circle-ring"
              cx="50"
              cy="50"
              r="46"
            />
            <path
              className="ss-check-path"
              d="M30 52 L44 66 L70 38"
            />
          </svg>

          {/* Decorative particles */}
          <div className="ss-particles">
            <div className="ss-particle" />
            <div className="ss-particle" />
            <div className="ss-particle" />
            <div className="ss-particle" />
            <div className="ss-particle" />
            <div className="ss-particle" />
          </div>
        </div>

        <h2 className="ss-success-title">Reading Submitted Successfully</h2>
        <p className="ss-success-subtitle">Your reading has been recorded and synced</p>

        {/* Summary Card */}
        <div className="ss-summary-card">
          <div className="ss-summary-header">
            <div className="ss-summary-header-icon">
              <FileText size={18} />
            </div>
            <h3 className="ss-summary-header-text">Submission Details</h3>
          </div>

          <div className="ss-summary-rows">
            {summaryData.map((item) => (
              <div key={item.label} className="ss-summary-row">
                <span className="ss-summary-label">{item.label}</span>
                <span className="ss-summary-value">{item.value}</span>
              </div>
            ))}

            {/* Status row */}
            <div className="ss-summary-row">
              <span className="ss-summary-label">Status</span>
              <span className="ss-summary-value">
                <span className="ss-status-badge ss-status-badge--submitted">
                  <span className="ss-status-dot" />
                  Submitted
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Done Button */}
      <div className="ss-done-area">
        <button className="ss-done-btn" onClick={() => navigate('/home')}>
          <Home size={18} />
          Done
        </button>
      </div>
    </div>
  );
};

export default SubmissionSuccessScreen;
