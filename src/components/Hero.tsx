
import React from 'react';
import check_img from './Assets/check-img.png'
import feature1 from './Assets/feature-1.png'
import feature2 from './Assets/feature-2.png'
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-banner">
              <span className="trust-badge">TRUSTED BY OVER 100K JOB SEEKERS!</span>
            </div>
            <div className="hero-title-wrapper">
              <h1 className="hero-title">
                Land Your <span className="hero-subtitle">Dream Job</span>
              </h1>
              <h2 className="hero-tagline">Stress less, Struggle less</h2>
            </div>
            <div className="hero-features">
              <div className="feature-item">
                <img className="check-img" src={check_img} alt="Checkmark icon for AI Resume Builder feature - JobSpring job search platform" />
                <span className="feature-text">AI Resume Builder</span>
              </div>
              <div className="feature-item">
                <img className="check-img" src={check_img} alt="Checkmark icon for AI Interview Coach feature - JobSpring career platform" />
                <span className="feature-text">AI Interview Coach</span>
              </div>
              <div className="feature-item">
                <img className="check-img" src={check_img} alt="Checkmark icon for Automated Job Tracking feature - JobSpring employment tools" />
                <span className="feature-text">Automated Job Tracking</span>
              </div>
              <div className="feature-item">
                <img className="check-img" src={check_img} alt="Checkmark icon for additional JobSpring features - career development tools" />
                <span className="feature-text">And Much More...</span>
              </div>
            </div>
            <div className="hero-actions">
              <button className="btn-primary hero-cta">SIGN UP FOR FREE</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-illustration">
              <div className="professional-card">
                <div className="profile-img"></div>
                <div className="profile-info">
                  <div className="profile-name"></div>
                  <div className="profile-title"></div>
                </div>
              </div>
              <div className="floating-elements">
                <div className="element element-1"></div>
                <div className="element element-2"></div>
                <div className="element element-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
