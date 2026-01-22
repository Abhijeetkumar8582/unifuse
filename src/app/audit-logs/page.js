'use client';

import { useState } from 'react';
import '../dashboard.css';
import '../enrollment-hub.css';
import './audit-logs.css';

export default function AuditLogsPage() {
  const [timeFilter, setTimeFilter] = useState('7d');
  const [actionFilter, setActionFilter] = useState('All');
  const [userFilter, setUserFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const auditLogs = [
    {
      id: 1,
      timestamp: '2026-01-10 14:32:15',
      user: 'Jane Doe',
      userEmail: 'jane.doe@university.edu',
      action: 'Campaign Created',
      resource: 'Fall 2026 Welcome Series',
      resourceType: 'Campaign',
      status: 'success',
      ipAddress: '192.168.1.45',
      details: 'Created new email campaign with 1,234 recipients'
    },
    {
      id: 2,
      timestamp: '2026-01-10 13:18:42',
      user: 'John Smith',
      userEmail: 'john.smith@university.edu',
      action: 'Agent Updated',
      resource: 'Admissions Webchat Assistant',
      resourceType: 'AI Agent',
      status: 'success',
      ipAddress: '192.168.1.52',
      details: 'Updated agent instructions and response tone'
    },
    {
      id: 3,
      timestamp: '2026-01-10 12:05:23',
      user: 'Jane Doe',
      userEmail: 'jane.doe@university.edu',
      action: 'Integration Connected',
      resource: 'Slate CRM',
      resourceType: 'Integration',
      status: 'success',
      ipAddress: '192.168.1.45',
      details: 'Successfully connected Slate CRM integration'
    },
    {
      id: 4,
      timestamp: '2026-01-10 11:42:18',
      user: 'Maria Johnson',
      userEmail: 'maria.j@university.edu',
      action: 'Document Processed',
      resource: 'Transcript_MarcusChen_2026.pdf',
      resourceType: 'Document',
      status: 'success',
      ipAddress: '192.168.1.67',
      details: 'Processed and verified transcript for Marcus Chen'
    },
    {
      id: 5,
      timestamp: '2026-01-10 10:28:55',
      user: 'John Smith',
      userEmail: 'john.smith@university.edu',
      action: 'Login',
      resource: 'Dashboard',
      resourceType: 'Authentication',
      status: 'success',
      ipAddress: '192.168.1.52',
      details: 'User logged in successfully'
    },
    {
      id: 6,
      timestamp: '2026-01-10 09:15:33',
      user: 'Jane Doe',
      userEmail: 'jane.doe@university.edu',
      action: 'Campaign Sent',
      resource: 'Spring 2026 Application Reminder',
      resourceType: 'Campaign',
      status: 'success',
      ipAddress: '192.168.1.45',
      details: 'Sent campaign to 2,456 recipients via email'
    },
    {
      id: 7,
      timestamp: '2026-01-10 08:52:11',
      user: 'System',
      userEmail: 'system@unifuse.ai',
      action: 'Sync Failed',
      resource: 'Banner SIS',
      resourceType: 'Integration',
      status: 'error',
      ipAddress: '192.168.1.1',
      details: 'Failed to sync student data: Connection timeout'
    },
    {
      id: 8,
      timestamp: '2026-01-10 07:34:27',
      user: 'Maria Johnson',
      userEmail: 'maria.j@university.edu',
      action: 'Settings Updated',
      resource: 'Enrollment Hub Settings',
      resourceType: 'Settings',
      status: 'success',
      ipAddress: '192.168.1.67',
      details: 'Updated notification preferences and timezone'
    },
    {
      id: 9,
      timestamp: '2026-01-09 18:22:44',
      user: 'John Smith',
      userEmail: 'john.smith@university.edu',
      action: 'Agent Created',
      resource: 'Financial Aid Chat',
      resourceType: 'AI Agent',
      status: 'success',
      ipAddress: '192.168.1.52',
      details: 'Created new AI agent for financial aid inquiries'
    },
    {
      id: 10,
      timestamp: '2026-01-09 16:48:19',
      user: 'Jane Doe',
      userEmail: 'jane.doe@university.edu',
      action: 'Login Failed',
      resource: 'Dashboard',
      resourceType: 'Authentication',
      status: 'error',
      ipAddress: '192.168.1.45',
      details: 'Failed login attempt: Invalid password'
    },
    {
      id: 11,
      timestamp: '2026-01-09 15:33:56',
      user: 'System',
      userEmail: 'system@unifuse.ai',
      action: 'Data Export',
      resource: 'Campaign Analytics',
      resourceType: 'Export',
      status: 'success',
      ipAddress: '192.168.1.1',
      details: 'Exported campaign data to CSV format'
    },
    {
      id: 12,
      timestamp: '2026-01-09 14:19:08',
      user: 'Maria Johnson',
      userEmail: 'maria.j@university.edu',
      action: 'Document Rejected',
      resource: 'Transcript_EmilyRodriguez_2026.pdf',
      resourceType: 'Document',
      status: 'warning',
      ipAddress: '192.168.1.67',
      details: 'Rejected transcript due to quality issues'
    }
  ];

  const filteredLogs = auditLogs.filter(log => {
    const matchesTime = true; // Time filter logic would go here
    const matchesAction = actionFilter === 'All' || log.action.includes(actionFilter);
    const matchesUser = userFilter === 'All' || log.user === userFilter;
    const matchesSearch = searchQuery === '' || 
      log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.resource.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTime && matchesAction && matchesUser && matchesSearch;
  });

  const uniqueUsers = [...new Set(auditLogs.map(log => log.user))];
  const uniqueActions = [...new Set(auditLogs.map(log => log.action))];

  return (
    <div className="enrollment-hub-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <div className="logo-container">
            <div className="logo-icon">⚡</div>
            <span className="logo-text">UNIFUSE AI</span>
          </div>
        </div>
        <div className="header-center">
          <input
            type="text"
            className="search-bar"
            placeholder="Ask me anything!"
          />
        </div>
        <div className="header-right">
          <button className="icon-button">☀️</button>
          <button className="icon-button">🔔</button>
          <button className="icon-button">☰</button>
          <div className="user-avatar">JD</div>
        </div>
      </header>

      <div className="dashboard-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <a href="/dashboard" className="nav-item">
              <span className="nav-icon">🏠</span>
              <span>Home</span>
            </a>
            <div className="nav-item">
              <span className="nav-icon">◆</span>
              <span>Solution Hub</span>
              <span className="nav-arrow">▼</span>
            </div>
            <div className="nav-subitems">
              <a href="/enrollment-hub" className="nav-subitem">Enrollment Hub</a>
              <a href="#" className="nav-subitem">Success Hub</a>
              <a href="#" className="nav-subitem">Advancement Hub</a>
              <a href="#" className="nav-subitem">Operational Excellence Hub</a>
            </div>
            <a href="/integrations" className="nav-item">
              <span className="nav-icon">⬡</span>
              <span>Integrations</span>
            </a>
            <a href="/audit-logs" className="nav-item active">
              <span className="nav-icon">📄</span>
              <span>Audit Logs</span>
            </a>
            <a href="/settings" className="nav-item">
              <span className="nav-icon">⚙️</span>
              <span>Settings</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="audit-logs-main">
          {/* Page Header */}
          <div className="audit-logs-header">
            <div>
              <h1 className="page-title">Audit Logs</h1>
              <p className="page-subtitle">Track all system activities and user actions</p>
            </div>
            <button className="export-btn">
              <span className="export-icon">📥</span>
              Export Logs
            </button>
          </div>

          {/* Stats Cards */}
          <div className="audit-stats">
            <div className="audit-stat-card">
              <div className="audit-stat-icon">📊</div>
              <div className="audit-stat-content">
                <div className="audit-stat-value">{auditLogs.length}</div>
                <div className="audit-stat-label">Total Events</div>
              </div>
            </div>
            <div className="audit-stat-card">
              <div className="audit-stat-icon success">✓</div>
              <div className="audit-stat-content">
                <div className="audit-stat-value">{auditLogs.filter(l => l.status === 'success').length}</div>
                <div className="audit-stat-label">Successful</div>
              </div>
            </div>
            <div className="audit-stat-card">
              <div className="audit-stat-icon error">⚠️</div>
              <div className="audit-stat-content">
                <div className="audit-stat-value">{auditLogs.filter(l => l.status === 'error').length}</div>
                <div className="audit-stat-label">Errors</div>
              </div>
            </div>
            <div className="audit-stat-card">
              <div className="audit-stat-icon warning">🔔</div>
              <div className="audit-stat-content">
                <div className="audit-stat-value">{auditLogs.filter(l => l.status === 'warning').length}</div>
                <div className="audit-stat-label">Warnings</div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="audit-filters">
            <div className="filter-group">
              <label>Time Range</label>
              <div className="time-filters">
                <button 
                  className={`time-filter-btn ${timeFilter === '24h' ? 'active' : ''}`}
                  onClick={() => setTimeFilter('24h')}
                >
                  24h
                </button>
                <button 
                  className={`time-filter-btn ${timeFilter === '7d' ? 'active' : ''}`}
                  onClick={() => setTimeFilter('7d')}
                >
                  7d
                </button>
                <button 
                  className={`time-filter-btn ${timeFilter === '30d' ? 'active' : ''}`}
                  onClick={() => setTimeFilter('30d')}
                >
                  30d
                </button>
                <button 
                  className={`time-filter-btn ${timeFilter === 'custom' ? 'active' : ''}`}
                  onClick={() => setTimeFilter('custom')}
                >
                  Custom
                </button>
              </div>
            </div>
            <div className="filter-group">
              <label>Action Type</label>
              <select 
                className="audit-filter-select"
                value={actionFilter}
                onChange={(e) => setActionFilter(e.target.value)}
              >
                <option>All</option>
                {uniqueActions.map(action => (
                  <option key={action}>{action}</option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label>User</label>
              <select 
                className="audit-filter-select"
                value={userFilter}
                onChange={(e) => setUserFilter(e.target.value)}
              >
                <option>All</option>
                {uniqueUsers.map(user => (
                  <option key={user}>{user}</option>
                ))}
              </select>
            </div>
            <div className="filter-group search-group">
              <label>Search</label>
              <div className="search-input-wrapper">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  className="audit-search-input"
                  placeholder="Search by user, action, or resource..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Logs Table */}
          <div className="audit-logs-table-container">
            <table className="audit-logs-table">
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>User</th>
                  <th>Action</th>
                  <th>Resource</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map(log => (
                  <tr key={log.id}>
                    <td>
                      <div className="timestamp-cell">
                        <div className="timestamp-date">{log.timestamp.split(' ')[0]}</div>
                        <div className="timestamp-time">{log.timestamp.split(' ')[1]}</div>
                      </div>
                    </td>
                    <td>
                      <div className="user-cell-audit">
                        <div className="user-avatar-small">{log.user.split(' ').map(n => n[0]).join('')}</div>
                        <div>
                          <div className="user-name">{log.user}</div>
                          <div className="user-email">{log.userEmail}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="action-cell">
                        <span className="action-type">{log.action}</span>
                        <span className="resource-type-badge">{log.resourceType}</span>
                      </div>
                    </td>
                    <td>
                      <div className="resource-cell">{log.resource}</div>
                    </td>
                    <td>
                      <span className={`status-badge ${log.status}`}>
                        {log.status === 'success' && '✓'}
                        {log.status === 'error' && '✕'}
                        {log.status === 'warning' && '⚠'}
                        {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                      </span>
                    </td>
                    <td>
                      <div className="details-cell">
                        <div className="details-text">{log.details}</div>
                        <div className="details-meta">IP: {log.ipAddress}</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="audit-pagination">
            <span className="pagination-info">Showing 1-12 of 12 logs</span>
            <div className="pagination-controls">
              <button className="pagination-btn" disabled>‹</button>
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn">›</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
