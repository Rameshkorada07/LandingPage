
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ishaan R.',
      role: 'Co-Founder - Sales Consultant',
      content: 'Best day to day tool. I recommend Seamless.AI to most of my clients. They are super responsive in support as well and feel like I am a partner rather than a client.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Daniel H.',
      role: 'Sales Development Representative',
      content: 'An excellent tool to capture leads with. Their customer care team is very friendly. If I ever had a technical problem, they always helped me and I got it sorted within minutes.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Joshua N.',
      role: 'Head Of Business Development',
      content: 'Seamless AI is the best contact data tool I have ever used. I\'m able to find contact info on pretty much anyone. The best part is being able to pull it right from their LinkedIn profile.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Victor F.',
      role: 'Head of Sales',
      content: 'Really great user experience and has a wealth of tools. I learned and clean interface with plenty of tools. Ease of integration.',
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Christopher R.',
      role: 'Head of Sales',
      content: 'Seamless has been a wonderful resource. As a Head of Sales, Seamless AI has been a huge help. I often need to quickly find an email address or phone number, I call up Seamless AI.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Colin F.',
      role: 'VP Business Development',
      content: 'Seamless is 100% the BEST lead generation tool in the game. Literally the best lead generation tool on the business owners direct cell phone number. Immediate contact.',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face'
    }
  ];

  // Split testimonials into two rows
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  return (
    <section className="testimonials ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="testimonials-heading">Testimonials</h3>
          <h2 className="testimonials-subheading">
            Hear from our successful users
          </h2>
        </div>
        
        <div className="testimonials-container">
          {/* First row - moves right */}
          <div className="testimonials-row testimonials-row-right">
            <div className="testimonials-track">
              {[...firstRow, ...firstRow].map((testimonial, index) => (
                <div key={index} className="testimonial-card bg-white rounded-xl p-6 shadow-sm mx-4 inline-block w-80 align-top" style={{minHeight: 'auto', height: 'fit-content'}}>
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                      <p className="text-gray-600 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-3 text-sm leading-relaxed">
                    {testimonial.content.split('.')[0]}.
                  </h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {testimonial.content.split('.').slice(1).join('.').trim()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - moves left */}
          <div className="testimonials-row testimonials-row-left">
            <div className="testimonials-track">
              {[...secondRow, ...secondRow].map((testimonial, index) => (
                <div key={index} className="testimonial-card bg-white rounded-xl p-6 shadow-sm mx-4 inline-block w-80 align-top" style={{minHeight: 'auto', height: 'fit-content'}}>
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                      <p className="text-gray-600 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-3 text-sm leading-relaxed">
                    {testimonial.content.split('.')[0]}.
                  </h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {testimonial.content.split('.').slice(1).join('.').trim()}
                  </p>
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
