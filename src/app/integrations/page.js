'use client';

import { useState } from 'react';
import '../dashboard.css';
import '../enrollment-hub.css';
import './integrations.css';

export default function IntegrationsPage() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const integrations = [
    {
      id: 'slate',
      name: 'Slate',
      category: 'CRM',
      description: 'Connect your Slate CRM to sync student data, applications, and enrollment information.',
      icon: '📊',
      status: 'connected',
      lastSync: '2 hours ago',
      color: '#2563eb'
    },
    {
      id: 'salesforce',
      name: 'Salesforce',
      category: 'CRM',
      description: 'Integrate with Salesforce to manage student relationships and track engagement.',
      icon: '☁️',
      status: 'available',
      color: '#00a1e0'
    },
    {
      id: 'banner',
      name: 'Banner',
      category: 'SIS',
      description: 'Connect to Banner Student Information System for real-time enrollment data.',
      icon: '🎓',
      status: 'connected',
      lastSync: '1 hour ago',
      color: '#0066cc'
    },
    {
      id: 'peoplesoft',
      name: 'PeopleSoft',
      category: 'SIS',
      description: 'Sync student records, course data, and academic information from PeopleSoft.',
      icon: '💼',
      status: 'available',
      color: '#c41230'
    },
    {
      id: 'sharepoint',
      name: 'SharePoint',
      category: 'Document Management',
      description: 'Access documents and files from SharePoint for knowledge base integration.',
      icon: '📁',
      status: 'connected',
      lastSync: '4 hours ago',
      color: '#0078d4'
    },
    {
      id: 'google-drive',
      name: 'Google Drive',
      category: 'Document Management',
      description: 'Connect Google Drive folders to automatically sync documents to your knowledge base.',
      icon: '📂',
      status: 'connected',
      lastSync: '1 day ago',
      color: '#4285f4'
    },
    {
      id: 'dropbox',
      name: 'Dropbox',
      category: 'Document Management',
      description: 'Sync files from Dropbox for document processing and knowledge base updates.',
      icon: '📦',
      status: 'available',
      color: '#0061ff'
    },
    {
      id: 'microsoft-teams',
      name: 'Microsoft Teams',
      category: 'Communication',
      description: 'Enable AI assistant in Teams channels for student support and engagement.',
      icon: '💬',
      status: 'available',
      color: '#6264a7'
    },
    {
      id: 'zoom',
      name: 'Zoom',
      category: 'Communication',
      description: 'Integrate AI capabilities into Zoom meetings and webinars for student interactions.',
      icon: '📹',
      status: 'available',
      color: '#2d8cff'
    },
    {
      id: 'twilio',
      name: 'Twilio',
      category: 'Communication',
      description: 'Enable SMS and voice capabilities for student outreach and support.',
      icon: '📱',
      status: 'connected',
      lastSync: 'Just now',
      color: '#f22f46'
    },
    {
      id: 'mailchimp',
      name: 'Mailchimp',
      category: 'Marketing',
      description: 'Sync email campaigns and subscriber lists for coordinated outreach efforts.',
      icon: '✉️',
      status: 'available',
      color: '#ffe01b'
    },
    {
      id: 'hubspot',
      name: 'HubSpot',
      category: 'Marketing',
      description: 'Connect HubSpot for unified student engagement and marketing automation.',
      icon: '🎯',
      status: 'available',
      color: '#ff7a59'
    },
    {
      id: 'canvas',
      name: 'Canvas LMS',
      category: 'Learning Management',
      description: 'Integrate with Canvas to access course data and student academic information.',
      icon: '📚',
      status: 'available',
      color: '#e63b2e'
    },
    {
      id: 'blackboard',
      name: 'Blackboard',
      category: 'Learning Management',
      description: 'Connect Blackboard Learn for course and student data synchronization.',
      icon: '🖥️',
      status: 'available',
      color: '#000000'
    },
    {
      id: 'stripe',
      name: 'Stripe',
      category: 'Payment',
      description: 'Process enrollment deposits and payments through Stripe integration.',
      icon: '💳',
      status: 'available',
      color: '#635bff'
    },
    {
      id: 'webhook',
      name: 'Custom Webhooks',
      category: 'Custom',
      description: 'Set up custom webhooks to receive real-time updates from external systems.',
      icon: '🔗',
      status: 'available',
      color: '#6b7280'
    }
  ];

  const categories = ['All', 'CRM', 'SIS', 'Document Management', 'Communication', 'Marketing', 'Learning Management', 'Payment', 'Custom'];

  const filteredIntegrations = integrations.filter(integration => {
    const matchesFilter = filter === 'All' || integration.category === filter;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const connectedCount = integrations.filter(i => i.status === 'connected').length;
  const availableCount = integrations.filter(i => i.status === 'available').length;

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
            <a href="/integrations" className="nav-item active">
              <span className="nav-icon">⬡</span>
              <span>Integrations</span>
            </a>
            <a href="/audit-logs" className="nav-item">
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
        <main className="integrations-main">
          {/* Page Header */}
          <div className="integrations-header">
            <div>
              <h1 className="page-title">Integrations</h1>
              <p className="page-subtitle">Connect your tools and platforms to power your AI agents</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="integration-stats">
            <div className="stat-card">
              <div className="stat-icon connected">🔌</div>
              <div className="stat-content">
                <div className="stat-value">{connectedCount}</div>
                <div className="stat-label">Connected</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon available">➕</div>
              <div className="stat-content">
                <div className="stat-value">{availableCount}</div>
                <div className="stat-label">Available</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon total">📊</div>
              <div className="stat-content">
                <div className="stat-value">{integrations.length}</div>
                <div className="stat-label">Total Integrations</div>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="integrations-controls">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${filter === category ? 'active' : ''}`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Integrations Grid */}
          <div className="integrations-grid">
            {filteredIntegrations.map(integration => (
              <div key={integration.id} className="integration-card">
                <div className="integration-card-header">
                  <div className="integration-icon" style={{ backgroundColor: `${integration.color}20`, color: integration.color }}>
                    {integration.icon}
                  </div>
                  <div className="integration-status-badge">
                    {integration.status === 'connected' ? (
                      <span className="status-connected">
                        <span className="status-dot"></span>
                        Connected
                      </span>
                    ) : (
                      <span className="status-available">Available</span>
                    )}
                  </div>
                </div>
                <div className="integration-card-body">
                  <div className="integration-category">{integration.category}</div>
                  <h3 className="integration-name">{integration.name}</h3>
                  <p className="integration-description">{integration.description}</p>
                  {integration.status === 'connected' && integration.lastSync && (
                    <div className="integration-sync">
                      <span className="sync-icon">🔄</span>
                      <span className="sync-text">Last synced: {integration.lastSync}</span>
                    </div>
                  )}
                </div>
                <div className="integration-card-footer">
                  {integration.status === 'connected' ? (
                    <>
                      <button className="integration-btn secondary">Configure</button>
                      <button className="integration-btn primary">Disconnect</button>
                    </>
                  ) : (
                    <button className="integration-btn primary full-width">Connect</button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredIntegrations.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">🔍</div>
              <h3 className="empty-title">No integrations found</h3>
              <p className="empty-description">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
