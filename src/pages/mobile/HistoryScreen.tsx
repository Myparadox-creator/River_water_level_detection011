import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Home, Clock, User, Droplets, Inbox } from 'lucide-react';
import { useReadings } from '../../context/ReadingsContext';
import type { ReadingStatus } from '../../types';
import './HistoryScreen.css';

type TabType = 'all' | 'submitted' | 'pending';

const formatDate = (timestamp: string): string => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  return `${day} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
};

const getThumbClass = (riverName: string): string => {
  const river = riverName.toLowerCase();
  if (river.includes('ganga')) return 'hs-card-thumb--ganga';
  if (river.includes('yamuna')) return 'hs-card-thumb--yamuna';
  if (river.includes('brahmaputra')) return 'hs-card-thumb--brahmaputra';
  return 'hs-card-thumb--default';
};

const getStatusBadge = (status: ReadingStatus): { label: string; className: string } => {
  switch (status) {
    case 'submitted':
      return { label: 'Submitted', className: 'hs-badge--submitted' };
    case 'verified':
      return { label: 'Verified', className: 'hs-badge--verified' };
    case 'pending':
      return { label: 'Pending', className: 'hs-badge--pending' };
    case 'offline':
      return { label: 'Saved (Offline)', className: 'hs-badge--offline' };
    case 'rejected':
      return { label: 'Rejected', className: 'hs-badge--rejected' };
    default:
      return { label: status, className: '' };
  }
};

const HistoryScreen = () => {
  const navigate = useNavigate();
  const { readings } = useReadings();
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const tabs: { key: TabType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'submitted', label: 'Submitted' },
    { key: 'pending', label: 'Pending' },
  ];

  const filteredReadings = readings.filter((reading) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'submitted') return reading.status === 'submitted' || reading.status === 'verified';
    if (activeTab === 'pending') return reading.status === 'pending' || reading.status === 'offline';
    return true;
  });

  // Find the site code from siteId
  const getSiteCode = (siteId: string): string => {
    const codeMap: Record<string, string> = {
      'SITE-001': 'RSH-001',
      'SITE-002': 'DEL-002',
      'SITE-003': 'GUW-003',
      'SITE-004': 'VNS-004',
      'SITE-005': 'PAT-005',
    };
    return codeMap[siteId] || siteId;
  };

  return (
    <div className="history-screen">
      {/* Blue Header */}
      <div className="hs-header">
        <button className="hs-header-menu">
          <Menu size={22} />
        </button>
        <h1 className="hs-header-title">History</h1>
      </div>

      {/* Tab Bar */}
      <div className="hs-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`hs-tab ${activeTab === tab.key ? 'hs-tab--active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Reading List */}
      <div className="hs-list">
        {filteredReadings.length === 0 ? (
          <div className="hs-empty">
            <Inbox size={48} className="hs-empty-icon" />
            <span className="hs-empty-text">No readings found</span>
          </div>
        ) : (
          filteredReadings.map((reading) => {
            const badge = getStatusBadge(reading.status);
            return (
              <div key={reading.id} className="hs-card">
                {/* Thumbnail */}
                <div className={`hs-card-thumb ${getThumbClass(reading.riverName)}`}>
                  <Droplets size={24} className="hs-card-thumb-icon" />
                </div>

                {/* Content */}
                <div className="hs-card-content">
                  <div className="hs-card-header">
                    <div>
                      <h3 className="hs-card-site">{getSiteCode(reading.siteId)}</h3>
                      <p className="hs-card-river">{reading.siteName}</p>
                    </div>
                  </div>
                  <div className="hs-card-level">
                    {reading.waterLevel.toFixed(2)} <span>m</span>
                  </div>
                  <div className="hs-card-footer">
                    <span className="hs-card-date">{formatDate(reading.timestamp)}</span>
                    <span className={`hs-badge ${badge.className}`}>
                      <span className="hs-badge-dot" />
                      {badge.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="hs-bottom-nav">
        <button className="hs-nav-item" onClick={() => navigate('/home')}>
          <Home size={20} />
          <span className="hs-nav-item-label">Home</span>
        </button>
        <button className="hs-nav-item hs-nav-item--active">
          <Clock size={20} />
          <span className="hs-nav-item-label">History</span>
        </button>
        <button className="hs-nav-item" onClick={() => navigate('/profile')}>
          <User size={20} />
          <span className="hs-nav-item-label">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default HistoryScreen;
