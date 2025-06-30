import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Code, Users, Award, Building, Star } from 'lucide-react';

const Experience = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const experiences = [
    {
      title: "Executive Member",
      company: "SPEC (NIT Hamirpur)",
      period: "2024 - Present",
      location: "NIT Hamirpur",
      description: "Leading the organization of Electrothon 7.0, a national-level hackathon featured in MLH 2025. Managing event logistics for 250+ participants and coordinating with sponsors and technical teams.",
      achievements: [
        "Organizing MLH-featured hackathon with 250+ participants",
        "Managing sponsorship and partnership deals",
        "Leading technical team coordination",
        "Implementing innovative event management solutions"
      ],
      technologies: ["Event Management", "Leadership", "Team Coordination", "Sponsorship"],
      type: "leadership",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      accent: "bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Full-Stack Developer",
      company: "Personal Projects",
      period: "2023 - Present",
      location: "Remote",
      description: "Developing production-ready applications with focus on real-time systems, blockchain technology, and modern web development. Built multiple live applications with thousands of users.",
      achievements: [
        "Built Music Sync with sub-100ms real-time synchronization",
        "Developed multiplayer typing game with live leaderboards",
        "Created decentralized applications with smart contracts",
        "Implemented secure authentication and data management"
      ],
      technologies: ["React", "Node.js", "TypeScript", "Solidity", "WebSockets", "MongoDB"],
      type: "development",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      accent: "bg-green-500/10 border-green-500/20"
    },
    {
      title: "B.Tech Mathematics & Computing",
      company: "NIT Hamirpur",
      period: "2023 - 2027",
      location: "Himachal Pradesh, India",
      description: "Pursuing Bachelor of Technology in Mathematics & Computing with strong focus on algorithms, data structures, and computational mathematics. Maintaining consistent academic performance while actively participating in tech communities.",
      achievements: [
        "CGPA: 7.62 with consistent performance",
        "Coursework: OOP, DSA, Computer Networks, DBMS",
        "Active participation in coding competitions",
        "Member of technical societies and clubs"
      ],
      technologies: ["Python", "C++", "Data Structures", "Algorithms", "Mathematics", "Computer Networks"],
      type: "education",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500",
      accent: "bg-purple-500/10 border-purple-500/20"
    }
  ];

  const getStatusBadge = (type) => {
    switch(type) {
      case 'leadership': return { text: 'Leadership', color: 'from-blue-500 to-cyan-500' };
      case 'development': return { text: 'Development', color: 'from-green-500 to-emerald-500' };
      case 'education': return { text: 'Education', color: 'from-purple-500 to-pink-500' };
      default: return { text: 'Experience', color: 'from-gray-500 to-gray-600' };
    }
  };

  return (
    <motion.section 
      id="experience" 
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
          className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-green-500/10 to-pink-500/10 rounded-full blur-3xl"
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

      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Modern Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text neon-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Experience & Journey
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My path through leadership, development, and education - building skills 
            and creating impact in tech communities and real-world applications.
          </p>
        </motion.div>

        {/* Experience Cards - Simplified Layout */}
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
        >
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            const badge = getStatusBadge(experience.type);
            
            return (
              <motion.div
                key={index}
                className="group"
                variants={itemVariants}
              >
                {/* Experience Card - Clean Design */}
                <motion.div
                  className={`relative p-8 glass rounded-2xl border backdrop-blur-xl overflow-hidden ${experience.accent}`}
                  whileHover={{ 
                    scale: 1.01,
                    y: -5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  {/* Status Badge */}
                  <motion.div 
                    className={`absolute top-6 right-6 px-3 py-1 bg-gradient-to-r ${badge.color} text-white text-sm font-medium rounded-full flex items-center gap-1`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-3 h-3" />
                    {badge.text}
                  </motion.div>

                  <div className="grid lg:grid-cols-4 gap-8 items-start">
                    {/* Left - Icon & Basic Info */}
                    <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4">
                      <motion.div 
                        className={`p-4 rounded-xl bg-gradient-to-r ${experience.color} text-white flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <IconComponent className="w-8 h-8" />
                      </motion.div>
                      
                      <div className="text-center lg:text-left">
                        <div className="text-sm text-gray-400 mb-2">
                          {experience.period}
                        </div>
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <MapPin className="w-3 h-3" />
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    {/* Right - Main Content */}
                    <div className="lg:col-span-3 space-y-6">
                      {/* Header */}
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-400 font-medium">
                          <Building className="w-4 h-4" />
                          {experience.company}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Key Achievements */}
                      <div>
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <Award className="w-4 h-4 text-yellow-400" />
                          Key Achievements
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              className="text-gray-300 text-sm flex items-start gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * achievementIndex }}
                              viewport={{ once: true }}
                            >
                              <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies/Skills */}
                      <div>
                        <h4 className="text-white font-semibold mb-3">Technologies & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className={`px-3 py-1 bg-gradient-to-r ${experience.color} bg-opacity-20 text-white text-sm rounded-lg border border-current border-opacity-30`}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              whileHover={{ scale: 1.05, y: -2 }}
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
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${experience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none`}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;