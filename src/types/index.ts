export type UserRole = 'field_officer' | 'supervisor' | 'central_analyst' | 'public';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone: string;
  avatar?: string;
  createdAt: string;
}

export interface MonitoringSite {
  id: string;
  siteCode: string;
  siteName: string;
  riverName: string;
  latitude: number;
  longitude: number;
  allowedRadius: number;
  qrCode: string;
  status: 'active' | 'inactive' | 'maintenance';
  lastReading?: Reading;
  distance?: number; // calculated client-side
}

export type ReadingStatus = 'submitted' | 'pending' | 'verified' | 'rejected' | 'offline';

export interface Reading {
  id: string;
  userId: string;
  userName: string;
  siteId: string;
  siteName: string;
  riverName: string;
  waterLevel: number;
  imageUrl: string;
  latitude: number;
  longitude: number;
  timestamp: string;
  confidenceScore: number;
  status: ReadingStatus;
  remarks?: string;
  deviceId?: string;
}

export type AlertSeverity = 'critical' | 'warning' | 'info';
export type AlertType = 'flood_warning' | 'missed_reading' | 'tamper_detected' | 'high_water' | 'equipment_issue';

export interface Alert {
  id: string;
  readingId?: string;
  siteId: string;
  siteName: string;
  type: AlertType;
  severity: AlertSeverity;
  title: string;
  description: string;
  createdAt: string;
  isRead: boolean;
}

export interface WaterLevelDataPoint {
  time: string;
  ganga: number;
  yamuna: number;
  brahmaputra: number;
}

export interface DashboardStats {
  totalSites: number;
  totalReadingsToday: number;
  averageWaterLevel: number;
  activeAlerts: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
}
