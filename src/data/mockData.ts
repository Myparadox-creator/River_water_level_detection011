import { User, MonitoringSite, Reading, Alert, WaterLevelDataPoint, DashboardStats } from '../types';

export const mockUsers: User[] = [
  {
    id: 'USR-001',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@cwc.gov.in',
    role: 'field_officer',
    phone: '+91 98765 43210',
    createdAt: '2024-01-15T08:00:00Z'
  },
  {
    id: 'USR-002',
    name: 'Priya Sharma',
    email: 'priya.sharma@cwc.gov.in',
    role: 'supervisor',
    phone: '+91 98765 43211',
    createdAt: '2023-11-20T08:00:00Z'
  },
  {
    id: 'USR-003',
    name: 'Amit Patel',
    email: 'amit.patel@cwc.gov.in',
    role: 'central_analyst',
    phone: '+91 98765 43212',
    createdAt: '2023-06-10T08:00:00Z'
  },
  {
    id: 'USR-004',
    name: 'Sneha Reddy',
    email: 'sneha.reddy@cwc.gov.in',
    role: 'field_officer',
    phone: '+91 98765 43213',
    createdAt: '2024-03-05T08:00:00Z'
  },
  {
    id: 'USR-005',
    name: 'Vikram Singh',
    email: 'vikram.singh@cwc.gov.in',
    role: 'field_officer',
    phone: '+91 98765 43214',
    createdAt: '2024-02-18T08:00:00Z'
  }
];

export const mockSites: MonitoringSite[] = [
  {
    id: 'SITE-001',
    siteCode: 'RSH-001',
    siteName: 'Ganga at Rishikesh',
    riverName: 'Ganga',
    latitude: 30.0869,
    longitude: 78.2676,
    allowedRadius: 100,
    qrCode: 'RSH-001-GANGA-RISHIKESH',
    status: 'active',
    distance: 1.25
  },
  {
    id: 'SITE-002',
    siteCode: 'DEL-002',
    siteName: 'Yamuna at Delhi',
    riverName: 'Yamuna',
    latitude: 28.6862,
    longitude: 77.2217,
    allowedRadius: 100,
    qrCode: 'DEL-002-YAMUNA-DELHI',
    status: 'active',
    distance: 2.10
  },
  {
    id: 'SITE-003',
    siteCode: 'GUW-003',
    siteName: 'Brahmaputra at Guwahati',
    riverName: 'Brahmaputra',
    latitude: 26.1445,
    longitude: 91.7362,
    allowedRadius: 150,
    qrCode: 'GUW-003-BRAHMAPUTRA-GUWAHATI',
    status: 'active',
    distance: 3.45
  },
  {
    id: 'SITE-004',
    siteCode: 'VNS-004',
    siteName: 'Ganga at Varanasi',
    riverName: 'Ganga',
    latitude: 25.3176,
    longitude: 83.0103,
    allowedRadius: 100,
    qrCode: 'VNS-004-GANGA-VARANASI',
    status: 'active',
    distance: 5.20
  },
  {
    id: 'SITE-005',
    siteCode: 'PAT-005',
    siteName: 'Ganga at Patna',
    riverName: 'Ganga',
    latitude: 25.6093,
    longitude: 85.1376,
    allowedRadius: 120,
    qrCode: 'PAT-005-GANGA-PATNA',
    status: 'maintenance',
    distance: 8.30
  }
];

export const mockReadings: Reading[] = [
  {
    id: 'RDG-001',
    userId: 'USR-001',
    userName: 'Rajesh Kumar',
    siteId: 'SITE-001',
    siteName: 'Ganga at Rishikesh',
    riverName: 'Ganga',
    waterLevel: 1.48,
    imageUrl: '/gauge-1.jpg',
    latitude: 30.0869,
    longitude: 78.2676,
    timestamp: '2025-05-20T09:41:00Z',
    confidenceScore: 92,
    status: 'submitted',
    remarks: 'Clear reading, water level normal'
  },
  {
    id: 'RDG-002',
    userId: 'USR-001',
    userName: 'Rajesh Kumar',
    siteId: 'SITE-001',
    siteName: 'Ganga at Rishikesh',
    riverName: 'Ganga',
    waterLevel: 1.35,
    imageUrl: '/gauge-2.jpg',
    latitude: 30.0869,
    longitude: 78.2676,
    timestamp: '2025-05-20T08:15:00Z',
    confidenceScore: 88,
    status: 'submitted'
  },
  {
    id: 'RDG-003',
    userId: 'USR-001',
    userName: 'Rajesh Kumar',
    siteId: 'SITE-002',
    siteName: 'Yamuna at Delhi',
    riverName: 'Yamuna',
    waterLevel: 0.92,
    imageUrl: '/gauge-3.jpg',
    latitude: 28.6862,
    longitude: 77.2217,
    timestamp: '2025-05-19T16:20:00Z',
    confidenceScore: 85,
    status: 'pending'
  },
  {
    id: 'RDG-004',
    userId: 'USR-004',
    userName: 'Sneha Reddy',
    siteId: 'SITE-002',
    siteName: 'Yamuna at Delhi',
    riverName: 'Yamuna',
    waterLevel: 1.12,
    imageUrl: '/gauge-4.jpg',
    latitude: 28.6862,
    longitude: 77.2217,
    timestamp: '2025-05-20T07:30:00Z',
    confidenceScore: 95,
    status: 'verified'
  },
  {
    id: 'RDG-005',
    userId: 'USR-005',
    userName: 'Vikram Singh',
    siteId: 'SITE-003',
    siteName: 'Brahmaputra at Guwahati',
    riverName: 'Brahmaputra',
    waterLevel: 2.34,
    imageUrl: '/gauge-5.jpg',
    latitude: 26.1445,
    longitude: 91.7362,
    timestamp: '2025-05-20T10:00:00Z',
    confidenceScore: 90,
    status: 'submitted'
  },
  {
    id: 'RDG-006',
    userId: 'USR-001',
    userName: 'Rajesh Kumar',
    siteId: 'SITE-001',
    siteName: 'Ganga at Rishikesh',
    riverName: 'Ganga',
    waterLevel: 1.55,
    imageUrl: '/gauge-6.jpg',
    latitude: 30.0870,
    longitude: 78.2675,
    timestamp: '2025-05-20T06:00:00Z',
    confidenceScore: 78,
    status: 'offline',
    remarks: 'Taken during low connectivity'
  },
  {
    id: 'RDG-007',
    userId: 'USR-004',
    userName: 'Sneha Reddy',
    siteId: 'SITE-004',
    siteName: 'Ganga at Varanasi',
    riverName: 'Ganga',
    waterLevel: 1.78,
    imageUrl: '/gauge-7.jpg',
    latitude: 25.3176,
    longitude: 83.0103,
    timestamp: '2025-05-20T09:15:00Z',
    confidenceScore: 91,
    status: 'submitted'
  },
  {
    id: 'RDG-008',
    userId: 'USR-005',
    userName: 'Vikram Singh',
    siteId: 'SITE-003',
    siteName: 'Brahmaputra at Guwahati',
    riverName: 'Brahmaputra',
    waterLevel: 2.56,
    imageUrl: '/gauge-8.jpg',
    latitude: 26.1445,
    longitude: 91.7362,
    timestamp: '2025-05-19T15:45:00Z',
    confidenceScore: 87,
    status: 'verified'
  },
  {
    id: 'RDG-009',
    userId: 'USR-001',
    userName: 'Rajesh Kumar',
    siteId: 'SITE-002',
    siteName: 'Yamuna at Delhi',
    riverName: 'Yamuna',
    waterLevel: 0.88,
    imageUrl: '/gauge-9.jpg',
    latitude: 28.6862,
    longitude: 77.2217,
    timestamp: '2025-05-19T08:30:00Z',
    confidenceScore: 93,
    status: 'submitted'
  },
  {
    id: 'RDG-010',
    userId: 'USR-005',
    userName: 'Vikram Singh',
    siteId: 'SITE-005',
    siteName: 'Ganga at Patna',
    riverName: 'Ganga',
    waterLevel: 1.92,
    imageUrl: '/gauge-10.jpg',
    latitude: 25.6093,
    longitude: 85.1376,
    timestamp: '2025-05-20T11:00:00Z',
    confidenceScore: 82,
    status: 'pending'
  }
];

export const mockAlerts: Alert[] = [
  {
    id: 'ALT-001',
    readingId: 'RDG-005',
    siteId: 'SITE-003',
    siteName: 'Brahmaputra at Guwahati',
    type: 'high_water',
    severity: 'warning',
    title: 'High Water Level Alert',
    description: 'Water level at Brahmaputra (Guwahati) has exceeded 2.3m warning threshold.',
    createdAt: '2025-05-20T10:05:00Z',
    isRead: false
  },
  {
    id: 'ALT-002',
    siteId: 'SITE-005',
    siteName: 'Ganga at Patna',
    type: 'missed_reading',
    severity: 'info',
    title: 'Missed Scheduled Reading',
    description: 'No reading submitted for the 6:00 AM slot at Ganga (Patna).',
    createdAt: '2025-05-20T06:30:00Z',
    isRead: true
  },
  {
    id: 'ALT-003',
    readingId: 'RDG-003',
    siteId: 'SITE-002',
    siteName: 'Yamuna at Delhi',
    type: 'tamper_detected',
    severity: 'critical',
    title: 'Possible Tamper Detected',
    description: 'GPS coordinates mismatch detected for reading at Yamuna (Delhi). Location variance: 245m.',
    createdAt: '2025-05-19T16:25:00Z',
    isRead: false
  },
  {
    id: 'ALT-004',
    siteId: 'SITE-005',
    siteName: 'Ganga at Patna',
    type: 'equipment_issue',
    severity: 'warning',
    title: 'Equipment Maintenance Required',
    description: 'Gauge post at Ganga (Patna) requires recalibration. Multiple low-confidence readings detected.',
    createdAt: '2025-05-19T14:00:00Z',
    isRead: true
  },
  {
    id: 'ALT-005',
    siteId: 'SITE-003',
    siteName: 'Brahmaputra at Guwahati',
    type: 'flood_warning',
    severity: 'critical',
    title: 'Flood Warning Issued',
    description: 'Water level at Brahmaputra (Guwahati) approaching danger level of 3.0m. Current: 2.56m.',
    createdAt: '2025-05-19T16:00:00Z',
    isRead: false
  }
];

export const mockWaterLevelData: WaterLevelDataPoint[] = [
  { time: '12 AM', ganga: 1.2, yamuna: 0.8, brahmaputra: 2.1 },
  { time: '2 AM', ganga: 1.15, yamuna: 0.78, brahmaputra: 2.05 },
  { time: '4 AM', ganga: 1.1, yamuna: 0.75, brahmaputra: 2.0 },
  { time: '6 AM', ganga: 1.25, yamuna: 0.82, brahmaputra: 2.15 },
  { time: '8 AM', ganga: 1.35, yamuna: 0.88, brahmaputra: 2.25 },
  { time: '10 AM', ganga: 1.48, yamuna: 0.92, brahmaputra: 2.34 },
  { time: '12 PM', ganga: 1.55, yamuna: 0.95, brahmaputra: 2.45 },
  { time: '2 PM', ganga: 1.6, yamuna: 1.0, brahmaputra: 2.5 },
  { time: '4 PM', ganga: 1.5, yamuna: 0.95, brahmaputra: 2.4 },
  { time: '6 PM', ganga: 1.45, yamuna: 0.9, brahmaputra: 2.35 },
  { time: '8 PM', ganga: 1.38, yamuna: 0.85, brahmaputra: 2.28 }
];

export const mockDashboardStats: DashboardStats = {
  totalSites: 128,
  totalReadingsToday: 256,
  averageWaterLevel: 1.42,
  activeAlerts: 3
};
