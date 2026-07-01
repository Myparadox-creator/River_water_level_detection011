import { Home, Clock, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BottomNav.css';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: Clock, label: 'History', path: '/history' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="bottom-nav">
      {items.map((item) => (
        <button
          key={item.path}
          className={`bottom-nav-item ${location.pathname === item.path ? 'active' : ''}`}
          onClick={() => navigate(item.path)}
        >
          <item.icon />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
