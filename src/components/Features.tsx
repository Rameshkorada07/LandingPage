
import React from 'react';
import feature1 from './Assets/feature-1.jpg';
import feature2 from './Assets/feature-2.jpg';

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <h3 className="section-subtitle">Features</h3>
          <h2 className="section-title">Simplify Every Step of Your Job</h2>
        </div>
        
        <div className="features-content">
          {/* Resume Builder Feature */}
          <div className="feature-showcase">
            <div className="feature-visual">
              <img 
                src={feature1} 
                alt="AI Resume Builder interface showing customized resume templates and job description matching - JobSpring job search platform" 
                className="feature-image"
              />
            </div>
            <div className="feature-content">
              <h3>A resume builder tailored to your job description</h3>
              <p>Generate tailored resumes with AI and boost your chances of landing your dream job through smart recommendations</p>
              <button className="btn-primary feature-cta">CREATE RESUME</button>
            </div>
          </div>

          {/* Interview Coach Feature */}
          <div className="feature-showcase">
            <div className="feature-content">
              <h3>AI-Powered Interview Coach to Master Your Skills</h3>
              <p>Advance your job readiness with our AI-powered platform. Practice real scenarios, get feedback, and gain confidence.</p>
              <button className="btn-primary feature-cta">TAKE INTERVIEW</button>
            </div>
            <div className="feature-visual">
              <img 
                src={feature2} 
                alt="AI Interview Coach platform showing practice sessions and feedback system - JobSpring career development tools" 
                className="feature-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
