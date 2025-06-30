import React from 'react';
import Head from 'next/head';
import SmoothScrollProvider from '../components/SmoothScrollProvider';
import ErrorBoundary from '../components/ErrorBoundary';
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
    <>
      <Head>
        <title>Vaibhav Sharma - Full-Stack & Blockchain Developer</title>
        <meta name="description" content="Mathematics & Computing student at NIT Hamirpur. Full-Stack & Blockchain Developer building real-time applications and organizing hackathons." />
        <meta name="keywords" content="Full-Stack Developer, Blockchain, React, Node.js, NIT Hamirpur, Hackathon Organizer" />
        <meta name="author" content="Vaibhav Sharma" />
        <meta property="og:title" content="Vaibhav Sharma - Portfolio" />
        <meta property="og:description" content="Full-Stack & Blockchain Developer at NIT Hamirpur" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://my-portfolio-vaibhav13s-projects.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      
      <ErrorBoundary>
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
      </ErrorBoundary>
    </>
  );
};

export default HomePage;