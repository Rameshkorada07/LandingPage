
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      company: 'TechCorp',
      image: '',
      content: 'JobSpring helped me land my dream job at a Fortune 500 company. The AI resume builder was a game-changer!'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Manager', 
      company: 'GrowthLab',
      image: '',
      content: 'The interview practice sessions boosted my confidence tremendously. Highly recommend to anyone job hunting.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Analyst',
      company: 'DataFlow',
      image: '',
      content: 'Found my perfect job in just 2 weeks! The job matching feature is incredibly accurate.'
    },
    {
      name: 'David Kim',
      role: 'Product Designer',
      company: 'DesignHub',
      image: '',
      content: 'The resume optimization suggestions were spot-on. Got 3x more interview calls!'
    },
    {
      name: 'Lisa Thompson',
      role: 'Sales Director',
      company: 'SalesPro',
      image: '',
      content: 'JobSpring made my career transition seamless. The expert guidance was invaluable.'
    },
    {
      name: 'Alex Morgan',
      role: 'DevOps Engineer',
      company: 'CloudTech',
      image: '',
      content: 'The AI tools are revolutionary. Saved me hours of work and got better results.'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Testimonials</h2>
          <h3 className="section-subtitle">Hear from our successful users</h3>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>{testimonial.name[0]}</span>
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bottom-cta">
          <h3 className="cta-title">Land your dream job with JobSpring</h3>
          <p className="cta-description">Join thousands of successful job seekers today</p>
          <button className="btn-primary large">Start Your Journey</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
