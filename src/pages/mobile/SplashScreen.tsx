import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Waves } from 'lucide-react';
import './SplashScreen.css';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="splash-screen">
      {/* Wave SVG overlay at the bottom */}
      <div className="splash-wave">
        <svg
          viewBox="0 0 430 400"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120 C60 80, 120 160, 200 130 C280 100, 360 160, 430 120 L430 400 L0 400 Z"
            fill="rgba(255,255,255,0.07)"
          />
          <path
            d="M0 180 C80 140, 160 220, 240 180 C320 140, 380 200, 430 170 L430 400 L0 400 Z"
            fill="rgba(255,255,255,0.05)"
          />
          <path
            d="M0 260 C100 230, 180 280, 260 250 C340 220, 400 270, 430 250 L430 400 L0 400 Z"
            fill="rgba(255,255,255,0.03)"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="splash-content">
        <div className="splash-logo">
          <Waves strokeWidth={1.8} />
        </div>
        <h1 className="splash-title">River Water Monitoring</h1>
        <p className="splash-subtitle">Secure. Accurate. Reliable.</p>
      </div>

      {/* Bottom buttons */}
      <div className="splash-buttons">
        <button
          className="splash-btn-login"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button
          className="splash-btn-register"
          onClick={() => navigate('/register')}
        >
          Register
        </button>
        <button
          className="splash-btn-public"
          onClick={() => navigate('/home')}
        >
          Continue as Public User
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
