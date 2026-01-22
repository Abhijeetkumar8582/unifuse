'use client';

import { useRouter } from 'next/navigation';
import '../dashboard.css';

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="dashboard-container">
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
            <a href="/dashboard" className="nav-item active">
              <span className="nav-icon">■</span>
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
        <main className="dashboard-main">
          {/* Welcome Section */}
          <div className="welcome-section">
            <div className="welcome-content">
              <h1 className="welcome-title">
                🎉 Happy New Year, Jane!
              </h1>
              <p className="welcome-subtitle">Welcome back to your dashboard</p>
            </div>
            <button className="edit-dashboard-button">
              ✏️ Edit Dashboard
            </button>
          </div>

          {/* Filters */}
          <div className="filters-section">
            <select className="filter-dropdown">
              <option>Year to Date</option>
            </select>
            <select className="filter-dropdown">
              <option>All Hubs</option>
            </select>
            <button className="more-filters-button">
              + More Filters
            </button>
          </div>

          {/* KPI Cards */}
          <div className="kpi-grid">
            <div className="kpi-card">
              <div className="kpi-icon blue">▲</div>
              <div className="kpi-content">
                <h3 className="kpi-title">Application Conversion</h3>
                <p className="kpi-value">62%</p>
                <p className="kpi-change positive">↑ 8.3% vs last year</p>
              </div>
            </div>
            <div className="kpi-card">
              <div className="kpi-icon green">◆</div>
              <div className="kpi-content">
                <h3 className="kpi-title">Student Retention</h3>
                <p className="kpi-value">89.2%</p>
                <p className="kpi-change positive">↑ 3.7% vs last year</p>
              </div>
            </div>
            <div className="kpi-card">
              <div className="kpi-icon yellow">●</div>
              <div className="kpi-content">
                <h3 className="kpi-title">Annual Giving (YTD)</h3>
                <p className="kpi-value">$2.4M</p>
                <p className="kpi-change positive">↑ 18.2% vs last year</p>
              </div>
            </div>
            <div className="kpi-card">
              <div className="kpi-icon purple">⬡</div>
              <div className="kpi-content">
                <h3 className="kpi-title">AI Automation Rate</h3>
                <p className="kpi-value">87.3%</p>
                <p className="kpi-change positive">↑ 12.1% vs last year</p>
              </div>
            </div>
          </div>

          {/* Hub Sections */}
          <div className="hubs-grid">
            {/* Enrollment Hub */}
            <div className="hub-card">
              <div className="hub-header">
                <h2 className="hub-title">Enrollment Hub</h2>
                <a href="#" className="hub-link">View Details →</a>
              </div>
              <div className="hub-metrics">
                <div className="hub-metric">
                  <p className="hub-metric-value">3,247</p>
                  <p className="hub-metric-label">Total Applications</p>
                  <p className="hub-metric-change positive">↑ 12% YoY</p>
                </div>
                <div className="hub-metric">
                  <p className="hub-metric-value">847</p>
                  <p className="hub-metric-label">Deposits</p>
                  <p className="hub-metric-change positive">↑ 15% YoY</p>
                </div>
              </div>
              <div className="hub-subsection blue-bg">
                <h4 className="hub-subsection-title">AI Engagement Impact</h4>
                <div className="hub-subsection-metrics">
                  <div className="hub-subsection-metric">
                    <span>Personalized Outreach:</span>
                    <strong>5,234 contacts</strong>
                  </div>
                  <div className="hub-subsection-metric">
                    <span>Avg Response Time:</span>
                    <strong>2.3 minutes</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Success Hub */}
            <div className="hub-card">
              <div className="hub-header">
                <h2 className="hub-title">Student Success Hub</h2>
                <a href="#" className="hub-link">View Details →</a>
              </div>
              <div className="hub-metrics">
                <div className="hub-metric">
                  <p className="hub-metric-value">892</p>
                  <p className="hub-metric-label">At-Risk Students</p>
                  <p className="hub-metric-change negative">↓ 8% vs last term</p>
                </div>
                <div className="hub-metric">
                  <p className="hub-metric-value">234</p>
                  <p className="hub-metric-label">Interventions Active</p>
                  <p className="hub-metric-change neutral">In progress</p>
                </div>
              </div>
              <div className="hub-subsection green-bg">
                <h4 className="hub-subsection-title">Support Performance</h4>
                <div className="hub-subsection-metrics">
                  <div className="hub-subsection-metric">
                    <span>Student Satisfaction:</span>
                    <strong>4.7/5.0</strong>
                  </div>
                  <div className="hub-subsection-metric">
                    <span>AI Resolution Rate:</span>
                    <strong>87%</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Advancement Hub */}
            <div className="hub-card">
              <div className="hub-header">
                <h2 className="hub-title">Advancement Hub</h2>
                <a href="#" className="hub-link">View Details →</a>
              </div>
              <div className="hub-metrics">
                <div className="hub-metric">
                  <p className="hub-metric-value">3,247</p>
                  <p className="hub-metric-label">Active Donors</p>
                  <p className="hub-metric-change positive">↑ 12% YoY</p>
                </div>
                <div className="hub-metric">
                  <p className="hub-metric-value">68%</p>
                  <p className="hub-metric-label">Campaign Progress</p>
                  <p className="hub-metric-change neutral">of $5M goal</p>
                </div>
              </div>
              <div className="hub-subsection orange-bg">
                <h4 className="hub-subsection-title">Donor Engagement</h4>
                <div className="hub-subsection-metrics">
                  <div className="hub-subsection-metric">
                    <span>AI Outreach Sent:</span>
                    <strong>3,892 contacts</strong>
                  </div>
                  <div className="hub-subsection-metric">
                    <span>Event NPS Score:</span>
                    <strong>8.4/10</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Operational Excellence */}
            <div className="hub-card">
              <div className="hub-header">
                <h2 className="hub-title">Operational Excellence</h2>
                <a href="#" className="hub-link">View Details →</a>
              </div>
              <div className="hub-metrics">
                <div className="hub-metric">
                  <p className="hub-metric-value">1.2 min</p>
                  <p className="hub-metric-label">Avg Process Time</p>
                  <p className="hub-metric-change positive">↓ 34% faster</p>
                </div>
                <div className="hub-metric">
                  <p className="hub-metric-value">4.6/5.0</p>
                  <p className="hub-metric-label">Staff Satisfaction</p>
                  <p className="hub-metric-change positive">↑ 0.4 pts</p>
                </div>
              </div>
              <div className="hub-subsection purple-bg">
                <h4 className="hub-subsection-title">Human Intervention Required</h4>
                <div className="hub-subsection-metrics">
                  <div className="hub-subsection-metric">
                    <span>Pending Review:</span>
                    <strong>47 items</strong>
                  </div>
                  <div className="hub-subsection-metric">
                    <span>Active Workflows:</span>
                    <strong>23 running</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
