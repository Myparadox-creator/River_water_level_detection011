import React from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { mockUsers } from '../../data/mockData';
import type { UserRole } from '../../types';
import './UsersPage.css';

const roleLabel = (role: UserRole) => {
  const labels: Record<UserRole, string> = {
    field_officer: 'Field Officer',
    supervisor: 'Supervisor',
    central_analyst: 'Central Analyst',
    public: 'Public',
  };
  return labels[role] ?? role;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

const UsersPage: React.FC = () => {
  return (
    <>
      <header className="dashboard-topbar">
        <div className="users-topbar">
          <h1>User Management</h1>
          <button className="btn btn-primary btn-sm">
            <Plus size={16} />
            Add User
          </button>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-panel">
          <div className="panel-body" style={{ padding: 0 }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Phone</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockUsers.map((u) => (
                  <tr key={u.id}>
                    <td style={{ fontWeight: 600 }}>{u.name}</td>
                    <td>{u.email}</td>
                    <td>
                      <span className={`badge badge-role-${u.role}`}>
                        {roleLabel(u.role)}
                      </span>
                    </td>
                    <td>{u.phone}</td>
                    <td>{formatDate(u.createdAt)}</td>
                    <td>
                      <div className="table-actions">
                        <button className="table-action-edit">
                          <Edit size={14} />
                        </button>
                        <button className="table-action-delete">
                          <Trash2 size={14} />
                        </button>
                      </div>
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

export default UsersPage;
