
import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Land Your Dream Job<br />
              <span className="hero-subtitle">Stress less, Struggle less</span>
            </h1>
            <p className="hero-description">
              Get hired faster with AI-powered job search tools. From resume optimization 
              to interview preparation, we've got everything you need to succeed.
            </p>
            <div className="hero-actions">
              <button className="btn-primary hero-cta">Get Started Free</button>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Jobs Posted</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">25K+</span>
                  <span className="stat-label">Happy Users</span>
                </div>
              </div>
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
