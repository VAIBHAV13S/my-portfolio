import React from 'react';
import SmoothScrollProvider from '../components/SmoothScrollProvider';
import Header from '../components/Header';
import EnhancedHero from '../components/EnhancedHero';
import About from '../components/About';
import ProjectTimeline from '../components/ProjectTimeline';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import AnimatedContact from '../components/AnimatedContact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <EnhancedHero />
          <About />
          <ProjectTimeline />
          <Skills />
          <Experience />
          <AnimatedContact />
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
};

export default HomePage;