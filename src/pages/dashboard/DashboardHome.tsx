import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import {
  MapPin,
  FileText,
  Activity,
  AlertTriangle,
  Calendar,
} from 'lucide-react';

import { useAuth } from '../../context/AuthContext';
import {
  mockSites,
  mockReadings,
  mockWaterLevelData,
  mockDashboardStats,
} from '../../data/mockData';
import type { ReadingStatus } from '../../types';
import './DashboardHome.css';

// Fix default marker icon for bundlers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

/* ── helpers ── */

const statusBadge = (status: ReadingStatus) => {
  const map: Record<ReadingStatus, string> = {
    submitted: 'badge badge-success',
    verified: 'badge badge-success',
    pending: 'badge badge-warning',
    rejected: 'badge badge-danger',
    offline: 'badge badge-info',
  };
  return map[status] ?? 'badge badge-neutral';
};

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

/* ── Chart legend colours ── */
const RIVER_COLORS = {
  ganga: '#0D47A1',
  yamuna: '#2E7D32',
  brahmaputra: '#E65100',
} as const;

/* ── Component ── */

const DashboardHome: React.FC = () => {
  const { user } = useAuth();
  const recentReadings = mockReadings.slice(0, 5);

  return (
    <>
      {/* ── Top Bar ── */}
      <header className="dashboard-topbar">
        <div className="topbar-left">
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Dashboard</h1>
        </div>
        <div className="topbar-right">
          <div className="topbar-date">
            <Calendar size={16} />
            <span>20 May 2025 – 20 May 2025</span>
          </div>
          <div className="topbar-filter">
            <select defaultValue="all">
              <option value="all">All Sites</option>
              {mockSites.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.siteName}
                </option>
              ))}
            </select>
          </div>
          <div className="topbar-user">
            <div className="topbar-avatar">
              {user?.name?.charAt(0) ?? 'S'}
            </div>
            <span style={{ fontSize: '0.8125rem', fontWeight: 500 }}>
              {user?.role === 'supervisor' ? 'Supervisor' : user?.name ?? 'Supervisor'}
            </span>
          </div>
        </div>
      </header>

      {/* ── Main ── */}
      <main className="dashboard-main">
        {/* ── Stats Cards ── */}
        <div className="stats-grid">
          <div className="stat-card blue">
            <div className="stat-card-header">
              <div>
                <div className="stat-card-label">Total Sites</div>
                <div className="stat-card-value">{mockDashboardStats.totalSites}</div>
              </div>
              <div className="stat-card-icon">
                <MapPin size={20} />
              </div>
            </div>
          </div>
          <div className="stat-card green">
            <div className="stat-card-header">
              <div>
                <div className="stat-card-label">Total Readings (Today)</div>
                <div className="stat-card-value">{mockDashboardStats.totalReadingsToday}</div>
              </div>
              <div className="stat-card-icon">
                <FileText size={20} />
              </div>
            </div>
          </div>
          <div className="stat-card orange">
            <div className="stat-card-header">
              <div>
                <div className="stat-card-label">Average Water Level</div>
                <div className="stat-card-value">
                  {mockDashboardStats.averageWaterLevel.toFixed(2)} m
                </div>
              </div>
              <div className="stat-card-icon">
                <Activity size={20} />
              </div>
            </div>
          </div>
          <div className="stat-card red">
            <div className="stat-card-header">
              <div>
                <div className="stat-card-label">Alerts</div>
                <div className="stat-card-value">{mockDashboardStats.activeAlerts}</div>
              </div>
              <div className="stat-card-icon">
                <AlertTriangle size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Chart + Map row ── */}
        <div className="dashboard-grid">
          {/* Water Level Chart */}
          <div className="dashboard-panel">
            <div className="panel-header">
              <div>
                <h3>Water Level Overview</h3>
                <span className="chart-subtitle">Water Level (m)</span>
              </div>
            </div>
            <div className="panel-body">
              <div className="chart-container">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockWaterLevelData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E8E8ED" />
                    <XAxis
                      dataKey="time"
                      tick={{ fontSize: 12, fill: '#6B6B80' }}
                      axisLine={{ stroke: '#D1D1D9' }}
                      tickLine={false}
                    />
                    <YAxis
                      domain={[0, 3]}
                      tick={{ fontSize: 12, fill: '#6B6B80' }}
                      axisLine={{ stroke: '#D1D1D9' }}
                      tickLine={false}
                      unit=" m"
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: 8,
                        border: '1px solid #E8E8ED',
                        boxShadow: '0 4px 12px rgba(0,0,0,.08)',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="ganga"
                      name="Ganga at Rishikesh"
                      stroke={RIVER_COLORS.ganga}
                      strokeWidth={2.5}
                      dot={false}
                      activeDot={{ r: 5 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="yamuna"
                      name="Yamuna at Delhi"
                      stroke={RIVER_COLORS.yamuna}
                      strokeWidth={2.5}
                      dot={false}
                      activeDot={{ r: 5 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="brahmaputra"
                      name="Brahmaputra at Guwahati"
                      stroke={RIVER_COLORS.brahmaputra}
                      strokeWidth={2.5}
                      dot={false}
                      activeDot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="chart-legend">
                <div className="chart-legend-item">
                  <span
                    className="chart-legend-dot"
                    style={{ background: RIVER_COLORS.ganga }}
                  />
                  Ganga at Rishikesh
                </div>
                <div className="chart-legend-item">
                  <span
                    className="chart-legend-dot"
                    style={{ background: RIVER_COLORS.yamuna }}
                  />
                  Yamuna at Delhi
                </div>
                <div className="chart-legend-item">
                  <span
                    className="chart-legend-dot"
                    style={{ background: RIVER_COLORS.brahmaputra }}
                  />
                  Brahmaputra at Guwahati
                </div>
              </div>
            </div>
          </div>

          {/* Site Map */}
          <div className="dashboard-panel">
            <div className="panel-header">
              <h3>Site Map</h3>
            </div>
            <div className="map-container">
              <MapContainer
                center={[22, 79]}
                zoom={5}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {mockSites.map((site) => (
                  <Marker key={site.id} position={[site.latitude, site.longitude]}>
                    <Popup>
                      <strong>{site.siteName}</strong>
                      <br />
                      {site.riverName} · {site.siteCode}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>

        {/* ── Recent Readings ── */}
        <div className="dashboard-panel recent-readings-panel">
          <div className="panel-header">
            <h3>Recent Readings</h3>
          </div>
          <div className="panel-body" style={{ padding: 0 }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Site ID</th>
                  <th>Site Name</th>
                  <th>Water Level (m)</th>
                  <th>Date &amp; Time</th>
                  <th>Captured By</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentReadings.map((r) => (
                  <tr key={r.id}>
                    <td>{r.siteId}</td>
                    <td>{r.siteName}</td>
                    <td>{r.waterLevel.toFixed(2)}</td>
                    <td>{formatDate(r.timestamp)}</td>
                    <td>{r.userName}</td>
                    <td>
                      <span className={statusBadge(r.status)}>
                        {r.status.charAt(0).toUpperCase() + r.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardHome;
