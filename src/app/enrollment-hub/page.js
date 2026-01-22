'use client';

import { useState } from 'react';
import '../dashboard.css';
import '../enrollment-hub.css';

export default function EnrollmentHubPage() {
  const [activeTab, setActiveTab] = useState('EM Home');
  const [kbSubTab, setKbSubTab] = useState('Manage Content');
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedDays, setSelectedDays] = useState(['Sun', 'Wed', 'Sat']);
  const [selectedPages, setSelectedPages] = useState([1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12]);

  const toggleDay = (day) => {
    setSelectedDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const togglePage = (page) => {
    setSelectedPages(prev => 
      prev.includes(page) ? prev.filter(p => p !== page) : [...prev, page]
    );
  };

  const renderContent = () => {
    if (activeTab === 'EM Home') {
      return (
        <>
          {/* Alert Banner */}
          <div className="alert-banner yellow">
            <div className="alert-content">
              <div className="alert-left">
                <select className="alert-dropdown">
                  <option>EM Home</option>
                  <option>Evaluation</option>
                  <option>Manage Content</option>
                  <option>Train</option>
                </select>
                <span className="alert-text">47 Items Require Your Review</span>
                <span className="alert-subtext">Documents and conversations need human verification before processing</span>
              </div>
              <button className="alert-button">Review All →</button>
            </div>
          </div>

          {/* Info Box */}
          <div className="info-box">
            <span className="info-icon">✏️</span>
            <span className="info-text">Note: All widgets can be moved with the drag and drop functionality to the right top above the sub header</span>
          </div>

          {/* Widgets Grid */}
          <div className="widgets-grid">
            {/* Knowledge Base Widget */}
            <div className="widget-card">
              <div className="widget-header">
                <div className="widget-icon">📖</div>
                <h3 className="widget-title">Knowledge Base</h3>
              </div>
              <p className="widget-description">
                Curate content to power your AI agents with accurate, school-specific information
              </p>
              <div className="widget-metrics">
                <div className="widget-metric">
                  <span className="metric-value blue">1,247 Total Articles</span>
                </div>
                <div className="widget-metric">
                  <span className="metric-value green">342 Active Sources</span>
                </div>
                <div className="widget-metric">
                  <span className="metric-value gray">2h ago Last Sync</span>
                </div>
              </div>
              <button className="widget-button primary" onClick={() => setActiveTab('Knowledge Base')}>Manage KB</button>
            </div>

            {/* Campaign Manager Widget */}
            <div className="widget-card">
              <div className="widget-header">
                <div className="widget-icon">✉️</div>
                <h3 className="widget-title">Campaign Manager</h3>
              </div>
              <p className="widget-description">
                Create email and SMS campaigns to nurture prospects and increase yield
              </p>
              <div className="widget-metrics">
                <div className="widget-metric">
                  <span className="metric-value green">8 Active</span>
                </div>
                <div className="widget-metric">
                  <span className="metric-value blue">3 Scheduled</span>
                </div>
                <div className="widget-metric">
                  <span className="metric-value gray">42.8% Avg Open Rate</span>
                </div>
              </div>
              <button className="widget-button primary" onClick={() => setActiveTab('Campaigns')}>📊 View All</button>
            </div>

            {/* AI Conversations Widget */}
            <div className="widget-card">
              <div className="widget-header">
                <div className="widget-icon">💬</div>
                <h3 className="widget-title">AI Conversations</h3>
              </div>
              <p className="widget-description">
                24/7 conversational AI for voice, SMS, WhatsApp, and web chat support
              </p>
              <div className="widget-metrics">
                <div className="widget-metric">
                  <span className="metric-value blue">1,247 This Week</span>
                </div>
                <div className="widget-metric">
                  <span className="metric-value green">87% Auto-Resolved</span>
                </div>
                <div className="widget-metric">
                  <span className="metric-value warning">⚠️ 12 Δ Need Review</span>
                </div>
              </div>
              <div className="widget-actions">
                <button className="widget-button warning">▲ Review (12)</button>
                <button className="widget-button secondary">⚙️ Configure</button>
              </div>
            </div>

            {/* Document Processing Widget */}
            <div className="widget-card">
              <div className="widget-header">
                <div className="widget-icon">📄</div>
                <h3 className="widget-title">Document Processing</h3>
              </div>
              <p className="widget-description">
                Extract and classify transcripts, financial docs, and transfer credits automatically
              </p>
              <div className="widget-metrics">
                <div className="widget-metric">
                  <span className="metric-value green">234 Processed</span>
                </div>
                <div className="widget-metric">
                  <span className="metric-value blue">92% Auto-Extract</span>
                </div>
                <div className="widget-metric">
                  <span className="metric-value warning">⚠️ 35 Δ Need Review</span>
                </div>
              </div>
              <div className="widget-actions">
                <button className="widget-button warning">▲ Review (35)</button>
                <button className="widget-button secondary">↑ Upload Docs</button>
              </div>
            </div>
          </div>

          {/* Enrollment Funnel Performance */}
          <div className="funnel-section">
            <h2 className="funnel-title">Enrollment Funnel Performance</h2>
            <div className="funnel-kpis">
              <div className="funnel-kpi-card">
                <div className="funnel-kpi-value">5,234</div>
                <div className="funnel-kpi-label">Inquiries</div>
                <div className="funnel-kpi-change positive">↑ 15%</div>
              </div>
              <div className="funnel-kpi-card">
                <div className="funnel-kpi-value">3,247</div>
                <div className="funnel-kpi-label">Applications</div>
                <div className="funnel-kpi-change positive">↑ 12%</div>
              </div>
              <div className="funnel-kpi-card">
                <div className="funnel-kpi-value">1,892</div>
                <div className="funnel-kpi-label">Admitted</div>
                <div className="funnel-kpi-change positive">↑ 8%</div>
              </div>
              <div className="funnel-kpi-card">
                <div className="funnel-kpi-value">847</div>
                <div className="funnel-kpi-label">Deposits</div>
                <div className="funnel-kpi-change positive">↑ 15%</div>
              </div>
              <div className="funnel-kpi-card">
                <div className="funnel-kpi-value">62%</div>
                <div className="funnel-kpi-label">Inquiry → App</div>
                <div className="funnel-kpi-change positive">↑ 8.3%</div>
              </div>
              <div className="funnel-kpi-card">
                <div className="funnel-kpi-value">44.8%</div>
                <div className="funnel-kpi-label">Yield Rate</div>
                <div className="funnel-kpi-change positive">↑ 3.2%</div>
              </div>
            </div>
          </div>
        </>
      );
    }

    if (activeTab === 'Knowledge Base') {
      return (
        <>
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <span>Knowledge Base</span>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-active">{kbSubTab}</span>
          </div>

          {/* KB Sub-tabs */}
          <div className="kb-subtabs">
            <button
              className={`kb-subtab ${kbSubTab === 'Manage Content' ? 'active' : ''}`}
              onClick={() => setKbSubTab('Manage Content')}
            >
              Manage Content
            </button>
            <button
              className={`kb-subtab ${kbSubTab === 'Train & Configure' ? 'active' : ''}`}
              onClick={() => setKbSubTab('Train & Configure')}
            >
              Train & Configure
            </button>
          </div>

          {kbSubTab === 'Manage Content' ? (
            <div className="kb-content-section">
              <div className="section-header">
                <div>
                  <h2 className="section-title">Manage Content</h2>
                  <p className="section-description">Upload content and manage integrated data sources for your knowledge base.</p>
                </div>
              </div>

              {/* KB Stats */}
              <div className="kb-stats-grid">
                <div className="kb-stat-card">
                  <div className="kb-stat-value blue">1,247</div>
                  <div className="kb-stat-label">Total Articles</div>
                </div>
                <div className="kb-stat-card">
                  <div className="kb-stat-value green">6</div>
                  <div className="kb-stat-label">Connected Sources</div>
                </div>
                <div className="kb-stat-card">
                  <div className="kb-stat-value purple">28</div>
                  <div className="kb-stat-label">Manual Uploads</div>
                </div>
                <div className="kb-stat-card">
                  <div className="kb-stat-value gray">2h ago</div>
                  <div className="kb-stat-label">Last Sync</div>
                </div>
              </div>

              {/* Upload Content */}
              <div className="upload-section">
                <h3 className="subsection-title">Upload Content</h3>
                <p className="subsection-description">Manually add files to your knowledge base.</p>
                <div className="upload-area" onClick={() => setShowUploadModal(true)}>
                  <div className="upload-icon">📁</div>
                  <p className="upload-text">Drag and drop files here or click to browse from your computer</p>
                  <p className="upload-formats">PDF • PNG • JPG • TXT • CSV • DOCX • XLSX</p>
                </div>
              </div>

              {/* Integrated Data Sources */}
              <div className="data-sources-section">
                <div className="section-header-row">
                  <div>
                    <h3 className="subsection-title">Integrated Data Sources</h3>
                    <p className="subsection-description">Monitor and manage real-time content from connected platforms.</p>
                  </div>
                  <button className="add-source-button">+ Add Data Source</button>
                </div>

                <div className="data-source-list">
                  <div className="data-source-item">
                    <div className="data-source-icon blue">📁</div>
                    <div className="data-source-info">
                      <div className="data-source-name">SharePoint - Admissions</div>
                      <div className="data-source-details">234 articles • Last synced: 4 hours ago</div>
                    </div>
                    <div className="data-source-status live">Live Monitoring</div>
                    <div className="data-source-actions">
                      <button className="source-action-btn">Configure</button>
                      <button className="source-action-btn">Sync Now</button>
                      <label className="toggle-switch">
                        <input type="checkbox" defaultChecked />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                  </div>

                  <div className="data-source-item">
                    <div className="data-source-icon yellow">📁</div>
                    <div className="data-source-info">
                      <div className="data-source-name">Google Drive - Financial Aid</div>
                      <div className="data-source-details">156 articles • Last synced: 1 day ago</div>
                    </div>
                    <div className="data-source-status live">Live Monitoring</div>
                    <div className="data-source-actions">
                      <button className="source-action-btn">Configure</button>
                      <button className="source-action-btn">Sync Now</button>
                      <label className="toggle-switch">
                        <input type="checkbox" defaultChecked />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                  </div>

                  <div className="data-source-item">
                    <div className="data-source-icon green">🌐</div>
                    <div className="data-source-info">
                      <div className="data-source-name">University Website Crawler</div>
                      <div className="data-source-details">487 pages • Last crawl: 2 hours ago</div>
                    </div>
                    <div className="data-source-status syncing">Syncing...</div>
                    <div className="data-source-actions">
                      <button className="source-action-btn">Configure URLs</button>
                      <button className="source-action-btn">View Exclusions</button>
                      <label className="toggle-switch">
                        <input type="checkbox" defaultChecked />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="kb-content-section">
              <div className="section-header">
                <div>
                  <h2 className="section-title">Train & Configure</h2>
                  <p className="section-description">Configure how your knowledge base behaves, refreshes, and notifies your team.</p>
                </div>
                <button className="save-button">Save Changes</button>
              </div>

              {/* Data Source Refresh Schedule */}
              <div className="config-section">
                <h3 className="config-section-title">Data Source Refresh Schedule</h3>
                <p className="config-section-description">Configure when connected data sources should sync with the knowledge base.</p>
                
                <div className="info-box">
                  <span className="info-icon">💡</span>
                  <span className="info-text">Regular syncing ensures your AI agents always have access to the most up-to-date information. More frequent syncing may increase system load.</span>
                </div>

                <div className="config-field">
                  <label className="config-label">Default Refresh Frequency</label>
                  <select className="config-select">
                    <option>Every 2 hours</option>
                    <option>Every hour</option>
                    <option>Every 4 hours</option>
                    <option>Every 6 hours</option>
                    <option>Every 12 hours</option>
                    <option>Daily</option>
                  </select>
                </div>

                <div className="config-field">
                  <label className="config-label">Scheduled Deep Sync</label>
                  <p className="config-field-description">Select days and time for a comprehensive full sync of all data sources.</p>
                  
                  <div className="day-selector">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <button
                        key={day}
                        className={`day-button ${selectedDays.includes(day) ? 'selected' : ''}`}
                        onClick={() => toggleDay(day)}
                      >
                        {day}
                      </button>
                    ))}
                  </div>

                  <div className="time-selector">
                    <label>Sync at:</label>
                    <input type="time" className="time-input" defaultValue="02:00" />
                    <span className="time-note">(Server time: EST)</span>
                  </div>
                </div>
              </div>

              {/* Real-Time Monitoring */}
              <div className="config-section">
                <h3 className="config-section-title">Real-Time Monitoring</h3>
                <p className="config-section-description">Enable live monitoring for instant updates when source content changes.</p>

                <div className="monitoring-list">
                  <div className="monitoring-item">
                    <div className="monitoring-info">
                      <div className="monitoring-name">SharePoint - Admissions</div>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="monitoring-item">
                    <div className="monitoring-info">
                      <div className="monitoring-name">Google Drive - Financial Aid</div>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="monitoring-item">
                    <div className="monitoring-info">
                      <div className="monitoring-name">University Website</div>
                      <span className="monitoring-note">(webhooks not available)</span>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
    }

    if (activeTab === 'Campaigns') {
      return (
        <div className="campaigns-section">
          <div className="section-header">
            <h2 className="section-title">Campaigns</h2>
          </div>

          {/* Campaign KPIs */}
          <div className="campaign-kpis">
            <div className="campaign-kpi-card">
              <div className="campaign-kpi-value green">8</div>
              <div className="campaign-kpi-label">Active Campaigns</div>
              <div className="campaign-kpi-change positive">↑ 2 from last month</div>
            </div>
            <div className="campaign-kpi-card">
              <div className="campaign-kpi-value blue">42.8%</div>
              <div className="campaign-kpi-label">Avg Open Rate</div>
              <div className="campaign-kpi-change positive">↑ 3.2% vs industry avg</div>
            </div>
            <div className="campaign-kpi-card">
              <div className="campaign-kpi-value purple">18.4%</div>
              <div className="campaign-kpi-label">Avg Click Rate</div>
              <div className="campaign-kpi-change positive">↑ 2.1% vs last month</div>
            </div>
            <div className="campaign-kpi-card">
              <div className="campaign-kpi-value orange">12,438</div>
              <div className="campaign-kpi-label">Total Messages Sent</div>
              <div className="campaign-kpi-change positive">↑ 1,245 this week</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="campaign-actions">
            <a href="/enrollment-hub/campaigns/create" className="create-campaign-btn">+ Create Campaign</a>
            <button className="template-btn">✈️ New Message Template</button>
          </div>

          {/* Filters */}
          <div className="campaign-filters">
            <input type="text" className="campaign-search" placeholder="Search campaigns..." />
            <select className="campaign-filter">
              <option>All Status</option>
              <option>Active</option>
              <option>Scheduled</option>
              <option>Paused</option>
              <option>Completed</option>
              <option>Draft</option>
            </select>
            <select className="campaign-filter">
              <option>All Channels</option>
              <option>Email</option>
              <option>SMS</option>
              <option>Voice</option>
            </select>
          </div>

          {/* Campaigns Table */}
          <div className="campaigns-table-container">
            <table className="campaigns-table">
              <thead>
                <tr>
                  <th>Campaign Name</th>
                  <th>Channel</th>
                  <th>Status</th>
                  <th>Open Rate</th>
                  <th>Click Rate</th>
                  <th>Sent</th>
                  <th>Last Run</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fall 2026 Welcome Series</td>
                  <td><span className="channel-badge">Email</span></td>
                  <td><span className="status-badge active">Active</span></td>
                  <td><div className="rate-bar green" style={{width: '48.2%'}}>48.2%</div></td>
                  <td><div className="rate-bar purple" style={{width: '22.1%'}}>22.1%</div></td>
                  <td>2,847</td>
                  <td>2 hours ago</td>
                  <td>
                    <a href="/enrollment-hub/campaigns/fall-2026-welcome" className="table-action-btn">View</a>
                    <button className="table-action-btn">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>Financial Aid Reminder</td>
                  <td><span className="channel-badge">Email</span><span className="channel-badge">SMS</span></td>
                  <td><span className="status-badge active">Active</span></td>
                  <td><div className="rate-bar green" style={{width: '52.4%'}}>52.4%</div></td>
                  <td><div className="rate-bar purple" style={{width: '28.3%'}}>28.3%</div></td>
                  <td>1,892</td>
                  <td>5 hours ago</td>
                  <td>
                    <button className="table-action-btn">View</button>
                    <button className="table-action-btn">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>Campus Visit Follow-up</td>
                  <td><span className="channel-badge">Email</span></td>
                  <td><span className="status-badge active">Active</span></td>
                  <td><div className="rate-bar green" style={{width: '61.2%'}}>61.2%</div></td>
                  <td><div className="rate-bar purple" style={{width: '34.7%'}}>34.7%</div></td>
                  <td>634</td>
                  <td>1 day ago</td>
                  <td>
                    <button className="table-action-btn">View</button>
                    <button className="table-action-btn">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>Deposit Deadline Push</td>
                  <td><span className="channel-badge">Email</span><span className="channel-badge">SMS</span><span className="channel-badge">Voice</span></td>
                  <td><span className="status-badge scheduled">Scheduled</span></td>
                  <td>-</td>
                  <td>-</td>
                  <td>0</td>
                  <td>Starts Jan 15</td>
                  <td>
                    <button className="table-action-btn">View</button>
                    <button className="table-action-btn">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>Spring Open House Invite</td>
                  <td><span className="channel-badge">Email</span></td>
                  <td><span className="status-badge scheduled">Scheduled</span></td>
                  <td>-</td>
                  <td>-</td>
                  <td>0</td>
                  <td>Starts Feb 1</td>
                  <td>
                    <button className="table-action-btn">View</button>
                    <button className="table-action-btn">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>Transfer Student Outreach</td>
                  <td><span className="channel-badge">Email</span></td>
                  <td><span className="status-badge paused">Paused</span></td>
                  <td><div className="rate-bar orange" style={{width: '38.1%'}}>38.1%</div></td>
                  <td><div className="rate-bar purple" style={{width: '12.4%'}}>12.4%</div></td>
                  <td>1,234</td>
                  <td>3 days ago</td>
                  <td>
                    <button className="table-action-btn">View</button>
                    <button className="table-action-btn">Resume</button>
                  </td>
                </tr>
                <tr>
                  <td>Holiday Greetings 2025</td>
                  <td><span className="channel-badge">Email</span></td>
                  <td><span className="status-badge completed">Completed</span></td>
                  <td><div className="rate-bar green" style={{width: '44.7%'}}>44.7%</div></td>
                  <td><div className="rate-bar purple" style={{width: '8.2%'}}>8.2%</div></td>
                  <td>4,521</td>
                  <td>Dec 23, 2025</td>
                  <td>
                    <button className="table-action-btn">View</button>
                    <button className="table-action-btn">Clone</button>
                  </td>
                </tr>
                <tr>
                  <td>New Inquiry Welcome</td>
                  <td><span className="channel-badge">Email</span><span className="channel-badge">SMS</span></td>
                  <td><span className="status-badge draft">Draft</span></td>
                  <td>-</td>
                  <td>-</td>
                  <td>0</td>
                  <td>Not sent</td>
                  <td>
                    <button className="table-action-btn">Edit</button>
                    <button className="table-action-btn">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <span className="pagination-info">Showing 1-8 of 24 campaigns</span>
            <div className="pagination-controls">
              <button className="pagination-btn">‹</button>
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn">2</button>
              <button className="pagination-btn">3</button>
              <button className="pagination-btn">›</button>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'Conversations') {
      return (
        <div className="conversations-section">
          {/* Alert Banner */}
          <div className="alert-banner yellow">
            <div className="alert-content">
              <div className="alert-left">
                <span className="alert-icon">⚠️</span>
                <span className="alert-text">12 conversations require human review before response.</span>
              </div>
              <button className="alert-button">Review Now →</button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="conversations-kpis">
            <div className="conversation-kpi-card">
              <div className="conversation-kpi-icon">💬</div>
              <div className="conversation-kpi-content">
                <div className="conversation-kpi-label">Total Conversations (7 days)</div>
                <div className="conversation-kpi-value">1,247</div>
                <div className="conversation-kpi-change positive">↑ 18%</div>
              </div>
            </div>
            <div className="conversation-kpi-card">
              <div className="conversation-kpi-icon">✓</div>
              <div className="conversation-kpi-content">
                <div className="conversation-kpi-label">Auto-Resolution Rate</div>
                <div className="conversation-kpi-value">87.3%</div>
                <div className="conversation-kpi-change positive">↑ 5.2%</div>
              </div>
            </div>
            <div className="conversation-kpi-card">
              <div className="conversation-kpi-icon">⏱️</div>
              <div className="conversation-kpi-content">
                <div className="conversation-kpi-label">Avg Response Time</div>
                <div className="conversation-kpi-value">2.3 min</div>
                <div className="conversation-kpi-change negative">↓ 34%</div>
              </div>
            </div>
            <div className="conversation-kpi-card">
              <div className="conversation-kpi-icon">⭐</div>
              <div className="conversation-kpi-content">
                <div className="conversation-kpi-label">User Satisfaction</div>
                <div className="conversation-kpi-value">4.7/5</div>
                <div className="conversation-kpi-change positive">↑ 0.3</div>
              </div>
            </div>
          </div>

          {/* Charts and Topics Grid */}
          <div className="conversations-grid">
            {/* Agent Performance */}
            <div className="conversations-card">
              <div className="card-header-row">
                <div>
                  <h2 className="card-title">Agent Performance Over Time</h2>
                  <p className="card-description">Conversation volume and resolution rates across all agents</p>
                </div>
                <div className="time-filters">
                  <button className="time-filter">24h</button>
                  <button className="time-filter active">7d</button>
                  <button className="time-filter">30d</button>
                  <button className="time-filter">90d</button>
                </div>
              </div>
              <div className="chart-placeholder">
                <div className="chart-icon">📊</div>
                <p>Line chart showing conversation volume, resolution rate, and response time trends.</p>
              </div>
            </div>

            {/* Top Conversation Topics */}
            <div className="conversations-card">
              <h2 className="card-title">Top Conversation Topics</h2>
              <p className="card-description">Most common questions this week</p>
              <div className="topics-list">
                <div className="topic-item">
                  <div className="topic-rank">1</div>
                  <div className="topic-info">
                    <div className="topic-name">Application Deadlines</div>
                    <div className="topic-bar">
                      <div className="topic-bar-fill" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div className="topic-count">234</div>
                </div>
                <div className="topic-item">
                  <div className="topic-rank">2</div>
                  <div className="topic-info">
                    <div className="topic-name">Financial Aid Status</div>
                    <div className="topic-bar">
                      <div className="topic-bar-fill" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="topic-count">187</div>
                </div>
                <div className="topic-item">
                  <div className="topic-rank">3</div>
                  <div className="topic-info">
                    <div className="topic-name">Enrollment Deposit</div>
                    <div className="topic-bar">
                      <div className="topic-bar-fill" style={{width: '67%'}}></div>
                    </div>
                  </div>
                  <div className="topic-count">156</div>
                </div>
                <div className="topic-item">
                  <div className="topic-rank">4</div>
                  <div className="topic-info">
                    <div className="topic-name">Housing Applications</div>
                    <div className="topic-bar">
                      <div className="topic-bar-fill" style={{width: '53%'}}></div>
                    </div>
                  </div>
                  <div className="topic-count">124</div>
                </div>
                <div className="topic-item">
                  <div className="topic-rank">5</div>
                  <div className="topic-info">
                    <div className="topic-name">Campus Visit Info</div>
                    <div className="topic-bar">
                      <div className="topic-bar-fill" style={{width: '42%'}}></div>
                    </div>
                  </div>
                  <div className="topic-count">98</div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Agents Section */}
          <div className="ai-agents-section">
            <div className="section-header-row">
              <div>
                <h2 className="section-title">Your AI Agents</h2>
              </div>
              <div className="agents-controls">
                <select className="agents-filter">
                  <option>All Channels</option>
                  <option>Webchat</option>
                  <option>Voice</option>
                  <option>SMS</option>
                </select>
                <select className="agents-filter">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
                <a href="/enrollment-hub/conversations/create" className="create-agent-btn">+ Create Agent</a>
              </div>
            </div>
            <div className="agents-grid">
              <a href="/enrollment-hub/conversations/admissions-webchat" className="agent-card">
                <div className="agent-icon">💬</div>
                <div className="agent-info">
                  <div className="agent-name">Admissions Webchat Assistant</div>
                  <div className="agent-details">
                    <span className="detail-tag">🌐 Webchat</span>
                    <span>admissions.university.edu</span>
                  </div>
                  <div className="agent-metrics">
                    <span className="metric-item"><strong>523</strong> Conversations</span>
                    <span className="metric-item positive"><strong>91%</strong> Resolved</span>
                    <span className="metric-item"><strong>4.8</strong> Rating</span>
                  </div>
                </div>
                <div className="agent-status active">Active</div>
              </a>
              <a href="/enrollment-hub/conversations/enrollment-voice" className="agent-card">
                <div className="agent-icon">📞</div>
                <div className="agent-info">
                  <div className="agent-name">Enrollment Voice Agent</div>
                  <div className="agent-details">
                    <span className="detail-tag">📞 Voice - Inbound</span>
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="agent-metrics">
                    <span className="metric-item"><strong>312</strong> Calls</span>
                    <span className="metric-item positive"><strong>84%</strong> Resolved</span>
                    <span className="metric-item"><strong>4.6</strong> Rating</span>
                  </div>
                </div>
                <div className="agent-status active">Active</div>
              </a>
              <a href="/enrollment-hub/conversations/text-messaging" className="agent-card">
                <div className="agent-icon">💬</div>
                <div className="agent-info">
                  <div className="agent-name">Text Messaging Agent</div>
                  <div className="agent-details">
                    <span className="detail-tag">📱 SMS/iMessage</span>
                    <span>(555) 987-6543</span>
                  </div>
                  <div className="agent-metrics">
                    <span className="metric-item"><strong>287</strong> Conversations</span>
                    <span className="metric-item positive"><strong>89%</strong> Resolved</span>
                    <span className="metric-item"><strong>4.7</strong> Rating</span>
                  </div>
                </div>
                <div className="agent-status active">Active</div>
              </a>
              <a href="/enrollment-hub/conversations/email-inquiry" className="agent-card">
                <div className="agent-icon">✉️</div>
                <div className="agent-info">
                  <div className="agent-name">Email Inquiry Monitor</div>
                  <div className="agent-details">
                    <span className="detail-tag">✉️ Email</span>
                    <span>admissions@university.edu</span>
                  </div>
                  <div className="agent-metrics">
                    <span className="metric-item"><strong>125</strong> Emails</span>
                    <span className="metric-item positive"><strong>78%</strong> Auto-replied</span>
                    <span className="metric-item"><strong>4.5</strong> Rating</span>
                  </div>
                </div>
                <div className="agent-status active">Active</div>
              </a>
              <a href="/enrollment-hub/conversations/outbound-reminder" className="agent-card">
                <div className="agent-icon">📢</div>
                <div className="agent-info">
                  <div className="agent-name">Outbound Reminder Agent</div>
                  <div className="agent-details">
                    <span className="detail-tag">📞 Voice - Outbound</span>
                    <span>Deposit Reminders</span>
                  </div>
                  <div className="agent-metrics">
                    <span className="metric-item"><strong>0</strong> Calls (paused)</span>
                    <span className="metric-item">—</span>
                    <span className="metric-item">—</span>
                  </div>
                </div>
                <div className="agent-status inactive">Inactive</div>
              </a>
              <a href="/enrollment-hub/conversations/financial-aid-chat" className="agent-card">
                <div className="agent-icon">💰</div>
                <div className="agent-info">
                  <div className="agent-name">Financial Aid Chat</div>
                  <div className="agent-details">
                    <span className="detail-tag">🌐 Webchat</span>
                    <span>finaid.university.edu</span>
                  </div>
                  <div className="agent-metrics">
                    <span className="metric-item"><strong>198</strong> Conversations</span>
                    <span className="metric-item positive"><strong>86%</strong> Resolved</span>
                    <span className="metric-item"><strong>4.6</strong> Rating</span>
                  </div>
                </div>
                <div className="agent-status active">Active</div>
              </a>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'Doc Processing') {
      return (
        <div className="doc-processing-section">
          {/* Alert Banner */}
          <div className="alert-banner yellow">
            <div className="alert-content">
              <div className="alert-left">
                <span className="alert-icon">⚠️</span>
                <div>
                  <span className="alert-text">35 Transcripts Require Human Review</span>
                  <span className="alert-subtext">These documents could not be fully processed automatically and need manual verification.</span>
                </div>
              </div>
              <a href="/enrollment-hub/doc-processing/review" className="alert-button">Review Now →</a>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="doc-processing-kpis">
            <div className="doc-kpi-card">
              <div className="doc-kpi-icon">🔍</div>
              <div className="doc-kpi-content">
                <div className="doc-kpi-label">Total Processed (30d)</div>
                <div className="doc-kpi-value">1,247</div>
                <div className="doc-kpi-change positive">↑ 23% vs last month</div>
              </div>
            </div>
            <div className="doc-kpi-card">
              <div className="doc-kpi-icon">✓</div>
              <div className="doc-kpi-content">
                <div className="doc-kpi-label">Auto-Extraction Rate</div>
                <div className="doc-kpi-value">92%</div>
                <div className="doc-kpi-change positive">↑ 3.2% vs last month</div>
              </div>
            </div>
            <div className="doc-kpi-card">
              <div className="doc-kpi-icon">👁️</div>
              <div className="doc-kpi-content">
                <div className="doc-kpi-label">Pending Review</div>
                <div className="doc-kpi-value">35</div>
                <div className="doc-kpi-change negative">↓ 12 from yesterday</div>
              </div>
            </div>
            <div className="doc-kpi-card">
              <div className="doc-kpi-icon">❌</div>
              <div className="doc-kpi-content">
                <div className="doc-kpi-label">Failed</div>
                <div className="doc-kpi-value">8</div>
                <div className="doc-kpi-change negative">↓ 5 from last week</div>
              </div>
            </div>
            <div className="doc-kpi-card">
              <div className="doc-kpi-icon">⏱️</div>
              <div className="doc-kpi-content">
                <div className="doc-kpi-label">Avg Processing Time</div>
                <div className="doc-kpi-value">1.2m</div>
                <div className="doc-kpi-change positive">↓ 18% faster</div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="doc-quick-actions">
            <a href="/enrollment-hub/doc-processing/review" className="quick-action-card">
              <div className="quick-action-icon">👁️</div>
              <div className="quick-action-content">
                <div className="quick-action-title">Review Queue (35)</div>
                <div className="quick-action-description">Documents needing human verification</div>
              </div>
            </a>
            <div className="quick-action-card">
              <div className="quick-action-icon">🔄</div>
              <div className="quick-action-content">
                <div className="quick-action-title">Retry Failed (8)</div>
                <div className="quick-action-description">Reprocess failed extractions</div>
              </div>
            </div>
            <div className="quick-action-card">
              <div className="quick-action-icon">⚙️</div>
              <div className="quick-action-content">
                <div className="quick-action-title">Processing Rules</div>
                <div className="quick-action-description">Configure extraction settings</div>
              </div>
            </div>
            <div className="quick-action-card">
              <div className="quick-action-icon">📊</div>
              <div className="quick-action-content">
                <div className="quick-action-title">Export Report</div>
                <div className="quick-action-description">Download processing analytics</div>
              </div>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="doc-charts-grid">
            {/* Processing Volume */}
            <div className="doc-chart-card">
              <div className="chart-header">
                <div>
                  <h3 className="chart-title">Processing Volume</h3>
                  <p className="chart-description">Transcript processing over time</p>
                </div>
                <div className="time-filters">
                  <button className="time-filter">24h</button>
                  <button className="time-filter">7d</button>
                  <button className="time-filter active">30d</button>
                  <button className="time-filter">90d</button>
                </div>
              </div>
              <div className="chart-placeholder">
                <div className="chart-icon">📊</div>
                <p>Area chart showing daily processing volume with success/review/failed breakdown.</p>
              </div>
            </div>

            {/* Processing Breakdown */}
            <div className="doc-chart-card">
              <h3 className="chart-title">Processing Breakdown</h3>
              <p className="chart-description">Last 30 days</p>
              <div className="donut-chart-container">
                <div className="donut-chart">
                  <div className="donut-center">
                    <div className="donut-total">1,247</div>
                    <div className="donut-label">Total</div>
                  </div>
                </div>
                <div className="donut-legend">
                  <div className="legend-item">
                    <div className="legend-color green"></div>
                    <span>Successfully Processed 1,147 (92%)</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color orange"></div>
                    <span>Needs Review 92 (7%)</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color red"></div>
                    <span>Failed 8 (1%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Issues and Batches Grid */}
          <div className="doc-issues-batches-grid">
            {/* Common Extraction Issues */}
            <div className="doc-section-card">
              <h3 className="section-card-title">Common Extraction Issues</h3>
              <p className="section-card-description">Persistent themes requiring attention</p>
              <div className="issues-list">
                <div className="issue-card yellow">
                  <div className="issue-icon">📊</div>
                  <div className="issue-content">
                    <div className="issue-name">Weighted vs Unweighted GPA Ambiguity</div>
                    <div className="issue-description">Found in 18 transcripts this week</div>
                  </div>
                  <div className="issue-count yellow">18</div>
                </div>
                <div className="issue-card red">
                  <div className="issue-icon">🖼️</div>
                  <div className="issue-content">
                    <div className="issue-name">Low Image Quality / Blurry Scans</div>
                    <div className="issue-description">Found in 12 transcripts this week</div>
                  </div>
                  <div className="issue-count red">12</div>
                </div>
                <div className="issue-card blue">
                  <div className="issue-icon">🏫</div>
                  <div className="issue-content">
                    <div className="issue-name">Non-Standard Grading Scale</div>
                    <div className="issue-description">Found in 8 transcripts this week</div>
                  </div>
                  <div className="issue-count blue">8</div>
                </div>
                <div className="issue-card yellow">
                  <div className="issue-icon">📝</div>
                  <div className="issue-content">
                    <div className="issue-name">Missing Course Credits</div>
                    <div className="issue-description">Found in 6 transcripts this week</div>
                  </div>
                  <div className="issue-count yellow">6</div>
                </div>
                <div className="issue-card blue">
                  <div className="issue-icon">🌐</div>
                  <div className="issue-content">
                    <div className="issue-name">International Transcript Format</div>
                    <div className="issue-description">Found in 5 transcripts this week</div>
                  </div>
                  <div className="issue-count blue">5</div>
                </div>
              </div>
            </div>

            {/* Recent Batches */}
            <div className="doc-section-card">
              <h3 className="section-card-title">Recent Batches</h3>
              <p className="section-card-description">Latest document processing jobs</p>
              <table className="batches-table">
                <thead>
                  <tr>
                    <th>Batch ID</th>
                    <th>Source</th>
                    <th>Status</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="#" className="batch-link">BATCH-2026-0104-001</a></td>
                    <td>
                      <span className="source-tag">📁 Slate SFTP</span>
                    </td>
                    <td><span className="batch-status processing">Processing</span></td>
                    <td>67%</td>
                  </tr>
                  <tr>
                    <td><a href="#" className="batch-link">BATCH-2026-0104-002</a></td>
                    <td>
                      <span className="source-tag">🔌 API Upload</span>
                    </td>
                    <td><span className="batch-status review">In Review</span></td>
                    <td>3 left</td>
                  </tr>
                  <tr>
                    <td><a href="#" className="batch-link">BATCH-2026-0103-001</a></td>
                    <td>
                      <span className="source-tag">📁 Slate SFTP</span>
                    </td>
                    <td><span className="batch-status complete">Complete</span></td>
                    <td>234</td>
                  </tr>
                  <tr>
                    <td><a href="#" className="batch-link">BATCH-2026-0102-001</a></td>
                    <td>
                      <span className="source-tag">📁 Slate SFTP</span>
                    </td>
                    <td><span className="batch-status complete">Complete</span></td>
                    <td>187</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'Settings') {
      return (
        <div className="settings-section">
          <div className="section-header">
            <h2 className="section-title">Enrollment Hub Settings</h2>
            <p className="section-description">Configure your Enrollment Hub preferences and integrations</p>
          </div>

          {/* General Settings */}
          <div className="settings-card">
            <h3 className="settings-card-title">General Settings</h3>
            <div className="settings-form">
              <div className="form-field">
                <label>Organization Name</label>
                <input type="text" defaultValue="Unifuse University" className="settings-input" />
              </div>
              <div className="form-field">
                <label>Timezone</label>
                <select className="settings-select">
                  <option>Eastern Time (EST/EDT)</option>
                  <option>Central Time (CST/CDT)</option>
                  <option>Mountain Time (MST/MDT)</option>
                  <option>Pacific Time (PST/PDT)</option>
                </select>
              </div>
              <div className="form-field">
                <label>Date Format</label>
                <select className="settings-select">
                  <option>MM/DD/YYYY</option>
                  <option>DD/MM/YYYY</option>
                  <option>YYYY-MM-DD</option>
                </select>
              </div>
              <div className="form-field">
                <label>Default Language</label>
                <select className="settings-select">
                  <option>English (US)</option>
                  <option>English (UK)</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="settings-card">
            <h3 className="settings-card-title">Notification Preferences</h3>
            <div className="settings-form">
              <div className="settings-toggle-item">
                <div className="toggle-info">
                  <div className="toggle-label">Email Notifications</div>
                  <div className="toggle-description">Receive email alerts for important events</div>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <div className="settings-toggle-item">
                <div className="toggle-info">
                  <div className="toggle-label">SMS Notifications</div>
                  <div className="toggle-description">Receive SMS alerts for critical updates</div>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <div className="form-field">
                <label>Notification Frequency</label>
                <select className="settings-select">
                  <option>Real-time</option>
                  <option>Hourly Digest</option>
                  <option>Daily Digest</option>
                  <option>Weekly Summary</option>
                </select>
              </div>
            </div>
          </div>

          {/* Data & Privacy */}
          <div className="settings-card">
            <h3 className="settings-card-title">Data & Privacy</h3>
            <div className="settings-form">
              <div className="form-field">
                <label>Data Retention Period</label>
                <select className="settings-select">
                  <option>1 Year</option>
                  <option>2 Years</option>
                  <option>5 Years</option>
                  <option>Indefinite</option>
                </select>
              </div>
              <div className="settings-toggle-item">
                <div className="toggle-info">
                  <div className="toggle-label">GDPR Compliance</div>
                  <div className="toggle-description">Enable GDPR-compliant data handling</div>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <div className="settings-toggle-item">
                <div className="toggle-info">
                  <div className="toggle-label">Auto-Delete Expired Data</div>
                  <div className="toggle-description">Automatically delete data after retention period</div>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <div className="form-field">
                <label>Export Format</label>
                <select className="settings-select">
                  <option>CSV</option>
                  <option>JSON</option>
                  <option>Excel</option>
                </select>
              </div>
            </div>
          </div>

          {/* API & Webhooks */}
          <div className="settings-card">
            <h3 className="settings-card-title">API & Webhooks</h3>
            <div className="settings-form">
              <div className="form-field">
                <label>API Key</label>
                <div className="api-key-field">
                  <input type="text" defaultValue="sk_live_••••••••••••••••••••••••" readOnly className="settings-input" />
                  <button className="copy-btn">Copy</button>
                  <button className="regenerate-btn">Regenerate</button>
                </div>
              </div>
              <div className="form-field">
                <label>Webhook Endpoint</label>
                <input type="url" defaultValue="https://api.unifuse.ai/webhooks/enrollment" className="settings-input" />
              </div>
              <div className="form-field">
                <label>Rate Limit (requests/minute)</label>
                <input type="number" defaultValue="100" className="settings-input" />
              </div>
              <div className="settings-toggle-item">
                <div className="toggle-info">
                  <div className="toggle-label">Webhook Signing</div>
                  <div className="toggle-description">Enable webhook signature verification</div>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>

          {/* User Management */}
          <div className="settings-card">
            <h3 className="settings-card-title">User Management</h3>
            <div className="team-members-section">
              <div className="team-header">
                <span>Team Members (5)</span>
                <button className="invite-btn">+ Invite User</button>
              </div>
              <table className="team-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Last Active</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="user-cell">
                        <div className="user-avatar-small">JD</div>
                        <span>Jane Doe</span>
                      </div>
                    </td>
                    <td>jane.doe@university.edu</td>
                    <td><span className="role-badge admin">Admin</span></td>
                    <td>2 hours ago</td>
                    <td>
                      <button className="action-link">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="user-cell">
                        <div className="user-avatar-small">JS</div>
                        <span>John Smith</span>
                      </div>
                    </td>
                    <td>john.smith@university.edu</td>
                    <td><span className="role-badge editor">Editor</span></td>
                    <td>1 day ago</td>
                    <td>
                      <button className="action-link">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="user-cell">
                        <div className="user-avatar-small">MJ</div>
                        <span>Maria Johnson</span>
                      </div>
                    </td>
                    <td>maria.j@university.edu</td>
                    <td><span className="role-badge viewer">Viewer</span></td>
                    <td>3 days ago</td>
                    <td>
                      <button className="action-link">Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Integration Settings */}
          <div className="settings-card">
            <h3 className="settings-card-title">Integration Settings</h3>
            <div className="integrations-list">
              <div className="integration-item">
                <div className="integration-info">
                  <div className="integration-icon-small">📊</div>
                  <div>
                    <div className="integration-name-small">Slate CRM</div>
                    <div className="integration-status-text">Connected • Last synced 2 hours ago</div>
                  </div>
                </div>
                <button className="configure-btn">Configure</button>
              </div>
              <div className="integration-item">
                <div className="integration-info">
                  <div className="integration-icon-small">🎓</div>
                  <div>
                    <div className="integration-name-small">Banner SIS</div>
                    <div className="integration-status-text">Connected • Last synced 1 hour ago</div>
                  </div>
                </div>
                <button className="configure-btn">Configure</button>
              </div>
              <div className="integration-item">
                <div className="integration-info">
                  <div className="integration-icon-small">📱</div>
                  <div>
                    <div className="integration-name-small">Twilio</div>
                    <div className="integration-status-text">Connected • Last synced just now</div>
                  </div>
                </div>
                <button className="configure-btn">Configure</button>
              </div>
            </div>
            <div className="sync-schedule">
              <label>Auto-Sync Schedule</label>
              <select className="settings-select">
                <option>Every 15 minutes</option>
                <option>Every 30 minutes</option>
                <option>Every hour</option>
                <option>Every 6 hours</option>
                <option>Daily</option>
                <option>Manual only</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="settings-actions">
            <button className="cancel-settings-btn">Cancel</button>
            <button className="save-settings-btn">Save Changes</button>
          </div>
        </div>
      );
    }

    return <div>Content for {activeTab} coming soon...</div>;
  };

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
            onClick={() => setShowAIAssistant(true)}
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
              <a href="/enrollment-hub" className="nav-subitem active">Enrollment Hub</a>
              <a href="#" className="nav-subitem">Success Hub</a>
              <a href="#" className="nav-subitem">Advancement Hub</a>
              <a href="#" className="nav-subitem">Operational Excellence Hub</a>
            </div>
            <a href="/integrations" className="nav-item">
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
        <main className="enrollment-hub-main">
          {/* Page Header */}
          <div className="page-header">
            <div>
              <h1 className="page-title">Enrollment Hub</h1>
              <p className="page-subtitle">AI-powered tools to recruit, engage, and enroll new students</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="tabs-container">
            <button
              className={`tab ${activeTab === 'EM Home' ? 'active' : ''}`}
              onClick={() => setActiveTab('EM Home')}
            >
              EM Home
            </button>
            <button
              className={`tab ${activeTab === 'Knowledge Base' ? 'active' : ''}`}
              onClick={() => setActiveTab('Knowledge Base')}
            >
              Knowledge Base
            </button>
            <button
              className={`tab ${activeTab === 'Campaigns' ? 'active' : ''}`}
              onClick={() => setActiveTab('Campaigns')}
            >
              Campaigns
            </button>
            <button
              className={`tab ${activeTab === 'Conversations' ? 'active' : ''}`}
              onClick={() => setActiveTab('Conversations')}
            >
              Conversations
            </button>
            <button
              className={`tab ${activeTab === 'Doc Processing' ? 'active' : ''}`}
              onClick={() => setActiveTab('Doc Processing')}
            >
              Doc Processing
            </button>
            <button
              className={`tab ${activeTab === 'Settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('Settings')}
            >
              Settings
            </button>
          </div>

          {/* Dynamic Content */}
          {renderContent()}
        </main>

        {/* AI Assistant Panel */}
        {showAIAssistant && (
          <div className="ai-assistant-panel">
            <div className="ai-assistant-header">
              <h3>AI Assistant</h3>
              <button className="ai-close-button" onClick={() => setShowAIAssistant(false)}>✕</button>
            </div>
            <div className="ai-assistant-chat">
              <div className="chat-message user">
                <div className="chat-avatar">JD</div>
                <div className="chat-bubble user-bubble">
                  What's our enrollment conversion rate this year?
                </div>
              </div>
              <div className="chat-message ai">
                <div className="chat-avatar ai-avatar">⚡</div>
                <div className="chat-bubble ai-bubble">
                  <p>Your application conversion rate is currently <strong>62%</strong>, which is up <strong>8.3%</strong> compared to last year. This means you're converting prospects to applicants more effectively.</p>
                  <p>Here are some key insights:</p>
                  <ul>
                    <li>Total applications: 3,247 (↑12% YoY)</li>
                    <li>Deposits received: 847 (↑15% YoY)</li>
                    <li>AI engagement has reached 5,234 personalized contacts</li>
                  </ul>
                  <p>Would you like to see the enrollment funnel breakdown or explore what's driving this improvement?</p>
                </div>
              </div>
            </div>
            <div className="ai-assistant-input">
              <input
                type="text"
                placeholder="Ask a follow-up question..."
                className="ai-input-field"
              />
            </div>
          </div>
        )}

        {/* Configure Upload Modal */}
        {showUploadModal && (
          <div className="modal-overlay" onClick={() => setShowUploadModal(false)}>
            <div className="upload-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Configure Upload</h3>
                <div className="modal-header-actions">
                  <button className="modal-icon-btn">−</button>
                  <button className="modal-icon-btn" onClick={() => setShowUploadModal(false)}>✕</button>
                </div>
              </div>

              <div className="modal-content">
                <div className="file-info">
                  <div className="file-icon">📄</div>
                  <div className="file-details">
                    <div className="file-name">Fall_2026_Admissions_Requirements.pdf</div>
                    <div className="file-meta">PDF Document • 2.4 MB • 12 pages detected</div>
                    <div className="file-status">
                      <span className="status-check">✓</span>
                      <span>Uploaded</span>
                    </div>
                  </div>
                </div>

                <div className="modal-field">
                  <label>Content Name</label>
                  <input type="text" defaultValue="Fall 2026 Admissions Requirements" />
                </div>

                <div className="modal-field">
                  <label>Department Labels (optional)</label>
                  <div className="labels-container">
                    <span className="label-tag selected">Admissions <button className="label-remove">×</button></span>
                    <span className="label-tag selected">Undergraduate <button className="label-remove">×</button></span>
                    <span className="label-tag">Financial Aid</span>
                    <span className="label-tag">Graduate</span>
                    <span className="label-tag">International</span>
                    <span className="label-tag">Housing</span>
                    <span className="label-tag">Registrar</span>
                    <span className="label-tag">Academic Programs</span>
                    <span className="label-tag">Student Services</span>
                  </div>
                </div>

                <div className="modal-field">
                  <label>Notes (optional)</label>
                  <textarea rows="3" defaultValue="Official admissions requirements document for Fall 2026 incoming class. Includes GPA requirements, test scores, and application deadlines."></textarea>
                </div>

                <div className="modal-field">
                  <label>Uploaded By</label>
                  <input type="text" defaultValue="Jane Doe (jane.doe@university.edu)" />
                </div>

                <div className="modal-field">
                  <div className="pages-header">
                    <span>12 pages detected • 11 selected</span>
                    <button className="select-all-btn">Select All</button>
                  </div>
                  <div className="pages-grid">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(page => (
                      <label key={page} className="page-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedPages.includes(page)}
                          onChange={() => togglePage(page)}
                        />
                        <span>Page {page}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button className="modal-btn cancel" onClick={() => setShowUploadModal(false)}>Cancel</button>
                <button className="modal-btn primary">Add to Knowledge Base</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
