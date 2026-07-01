import React, { useState } from 'react';
import { Search, ArrowUpDown } from 'lucide-react';
import { mockReadings } from '../../data/mockData';
import type { ReadingStatus } from '../../types';
import './ReadingsPage.css';

const statusBadge = (status: ReadingStatus) => {
  const map: Record<ReadingStatus, string> = {
    submitted: 'badge badge-success',
    verified: 'badge badge-success',
    pending: 'badge badge-warning',
    rejected: 'badge badge-danger',
    offline: 'badge badge-info',
  };
  return map[status] ?? 'badge badge-neutral';
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

const ReadingsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filtered = mockReadings.filter((r) => {
    const matchSearch =
      r.siteName.toLowerCase().includes(search.toLowerCase()) ||
      r.userName.toLowerCase().includes(search.toLowerCase()) ||
      r.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || r.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <>
      <header className="dashboard-topbar">
        <div className="readings-topbar">
          <h1>All Readings</h1>
          <div className="readings-filters">
            <input type="date" defaultValue="2025-05-20" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="submitted">Submitted</option>
              <option value="verified">Verified</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
              <option value="offline">Offline</option>
            </select>
            <div className="readings-search">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-panel">
          <div className="panel-body" style={{ padding: 0 }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th className="sortable-th">
                    ID <ArrowUpDown size={12} className="sort-icon" />
                  </th>
                  <th className="sortable-th">
                    Site <ArrowUpDown size={12} className="sort-icon" />
                  </th>
                  <th>River</th>
                  <th className="sortable-th">
                    Water Level <ArrowUpDown size={12} className="sort-icon" />
                  </th>
                  <th>Confidence</th>
                  <th>Officer</th>
                  <th className="sortable-th">
                    Date <ArrowUpDown size={12} className="sort-icon" />
                  </th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r) => (
                  <tr key={r.id}>
                    <td style={{ fontWeight: 600 }}>{r.id}</td>
                    <td>{r.siteName}</td>
                    <td>{r.riverName}</td>
                    <td>{r.waterLevel.toFixed(2)} m</td>
                    <td>{r.confidenceScore}%</td>
                    <td>{r.userName}</td>
                    <td>{formatDate(r.timestamp)}</td>
                    <td>
                      <span className={statusBadge(r.status)}>
                        {r.status.charAt(0).toUpperCase() + r.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default ReadingsPage;
