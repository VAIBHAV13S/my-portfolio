import React from 'react'; // ✅ ADD THIS LINE
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, Code, Zap, Palette, Calendar, Star, TrendingUp } from 'lucide-react';

const ProjectTimeline = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const projects = [
    {
      id: 1,
      title: "Music Sync",
      year: "2024",
      status: "Production",
      description: "Real-time synchronized YouTube music platform with sub-100ms sync accuracy, host-participant architecture, and comprehensive session analytics.",
      tech: ["React", "TypeScript", "Node.js", "YouTube API", "WebSockets"],
      github: "https://github.com/VAIBHAV13S/music-sync-app",
      demo: "https://music-sync-app-ten.vercel.app/",
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      accent: "bg-blue-500/10 border-blue-500/20",
      features: ["Real-time Sync", "YouTube Integration", "Session Analytics"]
    },
    {
      id: 2,
      title: "SpeedType Master",
      year: "2024", 
      status: "Live",
      description: "Multiplayer typing game with real-time WPM tracking, secure JWT authentication, performance dashboards, and competitive leaderboards.",
      tech: ["Node.js", "Express", "WebSockets", "MySQL", "Chart.js"],
      github: "https://github.com/VAIBHAV13S/SpeedType-Master",
      demo: "https://racetyper.onrender.com/",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      accent: "bg-green-500/10 border-green-500/20",
      features: ["Multiplayer", "Real-time WPM", "Performance Analytics"]
    },
    {
      id: 3,
      title: "Personal Portfolio",
      year: "2024",
      status: "Live",
      description: "Interactive portfolio with advanced animations using GSAP, ScrollTrigger, and Framer Motion. Features responsive design, animated hero section, project timeline, and floating particles.",
      tech: ["Next.js", "GSAP", "Framer Motion", "Tailwind CSS", "Vercel"],
      github: "https://github.com/VAIBHAV13S/my-portfolio",
      demo: "https://my-portfolio-vaibhav13s-projects.vercel.app",
      icon: <Palette className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      accent: "bg-purple-500/10 border-purple-500/20",
      features: ["Advanced Animations", "Responsive Design", "Modern UI/UX"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Handle button clicks
  const handleGithubClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDemoClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.section 
      id="projects" 
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ y: yParallax }}
    >
      {/* Clean Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-10" />
        
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text neon-text mb-6">
            Featured Projects
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Production-ready applications showcasing expertise in real-time systems, 
            modern web development, and interactive user experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              variants={itemVariants}
            >
              {/* Project Card */}
              <motion.div
                className={`relative p-8 glass rounded-2xl border backdrop-blur-xl overflow-hidden ${project.accent}`}
                whileHover={{ 
                  scale: 1.01,
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {/* Status Badge */}
                <motion.div 
                  className={`absolute top-6 right-6 px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm font-medium rounded-full flex items-center gap-1 z-10`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Star className="w-3 h-3" />
                  {project.status}
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Left - Project Info */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className={`p-3 rounded-xl bg-gradient-to-r ${project.color} text-white`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {project.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{project.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="text-white font-medium flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-400" />
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.span
                            key={featureIndex}
                            className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-lg border border-white/10"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * featureIndex }}
                            viewport={{ once: true }}
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-white font-medium">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-20 text-white text-sm rounded-lg border border-current border-opacity-30`}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ 
                              scale: 1.05,
                              y: -2
                            }}
                            transition={{ 
                              delay: 0.1 * techIndex,
                              type: "spring",
                              stiffness: 300
                            }}
                            viewport={{ once: true }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons - Fixed with proper event handlers */}
                    <div className="flex flex-wrap gap-4 pt-4 relative z-20">
                      <motion.button
                        onClick={() => handleGithubClick(project.github)}
                        className="flex items-center gap-2 px-6 py-3 glass rounded-xl border border-white/10 text-white hover:border-blue-400/50 hover:bg-blue-600/10 transition-all duration-300 group cursor-pointer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ pointerEvents: 'auto' }}
                      >
                        <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        View Code
                      </motion.button>
                      
                      <motion.button
                        onClick={() => handleDemoClick(project.demo)}
                        className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 group cursor-pointer`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ pointerEvents: 'auto' }}
                      >
                        <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Live Demo
                      </motion.button>
                    </div>
                  </div>

                  {/* Right - Visual Element */}
                  <div className="relative">
                    <motion.div
                      className={`aspect-square rounded-2xl bg-gradient-to-br ${project.color} bg-opacity-10 border border-current border-opacity-20 p-8 flex items-center justify-center`}
                      whileHover={{ 
                        scale: 1.05,
                        rotate: 2
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Project Number */}
                      <motion.div
                        className="text-6xl lg:text-8xl font-black text-white opacity-20"
                        animate={{ 
                          scale: [1, 1.05, 1],
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                      >
                        0{project.id}
                      </motion.div>

                      {/* Floating Elements */}
                      {Array.from({ length: 3 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-white rounded-full opacity-40"
                          style={{
                            left: `${30 + Math.random() * 40}%`,
                            top: `${30 + Math.random() * 40}%`,
                          }}
                          animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [0.5, 1, 0.5],
                            y: [0, -15, 0]
                          }}
                          transition={{
                            duration: 3 + Math.random() * 2,
                            delay: Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none`}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">
            Interested in seeing more projects and contributions?
          </p>
          <motion.button
            onClick={() => handleGithubClick("https://github.com/VAIBHAV13S")}
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-xl border border-white/10 text-white hover:border-blue-400/50 hover:bg-blue-600/10 transition-all duration-300 group cursor-pointer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            View All Projects
            <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectTimeline;