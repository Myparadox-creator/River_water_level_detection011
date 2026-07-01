import React, { useState } from 'react';
import { MapPin, Clock } from 'lucide-react';
import { mockAlerts } from '../../data/mockData';
import type { AlertSeverity } from '../../types';
import './AlertsPage.css';

const severityBadge = (severity: AlertSeverity) => {
  const map: Record<AlertSeverity, string> = {
    critical: 'badge badge-danger alert-severity-badge',
    warning: 'badge badge-warning alert-severity-badge',
    info: 'badge badge-info alert-severity-badge',
  };
  return map[severity];
};

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

type FilterTab = 'all' | 'critical' | 'warning' | 'info';

const AlertsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const tabs: { label: string; value: FilterTab }[] = [
    { label: 'All', value: 'all' },
    { label: 'Critical', value: 'critical' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
  ];

  const filtered =
    activeTab === 'all'
      ? mockAlerts
      : mockAlerts.filter((a) => a.severity === activeTab);

  return (
    <>
      <header className="dashboard-topbar">
        <div className="alerts-topbar">
          <h1>Alerts &amp; Notifications</h1>
          <div className="alerts-tabs">
            {tabs.map((t) => (
              <button
                key={t.value}
                className={`alert-tab${activeTab === t.value ? ' active' : ''}`}
                onClick={() => setActiveTab(t.value)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="alerts-list">
          {filtered.map((alert) => (
            <div
              key={alert.id}
              className={`alert-card${!alert.isRead ? ' unread' : ''}`}
            >
              <div className={`alert-stripe ${alert.severity}`} />
              <div className="alert-card-body">
                <div className="alert-card-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {!alert.isRead && <span className="unread-dot" />}
                    <h4>{alert.title}</h4>
                  </div>
                  <span className={severityBadge(alert.severity)}>
                    {alert.severity}
                  </span>
                </div>
                <p>{alert.description}</p>
                <div className="alert-card-meta">
                  <span>
                    <MapPin size={12} /> {alert.siteName}
                  </span>
                  <span>
                    <Clock size={12} /> {formatDate(alert.createdAt)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default AlertsPage;
