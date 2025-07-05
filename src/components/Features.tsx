
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '📝',
      title: 'Smart Resume Builder',
      description: 'Create ATS-optimized resumes that get noticed by recruiters and hiring managers.'
    },
    {
      icon: '🎯',
      title: 'Job Matching',
      description: 'Get personalized job recommendations based on your skills and preferences.'
    },
    {
      icon: '💬',
      title: 'Interview Prep',
      description: 'Practice with AI-powered mock interviews and get real-time feedback.'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Features</h2>
          <h3 className="section-subtitle">Simplify Every Step of Your Job Search</h3>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
