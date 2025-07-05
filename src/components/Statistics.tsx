
import React from 'react';

const Statistics = () => {
  const stats = [
    {
      number: '95%',
      label: 'Success Rate',
      description: 'of users land their dream job within 3 months'
    },
    {
      number: '50K+',
      label: 'Active Jobs',
      description: 'across various industries and experience levels'
    },
    {
      number: '25K+',
      label: 'Happy Users',
      description: 'who have successfully found their ideal positions'
    }
  ];

  return (
    <section className="statistics">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">All you need to land your dream job</h2>
          <p className="section-description">Join thousands of successful job seekers</p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
