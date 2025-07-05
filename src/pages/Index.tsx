
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AITools from '../components/AITools';
import Statistics from '../components/Statistics';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import '../styles/main.css';

const Index = () => {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <Features />
      <AITools />
      <Statistics />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
