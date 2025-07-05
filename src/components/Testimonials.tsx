
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer at Google',
      content: 'JobSpring helped me transition from a startup to my dream job at Google. The AI resume builder was incredible!',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager at Microsoft',
      content: 'I got 3x more interview calls after using JobSpring. The platform is a game-changer for job seekers.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Scientist at Netflix',
      content: 'The interview preparation tools gave me the confidence I needed. Landed my dream job in just 2 months!',
      rating: 5,
      avatar: 'ER'
    },
    {
      name: 'David Kim',
      role: 'UX Designer at Apple',
      content: 'Amazing platform! The job matching feature connected me with opportunities I never would have found.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Wang',
      role: 'Marketing Manager at Tesla',
      content: 'JobSpring made my job search so much easier. The analytics helped me track my progress effectively.',
      rating: 5,
      avatar: 'LW'
    },
    {
      name: 'James Wilson',
      role: 'Full Stack Developer at Meta',
      content: 'The skill development recommendations were spot on. Got my dream job within 6 weeks!',
      rating: 5,
      avatar: 'JW'
    }
  ];

  // Split testimonials into two rows
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2>What Our Users Say</h2>
          <p>Join thousands of successful job seekers</p>
        </div>
        
        <div className="testimonials-container">
          {/* First row - moves right */}
          <div className="testimonials-row testimonials-row-right">
            <div className="testimonials-track">
              {[...firstRow, ...firstRow].map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="author-avatar">
                      {testimonial.avatar}
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                    <div className="testimonial-stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                  <p className="testimonial-content">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - moves left */}
          <div className="testimonials-row testimonials-row-left">
            <div className="testimonials-track">
              {[...secondRow, ...secondRow].map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="author-avatar">
                      {testimonial.avatar}
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                    <div className="testimonial-stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                  <p className="testimonial-content">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
