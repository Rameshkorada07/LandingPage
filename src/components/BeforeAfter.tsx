import React, { useState, useEffect } from 'react';
import wrong from './Assets/wrong.png';
import tick from './Assets/tick.png';
import rejection from './Assets/rejection.png';
import nomoreRejection from './Assets/nomoreRejections.png';
import timeWasted from './Assets/timeWasted.png';
import fragmentedTools from './Assets/fragmentedTools.png';
import allInOneSolution from './Assets/allInOneSolution.png';
import saveTime from './Assets/saveTime.png';

const BeforeAfter = () => {
  const [highlightedItem, setHighlightedItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedItem((prev) => (prev + 1) % 3); // Cycle through 0, 1, 2
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="before-after">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="before-after-title">
            Say goodbye to career frustration.
          </h2>
          <p className="before-after-subtitle">
            From constant rejections to landing your dream job, discover the difference Careerflow can make
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          {/* Before Section */}
          <div className="flex-1 p-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <img src={wrong} alt="Wrong" className="w-4 h-4" />
              <span className="text-red-600 font-semibold text-sm bg-red-50 px-3 py-1 rounded-full">
                BEFORE JOBSPRING
              </span>
            </div>
            <h3 className="text-xl flex items-center text-center justify-center font-semibold text-gray-900 mb-8">
              Struggling to navigate the job market <br />
              without the right tools.
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 border border-red-200 rounded-xl">
                <img src={rejection} alt="Rejection" className="w-8 h-8 flex-shrink-0 item-icon" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Rejection</h4>
                  <p className="text-gray-600 text-sm">Non-compliant resumes lead to rejections before interviews.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 border border-red-200 rounded-xl">
                <img src={timeWasted} alt="Time Wasted" className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Time Wasted</h4>
                  <p className="text-gray-600 text-sm">Job searching is a time-consuming task</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 border border-red-200 rounded-xl">
                <img src={fragmentedTools} alt="Fragmented Tools" className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fragmented Tools</h4>
                  <p className="text-gray-600 text-sm">Switching between multiple tools is stressful</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="flex-shrink-0 text-4xl text-gray-400 font-bold flex items-center justify-center align-middle before-after-arrow">
            →
          </div>
          
          {/* After Section */}
          <div className="flex-1 p-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <img src={tick} alt="Success" className="w-4 h-4" />
              <span className="text-blue-600 font-semibold text-sm bg-blue-50 px-3 py-1 rounded-full">
                AFTER JOBSPRING
              </span>
            </div>
            <h3 className="text-xl flex items-center justify-center text-center font-semibold text-gray-900 mb-8">
              Easily navigate the job market <br />
              with AI-powered tools.
            </h3>
            
            <div className="space-y-6">
              <div className={`flex items-start gap-4 p-4 border rounded-xl transition-all duration-500 ${
                highlightedItem === 0 ? 'border-blue-500 border-2 shadow-lg shadow-blue-200' : 'border-blue-200'
              }`}>
                <img src={nomoreRejection} alt="No More Rejections" className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">No More Rejections</h4>
                  <p className="text-gray-600 text-sm">Instantly create ATS-friendly resumes</p>
                </div>
              </div>
              
              <div className={`flex items-start gap-4 p-4 border rounded-xl transition-all duration-500 ${
                highlightedItem === 1 ? 'border-blue-500 border-2 shadow-lg shadow-blue-200' : 'border-blue-200'
              }`}>
                <img src={saveTime} alt="Save Time" className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Save Time</h4>
                  <p className="text-gray-600 text-sm">Jobspring's AI tools simplify your job search</p>
                </div>
              </div>
              
              <div className={`flex items-start gap-4 p-4 border rounded-xl transition-all duration-500 ${
                highlightedItem === 2 ? 'border-blue-500 border-2 shadow-lg shadow-blue-200' : 'border-blue-200'
              }`}>
                <img src={allInOneSolution} alt="All in One Solution" className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">All in One Solution</h4>
                  <p className="text-gray-600 text-sm">Manage your entire job search in one platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter; 