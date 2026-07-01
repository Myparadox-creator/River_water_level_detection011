# 🌊 Smart River Water Level Monitoring System
### Secure Mobile Application for River Water Level Data Collection using Image Processing

> **Problem Statement ID:** 25248  
> **Organization:** Ministry of Jal Shakti (MoJS)  
> **Department:** Central Water Commission (CWC), Department of Water Resources, RD & GR  
> **Category:** Software  

---

# 📌 Project Overview

The **Smart River Water Level Monitoring System** is an AI-powered mobile and cloud-based platform that modernizes the traditional river water level monitoring process.

The system enables field officers and the public to securely collect river water level data using **Computer Vision**, **GPS-based Geofencing**, **QR Code Verification**, and **Cloud Synchronization** while maintaining complete auditability through metadata such as location, timestamp, captured images, and device information.

This solution significantly improves the reliability of water level monitoring for:

- Flood Forecasting
- Disaster Management
- Water Resource Planning
- Dam Operations
- Irrigation Management

---

# 🎯 Objectives

- Eliminate manual errors in river monitoring
- Prevent fake data submissions
- Automate water level extraction using AI
- Verify field officer's physical presence
- Enable offline data collection
- Build a centralized dashboard for supervisors
- Provide real-time analytics and alerts

---

# 🚀 Key Features

## 📍 GPS & Geofencing

- Verify user's real-time location
- Allow submissions only inside predefined geofence
- Configurable monitoring radius (50–200 meters)

---

## 📷 Live Camera Capture

- Mandatory live photo capture
- Disable gallery uploads
- Image compression before upload
- Automatic metadata tagging

---

## 🤖 AI-based Water Level Detection

- Detect gauge post
- Detect water surface
- Read scale markings
- Calculate water level automatically

Fallback:

- Manual water level entry

---

## 🔍 QR Code Verification

Each monitoring station contains a unique QR Code.

Workflow:

```
Scan QR

↓

Verify Station

↓

Verify GPS

↓

Allow Reading
```

---

## 🛰 Metadata Collection

Every reading automatically stores:

- Timestamp
- Latitude
- Longitude
- Site ID
- User ID
- Device ID
- Image
- Water Level

---

## 📶 Offline Mode

If network is unavailable:

- Save locally
- Encrypt data
- Auto-sync once internet returns

---

## ☁ Cloud Synchronization

Secure synchronization with backend server.

Supports:

- Retry mechanism
- Background sync
- Conflict handling

---

## 👥 Role-Based Authentication

### Field Officer

- Capture readings
- View own history
- Offline submission

---

### Supervisor

- Verify submissions
- Monitor stations
- View analytics

---

### Central Analyst

- Access nationwide dashboard
- Download reports
- Generate statistics

---

## 📊 Dashboard

Real-time dashboard showing:

- Water level trends
- Flood alerts
- Site status
- Missing readings
- Image verification
- GPS map
- Daily reports

---

## 🚨 Tamper Detection

Detect:

- Fake GPS
- Gallery images
- Duplicate images
- Modified timestamps
- Missing readings
- Unauthorized access

---

# 🏗 System Architecture

```
Android App
      │
      ├──────── GPS
      │
      ├──────── QR Scanner
      │
      ├──────── Camera
      │
      ├──────── AI Detection
      │
      └──────── Local Database
                 │
          Background Sync
                 │
          REST API Server
                 │
     PostgreSQL + Object Storage
                 │
         Supervisor Dashboard
                 │
      Central Water Commission
```

---

# 📱 Mobile Application Modules

## Authentication

- Login
- JWT Authentication
- Refresh Tokens

---

## Home

- Today's Readings
- Assigned Monitoring Sites
- Notifications

---

## Capture Reading

- Scan QR
- GPS Verification
- Live Camera
- AI Detection
- Manual Override

---

## History

- Submitted Readings
- Offline Queue
- Sync Status

---

## Profile

- User Details
- Logout

---

# 🌐 Web Dashboard

## Dashboard

- Total Stations
- Active Officers
- Water Level Graphs
- Alerts
- Maps

---

## Monitoring Stations

- View all stations
- Site details
- Last submission
- Status

---

## Analytics

- Historical Trends
- Flood Prediction
- Missing Reports
- Export CSV/PDF

---

# 🧠 AI Pipeline

```
Camera Image

↓

Image Enhancement

↓

Gauge Detection

↓

Perspective Correction

↓

OCR

↓

Water Surface Detection

↓

Calculate Water Level

↓

Confidence Score

↓

Save Reading
```

---

# 🛠 Tech Stack

## Mobile App

| Technology | Purpose |
|------------|---------|
| Kotlin | Android Development |
| Jetpack Compose | Modern UI |
| MVVM | Architecture |
| Android CameraX | Live Camera |
| Google Maps SDK | Maps |
| Fused Location Provider | GPS |
| ML Kit | OCR |
| Room Database | Offline Storage |
| WorkManager | Background Sync |
| Retrofit | API Calls |
| Hilt (Dagger) | Dependency Injection |
| Coroutines | Async Programming |

---

## Backend

| Technology | Purpose |
|------------|---------|
| FastAPI | REST API |
| Python 3.12 | Backend |
| SQLAlchemy | ORM |
| Alembic | Database Migration |
| PostgreSQL | Database |
| Redis | Caching |
| Celery | Background Jobs |
| JWT | Authentication |
| Pydantic | Validation |
| Uvicorn | ASGI Server |

---

## AI / Computer Vision

| Technology | Purpose |
|------------|---------|
| OpenCV | Image Processing |
| YOLOv11 | Gauge Detection |
| EasyOCR / PaddleOCR | OCR |
| TensorFlow Lite | Mobile AI |
| NumPy | Numerical Operations |
| Pillow | Image Processing |

---

## Cloud

| Technology | Purpose |
|------------|---------|
| AWS EC2 | Backend Hosting |
| AWS S3 | Image Storage |
| CloudFront | CDN |
| AWS RDS PostgreSQL | Managed Database |
| GitHub Actions | CI/CD |
| Docker | Containerization |
| Nginx | Reverse Proxy |

---

## Dashboard

| Technology | Purpose |
|------------|---------|
| React.js | Frontend |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| Recharts | Graphs |
| Leaflet | Maps |
| Axios | API Calls |

---

## Authentication

- JWT
- Refresh Tokens
- BCrypt Password Hashing

---

## Notifications

- Firebase Cloud Messaging (FCM)

---

## Maps

- Google Maps SDK
- Google Geofencing API

---

## QR Code

- ML Kit Barcode Scanner

---

## DevOps

- Docker
- GitHub Actions
- Nginx
- Docker Compose

---

# 📂 Project Structure

```
SmartRiverMonitoring/

│
├── mobile-app/
│   ├── ui/
│   ├── data/
│   ├── domain/
│   ├── camera/
│   ├── location/
│   ├── qr/
│   ├── ai/
│   └── sync/
│
├── backend/
│   ├── app/
│   ├── api/
│   ├── auth/
│   ├── models/
│   ├── services/
│   ├── ai/
│   └── database/
│
├── dashboard/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── charts/
│
├── docker/
│
├── docs/
│
└── README.md
```

---

# 🗄 Database Schema

## Users

```
id
name
email
password
role
phone
created_at
```

---

## Monitoring Sites

```
id
site_name
river_name
latitude
longitude
allowed_radius
qr_code
```

---

## Readings

```
id
user_id
site_id
water_level
image_url
latitude
longitude
timestamp
confidence_score
status
```

---

## Alerts

```
id
reading_id
type
severity
description
created_at
```

---

# 🔐 Security Features

- JWT Authentication
- Password Hashing
- HTTPS
- Signed Image Uploads
- GPS Verification
- QR Verification
- Audit Logs
- Duplicate Image Detection
- Tamper Detection
- Offline Encryption

---

# 📈 Future Enhancements

- Flood Prediction using LSTM
- Satellite Image Integration
- Drone Image Support
- IoT Water Sensors
- WhatsApp/SMS Alerts
- Voice Input
- Multi-language Support
- AI-based Anomaly Detection
- Weather API Integration

---

# 👨‍💻 Contributors

- Mobile Development
- Backend Development
- AI/ML Development
- Dashboard Development
- DevOps & Cloud

---

# 📜 License

This project is developed for the **Smart India Hackathon (SIH)** under the **Ministry of Jal Shakti (MoJS)**.

---

# ⭐ Why This Solution?

✅ Secure Data Collection

✅ AI-powered Water Level Detection

✅ GPS & QR Verification

✅ Offline First Architecture

✅ Cloud Enabled

✅ Real-time Dashboard

✅ Highly Scalable

✅ Cost Effective

✅ Audit Ready

✅ Production Ready Architecture
