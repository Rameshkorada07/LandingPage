
import React from 'react';

const WhyChoose = () => {
  const reasons = [
    {
      icon: '🚀',
      title: 'Fast Results',
      description: 'Get results 3x faster than traditional job search methods'
    },
    {
      icon: '🤖',
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI technology for better outcomes'
    },
    {
      icon: '📈',
      title: 'Proven Success',
      description: '95% of our users land their dream job within 3 months'
    },
    {
      icon: '💼',
      title: 'Industry Experts',
      description: 'Get guidance from top recruiters and industry professionals'
    }
  ];

  return (
    <section className="why-choose">
      <div className="container">
        <div className="why-choose-content">
          <div className="why-choose-left">
            <h2>Why Choose JobSpring?</h2>
            <p>We're not just another job board. We're your career transformation partner.</p>
            <div className="reasons-list">
              {reasons.map((reason, index) => (
                <div key={index} className="reason-item">
                  <div className="reason-icon">{reason.icon}</div>
                  <div className="reason-content">
                    <h4>{reason.title}</h4>
                    <p>{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="why-choose-right">
            <div className="success-metrics">
              <div className="metric">
                <span className="metric-number">95%</span>
                <span className="metric-label">Success Rate</span>
              </div>
              <div className="metric">
                <span className="metric-number">50K+</span>
                <span className="metric-label">Jobs Available</span>
              </div>
              <div className="metric">
                <span className="metric-number">25K+</span>
                <span className="metric-label">Happy Users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
