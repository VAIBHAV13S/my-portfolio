import React from 'react'; // ✅ ADD THIS
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Database, Globe, Shield, Server, Wrench, Star, TrendingUp, Zap } from 'lucide-react';

const Skills = () => {
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

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.9,
            y: 30
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { 
                duration: 0.6, 
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const skillCategories = [
        {
            title: "Languages",
            icon: Code2,
            skills: ["Python", "C++", "JavaScript", "TypeScript", "Bash", "Solidity"],
            color: "from-blue-500 to-cyan-500",
            accent: "bg-blue-500/10 border-blue-500/20",
            proficiency: 90
        },
        {
            title: "Frontend",
            icon: Globe,
            skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
            color: "from-green-500 to-emerald-500",
            accent: "bg-green-500/10 border-green-500/20",
            proficiency: 88
        },
        {
            title: "Backend",
            icon: Server,
            skills: ["Node.js", "Express", "WebSockets", "Prisma", "REST APIs"],
            color: "from-purple-500 to-violet-500",
            accent: "bg-purple-500/10 border-purple-500/20",
            proficiency: 85
        },
        {
            title: "Blockchain",
            icon: Shield,
            skills: ["Solidity", "Ganache", "Ethereum", "Chainlink", "Web3.js"],
            color: "from-orange-500 to-red-500",
            accent: "bg-orange-500/10 border-orange-500/20",
            proficiency: 75
        },
        {
            title: "Database",
            icon: Database,
            skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
            color: "from-pink-500 to-rose-500",
            accent: "bg-pink-500/10 border-pink-500/20",
            proficiency: 82
        },
        {
            title: "Tools & DevOps",
            icon: Wrench,
            skills: ["Git", "Vercel", "AWS", "Docker", "Turborepos"],
            color: "from-indigo-500 to-purple-500",
            accent: "bg-indigo-500/10 border-indigo-500/20",
            proficiency: 80
        }
    ];

    const softSkills = [
        { name: "Teamwork", icon: "🤝" },
        { name: "Leadership", icon: "👥" },
        { name: "Communication", icon: "💬" },
        { name: "Problem Solving", icon: "🧩" },
        { name: "Event Organization", icon: "🎯" },
        { name: "Project Management", icon: "📋" }
    ];

    return (
        <motion.section 
            id="skills" 
            className="py-20 lg:py-32 relative overflow-hidden"
            style={{ y: yParallax }}
        >
            {/* Clean Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 grid-bg opacity-10" />
                
                <motion.div 
                    className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl"
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
                    className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
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
                        Technical Skills
                    </motion.h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        A comprehensive overview of technologies and tools I work with to build 
                        modern, scalable applications and innovative solutions.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div 
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                    variants={containerVariants}
                >
                    {skillCategories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <motion.div 
                                key={index} 
                                className={`group p-6 glass rounded-2xl border backdrop-blur-xl relative overflow-hidden ${category.accent}`}
                                variants={cardVariants}
                                whileHover={{ 
                                    scale: 1.02,
                                    y: -5,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                            >
                                {/* Proficiency Badge */}
                                <motion.div 
                                    className={`absolute top-4 right-4 px-2 py-1 bg-gradient-to-r ${category.color} text-white text-xs font-medium rounded-full flex items-center gap-1`}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <Star className="w-2.5 h-2.5" />
                                    {category.proficiency}%
                                </motion.div>

                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <motion.div 
                                        className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <IconComponent className="w-6 h-6" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                                            {category.title}
                                        </h3>
                                        <div className="flex items-center gap-1 text-gray-400">
                                            <TrendingUp className="w-3 h-3" />
                                            <span className="text-xs">
                                                {category.skills.length} technologies
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Skills Tags */}
                                <div className="space-y-3">
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.span
                                                key={skillIndex}
                                                className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                transition={{ 
                                                    delay: 0.1 * skillIndex,
                                                    type: "spring",
                                                    stiffness: 300
                                                }}
                                                viewport={{ once: true }}
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Proficiency Bar */}
                                    <div className="mt-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-xs text-gray-400">Proficiency</span>
                                            <span className="text-xs text-blue-400 font-medium">
                                                {category.proficiency}%
                                            </span>
                                        </div>
                                        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${category.proficiency}%` }}
                                                transition={{ 
                                                    duration: 1.5, 
                                                    delay: index * 0.2,
                                                    ease: "easeOut"
                                                }}
                                                viewport={{ once: true }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Effect */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none`}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Soft Skills Section */}
                <motion.div 
                    className="text-center"
                    variants={itemVariants}
                >
                    <motion.div className="mb-8">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">
                                Soft Skills & Leadership
                            </h3>
                        </div>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                            Essential interpersonal skills developed through hackathon organizing and team collaboration
                        </p>
                    </motion.div>

                    <motion.div 
                        className="flex flex-wrap justify-center gap-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {softSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="group flex items-center gap-3 px-6 py-3 glass rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300"
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.05, 
                                    y: -3,
                                    backgroundColor: "rgba(59, 130, 246, 0.1)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                animate={{
                                    y: [-2, 2, -2]
                                }}
                                transition={{
                                    y: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.3
                                    }
                                }}
                            >
                                <motion.span 
                                    className="text-2xl"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {skill.icon}
                                </motion.span>
                                <span className="text-white font-medium group-hover:text-blue-300 transition-colors">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Experience Highlight */}
                <motion.div
                    className="mt-16 p-6 glass rounded-2xl border border-white/10 text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.01, y: -3 }}
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="text-4xl">🚀</div>
                        <div>
                            <h4 className="text-xl font-bold text-white">
                                Real-World Experience
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Applied in production applications and hackathon projects
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 mt-6">
                        <div className="text-center">
                            <div className="text-2xl font-bold gradient-text">3+</div>
                            <div className="text-xs text-gray-400">Live Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold gradient-text">250+</div>
                            <div className="text-xs text-gray-400">Event Participants</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold gradient-text">2+</div>
                            <div className="text-xs text-gray-400">Years Learning</div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Skills;