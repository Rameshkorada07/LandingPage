import React from 'react';
import autoapply from './Assets/autoapply.png';
import jobtracking from './Assets/jobtracking.png';
import networking from './Assets/networking.png';
import talentacquistion from './Assets/talentacquistion.png';

const UpcomingFeatures = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Feature grid */}
            <div className="grid grid-cols-2 upcoming-feature-grid">
              {/* Auto Apply */}
              <div className="text-center p-3">
                <div className="flex justify-center mb-3">
                  <img src={autoapply} alt="Auto Apply" className="upcoming-feature-img" />
                </div>
              </div>

              {/* Job tracking */}
              <div className="text-center p-3">
                <div className="flex justify-center mb-3">
                  <img src={jobtracking} alt="Job tracking" className="upcoming-feature-img" />
                </div>
              </div>

              {/* Networking */}
              <div className="text-center p-3">
                <div className="flex justify-center mb-3">
                  <img src={networking} alt="Networking" className="upcoming-feature-img" />
                </div>
              </div>

              {/* Talent acquisition */}
              <div className="text-center p-3">
                <div className="flex justify-center mb-3">
                  <img src={talentacquistion} alt="Talent acquisition" className="upcoming-feature-img" />
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div>
              <h3 className="upcoming-subtitle">Upcoming features</h3>
              <h2 className="upcoming-title">
                Land your dream job with these features
              </h2>
              <p className="upcoming-description">
                Effortlessly land your dream job with Auto Apply, Job Tracking, Interview AI, and Networking—all tailored to boost your success.
              </p>
              <button className="bg-blue-600 ml-5 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-300 flex items-center gap-2 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Launching soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingFeatures; 