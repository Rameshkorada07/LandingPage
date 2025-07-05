
import React from 'react';

const WhyChoose = () => {
  const reasons = [
    {
      icon: '⚡',
      title: 'Fast Setup',
      description: 'Get started in minutes with our intuitive onboarding process'
    },
    {
      icon: '🤖',
      title: 'AI-Powered Tools',
      description: 'Leverage cutting-edge AI technology for better job search results'
    },
    {
      icon: '👥',
      title: 'Expert Support',
      description: 'Get guidance from career experts and industry professionals'
    }
  ];

  return (
    <section className="why-choose">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Users Choose JobSpring</h2>
        </div>
        
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h4 className="reason-title">{reason.title}</h4>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <button className="btn-primary large">Get Started Today</button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
