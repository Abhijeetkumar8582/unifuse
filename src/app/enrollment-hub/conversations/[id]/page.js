'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../../dashboard.css';
import '../../../enrollment-hub.css';
import './agent-detail.css';

export default function AgentDetailPage({ params }) {
  const router = useRouter();
  const agentId = params.id;
  const [agentStatus, setAgentStatus] = useState(true);
  const [responseTone, setResponseTone] = useState('Friendly');
  const [webchatEnabled, setWebchatEnabled] = useState(true);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

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
        <main className="agent-detail-main">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <a href="/enrollment-hub?tab=Conversations">Conversations</a>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-active">Admissions Webchat Assistant</span>
          </div>

          {/* Agent Header */}
          <div className="agent-header">
            <div className="agent-header-left">
              <div className="agent-icon-large">💬</div>
              <div>
                <h1 className="agent-title">Admissions Webchat Assistant</h1>
                <div className="agent-tags">
                  <span className="agent-tag">
                    <span className="tag-icon">🌐</span>
                    Webchat
                  </span>
                  <span className="agent-tag">admissions.university.edu</span>
                  <span className="agent-tag status-tag active">Active</span>
                </div>
              </div>
            </div>
            <div className="agent-header-actions">
              <button className="header-action-btn">
                <span>📄</span>
                Clone Agent
              </button>
              <button className="header-action-btn">
                <span>📊</span>
                View Analytics
              </button>
            </div>
          </div>

          {/* Agent Status */}
          <div className="agent-status-section">
            <div className="status-section-content">
              <div>
                <h3 className="status-section-title">Agent Status</h3>
                <p className="status-section-description">Turn this agent on or off. When off, users will see an "unavailable" message.</p>
              </div>
              <label className="toggle-switch-large">
                <input
                  type="checkbox"
                  checked={agentStatus}
                  onChange={(e) => {
                    setAgentStatus(e.target.checked);
                    setHasUnsavedChanges(true);
                  }}
                />
                <span className="toggle-slider-large"></span>
              </label>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="performance-section">
            <h2 className="section-title">Performance (Last 7 Days)</h2>
            <div className="performance-grid">
              <div className="performance-card">
                <div className="performance-label">Total Conversations</div>
                <div className="performance-value">523</div>
              </div>
              <div className="performance-card">
                <div className="performance-label">Auto-Resolved</div>
                <div className="performance-value">91%</div>
              </div>
              <div className="performance-card">
                <div className="performance-label">Avg Response Time</div>
                <div className="performance-value">1.8 min</div>
              </div>
              <div className="performance-card">
                <div className="performance-label">User Rating</div>
                <div className="performance-value">4.8/5</div>
              </div>
            </div>
          </div>

          {/* Response Tone */}
          <div className="tone-section">
            <h2 className="section-title">Response Tone</h2>
            <p className="section-description">Set how this agent communicates with users</p>
            <div className="tone-cards">
              {[
                { name: 'Friendly', icon: '😊', description: 'Warm & approachable' },
                { name: 'Professional', icon: '👔', description: 'Formal & polished' },
                { name: 'Enthusiastic', icon: '✨', description: 'Energetic & excited' },
                { name: 'Informative', icon: '📋', description: 'Direct & factual' }
              ].map(tone => (
                <div
                  key={tone.name}
                  className={`tone-card ${responseTone === tone.name ? 'selected' : ''}`}
                  onClick={() => {
                    setResponseTone(tone.name);
                    setHasUnsavedChanges(true);
                  }}
                >
                  <div className="tone-icon">{tone.icon}</div>
                  <div className="tone-name">{tone.name}</div>
                  <div className="tone-description">{tone.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Channel Settings */}
          <div className="channel-settings-section">
            <h2 className="section-title">Channel Settings</h2>
            <p className="section-description">Where this agent is deployed</p>
            <div className="channel-setting-item">
              <div className="channel-setting-header">
                <div>
                  <div className="channel-setting-name">
                    <span className="channel-icon">🌐</span>
                    Webchat Widget
                  </div>
                  <div className="channel-setting-subtitle">Embedded on website</div>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={webchatEnabled}
                    onChange={(e) => {
                      setWebchatEnabled(e.target.checked);
                      setHasUnsavedChanges(true);
                    }}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              {webchatEnabled && (
                <div className="channel-setting-fields">
                  <div className="setting-field">
                    <label>Website URL</label>
                    <input type="text" defaultValue="https://admissions.university.edu" />
                  </div>
                  <div className="setting-field">
                    <label>Widget Position</label>
                    <select defaultValue="Bottom Right">
                      <option>Bottom Right</option>
                      <option>Bottom Left</option>
                      <option>Top Right</option>
                      <option>Top Left</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Agent Instructions */}
          <div className="instructions-section">
            <h2 className="section-title">Agent Instructions</h2>
            <p className="section-description">Define how the agent should behave and respond</p>
            <div className="instructions-field">
              <label>System Instructions</label>
              <textarea
                rows="8"
                defaultValue="You are a helpful admissions assistant for University. Your primary goal is to help prospective students navigate the enrollment process and convert inquiries into enrolled students.

Key behaviors:
- Be friendly, encouraging, and supportive
- Answer questions about admissions requirements, deadlines, and processes
- Guide users toward completing their application or submitting their deposit"
                onChange={() => setHasUnsavedChanges(true)}
              />
              <p className="field-help">These instructions guide the AI's behavior. Be specific about goals and boundaries.</p>
            </div>
          </div>

          {/* Agent Details & Escalation */}
          <div className="details-grid">
            <div className="details-card">
              <h3 className="details-card-title">Agent Details</h3>
              <div className="details-list">
                <div className="detail-row">
                  <span className="detail-label">Agent ID:</span>
                  <span className="detail-value">agent_adm_webchat_001</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Created:</span>
                  <span className="detail-value">Nov 15, 2025</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Last Modified:</span>
                  <span className="detail-value">Jan 2, 2026</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Created By:</span>
                  <span className="detail-value">Jane Doe</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Knowledge Base:</span>
                  <a href="#" className="detail-link">Enrollment KB →</a>
                </div>
              </div>
            </div>

            <div className="details-card">
              <h3 className="details-card-title">Escalation Settings</h3>
              <div className="escalation-field">
                <label>Escalate to Human When</label>
                <select defaultValue="Confidence below 70%">
                  <option>Confidence below 70%</option>
                  <option>Confidence below 80%</option>
                  <option>Confidence below 60%</option>
                  <option>User requests human</option>
                </select>
              </div>
              <div className="escalation-field">
                <label>Escalation Message</label>
                <textarea
                  rows="3"
                  defaultValue="I'd be happy to connect you with an admissions counselor. Please hold while I transfer you."
                  onChange={() => setHasUnsavedChanges(true)}
                />
              </div>
              <div className="escalation-field">
                <label>Route To</label>
                <select defaultValue="Admissions Team Queue">
                  <option>Admissions Team Queue</option>
                  <option>General Support Queue</option>
                  <option>Financial Aid Team</option>
                </select>
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          {hasUnsavedChanges && (
            <div className="footer-bar">
              <span className="unsaved-message">You have unsaved changes</span>
              <div className="footer-actions">
                <button className="discard-btn" onClick={() => setHasUnsavedChanges(false)}>
                  Discard Changes
                </button>
                <button className="save-btn" onClick={() => setHasUnsavedChanges(false)}>
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
