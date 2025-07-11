
import React from 'react';
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
import '../styles/main.css';

const Index = () => {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <Features />
      {/*<AITools />*/}
      <Statistics />
      <BeforeAfter />
      <WhyChoose />
      <Testimonials />
      <UpcomingFeatures />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
