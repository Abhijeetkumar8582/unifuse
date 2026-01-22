'use client';

import { useState } from 'react';
import '../../../dashboard.css';
import '../../../enrollment-hub.css';
import './review.css';

export default function ReviewQueuePage() {
  const [selectedStudent, setSelectedStudent] = useState('marcus-chen');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [gpaScale, setGpaScale] = useState('5.0 Weighted');
  const [normalizedGpa, setNormalizedGpa] = useState('3.92');
  const [notes, setNotes] = useState('');

  const students = [
    {
      id: 'emily-rodriguez',
      name: 'Emily Rodriguez',
      studentId: 'STU-2026-4521',
      school: 'Lincoln High School',
      issue: 'Scan Quality',
      issueColor: 'red',
      uploaded: '2 hours ago'
    },
    {
      id: 'marcus-chen',
      name: 'Marcus Chen',
      studentId: 'STU-2026-4522',
      school: 'Washington Academy',
      issue: 'GPA Scale',
      issueColor: 'yellow',
      uploaded: '3 hours ago'
    }
  ];

  const selectedStudentData = students.find(s => s.id === selectedStudent);

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
        <main className="review-queue-main">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <a href="/enrollment-hub?tab=Doc Processing">Document Processing</a>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-active">HITL Review Queue</span>
          </div>

          {/* Page Header */}
          <div className="review-header">
            <div>
              <h1 className="review-title">Human-in-the-Loop Review</h1>
              <p className="review-description">Review and correct transcript extractions that require manual verification</p>
            </div>
          </div>

          {/* Metrics */}
          <div className="review-metrics">
            <div className="review-metric-card">
              <div className="review-metric-icon">🏆</div>
              <div className="review-metric-value">35</div>
              <div className="review-metric-label">Pending Review</div>
            </div>
            <div className="review-metric-card">
              <div className="review-metric-icon">✓</div>
              <div className="review-metric-value">142</div>
              <div className="review-metric-label">Reviewed Today</div>
            </div>
            <div className="review-metric-card">
              <div className="review-metric-icon">⏱️</div>
              <div className="review-metric-value">2.3 min</div>
              <div className="review-metric-label">Avg Review Time</div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="review-filters">
            <input
              type="text"
              className="review-search"
              placeholder="Search by student name or ID..."
            />
            <select className="review-filter">
              <option>All Issues</option>
              <option>GPA Scale</option>
              <option>Scan Quality</option>
              <option>Missing Credits</option>
            </select>
            <select className="review-filter">
              <option>All Schools</option>
              <option>Lincoln High School</option>
              <option>Washington Academy</option>
            </select>
          </div>

          {/* Review Content Grid */}
          <div className="review-content-grid">
            {/* Student List */}
            <div className="student-list-panel">
              <table className="students-table">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>School</th>
                    <th>Issue</th>
                    <th>Uploaded</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <tr
                      key={student.id}
                      className={selectedStudent === student.id ? 'selected' : ''}
                      onClick={() => setSelectedStudent(student.id)}
                    >
                      <td>
                        <div className="student-info">
                          <div className="student-name">{student.name}</div>
                          <div className="student-id">{student.studentId}</div>
                        </div>
                        {selectedStudent === student.id && <span className="expand-icon">▼</span>}
                        {selectedStudent !== student.id && <span className="play-icon">▶</span>}
                      </td>
                      <td>{student.school}</td>
                      <td>
                        <span className={`issue-badge ${student.issueColor}`}>{student.issue}</span>
                      </td>
                      <td>{student.uploaded}</td>
                      <td>
                        <button className="review-btn">Review</button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td>
                      <div className="student-info">
                        <div className="student-name">Aisha Patel</div>
                        <div className="student-id">STU-2026-4523</div>
                      </div>
                      <span className="play-icon">▶</span>
                    </td>
                    <td>International Baccalaureate</td>
                    <td>
                      <span className="issue-badge purple">Int'l Format</span>
                    </td>
                    <td>4 hours ago</td>
                    <td>
                      <button className="review-btn">Review</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="student-info">
                        <div className="student-name">Jordan Williams</div>
                        <div className="student-id">STU-2026-4524</div>
                      </div>
                      <span className="play-icon">▶</span>
                    </td>
                    <td>Central High School</td>
                    <td>
                      <span className="issue-badge blue">Missing Credits</span>
                    </td>
                    <td>5 hours ago</td>
                    <td>
                      <button className="review-btn">Review</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="student-info">
                        <div className="student-name">Sarah Kim</div>
                        <div className="student-id">STU-2026-4525</div>
                      </div>
                      <span className="play-icon">▶</span>
                    </td>
                    <td>Riverside Prep</td>
                    <td>
                      <span className="issue-badge red">Scan Quality</span>
                    </td>
                    <td>6 hours ago</td>
                    <td>
                      <button className="review-btn">Review</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Transcript Details */}
            {selectedStudentData && (
              <div className="transcript-details-panel">
                {/* PDF Preview */}
                <div className="pdf-preview-section">
                  <div className="pdf-header">
                    <div className="pdf-name">Transcript_{selectedStudentData.name.replace(' ', '')}_2026.pdf</div>
                    <div className="pdf-actions">
                      <button className="pdf-action-btn">🔍 Zoom</button>
                      <button className="pdf-action-btn">⬇️ Download</button>
                    </div>
                  </div>
                  <div className="pdf-preview-box">
                    <div className="pdf-placeholder">
                      <div className="pdf-icon">📄</div>
                      <div className="pdf-placeholder-text">Transcript PDF Preview</div>
                      <div className="pdf-placeholder-subtext">{selectedStudentData.school} Official Transcript</div>
                    </div>
                  </div>
                </div>

                {/* Review Alert */}
                <div className="review-alert yellow">
                  <div className="review-alert-icon">⚠️</div>
                  <div className="review-alert-content">
                    {selectedStudentData.school} uses a 5.0 weighted GPA scale for honors/AP courses. The system detected grades above 4.0 and requires confirmation of the correct scale to normalize the GPA accurately.
                  </div>
                </div>

                {/* Extracted Grades */}
                <div className="extracted-grades-section">
                  <h3 className="grades-title">Extracted Grades</h3>
                  <table className="grades-table">
                    <thead>
                      <tr>
                        <th>Course</th>
                        <th>Grade</th>
                        <th>Credits</th>
                        <th>Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>AP Calculus BC</td>
                        <td><span className="grade-highlight">4.8</span></td>
                        <td>1.0</td>
                        <td>AP</td>
                      </tr>
                      <tr>
                        <td>AP English Literature</td>
                        <td><span className="grade-highlight">4.5</span></td>
                        <td>1.0</td>
                        <td>AP</td>
                      </tr>
                      <tr>
                        <td>Honors Physics</td>
                        <td><span className="grade-highlight">4.3</span></td>
                        <td>1.0</td>
                        <td>Honors</td>
                      </tr>
                      <tr>
                        <td>US History</td>
                        <td>3.7</td>
                        <td>1.0</td>
                        <td>Regular</td>
                      </tr>
                      <tr>
                        <td>Spanish III</td>
                        <td>4.0</td>
                        <td>1.0</td>
                        <td>Regular</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* GPA Calculation Section */}
                <div className="gpa-calculation-section">
                  <div className="gpa-header">
                    <div>
                      <h3 className="gpa-section-title">Calculated GPA</h3>
                      <p className="gpa-section-subtitle">Normalized to 4.0 scale</p>
                    </div>
                    <div className="gpa-display-large">3.92</div>
                  </div>

                  <div className="gpa-correction-section">
                    <h4 className="correction-title">Correction / Verification</h4>
                    <div className="correction-fields">
                      <div className="correction-field">
                        <label>Original GPA Scale</label>
                        <select
                          value={gpaScale}
                          onChange={(e) => setGpaScale(e.target.value)}
                          className="correction-select"
                        >
                          <option>5.0 Weighted</option>
                          <option>4.0 Unweighted</option>
                          <option>4.5 Weighted</option>
                          <option>100 Point Scale</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="correction-field">
                        <label>Normalized GPA (4.0 Scale)</label>
                        <input
                          type="text"
                          value={normalizedGpa}
                          onChange={(e) => setNormalizedGpa(e.target.value)}
                          className="correction-input"
                        />
                      </div>
                    </div>
                    <div className="correction-field full-width">
                      <label>Notes (optional)</label>
                      <textarea
                        rows="3"
                        placeholder="Add any notes about this transcript..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="correction-textarea"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="review-actions-panel">
                    <button className="action-btn secondary">Skip for Now</button>
                    <button className="action-btn primary" onClick={() => setShowConfirmModal(true)}>
                      ✓ Process Document
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Confirm Processing Modal */}
      {showConfirmModal && (
        <div className="modal-overlay" onClick={() => setShowConfirmModal(false)}>
          <div className="confirm-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-content">
                <span className="modal-warning-icon">⚠️</span>
                <h3 className="modal-title">Confirm Processing</h3>
              </div>
            </div>
            <div className="modal-body">
              <p className="modal-message">
                You are about to finalize the transcript review for {selectedStudentData?.name}. This action will:
              </p>
              <div className="modal-data">
                <div className="modal-data-item">
                  <span className="data-label">Normalized GPA:</span>
                  <span className="data-value">3.92 / 4.0</span>
                </div>
                <div className="modal-data-item">
                  <span className="data-label">Original Scale:</span>
                  <span className="data-value">5.0 Weighted</span>
                </div>
                <div className="modal-data-item">
                  <span className="data-label">Total Credits:</span>
                  <span className="data-value">5.0</span>
                </div>
                <div className="modal-data-item">
                  <span className="data-label">Status:</span>
                  <span className="data-value verified">✓ Verified</span>
                </div>
              </div>
              <p className="modal-confirmation">
                This data will be exported to your CRM. Are you sure you want to proceed?
              </p>
            </div>
            <div className="modal-footer">
              <button className="modal-btn cancel" onClick={() => setShowConfirmModal(false)}>
                Cancel
              </button>
              <button className="modal-btn confirm" onClick={() => {
                setShowConfirmModal(false);
                // In a real app, this would process the document
              }}>
                Yes, Process Document
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
