'use client';

import { useRouter } from 'next/navigation';
import './login.css';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="logo-container">
            <div className="logo-icon">⚡</div>
            <span className="logo-text">UNIFUSE AI</span>
          </div>
          <p className="tagline">AI-Powered Higher Education Platform</p>
        </div>

        <form className="login-form" onSubmit={(e) => {
          e.preventDefault();
          router.push('/dashboard');
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

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••"
              required
            />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="/forgot-password" className="forgot-link">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>

        <div className="separator">
          <div className="separator-line"></div>
          <span>OR CONTINUE WITH</span>
          <div className="separator-line"></div>
        </div>

        <div className="sso-section">
          <p className="sso-title">SINGLE SIGN-ON OPTIONS</p>
          <button className="sso-button">
            <span className="sso-icon">🔒</span>
            Sign in with Microsoft
          </button>
          <button className="sso-button">
            <span className="sso-icon">🔒</span>
            Sign in with Google Workspace
          </button>
        </div>

        <p className="footer-link">
          Don't have an account? <a href="#">Contact your administrator</a>
        </p>
      </div>
    </div>
  );
}
