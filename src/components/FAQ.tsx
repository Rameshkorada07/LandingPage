
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does JobSpring work?',
      answer: 'JobSpring uses AI-powered tools to help you create optimized resumes, practice interviews, and find job matches based on your skills and preferences.'
    },
    {
      question: 'Is JobSpring free to use?',
      answer: 'We offer both free and premium plans. Our free plan includes basic features, while premium plans unlock advanced AI tools and personalized coaching.'
    },
    {
      question: 'How accurate is the job matching?',
      answer: 'Our AI matching algorithm has a 95% accuracy rate, analyzing your skills, experience, and preferences to find the most suitable job opportunities.'
    },
    {
      question: 'Can I get help with interview preparation?',
      answer: 'Yes! Our AI interview coach provides personalized practice sessions, real-time feedback, and tips to help you succeed in interviews.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Most users see improved response rates within the first week and land interviews within 2-4 weeks of using our platform.'
    },
    {
      question: 'Do you support international job search?',
      answer: 'Currently, we focus on opportunities in major English-speaking markets, with plans to expand to more regions soon.'
    },
    {
      question: 'What industries do you cover?',
      answer: 'We cover all major industries including technology, healthcare, finance, marketing, sales, and many more.'
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Absolutely. We use enterprise-grade security measures to protect your personal information and never share your data without consent.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
