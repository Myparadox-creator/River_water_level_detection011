import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, MapPin, Camera } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useReadings } from '../../context/ReadingsContext';
import { mockSites } from '../../data/mockData';
import './HomeScreen.css';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { getTodayReadingsCount } = useReadings();

  const todayCount = getTodayReadingsCount();
  const totalRequired = 5;
  const progressPercent = (todayCount / totalRequired) * 100;

  // Calculate SVG progress ring values
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  // Greeting based on time of day
  const getGreeting = (): string => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  // Role display name
  const getRoleLabel = (): string => {
    if (!user) return 'User';
    switch (user.role) {
      case 'field_officer': return 'Field Officer';
      case 'supervisor': return 'Supervisor';
      case 'central_analyst': return 'Central Analyst';
      case 'public': return 'Public User';
      default: return 'User';
    }
  };

  // Check if a distance is within the allowed radius (assume 2km = in range)
  const isInRange = (distance?: number): boolean => {
    return (distance ?? 999) <= 1.5;
  };

  // Show only first 3 sites
  const displayedSites = mockSites.slice(0, 3);

  return (
    <div className="home-screen">
      {/* Header */}
      <div className="home-header">
        <h1>Home</h1>
        <button className="home-header-bell" onClick={() => navigate('/notifications')}>
          <Bell size={20} />
          <span className="notification-dot" />
        </button>
      </div>

      {/* Greeting */}
      <div className="home-greeting">
        <div className="home-greeting-name">
          Hello, {user ? user.name.split(' ')[0] : getRoleLabel()}
        </div>
        <div className="home-greeting-time">{getGreeting()}</div>
      </div>

      {/* Today's Readings Card */}
      <div className="home-readings-card">
        <div className="readings-info">
          <span className="readings-info-label">Today's Readings</span>
          <span className="readings-info-count">{todayCount}/{totalRequired}</span>
          <span className="readings-info-status">Completed</span>
        </div>
        <div className="progress-ring">
          <svg viewBox="0 0 72 72">
            <circle
              className="progress-ring-track"
              cx="36"
              cy="36"
              r={radius}
            />
            <circle
              className="progress-ring-fill"
              cx="36"
              cy="36"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          <span className="progress-ring-label">{Math.round(progressPercent)}%</span>
        </div>
      </div>

      {/* Assigned Sites */}
      <div className="home-sites-section">
        <div className="home-sites-header">
          <h2>Assigned Sites</h2>
          <button className="home-sites-view-all" onClick={() => navigate('/sites')}>
            View All
          </button>
        </div>
        <div className="home-sites-list">
          {displayedSites.map((site) => (
            <div key={site.id} className="home-site-card" onClick={() => navigate(`/site/${site.id}`)}>
              <div className="home-site-card-icon">
                <MapPin size={20} />
              </div>
              <div className="home-site-card-info">
                <div className="home-site-card-name">{site.siteName}</div>
                <div className="home-site-card-code">{site.siteCode}</div>
              </div>
              <div
                className={`home-site-card-distance ${
                  isInRange(site.distance) ? 'in-range' : 'out-of-range'
                }`}
              >
                {site.distance?.toFixed(2)} km
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="home-bottom-cta">
        <button className="home-capture-btn" onClick={() => navigate('/scan-qr')}>
          <Camera size={20} />
          Capture Reading
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
