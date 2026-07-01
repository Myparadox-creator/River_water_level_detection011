import React, { useState } from 'react';
import { Search, Plus, MapPin, Navigation, Radio, Clock } from 'lucide-react';
import { mockSites } from '../../data/mockData';
import './MonitoringSites.css';

const statusBadge = (status: string) => {
  const map: Record<string, string> = {
    active: 'badge badge-success',
    inactive: 'badge badge-danger',
    maintenance: 'badge badge-warning',
  };
  return map[status] ?? 'badge badge-neutral';
};

const MonitoringSites: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = mockSites.filter(
    (s) =>
      s.siteName.toLowerCase().includes(search.toLowerCase()) ||
      s.riverName.toLowerCase().includes(search.toLowerCase()) ||
      s.siteCode.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      {/* Top bar */}
      <header className="dashboard-topbar">
        <div className="sites-topbar">
          <h1>Monitoring Sites</h1>
          <div className="sites-topbar-actions">
            <div className="sites-search">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search sites..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className="btn btn-primary btn-sm">
              <Plus size={16} />
              Add Site
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="sites-grid">
          {filtered.map((site) => (
            <div className="site-card" key={site.id}>
              <div className="site-card-header">
                <div>
                  <h3>{site.siteName}</h3>
                  <p>{site.riverName}</p>
                </div>
                <span className={statusBadge(site.status)}>
                  {site.status.charAt(0).toUpperCase() + site.status.slice(1)}
                </span>
              </div>

              <div className="site-card-meta">
                <div className="site-card-meta-row">
                  <Radio size={14} />
                  <span>Code: {site.siteCode}</span>
                </div>
                <div className="site-card-meta-row">
                  <MapPin size={14} />
                  <span>
                    {site.latitude.toFixed(4)}°N, {site.longitude.toFixed(4)}°E
                  </span>
                </div>
                <div className="site-card-meta-row">
                  <Navigation size={14} />
                  <span>Allowed Radius: {site.allowedRadius} m</span>
                </div>
              </div>

              <div className="site-card-footer">
                <div className="site-card-meta-row">
                  <Clock size={14} />
                  <span>
                    {site.lastReading
                      ? `Last reading: ${new Date(site.lastReading.timestamp).toLocaleString()}`
                      : 'No readings yet'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default MonitoringSites;
