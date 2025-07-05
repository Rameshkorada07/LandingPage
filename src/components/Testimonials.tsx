
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer at Google',
      content: 'JobSpring helped me transition from a startup to my dream job at Google. The AI resume builder was incredible!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager at Microsoft',
      content: 'I got 3x more interview calls after using JobSpring. The platform is a game-changer for job seekers.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Scientist at Netflix',
      content: 'The interview preparation tools gave me the confidence I needed. Landed my dream job in just 2 months!',
      rating: 5
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2>What Our Users Say</h2>
          <p>Join thousands of successful job seekers</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
