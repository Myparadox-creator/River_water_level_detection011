import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ReadingsProvider } from './context/ReadingsContext';

// Mobile screens
import SplashScreen from './pages/mobile/SplashScreen';
import LoginScreen from './pages/mobile/LoginScreen';
import HomeScreen from './pages/mobile/HomeScreen';
import ScanQRScreen from './pages/mobile/ScanQRScreen';
import VerifyLocationScreen from './pages/mobile/VerifyLocationScreen';
import CapturePhotoScreen from './pages/mobile/CapturePhotoScreen';
import ReadingResultScreen from './pages/mobile/ReadingResultScreen';
import SubmissionSuccessScreen from './pages/mobile/SubmissionSuccessScreen';
import HistoryScreen from './pages/mobile/HistoryScreen';
import ProfileScreen from './pages/mobile/ProfileScreen';

// Dashboard
import DashboardLayout from './pages/dashboard/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';
import MonitoringSites from './pages/dashboard/MonitoringSites';
import ReadingsPage from './pages/dashboard/ReadingsPage';
import AlertsPage from './pages/dashboard/AlertsPage';
import UsersPage from './pages/dashboard/UsersPage';
import ReportsPage from './pages/dashboard/ReportsPage';

import './App.css';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Mobile Routes */}
      <Route path="/" element={<SplashScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/home" element={<ProtectedRoute><HomeScreen /></ProtectedRoute>} />
      <Route path="/scan-qr" element={<ProtectedRoute><ScanQRScreen /></ProtectedRoute>} />
      <Route path="/verify-location" element={<ProtectedRoute><VerifyLocationScreen /></ProtectedRoute>} />
      <Route path="/capture-photo" element={<ProtectedRoute><CapturePhotoScreen /></ProtectedRoute>} />
      <Route path="/reading-result" element={<ProtectedRoute><ReadingResultScreen /></ProtectedRoute>} />
      <Route path="/reading-submitted" element={<ProtectedRoute><SubmissionSuccessScreen /></ProtectedRoute>} />
      <Route path="/history" element={<ProtectedRoute><HistoryScreen /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><ProfileScreen /></ProtectedRoute>} />

      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
        <Route index element={<DashboardHome />} />
        <Route path="sites" element={<MonitoringSites />} />
        <Route path="readings" element={<ReadingsPage />} />
        <Route path="alerts" element={<AlertsPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="reports" element={<ReportsPage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <ReadingsProvider>
          <AppRoutes />
        </ReadingsProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
