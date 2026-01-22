'use client';

import { useRouter } from 'next/navigation';
import '../../../dashboard.css';
import '../../../enrollment-hub.css';
import './create-agent.css';

export default function CreateAgentPage() {
  const router = useRouter();

  const templates = [
    {
      id: 'website-chat',
      title: 'Website Chat Agent',
      icon: '🌐',
      description: '24/7 chat widget for your admissions website. Answers questions, captures leads, and guides visitors through the application process.',
      features: ['Lead capture', 'KB-powered', 'Human handoff', 'Multi-language'],
      bestFor: 'Converting website visitors into applicants. Answer FAQs, share deadlines, and encourage applications.',
      tag: 'Most Popular',
      tagColor: 'green'
    },
    {
      id: 'inbound-voice',
      title: 'Inbound Voice Agent',
      icon: '📞',
      description: 'AI-powered phone line that handles incoming calls, answers questions, and routes complex inquiries to your team.',
      features: ['24/7 availability', 'Call routing', 'Transcription', 'Multi-language'],
      bestFor: 'Handling high call volume during peak enrollment season. Never miss a prospective student call again.',
      tag: 'New',
      tagColor: 'blue'
    },
    {
      id: 'sms-imessage',
      title: 'SMS/iMessage Agent',
      icon: '💬',
      description: 'Text-based conversational agent that meets students where they are — on their phones. Perfect for quick updates and reminders.',
      features: ['2-way texting', 'Instant responses', 'Link sharing', 'Appointment scheduling'],
      bestFor: 'Engaging Gen Z students who prefer texting. Send reminders, answer quick questions, and drive action.'
    },
    {
      id: 'email-inbox',
      title: 'Email Inbox Agent',
      icon: '✉️',
      description: 'Monitors your admissions inbox, auto-responds to common inquiries, and drafts replies for complex questions.',
      features: ['Inbox monitoring', 'Auto-replies', 'Draft suggestions', 'Sentiment analysis'],
      bestFor: 'Reducing email response time and workload. Auto-handle routine inquiries, flag urgent messages.'
    },
    {
      id: 'outbound-voice',
      title: 'Outbound Voice Agent',
      icon: '📢',
      description: 'Proactively calls prospects with reminders, follow-ups, and important updates. Scheduled or triggered by events.',
      features: ['Scheduled calls', 'Event triggers', 'Voicemail detection', 'Callback requests'],
      bestFor: 'Deposit deadline reminders, application follow-ups, and re-engaging cold leads.'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Agent',
      icon: '💚',
      description: 'Global messaging agent for international student recruitment. Rich media support and high engagement rates.',
      features: ['Rich media', 'Document sharing', 'Global reach', 'End-to-end encrypted'],
      bestFor: 'International student recruitment where WhatsApp is the preferred communication channel.'
    }
  ];

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
        <main className="create-agent-main">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <a href="/enrollment-hub?tab=Conversations">Conversations</a>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-active">Create New Agent</span>
          </div>

          {/* Page Header */}
          <div className="create-agent-header">
            <h1 className="page-title">Create a New AI Agent</h1>
            <p className="page-description">Choose a template to get started quickly, or build from scratch.</p>
          </div>

          {/* Info Banner */}
          <div className="info-banner">
            <span className="info-icon">💡</span>
            <div className="info-content">
              <strong>Enrollment Hub Templates.</strong> These templates are pre-configured to help nurture prospective students through your enrollment funnel — from initial inquiry to deposited student. Each agent is powered by your Knowledge Base and optimized for enrollment conversations.
            </div>
          </div>

          {/* Templates Section */}
          <div className="templates-section">
            <h2 className="section-title">UNIFUSE ENROLLMENT TEMPLATES</h2>
            <div className="templates-grid">
              {templates.map(template => (
                <div key={template.id} className="template-card">
                  {template.tag && (
                    <span className={`template-tag ${template.tagColor}`}>{template.tag}</span>
                  )}
                  <div className="template-icon">{template.icon}</div>
                  <h3 className="template-title">{template.title}</h3>
                  <p className="template-description">{template.description}</p>
                  <div className="template-features">
                    {template.features.map((feature, index) => (
                      <div key={index} className="template-feature">
                        <span className="feature-check">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="template-best-for">
                    <span className="best-for-icon">🎯</span>
                    <span className="best-for-text">{template.bestFor}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Separator */}
          <div className="separator">
            <div className="separator-line"></div>
            <span className="separator-text">OR</span>
            <div className="separator-line"></div>
          </div>

          {/* Build from Scratch */}
          <div className="build-from-scratch">
            <div className="scratch-card">
              <div className="scratch-icon">✨</div>
              <h3 className="scratch-title">Build from Scratch</h3>
              <p className="scratch-description">Create a custom agent with your own configuration. Full control over instructions, tone, and behavior. Recommended for advanced users.</p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="create-agent-footer">
            <button className="cancel-btn" onClick={() => router.push('/enrollment-hub?tab=Conversations')}>
              ← Cancel
            </button>
            <button className="continue-btn" onClick={() => router.push('/enrollment-hub/conversations/admissions-webchat')}>
              Continue with Template →
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
