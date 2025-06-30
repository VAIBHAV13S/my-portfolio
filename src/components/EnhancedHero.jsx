import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { ExternalLink, FileDown, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import RiveCharacter from './RiveCharacter';

const EnhancedHero = () => {
  const [particleCount, setParticleCount] = useState(6);
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Optimize particle count based on performance
  useEffect(() => {
    const updateParticleCount = () => {
      const isMobile = window.innerWidth <= 768;
      const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
      
      let count = 8; // Base count
      if (isMobile) count = 4;
      if (isLowEnd) count = 2;
      
      setParticleCount(count);
    };

    updateParticleCount();
    window.addEventListener('resize', updateParticleCount);
    return () => window.removeEventListener('resize', updateParticleCount);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing
      }
    }
  };

  const orbVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 1.5, 
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    }
  };

  const socialLinks = [
    { 
      href: "https://github.com/VAIBHAV13S", 
      icon: Github, 
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    { 
      href: "https://www.linkedin.com/in/vaibhav-sharma-8b7b10291", 
      icon: Linkedin, 
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    { 
      href: "mailto:vaibhavsharmsk125@gmail.com", 
      icon: Mail, 
      label: "Email",
      color: "hover:text-green-400"
    }
  ];

  return (
    <motion.section 
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="grid-bg"
            animate={{
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Dynamic background orbs */}
        <motion.div 
          className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          variants={orbVariants}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          variants={orbVariants}
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Enhanced floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(particleCount)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 md:w-2 md:h-2 bg-blue-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-30, 30, -30],
                x: [-15, 15, -15],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.2, 0.5]
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-20 md:pt-24"
        style={{ y, opacity }}
      >
        <div className="space-y-6 md:space-y-8">
          {/* Character with enhanced scaling */}
          <motion.div 
            variants={itemVariants}
            style={{ scale }}
            className="mb-8"
          >
            <RiveCharacter />
          </motion.div>

          {/* Enhanced heading with typewriter effect simulation */}
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Hi, I'm{' '}
              <motion.span 
                className="gradient-text neon-text relative inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Vaibhav Sharma
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl rounded-lg"
                  animate={{
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Enhanced subtitle */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto font-medium"
            variants={itemVariants}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Blockchain & Full-Stack Developer
            </motion.span>
            <span className="text-blue-400 mx-2">|</span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Real-Time Systems Enthusiast
            </motion.span>
          </motion.p>

          {/* Enhanced description */}
          <motion.p 
            className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Mathematics & Computing undergrad at{' '}
            <span className="text-blue-400 font-medium">NIT Hamirpur</span>. 
            I build secure, scalable applications with a focus on real-time systems, 
            blockchain infrastructure, and full-stack development.
          </motion.p>

          {/* Enhanced CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 pb-8"
            variants={itemVariants}
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -3 }} 
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <ScrollLink
                to="projects"
                smooth={true}
                duration={800}
                offset={-80}
                className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <ExternalLink size={20} />
                  View My Work
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
              </ScrollLink>
            </motion.div>
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass border border-blue-400/30 text-blue-400 hover:bg-blue-600/10 hover:border-blue-400/50 px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileDown size={20} className="group-hover:animate-bounce" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Enhanced social links - Fixed positioning */}
          <motion.div 
            className="flex justify-center space-x-8 pt-4 pb-16 relative z-40"
            variants={itemVariants}
            style={{ 
              position: 'relative',
              zIndex: 40 
            }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${social.label}`}
                className={`text-gray-400 ${social.color} transition-all duration-300 p-3 rounded-full hover:bg-white/5 relative z-50`}
                style={{ zIndex: 50 }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 5,
                  y: -3
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced scroll indicator with ChevronDown */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ScrollLink
          to="about"
          smooth={true}
          duration={800}
          offset={-80}
          className="flex flex-col items-center space-y-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronDown size={24} className="opacity-70" />
            </motion.div>
          </motion.div>
        </ScrollLink>
      </motion.div>
    </motion.section>
  );
};

export default EnhancedHero;