
import React from 'react';
import { SEO } from '../components/SEO';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AITools from '../components/AITools';
import Statistics from '../components/Statistics';
import BeforeAfter from '../components/BeforeAfter';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import UpcomingFeatures from '../components/UpcomingFeatures';
import FAQ from '../components/FAQ';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import FeedbackButton from '../components/FeedbackButton';
import '../styles/main.css';

const Index = () => {
  const currentUrl = typeof window !== 'undefined' ? window.location.origin : 'https://jobspring.ai';
  
  return (
    <div className="landing-page">
      <SEO 
        title="JobSpring - AI Resume Builder & Job Search Platform"
        description="Transform your job search with JobSpring's AI-powered tools. Get tailored resumes, interview coaching, automated job tracking, and land your dream job faster. Trusted by 100K+ job seekers."
        keywords="AI resume builder, job search platform, interview coach, automated job tracking, career development, job application, resume optimization, interview preparation, job seeker, career platform, AI job tools, professional development, job hunting, career advancement, employment assistance, job placement, resume writing, interview skills, job market, career coaching, ATS optimization, job application tracker, career advancement platform, dream job, job search engine, resume templates, cover letter builder, job alerts, career guidance, job board, employment opportunities, job finder, career coach, job search tips, resume scanner, applicant tracking system, job interview, career planning, job search strategy, professional resume, job matching, career services, job search assistance, online job search, job search tools, career development platform, job search website, employment platform, job portal, career advancement tools, job search optimization, professional networking, career growth, job search resources, employment solutions, job search automation"
        url={currentUrl}
        image={`${currentUrl}/logo.png`}
        type="website"
      />
      
      <PerformanceOptimizer />
      
      <Header />
      <Hero />
      <Features />
      {/*<AITools />*/}
      <Statistics />
      <BeforeAfter />
      <WhyChoose />
      {/*<Testimonials />*/}
      <UpcomingFeatures />
      <FAQ />
      <CallToAction />
      <Footer />
      
      {/* Floating Feedback Button - appears on all sections */}
      <FeedbackButton />
    </div>
  );
};

export default Index;
