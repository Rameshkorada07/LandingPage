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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Feature grid */}
            <div className="grid grid-cols-2 gap-2">
              {/* Auto Apply */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <img src={autoapply} alt="Auto Apply" style={{width: '209.567px', height: '197.591px'}} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Auto Apply</h3>
              </div>

              {/* Job tracking */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <img src={jobtracking} alt="Job tracking" style={{width: '209.567px', height: '197.591px'}} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Job tracking</h3>
              </div>

              {/* Networking */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <img src={networking} alt="Networking" style={{width: '209.567px', height: '197.591px'}} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Networking</h3>
              </div>

              {/* Talent acquisition */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <img src={talentacquistion} alt="Talent acquisition" style={{width: '209.567px', height: '197.591px'}} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Talent acquisition</h3>
              </div>
            </div>

            {/* Right side - Content */}
            <div>
              <h3 className="text-blue-600 font-semibold text-lg mb-4">Upcoming features</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Land your dream job with these features
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Effortlessly land your dream job with Auto Apply, Job Tracking, Interview AI, and Networking—all tailored to boost your success.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center gap-2">
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