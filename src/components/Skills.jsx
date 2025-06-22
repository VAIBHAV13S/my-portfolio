import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Code2, Database, Globe, Shield, Server, Wrench } from 'lucide-react';

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Skills = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    
    // Framer Motion variants for component transitions only
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { 
                duration: 0.4, 
                ease: [0.23, 1, 0.32, 1] // Custom easing
            }
        }
    };

    const skillCategories = [
        {
            title: "Languages",
            icon: Code2,
            skills: ["Python", "C++", "JavaScript", "TypeScript", "Bash", "Solidity"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Frontend",
            icon: Globe,
            skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Backend",
            icon: Server,
            skills: ["Node.js", "Express", "WebSockets", "Prisma", "REST APIs"],
            color: "from-purple-500 to-violet-500"
        },
        {
            title: "Blockchain",
            icon: Shield,
            skills: ["Solidity", "Ganache", "Ethereum", "Chainlink", "Web3.js"],
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Database",
            icon: Database,
            skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
            color: "from-pink-500 to-rose-500"
        },
        {
            title: "Tools & DevOps",
            icon: Wrench,
            skills: ["Git", "Vercel", "AWS", "Docker", "Turborepos"],
            color: "from-indigo-500 to-purple-500"
        }
    ];

    // GSAP scroll animations for skill cards
    useEffect(() => {
        if (typeof window === "undefined") return;

        const ctx = gsap.context(() => {
            // Animate skill cards on scroll
            gsap.utils.toArray('.skill-card').forEach((card, index) => {
                gsap.fromTo(card, {
                    y: 80,
                    opacity: 0,
                    scale: 0.8,
                    rotationY: 15
                }, {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotationY: 0,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    delay: index * 0.1
                });
            });

            // Animate skill tags with floating effect
            gsap.to('.skill-tag', {
                y: -3,
                duration: 2,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                stagger: {
                    amount: 1,
                    from: "random"
                }
            });

            // Section title animation
            gsap.fromTo('.skills-title', {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.skills-title',
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <motion.section 
            ref={sectionRef}
            id="skills" 
            className="py-20 section-bg-secondary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div className="skills-title text-center mb-16" variants={itemVariants}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Technical Skills
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        A comprehensive overview of the technologies and tools I work with to build modern applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <motion.div 
                                key={index} 
                                className="skill-card glass rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-white/10"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                                        <IconComponent className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">
                                        {category.title}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skillIndex}
                                            className="skill-tag px-3 py-2 glass text-gray-300 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors border border-white/5"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div className="mt-16" variants={itemVariants}>
                    <h3 className="text-2xl font-semibold text-white text-center mb-8">
                        Soft Skills
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Teamwork", "Leadership", "Communication", "Problem Solving", "Project Management", "Event Organization"].map((skill, index) => (
                            <motion.span
                                key={index}
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 neon-glow"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Skills;