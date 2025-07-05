
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/lovable-uploads/82d14e6f-9440-4999-8843-9f54d97492bd.png" alt="JobSpring" />
              <span>JobSpring</span>
            </div>
            <p>Empowering job seekers with AI-powered tools to land their dream careers.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h4>Product</h4>
              <a href="#">Resume Builder</a>
              <a href="#">Interview Coach</a>
              <a href="#">Job Search</a>
              <a href="#">Career Guidance</a>
            </div>

            <div className="link-column">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
              <a href="#">Contact</a>
            </div>

            <div className="link-column">
              <h4>Resources</h4>
              <a href="#">Blog</a>
              <a href="#">Help Center</a>
              <a href="#">Community</a>
              <a href="#">Success Stories</a>
            </div>

            <div className="link-column">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
              <a href="#">GDPR</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 JobSpring. All rights reserved.</p>
          <p>Built with ❤️ for job seekers worldwide</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
