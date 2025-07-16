import React from 'react';
import atc_banner from './Assets/atc_banner.png'
import complete_banner from './Assets/complete-banner.png'
import snow from './Assets/snow.png'
import mbl_cta from './Assets/mbl-cta.png'
const CallToAction = () => {
  return (
    <section className="py-16 px-4">
      {/* Complete banner */}
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Desktop Banner */}
          <img className='cta-banner hidden md:block'
            src={complete_banner} 
            alt="Call to action banner" 
           style={{width: '100%', height: '350px'}}
          />
          
          {/* Mobile Banner */}
          <img className='cta-banner block md:hidden'
            src={mbl_cta} 
            alt="Call to action mobile banner" 
           style={{width: '100%', height: '350px'}}
          />
          
          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="flex-1 text-white p-8 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-6 leading-tight">
                Craft Your Future with a Custom<br />
                Resume & AI Interview Coach
              </h2>
              <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-xs sm:text-sm md:text-base">
                SIGN UP FOR FREE
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative bottom text */}
        <div className="text-center mt-8">
          <div className="flex items-center justify-center gap-4 sm:gap-2 md:gap-4">
            <img src={snow} alt="snowflake" className="snow-img" />
            <span className="snow-text" >
              #Let the fresh start <span style={{ color: '#1d4ed8' }}>begin!</span>
            </span>
            <img src={snow} alt="snowflake" className="snow-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 