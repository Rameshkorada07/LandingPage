
import React from 'react';
import freeOfCost from './Assets/freeOfCost.png';
import atsscore from './Assets/atsscore.png';
import interviewCoach from './Assets/interviewCoach.png';
import whyChoose_bg from './Assets/whyChoose-bg.png'
const WhyChoose = () => {
  return (
    <section className="why-choose" style={{backgroundImage: `url(${whyChoose_bg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className='heading-title'>
            why users choose <span className="text-blue-600">Jobspring</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {/* Free of cost */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img src={freeOfCost} alt="Free of cost" className='whyChoose-img' />
            </div>
            <h3 className="img-heading">Free of cost</h3>
            <p className='img-description'>
              Create a professional resume for free! Our builders empowers job seekers by removing financial barriers to landing their dream job.
            </p>
          </div>

          {/* 90+ ATS Score Resume */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img src={atsscore} alt="90+ ATS Score Resume"  className='whyChoose-img'  />
            </div>
            <h3 className="img-heading">90+ ATS Score Resume</h3>
            <p className='img-description'>
              Create ATS-optimized resumes with a 90+ score to boost your chances of catching recruiters' attention and securing top placement.
            </p>
          </div>

          {/* Interview Coach */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img src={interviewCoach} alt="Interview Coach" className='whyChoose-img' />
            </div>
            <h3 className="img-heading">Interview Coach</h3>
            <p className='img-description'>
              Effortlessly craft tailored, professional resumes that showcase your skills and experience, perfectly aligning with job description.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300">
            TRY FOR FREE
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
