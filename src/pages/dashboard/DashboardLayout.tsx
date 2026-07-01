import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  MapPin,
  FileText,
  AlertTriangle,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Waves,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './DashboardLayout.css';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard', end: true },
  { label: 'Monitoring Sites', icon: MapPin, path: '/dashboard/sites' },
  { label: 'Readings', icon: FileText, path: '/dashboard/readings' },
  { label: 'Alerts', icon: AlertTriangle, path: '/dashboard/alerts' },
  { label: 'Users', icon: Users, path: '/dashboard/users' },
  { label: 'Reports', icon: BarChart3, path: '/dashboard/reports' },
  { label: 'Settings', icon: Settings, path: '/dashboard/settings' },
];

const DashboardLayout: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard-layout">
      {/* ── Sidebar ── */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">
            <Waves size={22} color="#fff" />
          </div>
          <div className="sidebar-logo-text">
            <h2>River Water</h2>
            <h2>Monitoring</h2>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="sidebar-nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `sidebar-nav-item${isActive ? ' active' : ''}`
                }
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="sidebar-logout">
          <button className="sidebar-nav-item" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* ── Content ── */}
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
