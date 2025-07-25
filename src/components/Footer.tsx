
import React from 'react';
import footer_snow from './Assets/foote-snow.png'
import ig from './Assets/ig.png'
import yt from './Assets/yt.png'
import linkedin from './Assets/ln.png'
import twitter from './Assets/twitter.png'

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left section - Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={footer_snow} alt="snowflake" className="w-6 h-6" />
              <span className="text-xl font-bold text-gray-900">JOB SPRING</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Revolutionizing job search with AI-powered recruiting<br />
              for students and professionals.
            </p>
          </div>

          {/* Middle section - Company links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Company</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm">Features</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm">About us</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm">Contact us</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm">FAQ'S</a>
            </div>
          </div>

          {/* Right section - Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">subscribe to our newsletter</h3>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-64 sm:w-full sm:max-w-sm px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder-gray-500"
              />
              <button className="self-start px-6 py-3 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap" style={{backgroundColor: '#1B29CB'}}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 JobSpring. All rights reserved.</p>
          
          {/* Social media icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src={ig} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src={twitter} alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src={yt} alt="YouTube" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
