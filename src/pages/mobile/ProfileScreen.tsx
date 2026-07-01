import { useNavigate } from 'react-router-dom';
import {
  Home,
  Clock,
  User,
  UserCog,
  Bell,
  Download,
  Globe,
  Info,
  LogOut,
  ChevronRight,
  Mail,
  Phone,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './ProfileScreen.css';

const ProfileScreen = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const displayName = user?.name || 'Rajesh Kumar';
  const displayEmail = user?.email || 'rajesh.kumar@cwc.gov.in';
  const displayPhone = user?.phone || '+91 98765 43210';
  const displayRole = user?.role === 'field_officer'
    ? 'Field Officer'
    : user?.role === 'supervisor'
    ? 'Supervisor'
    : user?.role === 'central_analyst'
    ? 'Central Analyst'
    : 'Field Officer';

  // Get initials from name
  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const settingsItems = [
    {
      icon: UserCog,
      label: 'Edit Profile',
      iconClass: 'ps-settings-icon--blue',
      onClick: () => {},
    },
    {
      icon: Bell,
      label: 'Notifications',
      iconClass: 'ps-settings-icon--orange',
      onClick: () => {},
    },
    {
      icon: Download,
      label: 'Offline Queue',
      iconClass: 'ps-settings-icon--green',
      badge: 3,
      onClick: () => {},
    },
    {
      icon: Globe,
      label: 'Language',
      iconClass: 'ps-settings-icon--purple',
      onClick: () => {},
    },
    {
      icon: Info,
      label: 'About',
      iconClass: 'ps-settings-icon--gray',
      onClick: () => {},
    },
  ];

  return (
    <div className="profile-screen">
      {/* Blue Header */}
      <div className="ps-header">
        <h1 className="ps-header-title">Profile</h1>
      </div>

      {/* Content */}
      <div className="ps-content">
        {/* Profile Card */}
        <div className="ps-profile-card">
          <div className="ps-avatar">
            <span className="ps-avatar-initials">{getInitials(displayName)}</span>
          </div>
          <h2 className="ps-user-name">{displayName}</h2>
          <div className="ps-role-badge">
            <span className="ps-role-dot" />
            {displayRole}
          </div>
          <div className="ps-contact-info">
            <div className="ps-contact-item">
              <Mail size={14} className="ps-contact-icon" />
              <span>{displayEmail}</span>
            </div>
            <div className="ps-contact-item">
              <Phone size={14} className="ps-contact-icon" />
              <span>{displayPhone}</span>
            </div>
          </div>
        </div>

        {/* Settings List */}
        <div className="ps-settings-card">
          {settingsItems.map((item) => (
            <button
              key={item.label}
              className="ps-settings-item"
              onClick={item.onClick}
            >
              <div className={`ps-settings-icon ${item.iconClass}`}>
                <item.icon size={18} />
              </div>
              <span className="ps-settings-label">{item.label}</span>
              {item.badge && (
                <span className="ps-settings-badge">{item.badge}</span>
              )}
              <ChevronRight size={18} className="ps-settings-chevron" />
            </button>
          ))}

          {/* Logout */}
          <button
            className="ps-settings-item ps-settings-item--logout"
            onClick={handleLogout}
          >
            <div className="ps-settings-icon ps-settings-icon--red">
              <LogOut size={18} />
            </div>
            <span className="ps-settings-label">Logout</span>
            <ChevronRight size={18} className="ps-settings-chevron" />
          </button>
        </div>

        <p className="ps-version">RWD Monitor v1.0.0</p>
      </div>

      {/* Bottom Navigation */}
      <nav className="ps-bottom-nav">
        <button className="ps-nav-item" onClick={() => navigate('/home')}>
          <Home size={20} />
          <span className="ps-nav-item-label">Home</span>
        </button>
        <button className="ps-nav-item" onClick={() => navigate('/history')}>
          <Clock size={20} />
          <span className="ps-nav-item-label">History</span>
        </button>
        <button className="ps-nav-item ps-nav-item--active">
          <User size={20} />
          <span className="ps-nav-item-label">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default ProfileScreen;
