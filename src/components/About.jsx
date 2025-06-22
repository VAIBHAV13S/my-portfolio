import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { GraduationCap, Award, Code, Database, Globe, Zap } from 'lucide-react';

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
    const sectionRef = useRef(null);

    // Framer Motion: Component transitions only
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
        }
    };

    // GSAP: Scroll-triggered animations
    useEffect(() => {
        if (typeof window === "undefined") return;

        const ctx = gsap.context(() => {
            // Title reveal animation
            gsap.fromTo('.about-title', {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.about-title',
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            // Content cards stagger animation
            gsap.utils.toArray('.about-card').forEach((card, index) => {
                gsap.fromTo(card, {
                    y: 80,
                    opacity: 0,
                    scale: 0.9
                }, {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    delay: index * 0.2
                });
            });

            // Interest items floating animation
            gsap.to('.interest-item', {
                y: -5,
                duration: 2,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                stagger: 0.3
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <motion.section 
            id="about" 
            className="py-20 section-bg-primary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <h3 className="text-2xl font-semibold text-white">
                            Mathematics & Computing Student at NIT Hamirpur
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            I'm a passionate developer with a strong foundation in mathematics and computer science. 
                            My journey in tech has led me to specialize in blockchain development, real-time systems, 
                            and full-stack web applications.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            I love building innovative solutions that solve real-world problems, from creating 
                            synchronized music apps to developing decentralized disaster relief platforms. 
                            My experience includes organizing large-scale hackathons and leading technical teams.
                        </p>
                        
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Key Interests:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
                                <motion.li 
                                    className="flex items-center"
                                    whileHover={{ x: 5, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Globe className="w-4 h-4 text-blue-400 mr-3" />
                                    Blockchain & Web3
                                </motion.li>
                                <motion.li 
                                    className="flex items-center"
                                    whileHover={{ x: 5, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Zap className="w-4 h-4 text-purple-400 mr-3" />
                                    Real-time Applications
                                </motion.li>
                                <motion.li 
                                    className="flex items-center"
                                    whileHover={{ x: 5, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Code className="w-4 h-4 text-pink-400 mr-3" />
                                    Full-stack Development
                                </motion.li>
                                <motion.li 
                                    className="flex items-center"
                                    whileHover={{ x: 5, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Database className="w-4 h-4 text-indigo-400 mr-3" />
                                    Developer Tooling
                                </motion.li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div className="space-y-6" variants={itemVariants}>
                        <motion.div 
                            className="glass p-6 rounded-lg border border-white/10"
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="flex items-center mb-4">
                                <GraduationCap className="w-6 h-6 text-blue-400 mr-3" />
                                <h4 className="text-lg font-semibold text-white">Education</h4>
                            </div>
                            <div className="space-y-2">
                                <p className="font-medium text-white">B.Tech in Mathematics & Computing</p>
                                <p className="text-gray-300">NIT Hamirpur</p>
                                <p className="text-sm text-gray-400">2023 - 2027</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="glass p-6 rounded-lg border border-white/10"
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="flex items-center mb-4">
                                <Award className="w-6 h-6 text-purple-400 mr-3" />
                                <h4 className="text-lg font-semibold text-white">Leadership</h4>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <p className="font-medium text-white">Executive Member</p>
                                    <p className="text-gray-300">SPEC, NIT Hamirpur</p>
                                    <p className="text-sm text-gray-400">Electrothon 7.0 - MLH 2025</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;