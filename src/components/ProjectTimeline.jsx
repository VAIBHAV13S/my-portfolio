import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Github, ExternalLink, Code, Zap, Shield } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ProjectTimeline = () => {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Music Sync",
      year: "2024",
      description: "Real-time synchronized YouTube music playbook app with sub-100ms sync accuracy and session analytics.",
      tech: ["React", "TypeScript", "Node.js", "YouTube API", "WebSockets"],
      github: "https://github.com/VAIBHAV13S/music-sync-app",
      demo: "#",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      position: "left"
    },
    {
      id: 2,
      title: "SpeedType Master",
      year: "2024",
      description: "Multiplayer typing game with real-time WPM tracking, JWT authentication, and interactive dashboards.",
      tech: ["Node.js", "Express", "WebSockets", "MySQL", "Chart.js"],
      github: "#",
      demo: "https://racetyper.onrender.com",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      position: "right"
    },
    {
      id: 3,
      title: "D3R Platform",
      year: "2023",
      description: "Decentralized Disaster Donation & Relief platform with transparent milestone-based funding using DAO governance.",
      tech: ["Solidity", "Chainlink", "IPFS", "DAO Governance", "React"],
      github: "https://github.com/VAIBHAV13S",
      demo: "#",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      position: "left"
    }
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Animate the timeline line
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1
          }
        }
      );

      // Animate each project card
      projects.forEach((project, index) => {
        const card = document.querySelector(`[data-project="${project.id}"]`);
        const isLeft = project.position === 'left';
        
        // Initial position
        gsap.set(card, {
          x: isLeft ? -100 : 100,
          opacity: 0,
          scale: 0.8
        });

        // Animate in
        gsap.to(card, {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });

        // Hover animations
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Tech stack floating animation
      gsap.to('.tech-tag', {
        y: -5,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.1
      });

    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="py-20 bg-black/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Project Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A journey through my most impactful projects, showcasing innovation in blockchain, 
            real-time systems, and full-stack development.
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div 
            ref={lineRef}
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 origin-top"
          ></div>

          {/* Timeline items */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.id}
                data-project={project.id}
                className={`relative flex items-center ${
                  project.position === 'left' ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-blue-500 z-10"></div>
                
                {/* Project card */}
                <motion.div
                  className={`w-full max-w-lg bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl border border-white/10 p-6 ${
                    project.position === 'left' ? 'mr-auto pr-16' : 'ml-auto pl-16'
                  }`}
                  whileHover={{ boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                >
                  {/* Year badge */}
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.year}
                  </div>

                  {/* Project header */}
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white mr-4`}>
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="tech-tag px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      Code
                    </motion.a>
                    {project.demo !== "#" && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;