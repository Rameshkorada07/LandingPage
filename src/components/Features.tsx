
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '📝',
      title: 'AI Resume Builder',
      description: 'Create professional resumes with our AI-powered builder that optimizes for ATS systems and recruiter preferences.'
    },
    {
      icon: '🎯',
      title: 'Job Matching',
      description: 'Get matched with relevant job opportunities based on your skills, experience, and career preferences.'
    },
    {
      icon: '💬',
      title: 'Interview Preparation',
      description: 'Practice interviews with AI and get personalized feedback to improve your performance and confidence.'
    },
    {
      icon: '📊',
      title: 'Career Analytics',
      description: 'Track your job search progress with detailed analytics and insights to optimize your strategy.'
    },
    {
      icon: '🔍',
      title: 'Job Search Tools',
      description: 'Access powerful tools to find and apply to jobs efficiently across multiple platforms.'
    },
    {
      icon: '🎓',
      title: 'Skill Development',
      description: 'Identify skill gaps and get recommendations for courses to enhance your qualifications.'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <h2>Our Features</h2>
          <p>Everything you need to land your dream job</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
