import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
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

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const skillCategories = [
        {
            title: "Languages",
            skills: ["Python", "C++", "JavaScript", "TypeScript", "Bash", "Solidity"]
        },
        {
            title: "Frontend",
            skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express", "WebSockets", "Prisma", "REST APIs"]
        },
        {
            title: "Blockchain",
            skills: ["Solidity", "Ganache", "Ethereum", "Chainlink", "Web3.js"]
        },
        {
            title: "Database",
            skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
        },
        {
            title: "Tools & DevOps",
            skills: ["Git", "Vercel", "AWS", "Docker", "Turborepos"]
        }
    ];

    return (
        <motion.section 
            id="skills" 
            className="py-20 bg-gray-900/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div className="text-center mb-16" variants={cardVariants}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Technical Skills
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        A comprehensive overview of the technologies and tools I work with to build modern applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div 
                            key={index} 
                            className="glass rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-white/10"
                            variants={cardVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                                <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></span>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skillIndex}
                                        className="px-3 py-2 glass text-gray-300 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors border border-white/5"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div className="mt-16" variants={cardVariants}>
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