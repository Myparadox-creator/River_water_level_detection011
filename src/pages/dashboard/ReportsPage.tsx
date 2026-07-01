import React from 'react';
import {
  FileText,
  BarChart3,
  AlertTriangle,
  Users,
  Activity,
  Search,
} from 'lucide-react';
import './ReportsPage.css';

interface ReportType {
  icon: React.ElementType;
  title: string;
  description: string;
}

const reports: ReportType[] = [
  {
    icon: FileText,
    title: 'Daily Summary Report',
    description:
      'Comprehensive summary of all water level readings captured across all monitoring sites for the selected day.',
  },
  {
    icon: BarChart3,
    title: 'Monthly Statistics',
    description:
      'Aggregated statistics including average, min, max water levels and reading counts for each site over the month.',
  },
  {
    icon: AlertTriangle,
    title: 'Flood Risk Analysis',
    description:
      'Predictive analysis of flood risk based on historical water level trends and current rainfall data.',
  },
  {
    icon: Users,
    title: 'Officer Performance',
    description:
      'Field officer activity report including readings submitted, accuracy scores, and schedule adherence.',
  },
  {
    icon: Activity,
    title: 'Site Health Report',
    description:
      'Equipment status, calibration history, connectivity logs, and maintenance schedule for each site.',
  },
  {
    icon: Search,
    title: 'Anomaly Detection Report',
    description:
      'AI-flagged anomalies in readings: confidence outliers, GPS mismatches, unusual water level patterns.',
  },
];

const ReportsPage: React.FC = () => {
  return (
    <>
      <header className="dashboard-topbar">
        <div className="reports-topbar">
          <h1>Reports &amp; Analytics</h1>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="reports-grid">
          {reports.map((report) => (
            <div className="report-card" key={report.title}>
              <div className="report-card-icon">
                <report.icon size={24} />
              </div>
              <h3>{report.title}</h3>
              <p>{report.description}</p>
              <div className="report-card-footer">
                <button className="btn btn-primary btn-sm">Generate</button>
                <div className="report-format-options">
                  <button className="report-format-btn">CSV</button>
                  <button className="report-format-btn">PDF</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default ReportsPage;
