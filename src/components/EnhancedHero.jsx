import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Github, Linkedin, Mail, ArrowDown, FileDown, ExternalLink } from 'lucide-react';
import RiveCharacter from './RiveCharacter';

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EnhancedHero = () => {
  const heroRef = useRef(null);
  const backgroundRef = useRef(null);
  const characterRef = useRef(null);
  const textRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // GSAP: Entrance animations and scroll effects
      const tl = gsap.timeline();
      
      // Initial setup
      gsap.set(['.hero-text', '.hero-buttons', '.hero-social'], { 
        opacity: 0, 
        y: 100 
      });
      gsap.set('.hero-character', { 
        opacity: 0, 
        scale: 0.5
      });
      gsap.set('.bg-orb', { 
        scale: 0, 
        opacity: 0 
      });

      // Entrance sequence with GSAP
      tl.to('.bg-orb', {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "elastic.out(1, 0.3)",
        stagger: 0.2
      })
      .to('.hero-character', {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "back.out(1.7)"
      }, "-=1")
      .to('.hero-text', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2
      }, "-=0.5")
      .to(['.hero-buttons', '.hero-social'], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1
      }, "-=0.3");

      // Scroll-triggered parallax (GSAP only)
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          gsap.to(characterRef.current, {
            scale: 1 - progress * 0.2,
            y: progress * -100,
            duration: 0.3
          });
          
          gsap.to('.bg-orb-1', {
            x: progress * -200,
            y: progress * -100,
            duration: 0.3
          });
          
          gsap.to('.bg-orb-2', {
            x: progress * 200,
            y: progress * -150,
            duration: 0.3
          });
          
          gsap.to('.hero-text', {
            y: progress * -50,
            opacity: 1 - progress * 0.5,
            duration: 0.3
          });
        }
      });

      // Continuous particle animation
      gsap.to('.particle', {
        y: -20,
        x: "random(-20, 20)",
        duration: "random(2, 4)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 2,
          from: "random"
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Framer Motion variants for subtle UI animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Dynamic Background with GSAP morphing */}
      <div ref={backgroundRef} className="absolute inset-0">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-30">
          <div className="grid-bg"></div>
        </div>
        
        {/* Morphing background orbs */}
        <div className="bg-orb bg-orb-1 absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
        <div className="bg-orb bg-orb-2 absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Header fade overlay */}
      <div className="absolute top-0 left-0 right-0 header-fade pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-20">
        <div className="space-y-8">
          {/* Interactive Rive Character */}
          <motion.div 
            ref={characterRef}
            className="hero-character"
            variants={itemVariants}
          >
            <RiveCharacter />
          </motion.div>

          {/* Main heading with typewriter effect */}
          <motion.div variants={itemVariants}>
            <h1 className="hero-text text-4xl sm:text-6xl lg:text-7xl font-bold text-white">
              Hi, I'm{' '}
              <span className="gradient-text neon-text">
                Vaibhav Sharma
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="hero-text text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            Blockchain & Full-Stack Developer | Real-Time Systems Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p 
            className="hero-text text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Mathematics & Computing undergrad at NIT Hamirpur. I build secure, scalable applications 
            with a focus on real-time systems, blockchain infrastructure, and full-stack development.
          </motion.p>

          {/* CTA Buttons with Framer Motion hover effects */}
          <motion.div 
            className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="hero-button bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 neon-glow flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
              View My Work
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button glass border border-blue-400/30 text-blue-400 hover:bg-blue-600/10 px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileDown size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="hero-social flex justify-center space-x-6 pt-8"
            variants={itemVariants}
          >
            {[
              { href: "https://github.com/VAIBHAV13S", icon: Github },
              { href: "https://linkedin.com/in/vaibhav-sharma", icon: Linkedin },
              { href: "mailto:vaibhavsharmsk125@gmail.com", icon: Mail }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator with bounce */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={24} className="text-gray-400" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default EnhancedHero;