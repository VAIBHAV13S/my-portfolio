import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Award, Code, Database, Globe, Zap, User, Briefcase, Heart, Coffee, Rocket, Users, Calendar, MapPin, Star } from 'lucide-react';

const About = () => {
    const { scrollYProgress } = useScroll();
    
    // Parallax effects
    const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const scaleParallax = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1]);

    // Enhanced animation variants
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
            scale: 0.98
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
            scale: 0.95,
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

    const stats = [
        { 
            icon: GraduationCap, 
            title: "Education", 
            value: "NIT Hamirpur",
            color: "from-blue-500 to-cyan-500",
            description: "B.Tech M&C • CGPA: 7.62",
            accent: "bg-blue-500/10 border-blue-500/20"
        },
        { 
            icon: Briefcase, 
            title: "Focus", 
            value: "Full-Stack & Blockchain",
            color: "from-purple-500 to-pink-500",
            description: "MERN Stack & Web3",
            accent: "bg-purple-500/10 border-purple-500/20"
        },
        { 
            icon: Award, 
            title: "Projects", 
            value: "3+ Live Apps",
            color: "from-green-500 to-emerald-500",
            description: "Production Ready",
            accent: "bg-green-500/10 border-green-500/20"
        },
        { 
            icon: Users, 
            title: "Leadership", 
            value: "SPEC Executive",
            color: "from-orange-500 to-red-500",
            description: "Electrothon Organizer",
            accent: "bg-orange-500/10 border-orange-500/20"
        }
    ];

    const interests = [
        { icon: Code, name: "MERN Stack", color: "text-blue-400" },
        { icon: Database, name: "Database Design", color: "text-green-400" },
        { icon: Globe, name: "Web3 & Blockchain", color: "text-purple-400" },
        { icon: Zap, name: "Real-Time Systems", color: "text-yellow-400" },
        { icon: Heart, name: "UI/UX Design", color: "text-pink-400" },
        { icon: Coffee, name: "Problem Solving", color: "text-orange-400" },
        { icon: Rocket, name: "Event Management", color: "text-cyan-400" }
    ];

    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "TypeScript", "Tailwind CSS"],
            color: "from-blue-500 to-cyan-500",
            level: 90
        },
        {
            title: "Backend", 
            skills: ["Node.js", "Express", "MongoDB"],
            color: "from-green-500 to-emerald-500",
            level: 85
        },
        {
            title: "Blockchain",
            skills: ["Solidity", "Web3", "Smart Contracts"],
            color: "from-purple-500 to-pink-500",
            level: 75
        }
    ];

    return (
        <motion.section 
            id="about" 
            className="py-20 lg:py-32 relative overflow-hidden"
            style={{ y: yParallax }}
        >
            {/* Clean Background - Matching Hero */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 grid-bg opacity-10" />
                
                {/* Simplified orbs */}
                <motion.div 
                    className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                
                <motion.div 
                    className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
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
                {/* Clean Header - Similar to Hero */}
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
                        About Me
                    </motion.h2>
                    
                    <motion.p 
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        Passionate about creating innovative solutions and contributing to the tech community
                        through cutting-edge web technologies and leadership.
                    </motion.p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
                    {/* Left Column - Content */}
                    <motion.div 
                        className="space-y-8"
                        variants={itemVariants}
                    >
                        {/* Bio Section */}
                        <motion.div
                            className="space-y-6"
                            variants={containerVariants}
                        >
                            <motion.p 
                                className="text-lg text-gray-300 leading-relaxed"
                                variants={itemVariants}
                            >
                                I'm a <span className="text-blue-400 font-semibold">Mathematics & Computing</span> student 
                                at <span className="text-purple-400 font-semibold">NIT Hamirpur</span> (CGPA: 7.62), 
                                passionate about full-stack development, blockchain technology, and real-time systems.
                            </motion.p>
                            
                            <motion.p 
                                className="text-lg text-gray-300 leading-relaxed"
                                variants={itemVariants}
                            >
                                As an <span className="text-green-400 font-semibold">Executive Member of SPEC</span>, 
                                I'm leading <span className="text-yellow-400 font-semibold">Electrothon 7.0</span> - 
                                a national-level hackathon in MLH 2025. I build real-time applications that solve 
                                real-world problems.
                            </motion.p>
                        </motion.div>

                        {/* Clean Stats Grid */}
                        <motion.div 
                            className="grid grid-cols-2 gap-4"
                            variants={containerVariants}
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className={`group p-6 glass rounded-2xl border relative overflow-hidden transition-all duration-300 hover:scale-105 ${stat.accent}`}
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                >
                                    <motion.div
                                        className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl mb-4`}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </motion.div>
                                    
                                    <h4 className="text-sm font-medium text-gray-400 mb-1">{stat.title}</h4>
                                    <p className="text-base font-bold text-white mb-1">{stat.value}</p>
                                    <p className="text-xs text-gray-500">{stat.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Academic Journey - Clean Card */}
                        <motion.div
                            className="p-6 glass rounded-2xl border border-white/10"
                            variants={itemVariants}
                            whileHover={{ y: -3 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                                    <Calendar className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">Academic Journey</h3>
                            </div>
                            
                            <div className="space-y-3 text-gray-300">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-blue-400" />
                                    <span className="text-sm">
                                        <span className="text-blue-400 font-medium">NIT Hamirpur</span> • 2023-2027
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star className="w-4 h-4 text-green-400" />
                                    <span className="text-sm">
                                        <span className="text-green-400 font-medium">Current:</span> OOP, DSA, CN, DBMS
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <GraduationCap className="w-4 h-4 text-purple-400" />
                                    <span className="text-sm">
                                        <span className="text-purple-400 font-medium">Previous:</span> S.D. Public School (91.8% • 93%)
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Interests - Clean Tags */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <Heart className="w-5 h-5 text-pink-400" />
                                What I Love Working With
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {interests.map((interest, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-2 px-3 py-2 glass rounded-full border border-white/10 hover:border-white/20 group cursor-pointer text-sm"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <interest.icon className={`w-4 h-4 ${interest.color}`} />
                                        <span className="text-gray-300 group-hover:text-white transition-colors">
                                            {interest.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Modern Visual */}
                    <motion.div 
                        className="relative"
                        variants={itemVariants}
                        style={{ scale: scaleParallax }}
                    >
                        {/* Main Card - Clean Design */}
                        <motion.div
                            className="relative p-8 glass rounded-3xl border border-white/20 backdrop-blur-xl overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {/* Header */}
                            <div className="text-center mb-8">
                                <motion.div
                                    className="text-6xl mb-4"
                                    animate={{ 
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{ 
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut" 
                                    }}
                                >
                                    💻
                                </motion.div>
                                
                                <h3 className="text-xl font-bold text-white mb-2 gradient-text">
                                    Building & Learning
                                </h3>
                                
                                <p className="text-gray-400 text-sm">
                                    From hackathon organizing to full-stack development
                                </p>
                            </div>

                            {/* Skills Progress - Modern Design */}
                            <div className="space-y-6">
                                <h4 className="text-lg font-semibold text-white mb-4">Technical Expertise</h4>
                                
                                {skillCategories.map((category, index) => (
                                    <motion.div
                                        key={category.title}
                                        className="space-y-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h5 className="text-white font-medium">{category.title}</h5>
                                                <p className="text-xs text-gray-400">
                                                    {category.skills.join(" • ")}
                                                </p>
                                            </div>
                                            <span className="text-sm text-blue-400 font-medium">
                                                {category.level}%
                                            </span>
                                        </div>
                                        
                                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${category.level}%` }}
                                                transition={{ 
                                                    duration: 1.5, 
                                                    delay: index * 0.3,
                                                    ease: "easeOut"
                                                }}
                                                viewport={{ once: true }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Floating Elements - Minimal */}
                            {Array.from({ length: 6 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
                                    style={{
                                        left: `${20 + Math.random() * 60}%`,
                                        top: `${20 + Math.random() * 60}%`,
                                    }}
                                    animate={{
                                        opacity: [0.3, 0.8, 0.3],
                                        scale: [0.5, 1, 0.5],
                                        y: [0, -10, 0]
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

                        {/* Background decoration */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-3xl -z-10"
                            animate={{ 
                                scale: [1, 1.05, 1],
                                rotate: [0, 1, 0]
                            }}
                            transition={{ 
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut" 
                            }}
                        />
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default About;