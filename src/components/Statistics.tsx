
import React from 'react';
import thunder from './Assets/thunder.png'
import ats from './Assets/ats.png'
import mockup from './Assets/mockup.png'
import feedback from './Assets/feedback.png'

const Statistics = () => {
  const steps = [
    {
      icon: thunder,
      title: 'Instant customization',
      description: 'Create a tailored resume in seconds, aligned with your target job.'
    },
    {
      icon: ats,
      title: 'ATS Optimization',
      description: 'Optimize your resume with keywords & formatting to pass systems.'
    },
    {
      icon: mockup,
      title: 'Mock Interviews',
      description: 'Practice tailored mock interviews for your target job role.'
    },
    {
      icon: feedback,
      title: 'Real-Time Feedback',
      description: 'Get real-time feedback on answers, tone, and body language.'
    }
  ];

  return (
    <section className="statistics">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            All you need to land your 
            dream job
          </h2>
          <p className="section-description">We provide the best tasks to help you get your dream job.</p>
        </div>
        
        <div className="steps-track-container">
          <div className="steps-track">
            {/* First set of steps */}
            {steps.map((step, index) => (
              <div key={`first-${index}`} className="step-card">
                <div className="step-icon-wrapper">
                  <img src={step.icon} alt={step.title} className="step-icon-img" />
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="step-connector">
                    <div className="connector-dots"></div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Second set of steps for seamless loop */}
            {steps.map((step, index) => (
              <div key={`second-${index}`} className="step-card">
                <div className="step-icon-wrapper">
                  <img src={step.icon} alt={step.title} className="step-icon-img" />
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="step-connector">
                    <div className="connector-dots"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
