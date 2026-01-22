'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../../dashboard.css';
import '../../../enrollment-hub.css';
import './create.css';

export default function CreateCampaignPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [campaignName, setCampaignName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedChannels, setSelectedChannels] = useState(['Email']);
  const [sendSchedule, setSendSchedule] = useState('Schedule for Later');
  const [startDate, setStartDate] = useState('2026-01-15');
  const [sendTime, setSendTime] = useState('09:00');
  const [endDate, setEndDate] = useState('2026-05-01');
  const [timezone, setTimezone] = useState('EST');
  const [messageType, setMessageType] = useState('Generate with AI');
  const [messagePurpose, setMessagePurpose] = useState('');
  const [selectedPersonality, setSelectedPersonality] = useState(['Friendly', 'Encouraging']);
  const [selectedTone, setSelectedTone] = useState(['Warm', 'Professional']);
  const [schoolContext, setSchoolContext] = useState('');
  const [ctaButtons, setCtaButtons] = useState([
    { text: 'Confirm Your Spot →', url: 'https://university.edu/deposit' },
    { text: 'View Financial Aid', url: 'https://university.edu/finaid' }
  ]);

  const toggleChannel = (channel) => {
    setSelectedChannels(prev => 
      prev.includes(channel) 
        ? prev.filter(c => c !== channel)
        : [...prev, channel]
    );
  };

  const togglePersonality = (trait) => {
    setSelectedPersonality(prev => 
      prev.includes(trait) 
        ? prev.filter(t => t !== trait)
        : [...prev, trait]
    );
  };

  const toggleTone = (tone) => {
    setSelectedTone(prev => 
      prev.includes(tone) 
        ? prev.filter(t => t !== tone)
        : [...prev, tone]
    );
  };

  const addCtaButton = () => {
    setCtaButtons([...ctaButtons, { text: '', url: '' }]);
  };

  const removeCtaButton = (index) => {
    setCtaButtons(ctaButtons.filter((_, i) => i !== index));
  };

  const updateCtaButton = (index, field, value) => {
    const updated = [...ctaButtons];
    updated[index][field] = value;
    setCtaButtons(updated);
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
        <main className="create-campaign-main">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <a href="/enrollment-hub?tab=Campaigns">Campaigns</a>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-active">Create New Campaign</span>
          </div>

          {/* Progress Steps */}
          <div className="progress-steps">
            <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
              <div className="step-number">1</div>
              <div className="step-label">Campaign Details</div>
            </div>
            <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
              <div className="step-number">2</div>
              <div className="step-label">Create Message</div>
            </div>
            <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <div className="step-label">Review & Send</div>
            </div>
          </div>

          {/* Step 1: Campaign Details */}
          {step === 1 && (
            <div className="campaign-form">
              <div className="form-section">
                <h2 className="form-section-title">Campaign Details</h2>
                <p className="form-section-description">Set up the basic information and delivery settings for your campaign.</p>

                <div className="form-field">
                  <label>Campaign Name *</label>
                  <input
                    type="text"
                    placeholder="e.g., Fall 2026 Welcome Series"
                    value={campaignName}
                    onChange={(e) => setCampaignName(e.target.value)}
                  />
                  <p className="field-help">Choose a descriptive name that helps you identify this campaign later.</p>
                </div>

                <div className="form-field">
                  <label>Description (optional)</label>
                  <textarea
                    rows="3"
                    placeholder="Briefly describe the purpose and goals of this campaign..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="form-field">
                  <label>Delivery Channel *</label>
                  <p className="field-description">Select one or more channels to reach your audience.</p>
                  <div className="channel-cards">
                    <div
                      className={`channel-card ${selectedChannels.includes('Email') ? 'selected' : ''}`}
                      onClick={() => toggleChannel('Email')}
                    >
                      <div className="channel-icon">✉️</div>
                      <div className="channel-name">Email</div>
                      <div className="channel-description">Rich content & attachments</div>
                      {selectedChannels.includes('Email') && <div className="channel-check">✓</div>}
                    </div>
                    <div
                      className={`channel-card ${selectedChannels.includes('SMS') ? 'selected' : ''}`}
                      onClick={() => toggleChannel('SMS')}
                    >
                      <div className="channel-icon">💬</div>
                      <div className="channel-name">SMS</div>
                      <div className="channel-description">Quick text messages</div>
                      {selectedChannels.includes('SMS') && <div className="channel-check">✓</div>}
                    </div>
                    <div
                      className={`channel-card ${selectedChannels.includes('WhatsApp') ? 'selected' : ''}`}
                      onClick={() => toggleChannel('WhatsApp')}
                    >
                      <div className="channel-icon">💚</div>
                      <div className="channel-name">WhatsApp</div>
                      <div className="channel-description">Interactive messaging</div>
                      {selectedChannels.includes('WhatsApp') && <div className="channel-check">✓</div>}
                    </div>
                    <div
                      className={`channel-card ${selectedChannels.includes('Voice') ? 'selected' : ''}`}
                      onClick={() => toggleChannel('Voice')}
                    >
                      <div className="channel-icon">📞</div>
                      <div className="channel-name">Voice</div>
                      <div className="channel-description">Automated phone calls</div>
                      {selectedChannels.includes('Voice') && <div className="channel-check">✓</div>}
                    </div>
                  </div>
                </div>

                <div className="form-field">
                  <label>Send Schedule *</label>
                  <p className="field-description">When should this campaign be delivered?</p>
                  <div className="schedule-cards">
                    <div
                      className={`schedule-card ${sendSchedule === 'Send Immediately' ? 'selected' : ''}`}
                      onClick={() => setSendSchedule('Send Immediately')}
                    >
                      <div className="schedule-icon">🚀</div>
                      <div className="schedule-name">Send Immediately</div>
                      <div className="schedule-description">Send to all recipients right now</div>
                    </div>
                    <div
                      className={`schedule-card ${sendSchedule === 'Schedule for Later' ? 'selected' : ''}`}
                      onClick={() => setSendSchedule('Schedule for Later')}
                    >
                      <div className="schedule-icon">📅</div>
                      <div className="schedule-name">Schedule for Later</div>
                      <div className="schedule-description">Pick a specific date and time</div>
                    </div>
                    <div
                      className={`schedule-card ${sendSchedule === 'Recurring' ? 'selected' : ''}`}
                      onClick={() => setSendSchedule('Recurring')}
                    >
                      <div className="schedule-icon">🔄</div>
                      <div className="schedule-name">Recurring</div>
                      <div className="schedule-description">Repeat on a set frequency</div>
                    </div>
                  </div>
                </div>

                {sendSchedule === 'Schedule for Later' && (
                  <div className="form-field">
                    <label>Schedule Date & Time</label>
                    <div className="schedule-inputs">
                      <div className="schedule-input-group">
                        <label className="input-label">Start Date</label>
                        <div className="input-with-icon">
                          <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                          />
                          <span className="input-icon">📅</span>
                        </div>
                      </div>
                      <div className="schedule-input-group">
                        <label className="input-label">Send Time</label>
                        <div className="input-with-icon">
                          <input
                            type="time"
                            value={sendTime}
                            onChange={(e) => setSendTime(e.target.value)}
                          />
                          <span className="input-icon">🕐</span>
                        </div>
                      </div>
                      <div className="schedule-input-group">
                        <label className="input-label">End Date (optional)</label>
                        <div className="input-with-icon">
                          <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                          />
                          <span className="input-icon">📅</span>
                        </div>
                      </div>
                      <div className="schedule-input-group">
                        <label className="input-label">Timezone</label>
                        <select
                          value={timezone}
                          onChange={(e) => setTimezone(e.target.value)}
                          className="timezone-select"
                        >
                          <option>Eastern Time (EST)</option>
                          <option>Central Time (CST)</option>
                          <option>Mountain Time (MST)</option>
                          <option>Pacific Time (PST)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {sendSchedule === 'Recurring' && (
                  <div className="form-field">
                    <label>Recurring Schedule</label>
                    <p className="field-description">Set up recurring delivery schedule</p>
                    <div className="recurring-options">
                      <select className="recurring-select">
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                      </select>
                      <input type="time" className="recurring-time" defaultValue="09:00" />
                      <select className="timezone-select">
                        <option>Eastern Time (EST)</option>
                        <option>Central Time (CST)</option>
                        <option>Mountain Time (MST)</option>
                        <option>Pacific Time (PST)</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="form-field">
                  <label>Target Audience *</label>
                  <div className="audience-selector">
                    <div className="audience-icon">👥</div>
                    <div className="audience-text">
                      <div className="audience-main-text">Select or import your recipient list</div>
                      <div className="audience-sub-text">Audience selection feature coming soon</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button className="cancel-btn" onClick={() => router.push('/enrollment-hub?tab=Campaigns')}>
                  ← Cancel
                </button>
                <button className="continue-btn" onClick={() => setStep(2)}>
                  Continue to Message →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Create Message */}
          {step === 2 && (
            <div className="campaign-form">
              <div className="form-section">
                <h2 className="form-section-title">Create Your Message</h2>
                <p className="form-section-description">Design the content that will be sent to your audience.</p>

                <div className="form-field">
                  <label>How would you like to create your message?</label>
                  <div className="message-type-cards">
                    <div
                      className={`message-type-card ${messageType === 'Use a Template' ? 'selected' : ''}`}
                      onClick={() => setMessageType('Use a Template')}
                    >
                      <div className="message-type-icon">📋</div>
                      <div className="message-type-name">Use a Template</div>
                      <div className="message-type-description">Start from a pre-built template and customize it for your needs.</div>
                    </div>
                    <div
                      className={`message-type-card ${messageType === 'Generate with AI' ? 'selected' : ''}`}
                      onClick={() => setMessageType('Generate with AI')}
                    >
                      <div className="message-type-icon">✨</div>
                      <div className="message-type-name">Generate with AI</div>
                      <div className="message-type-description">Describe what you want and let AI create a personalized message.</div>
                      <span className="recommended-badge">Recommended</span>
                    </div>
                  </div>
                </div>

                <div className="form-field">
                  <label>What should this message communicate? *</label>
                  <textarea
                    rows="5"
                    placeholder="Describe the purpose and key points of your message. Be specific about what you want recipients to know or do."
                    value={messagePurpose}
                    onChange={(e) => setMessagePurpose(e.target.value)}
                  />
                  <p className="field-help">Example: Welcome newly admitted students to the university, congratulate them on their acceptance, and encourage them to submit their enrollment deposit before the deadline. Include information about next steps like housing and financial aid.</p>
                  <p className="field-help">The more detail you provide, the better the AI can craft your message.</p>
                </div>

                <div className="form-field">
                  <label>Message Personality</label>
                  <p className="field-description">Select traits that describe how the message should come across.</p>
                  <div className="tag-selector">
                    {['Friendly', 'Encouraging', 'Formal', 'Casual', 'Informative', 'Urgent', 'Celebratory', 'Supportive'].map(trait => (
                      <button
                        key={trait}
                        className={`personality-tag ${selectedPersonality.includes(trait) ? 'selected' : ''}`}
                        onClick={() => togglePersonality(trait)}
                      >
                        {trait}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-field">
                  <label>Tone of Voice</label>
                  <p className="field-description">How should the message feel to readers?</p>
                  <div className="tag-selector">
                    {['Warm', 'Professional', 'Enthusiastic', 'Empathetic', 'Confident', 'Reassuring', 'Direct'].map(tone => (
                      <button
                        key={tone}
                        className={`tone-tag ${selectedTone.includes(tone) ? 'selected' : ''}`}
                        onClick={() => toggleTone(tone)}
                      >
                        {tone}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-field">
                  <label>School-Specific Context (optional)</label>
                  <p className="field-description">Include any school-specific details the AI should know about...</p>
                  <textarea
                    rows="4"
                    placeholder="Example: Our school mascot is the Golden Eagles. Our colors are blue and gold. We're known for our strong business program and Division I athletics."
                    value={schoolContext}
                    onChange={(e) => setSchoolContext(e.target.value)}
                  />
                </div>

                <div className="form-field">
                  <label>Call-to-Action Buttons</label>
                  <p className="field-description">Add buttons to drive action from your recipients</p>
                  {ctaButtons.map((button, index) => (
                    <div key={index} className="cta-button-row">
                      <div className="cta-input-group">
                        <label className="cta-label">Button Text</label>
                        <input
                          type="text"
                          value={button.text}
                          onChange={(e) => updateCtaButton(index, 'text', e.target.value)}
                          placeholder="Button text"
                        />
                      </div>
                      <div className="cta-input-group">
                        <label className="cta-label">Destination URL</label>
                        <input
                          type="text"
                          value={button.url}
                          onChange={(e) => updateCtaButton(index, 'url', e.target.value)}
                          placeholder="https://..."
                        />
                      </div>
                      <button className="remove-cta-btn" onClick={() => removeCtaButton(index)}>×</button>
                    </div>
                  ))}
                  <button className="add-cta-btn" onClick={addCtaButton}>+ Add Another Button</button>
                </div>

                <div className="form-field">
                  <label>Additional Branding (optional)</label>
                  <div className="branding-cards">
                    <div className="branding-card">
                      <div className="branding-icon">🎨</div>
                      <div className="branding-name">Upload Logo</div>
                    </div>
                    <div className="branding-card">
                      <div className="branding-icon">🖼️</div>
                      <div className="branding-name">Add Header Image</div>
                    </div>
                    <div className="branding-card">
                      <div className="branding-icon">Aa</div>
                      <div className="branding-name">Custom Fonts</div>
                    </div>
                  </div>
                </div>

                {messagePurpose && (
                  <div className="generate-section">
                    <div className="generate-header">
                      <span className="generate-icon">🤖</span>
                      <div>
                        <h3 className="generate-title">Ready to Generate Your Message</h3>
                        <p className="generate-description">Based on your inputs, our AI will create a personalized message that matches your personality, tone, and school identity. You can review and edit before sending.</p>
                      </div>
                    </div>
                    <button className="generate-btn">
                      <span>✨</span>
                      Generate Message with AI
                    </button>
                  </div>
                )}
              </div>
              <div className="form-actions">
                <button className="cancel-btn" onClick={() => setStep(1)}>
                  ← Back to Campaign Details
                </button>
                <button className="continue-btn" onClick={() => setStep(3)}>
                  Review Campaign →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Review & Send */}
          {step === 3 && (
            <div className="review-page">
              <div className="review-content">
                {/* Message Preview */}
                <div className="message-preview-panel">
                  <h2 className="panel-title">Message Preview</h2>
                  <div className="email-preview-box">
                    <div className="email-header-preview">
                      <div className="email-from">From: admissions@university.edu</div>
                      <div className="email-to">To: {'{{recipient_email}}'}</div>
                      <div className="email-subject">Subject: 🎉 Welcome to the University Family, {'{{First Name}}'}!</div>
                    </div>
                    <div className="email-body-preview">
                      <p>Hi {'{{First Name}}'},</p>
                      <p>Congratulations on your admission to University! We're absolutely thrilled to welcome you to our community of scholars, innovators, and future leaders.</p>
                      <p>Your journey to becoming a Golden Eagle starts now, and we're here to support you every step of the way. Here's what you should do next:</p>
                      <ol>
                        <li>Submit your enrollment deposit by May 1, 2026</li>
                        <li>Complete your housing application</li>
                        <li>Review your financial aid package</li>
                      </ol>
                      <p>We know you have questions, and our admissions team is ready to help!</p>
                      <div className="email-cta-buttons">
                        <button className="email-cta">Confirm Your Spot →</button>
                        <button className="email-cta">View Financial Aid</button>
                      </div>
                      <p>Welcome to the family!</p>
                      <p>The University Admissions Team</p>
                      <div className="email-footer">
                        <p>University | 123 Campus Drive | City, State 12345</p>
                        <a href="#" className="unsubscribe-link">Unsubscribe from enrollment communications</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Campaign Summary */}
                <div className="campaign-summary-panel">
                  <h2 className="panel-title">{campaignName || 'Fall 2026 Welcome Series'}</h2>
                  <p className="panel-subtitle">Review your campaign before sending.</p>
                  
                  <div className="ready-banner">
                    <span className="ready-check">✓</span>
                    <span>Campaign is ready to send</span>
                  </div>

                  <div className="summary-section">
                    <div className="summary-header">
                      <h3 className="summary-title">CAMPAIGN DETAILS</h3>
                      <a href="#" className="edit-link" onClick={(e) => { e.preventDefault(); setStep(1); }}>Edit →</a>
                    </div>
                    <div className="summary-details">
                      <div className="summary-item">
                        <span className="summary-label">Channel:</span>
                        <span className="summary-value">{selectedChannels.join(', ')}</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Schedule:</span>
                        <span className="summary-value">{sendSchedule === 'Schedule for Later' ? 'Scheduled' : sendSchedule}</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Start Date:</span>
                        <span className="summary-value">{new Date(startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Send Time:</span>
                        <span className="summary-value">{sendTime} {timezone}</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">End Date:</span>
                        <span className="summary-value">{new Date(endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Frequency:</span>
                        <span className="summary-value">Daily</span>
                      </div>
                    </div>
                  </div>

                  <div className="summary-section">
                    <div className="summary-header">
                      <h3 className="summary-title">AUDIENCE</h3>
                      <a href="#" className="edit-link" onClick={(e) => { e.preventDefault(); setStep(1); }}>Edit →</a>
                    </div>
                    <div className="summary-details">
                      <div className="summary-item">
                        <span className="summary-label">Recipients:</span>
                        <span className="summary-value">2,847</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Segment:</span>
                        <span className="summary-value">Admitted Fall 2026</span>
                      </div>
                    </div>
                  </div>

                  <div className="summary-section">
                    <div className="summary-header">
                      <h3 className="summary-title">MESSAGE SETTINGS</h3>
                      <a href="#" className="edit-link" onClick={(e) => { e.preventDefault(); setStep(2); }}>Edit →</a>
                    </div>
                    <div className="summary-details">
                      <div className="summary-item">
                        <span className="summary-label">Personality:</span>
                        <div className="summary-tags">
                          {selectedPersonality.map(p => <span key={p} className="summary-tag">{p}</span>)}
                        </div>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Tone:</span>
                        <div className="summary-tags">
                          {selectedTone.map(t => <span key={t} className="summary-tag">{t}</span>)}
                        </div>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">CTAs:</span>
                        <span className="summary-value">{ctaButtons.length} buttons</span>
                      </div>
                    </div>
                  </div>

                  <div className="summary-section">
                    <div className="summary-header">
                      <h3 className="summary-title">COMPLIANCE</h3>
                    </div>
                    <div className="summary-details">
                      <div className="summary-item">
                        <span className="summary-label">Unsubscribe Link:</span>
                        <span className="summary-value compliance-check">✓ Included</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Physical Address:</span>
                        <span className="summary-value compliance-check">✓ Included</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="review-actions">
                <a href="#" className="back-link" onClick={(e) => { e.preventDefault(); setStep(2); }}>
                  ← Back to Edit Message
                </a>
                <div className="review-action-buttons">
                  <button className="test-email-btn">Send Test Email</button>
                  <button className="save-draft-btn">Save as Draft</button>
                  <button className="schedule-campaign-btn" onClick={() => router.push('/enrollment-hub/campaigns/fall-2026-welcome')}>
                    <span>🚀</span>
                    Schedule Campaign
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
