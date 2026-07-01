import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './LoginScreen.css';

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.');
      return;
    }

    setIsLoading(true);
    try {
      const success = await login(email, password);
      if (success) {
        navigate('/home');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-screen">
      {/* Header */}
      <div className="login-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ChevronLeft size={20} />
        </button>
        <h1>Login</h1>
      </div>

      {/* Body */}
      <div className="login-body">
        <div className="login-card">
          <form className="login-form" onSubmit={handleLogin}>
            {/* Error */}
            {error && <div className="login-error">{error}</div>}

            {/* Email / Phone */}
            <div className="login-input-group">
              <label>Email / Phone</label>
              <input
                className="input-field"
                type="text"
                placeholder="Enter email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="login-input-group">
              <label>Password</label>
              <div className="password-wrapper">
                <input
                  className="input-field"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="forgot-password-row">
              <button type="button" className="forgot-password-link">
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="login-submit-btn"
              disabled={isLoading}
            >
              {isLoading && <span className="login-spinner" />}
              {isLoading ? 'Logging in...' : 'Login'}
            </button>

            {/* Divider */}
            <div className="login-divider">
              <span className="login-divider-line" />
              <span className="login-divider-text">OR</span>
              <span className="login-divider-line" />
            </div>

            {/* OTP Button */}
            <button
              type="button"
              className="login-otp-btn"
              onClick={() => {/* OTP flow placeholder */}}
            >
              Continue with OTP
            </button>
          </form>

          {/* Register link */}
          <div className="login-register-row">
            New user?{' '}
            <button
              className="login-register-link"
              onClick={() => navigate('/register')}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
