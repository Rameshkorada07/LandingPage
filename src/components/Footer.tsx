
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">JobSpring</span>
            </div>
            <p className="footer-description">
              Empowering job seekers with AI-powered tools to land their dream careers.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">💼</a>
              <a href="#" className="social-link">📷</a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4 className="link-title">Product</h4>
              <a href="#" className="footer-link">Resume Builder</a>
              <a href="#" className="footer-link">Interview Coach</a>
              <a href="#" className="footer-link">Job Search</a>
              <a href="#" className="footer-link">Career Guidance</a>
            </div>

            <div className="link-group">
              <h4 className="link-title">Company</h4>
              <a href="#" className="footer-link">About Us</a>
              <a href="#" className="footer-link">Careers</a>
              <a href="#" className="footer-link">Press</a>
              <a href="#" className="footer-link">Contact</a>
            </div>

            <div className="link-group">
              <h4 className="link-title">Resources</h4>
              <a href="#" className="footer-link">Blog</a>
              <a href="#" className="footer-link">Help Center</a>
              <a href="#" className="footer-link">Community</a>
              <a href="#" className="footer-link">Success Stories</a>
            </div>

            <div className="link-group">
              <h4 className="link-title">Legal</h4>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Cookie Policy</a>
              <a href="#" className="footer-link">GDPR</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2024 JobSpring. All rights reserved.</p>
          </div>
          <div className="footer-badge">
            <span>✨ Built with React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
