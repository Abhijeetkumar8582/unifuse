'use client';

import { useRouter } from 'next/navigation';
import '../../../dashboard.css';
import '../../../enrollment-hub.css';
import './campaign-detail.css';

export default function CampaignDetailPage({ params }) {
  const router = useRouter();
  const campaignId = params.id;

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
        <main className="campaign-detail-main">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <a href="/enrollment-hub?tab=Campaigns">Campaigns</a>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-active">Fall 2026 Welcome Series</span>
          </div>

          {/* Campaign Header */}
          <div className="campaign-header">
            <div className="campaign-title-section">
              <h1 className="campaign-title">Fall 2026 Welcome Series</h1>
              <p className="campaign-description">5-part drip sequence for admitted students welcoming them to the university community</p>
            </div>
            <div className="campaign-actions-header">
              <button className="action-btn secondary">Edit Campaign</button>
              <button className="action-btn secondary">Edit Message</button>
              <button className="action-btn danger">Pause</button>
            </div>
          </div>

          {/* Campaign Status */}
          <div className="campaign-status-bar">
            <div className="status-item">
              <span className="status-label">Status:</span>
              <span className="status-badge active">Active</span>
            </div>
            <div className="status-item">
              <span className="status-label">Channel:</span>
              <span className="status-value">Email</span>
            </div>
            <div className="status-item">
              <span className="status-label">Last Run:</span>
              <span className="status-value">Jan 4, 2026 at 9:15 AM</span>
            </div>
            <div className="status-item">
              <span className="status-label">Next Run:</span>
              <span className="status-value">Jan 5, 2026 at 9:00 AM</span>
            </div>
            <div className="status-item">
              <span className="status-label">Frequency:</span>
              <span className="status-value">Daily at 9:00 AM EST</span>
            </div>
          </div>

          {/* Performance KPIs */}
          <div className="campaign-kpis-detail">
            <div className="kpi-card-detail">
              <div className="kpi-label-detail">Total Sent</div>
              <div className="kpi-value-detail">2,847</div>
              <div className="kpi-change-detail positive">↑ 234 today</div>
            </div>
            <div className="kpi-card-detail">
              <div className="kpi-label-detail">Open Rate</div>
              <div className="kpi-value-detail">48.2%</div>
              <div className="kpi-change-detail positive">↑ 5.4% vs avg</div>
            </div>
            <div className="kpi-card-detail">
              <div className="kpi-label-detail">Click Rate</div>
              <div className="kpi-value-detail">22.1%</div>
              <div className="kpi-change-detail positive">↑ 3.7% vs avg</div>
            </div>
            <div className="kpi-card-detail">
              <div className="kpi-label-detail">Bounce Rate</div>
              <div className="kpi-value-detail">2.4%</div>
              <div className="kpi-change-detail negative">↓ 0.8% vs avg</div>
            </div>
            <div className="kpi-card-detail">
              <div className="kpi-label-detail">Opt-Out Rate</div>
              <div className="kpi-value-detail">0.3%</div>
              <div className="kpi-change-detail negative">↓ 0.1% vs avg</div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="campaign-content-grid">
            {/* Message Preview */}
            <div className="message-preview-card">
              <h2 className="card-title">Message Preview</h2>
              <div className="email-preview">
                <div className="email-header">
                  <div className="email-subject">
                    🎉 Welcome to the {'{{University Name}}'} Family, {'{{First Name}}'}!
                  </div>
                </div>
                <div className="email-body">
                  <p>Hi {'{{First Name}}'},</p>
                  <p>Congratulations on your admission to {'{{University Name}}'}! We're thrilled to welcome you to our community of scholars, innovators, and leaders.</p>
                  <p>Your journey starts now, and we're here to help every step of the way. Here's what you should do next:</p>
                  <ol>
                    <li>Submit your enrollment deposit by {'{{Deadline Date}}'}</li>
                    <li>Complete your housing application</li>
                    <li>Review your financial aid package</li>
                  </ol>
                  <p>Have questions? Our admissions team is ready to help!</p>
                  <button className="email-cta-button">Confirm Your Spot →</button>
                </div>
              </div>
            </div>

            {/* Campaign Details */}
            <div className="campaign-details-card">
              <h2 className="card-title">Campaign Details</h2>
              <div className="details-list">
                <div className="detail-item">
                  <span className="detail-label">Start Date:</span>
                  <span className="detail-value">December 15, 2025</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">End Date:</span>
                  <span className="detail-value">May 1, 2026</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Schedule:</span>
                  <span className="detail-value">Recurring Daily at 9:00 AM EST</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Target Audience:</span>
                  <span className="detail-value">Admitted Fall 2026 Students</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Personality:</span>
                  <div className="detail-tags">
                    <span className="tag">Friendly</span>
                    <span className="tag">Encouraging</span>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Tone:</span>
                  <div className="detail-tags">
                    <span className="tag">Warm</span>
                    <span className="tag">Professional</span>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Created By:</span>
                  <span className="detail-value">Jane Doe</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Last Modified:</span>
                  <span className="detail-value">Jan 2, 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Sections */}
          <div className="analytics-grid">
            {/* Call-to-Action Links */}
            <div className="analytics-card">
              <h2 className="card-title">Call-to-Action Links</h2>
              <table className="analytics-table">
                <thead>
                  <tr>
                    <th>Button Text</th>
                    <th>Destination URL</th>
                    <th>Clicks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Confirm Your Spot →</td>
                    <td>university.edu/deposit</td>
                    <td className="clicks-cell">487 (17.1%)</td>
                  </tr>
                  <tr>
                    <td>View Financial Aid</td>
                    <td>university.edu/finaid</td>
                    <td className="clicks-cell">234 (8.2%)</td>
                  </tr>
                  <tr>
                    <td>Apply for Housing</td>
                    <td>university.edu/housing</td>
                    <td className="clicks-cell">156 (5.5%)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Opt-Out Information */}
            <div className="analytics-card">
              <h2 className="card-title">Opt-Out Information</h2>
              <div className="opt-out-alert">
                <div className="opt-out-main">9 recipients have opted out</div>
                <div className="opt-out-rate">0.3% opt-out rate (industry avg: 0.4%)</div>
              </div>
              <div className="opt-out-details">
                <div className="opt-out-detail-item">
                  <span className="opt-out-label">Opt-out Method:</span>
                  <span className="opt-out-value">Unsubscribe Link</span>
                </div>
                <div className="opt-out-detail-item">
                  <span className="opt-out-label">Footer Text:</span>
                  <span className="opt-out-value">"Click here to unsubscribe from enrollment communications"</span>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Over Time */}
          <div className="analytics-card full-width">
            <h2 className="card-title">Performance Over Time</h2>
            <div className="chart-placeholder">
              <div className="chart-icon">📊</div>
              <p>Performance chart showing open rates and click rates over the campaign duration.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
