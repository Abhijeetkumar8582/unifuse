'use client';

import { useRouter } from 'next/navigation';
import './forgot-password.css';

export default function ForgotPasswordPage() {
  const router = useRouter();

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <div className="forgot-password-header">
          <div className="logo-container">
            <div className="logo-icon">⚡</div>
            <span className="logo-text">UNIFUSE AI</span>
          </div>
        </div>

        <div className="forgot-password-content">
          <h1 className="forgot-password-title">Forgot Password?</h1>
          <p className="forgot-password-description">
            No worries! Enter your email address and we'll send you instructions to reset your password.
          </p>

          <form className="forgot-password-form" onSubmit={(e) => {
            e.preventDefault();
            // In a real app, this would trigger an API call
          }}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="your.email@university.edu"
                required
              />
            </div>

            <button type="submit" className="reset-button">
              Send Reset Instructions
            </button>
          </form>

          <div className="confirmation-box">
            <div className="confirmation-icon">✉️</div>
            <div className="confirmation-content">
              <h3 className="confirmation-title">Check Your Email</h3>
              <p className="confirmation-message">
                You'll receive an email with a link to reset your password. The link will expire in 24 hours.
              </p>
            </div>
          </div>

          <a href="/" className="back-link">
            ← Back to Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
