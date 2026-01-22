'use client';

import { useState } from 'react';
import '../dashboard.css';
import '../enrollment-hub.css';
import './settings.css';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Profile');
  const [profileData, setProfileData] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@university.edu',
    role: 'Administrator',
    avatar: 'JD'
  });
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    weeklyDigest: true
  });

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
            <a href="/audit-logs" className="nav-item">
              <span className="nav-icon">📄</span>
              <span>Audit Logs</span>
            </a>
            <a href="/settings" className="nav-item active">
              <span className="nav-icon">⚙️</span>
              <span>Settings</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="settings-main">
          {/* Page Header */}
          <div className="settings-page-header">
            <div>
              <h1 className="page-title">Settings</h1>
              <p className="page-subtitle">Manage your account and preferences</p>
            </div>
          </div>

          {/* Settings Tabs */}
          <div className="settings-tabs">
            <button
              className={`settings-tab ${activeTab === 'Profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('Profile')}
            >
              Profile
            </button>
            <button
              className={`settings-tab ${activeTab === 'Account' ? 'active' : ''}`}
              onClick={() => setActiveTab('Account')}
            >
              Account
            </button>
            <button
              className={`settings-tab ${activeTab === 'Preferences' ? 'active' : ''}`}
              onClick={() => setActiveTab('Preferences')}
            >
              Preferences
            </button>
            <button
              className={`settings-tab ${activeTab === 'Organization' ? 'active' : ''}`}
              onClick={() => setActiveTab('Organization')}
            >
              Organization
            </button>
            <button
              className={`settings-tab ${activeTab === 'Security' ? 'active' : ''}`}
              onClick={() => setActiveTab('Security')}
            >
              Security
            </button>
            <button
              className={`settings-tab ${activeTab === 'Integrations' ? 'active' : ''}`}
              onClick={() => setActiveTab('Integrations')}
            >
              Integrations
            </button>
          </div>

          {/* Tab Content */}
          <div className="settings-content">
            {activeTab === 'Profile' && (
              <div className="settings-tab-content">
                <div className="settings-card">
                  <h3 className="settings-card-title">Profile Information</h3>
                  <div className="profile-section">
                    <div className="profile-avatar-large">
                      <div className="avatar-circle">{profileData.avatar}</div>
                      <button className="change-avatar-btn">Change Photo</button>
                    </div>
                    <div className="profile-form">
                      <div className="form-field">
                        <label>Full Name</label>
                        <input
                          type="text"
                          value={profileData.name}
                          onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                          className="settings-input"
                        />
                      </div>
                      <div className="form-field">
                        <label>Email Address</label>
                        <input
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                          className="settings-input"
                        />
                      </div>
                      <div className="form-field">
                        <label>Role</label>
                        <input
                          type="text"
                          value={profileData.role}
                          readOnly
                          className="settings-input"
                          style={{ background: '#f3f4f6', cursor: 'not-allowed' }}
                        />
                      </div>
                      <div className="form-field">
                        <label>Bio</label>
                        <textarea
                          rows="4"
                          className="settings-textarea"
                          placeholder="Tell us about yourself..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Account' && (
              <div className="settings-tab-content">
                <div className="settings-card">
                  <h3 className="settings-card-title">Password</h3>
                  <div className="settings-form">
                    <div className="form-field">
                      <label>Current Password</label>
                      <input type="password" className="settings-input" />
                    </div>
                    <div className="form-field">
                      <label>New Password</label>
                      <input type="password" className="settings-input" />
                    </div>
                    <div className="form-field">
                      <label>Confirm New Password</label>
                      <input type="password" className="settings-input" />
                    </div>
                    <button className="update-password-btn">Update Password</button>
                  </div>
                </div>

                <div className="settings-card">
                  <h3 className="settings-card-title">Two-Factor Authentication</h3>
                  <div className="settings-form">
                    <div className="settings-toggle-item">
                      <div className="toggle-info">
                        <div className="toggle-label">Enable 2FA</div>
                        <div className="toggle-description">Add an extra layer of security to your account</div>
                      </div>
                      <label className="toggle-switch">
                        <input type="checkbox" />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="settings-card">
                  <h3 className="settings-card-title">Active Sessions</h3>
                  <div className="sessions-list">
                    <div className="session-item">
                      <div className="session-info">
                        <div className="session-device">Chrome on Windows</div>
                        <div className="session-details">192.168.1.45 • Current session</div>
                        <div className="session-time">Active now</div>
                      </div>
                      <button className="session-action-btn">Revoke</button>
                    </div>
                    <div className="session-item">
                      <div className="session-info">
                        <div className="session-device">Safari on Mac</div>
                        <div className="session-details">192.168.1.52 • Last active 2 hours ago</div>
                        <div className="session-time">2 hours ago</div>
                      </div>
                      <button className="session-action-btn">Revoke</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Preferences' && (
              <div className="settings-tab-content">
                <div className="settings-card">
                  <h3 className="settings-card-title">Appearance</h3>
                  <div className="settings-form">
                    <div className="form-field">
                      <label>Theme</label>
                      <div className="theme-options">
                        <button className="theme-option active">
                          <span className="theme-icon">☀️</span>
                          <span>Light</span>
                        </button>
                        <button className="theme-option">
                          <span className="theme-icon">🌙</span>
                          <span>Dark</span>
                        </button>
                        <button className="theme-option">
                          <span className="theme-icon">💻</span>
                          <span>System</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="settings-card">
                  <h3 className="settings-card-title">Notifications</h3>
                  <div className="settings-form">
                    <div className="settings-toggle-item">
                      <div className="toggle-info">
                        <div className="toggle-label">Email Notifications</div>
                        <div className="toggle-description">Receive notifications via email</div>
                      </div>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={notifications.email}
                          onChange={(e) => setNotifications({...notifications, email: e.target.checked})}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                    <div className="settings-toggle-item">
                      <div className="toggle-info">
                        <div className="toggle-label">SMS Notifications</div>
                        <div className="toggle-description">Receive notifications via SMS</div>
                      </div>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={notifications.sms}
                          onChange={(e) => setNotifications({...notifications, sms: e.target.checked})}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                    <div className="settings-toggle-item">
                      <div className="toggle-info">
                        <div className="toggle-label">Push Notifications</div>
                        <div className="toggle-description">Receive browser push notifications</div>
                      </div>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={notifications.push}
                          onChange={(e) => setNotifications({...notifications, push: e.target.checked})}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                    <div className="settings-toggle-item">
                      <div className="toggle-info">
                        <div className="toggle-label">Weekly Digest</div>
                        <div className="toggle-description">Receive weekly summary emails</div>
                      </div>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={notifications.weeklyDigest}
                          onChange={(e) => setNotifications({...notifications, weeklyDigest: e.target.checked})}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="settings-card">
                  <h3 className="settings-card-title">Localization</h3>
                  <div className="settings-form">
                    <div className="form-field">
                      <label>Language</label>
                      <select className="settings-select">
                        <option>English (US)</option>
                        <option>English (UK)</option>
                        <option>Spanish</option>
                        <option>French</option>
                      </select>
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
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Organization' && (
              <div className="settings-tab-content">
                <div className="settings-card">
                  <h3 className="settings-card-title">Organization Details</h3>
                  <div className="settings-form">
                    <div className="form-field">
                      <label>Organization Name</label>
                      <input type="text" defaultValue="Unifuse University" className="settings-input" />
                    </div>
                    <div className="form-field">
                      <label>Organization Email</label>
                      <input type="email" defaultValue="contact@unifuse.edu" className="settings-input" />
                    </div>
                    <div className="form-field">
                      <label>Organization Website</label>
                      <input type="url" defaultValue="https://unifuse.edu" className="settings-input" />
                    </div>
                    <div className="form-field">
                      <label>Organization Logo</label>
                      <div className="logo-upload">
                        <div className="logo-preview">UN</div>
                        <div>
                          <button className="upload-logo-btn">Upload New Logo</button>
                          <p className="upload-hint">Recommended: 200x200px, PNG or SVG</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="settings-card">
                  <h3 className="settings-card-title">Subscription</h3>
                  <div className="subscription-info">
                    <div className="subscription-plan">
                      <div className="plan-name">Enterprise Plan</div>
                      <div className="plan-price">$999/month</div>
                    </div>
                    <div className="subscription-details">
                      <div className="detail-item">
                        <span className="detail-label">Billing Cycle:</span>
                        <span className="detail-value">Monthly</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Next Billing Date:</span>
                        <span className="detail-value">February 1, 2026</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Payment Method:</span>
                        <span className="detail-value">•••• •••• •••• 4242</span>
                      </div>
                    </div>
                    <div className="subscription-actions">
                      <button className="subscription-btn">Update Payment Method</button>
                      <button className="subscription-btn secondary">View Billing History</button>
                    </div>
                  </div>
                </div>

                <div className="settings-card">
                  <h3 className="settings-card-title">Team Management</h3>
                  <div className="team-stats">
                    <div className="team-stat">
                      <div className="team-stat-value">12</div>
                      <div className="team-stat-label">Team Members</div>
                    </div>
                    <div className="team-stat">
                      <div className="team-stat-value">5</div>
                      <div className="team-stat-label">Admins</div>
                    </div>
                    <div className="team-stat">
                      <div className="team-stat-value">7</div>
                      <div className="team-stat-label">Editors</div>
                    </div>
                  </div>
                  <button className="manage-team-btn">Manage Team</button>
                </div>
              </div>
            )}

            {activeTab === 'Security' && (
              <div className="settings-tab-content">
                <div className="settings-card">
                  <h3 className="settings-card-title">API Keys</h3>
                  <div className="api-keys-list">
                    <div className="api-key-item">
                      <div className="api-key-info">
                        <div className="api-key-name">Production API Key</div>
                        <div className="api-key-value">sk_live_••••••••••••••••••••••••</div>
                        <div className="api-key-meta">Created on Jan 1, 2026 • Last used 2 hours ago</div>
                      </div>
                      <div className="api-key-actions">
                        <button className="api-key-btn">Copy</button>
                        <button className="api-key-btn">Regenerate</button>
                        <button className="api-key-btn danger">Delete</button>
                      </div>
                    </div>
                    <div className="api-key-item">
                      <div className="api-key-info">
                        <div className="api-key-name">Test API Key</div>
                        <div className="api-key-value">sk_test_••••••••••••••••••••••••</div>
                        <div className="api-key-meta">Created on Dec 15, 2025 • Last used 5 days ago</div>
                      </div>
                      <div className="api-key-actions">
                        <button className="api-key-btn">Copy</button>
                        <button className="api-key-btn">Regenerate</button>
                        <button className="api-key-btn danger">Delete</button>
                      </div>
                    </div>
                  </div>
                  <button className="create-api-key-btn">+ Create New API Key</button>
                </div>

                <div className="settings-card">
                  <h3 className="settings-card-title">Connected Devices</h3>
                  <div className="devices-list">
                    <div className="device-item">
                      <div className="device-icon">💻</div>
                      <div className="device-info">
                        <div className="device-name">Windows PC</div>
                        <div className="device-details">Chrome • 192.168.1.45 • Current device</div>
                      </div>
                      <button className="device-action-btn">Revoke</button>
                    </div>
                    <div className="device-item">
                      <div className="device-icon">📱</div>
                      <div className="device-info">
                        <div className="device-name">iPhone 14</div>
                        <div className="device-details">Safari • Last active 1 day ago</div>
                      </div>
                      <button className="device-action-btn">Revoke</button>
                    </div>
                  </div>
                </div>

                <div className="settings-card">
                  <h3 className="settings-card-title">Security Settings</h3>
                  <div className="settings-form">
                    <div className="settings-toggle-item">
                      <div className="toggle-info">
                        <div className="toggle-label">Require Password Change</div>
                        <div className="toggle-description">Force password change every 90 days</div>
                      </div>
                      <label className="toggle-switch">
                        <input type="checkbox" />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                    <div className="settings-toggle-item">
                      <div className="toggle-info">
                        <div className="toggle-label">Login Alerts</div>
                        <div className="toggle-description">Email notification for new device logins</div>
                      </div>
                      <label className="toggle-switch">
                        <input type="checkbox" defaultChecked />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Integrations' && (
              <div className="settings-tab-content">
                <div className="settings-card">
                  <h3 className="settings-card-title">Quick Access</h3>
                  <p className="settings-description">Manage your integrations and connected services</p>
                  <a href="/integrations" className="integrations-link-btn">
                    Go to Integrations →
                  </a>
                </div>

                <div className="settings-card">
                  <h3 className="settings-card-title">Connected Services</h3>
                  <div className="connected-services">
                    <div className="service-item">
                      <div className="service-icon">📊</div>
                      <div className="service-info">
                        <div className="service-name">Slate CRM</div>
                        <div className="service-status">Connected</div>
                      </div>
                      <button className="service-action-btn">Configure</button>
                    </div>
                    <div className="service-item">
                      <div className="service-icon">🎓</div>
                      <div className="service-info">
                        <div className="service-name">Banner SIS</div>
                        <div className="service-status">Connected</div>
                      </div>
                      <button className="service-action-btn">Configure</button>
                    </div>
                    <div className="service-item">
                      <div className="service-icon">📱</div>
                      <div className="service-info">
                        <div className="service-name">Twilio</div>
                        <div className="service-status">Connected</div>
                      </div>
                      <button className="service-action-btn">Configure</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="settings-actions">
              <button className="cancel-settings-btn">Cancel</button>
              <button className="save-settings-btn">Save Changes</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
