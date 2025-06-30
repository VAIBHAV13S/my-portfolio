import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Heart, Code, Zap, ArrowUp } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    const socialLinks = [
        { 
            href: "https://github.com/VAIBHAV13S", 
            icon: Github, 
            label: "GitHub",
            color: "from-gray-500 to-gray-600"
        },
        { 
            href: "https://www.linkedin.com/in/vaibhav-sharma-8b7b10291", 
            icon: Linkedin, 
            label: "LinkedIn",
            color: "from-blue-500 to-blue-600"
        },
        { 
            href: "mailto:vaibhavsharmsk125@gmail.com", 
            icon: Mail, 
            label: "Email",
            color: "from-pink-500 to-pink-600"
        }
    ];

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' }
    ];

    const featuredProjects = [
        { 
            name: 'Music Sync', 
            href: 'https://music-sync-app-ten.vercel.app/',
            github: 'https://github.com/VAIBHAV13S/music-sync-app'
        },
        { 
            name: 'SpeedType Master', 
            href: 'https://racetyper.onrender.com/',
            github: 'https://github.com/VAIBHAV13S/SpeedType-Master'
        },
        { 
            name: 'Personal Portfolio', 
            href: 'https://my-portfolio-one-iota-16.vercel.app',
            github: 'https://github.com/VAIBHAV13S/my-portfolio'
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.footer 
            className="relative overflow-hidden py-16 lg:py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            {/* Clean Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-transparent" />
                <div className="absolute inset-0 grid-bg opacity-5" />
                
                <motion.div 
                    className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
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
                    className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
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
                {/* Main Footer Content */}
                <div className="grid lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <motion.div 
                        className="lg:col-span-2 space-y-6" 
                        variants={itemVariants}
                    >
                        <div>
                            <motion.h3 
                                className="text-3xl font-bold gradient-text mb-4"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Vaibhav Sharma
                            </motion.h3>
                            <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                                Full-Stack & Blockchain Developer passionate about building innovative solutions 
                                and contributing to the tech community through hackathons and open-source projects.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <h4 className="text-white font-semibold flex items-center gap-2">
                                <Heart className="w-4 h-4 text-pink-400" />
                                Connect with me
                            </h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group p-3 glass rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                                            whileHover={{ 
                                                scale: 1.1, 
                                                y: -3
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <motion.div
                            className="p-4 glass rounded-xl border border-white/10"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-xl font-bold gradient-text">3+</div>
                                    <div className="text-xs text-gray-400">Live Projects</div>
                                </div>
                                <div>
                                    <div className="text-xl font-bold gradient-text">250+</div>
                                    <div className="text-xs text-gray-400">Event Participants</div>
                                </div>
                                <div>
                                    <div className="text-xl font-bold gradient-text">2+</div>
                                    <div className="text-xs text-gray-400">Years Experience</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <h4 className="text-xl font-bold text-white flex items-center gap-2">
                            <Code className="w-5 h-5 text-blue-400" />
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <motion.a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all" />
                                        {link.name}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Featured Projects */}
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <h4 className="text-xl font-bold text-white flex items-center gap-2">
                            <Zap className="w-5 h-5 text-green-400" />
                            Featured Work
                        </h4>
                        <ul className="space-y-3">
                            {featuredProjects.map((project) => (
                                <li key={project.name}>
                                    <div className="flex items-center justify-between group">
                                        <motion.a
                                            href={project.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <span className="w-1 h-1 bg-green-400 rounded-full group-hover:w-2 transition-all" />
                                            {project.name}
                                        </motion.a>
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-300 transition-all duration-300"
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            <Github className="w-4 h-4" />
                                        </motion.a>
                                    </div>
                                </li>
                            ))}
                            
                            {/* Resume Download */}
                            <li className="pt-2 border-t border-white/10">
                                <motion.a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Download className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                                    Download Resume
                                </motion.a>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div 
                    className="border-t border-white/10 pt-8"
                    variants={itemVariants}
                >
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col lg:flex-row items-center gap-4 text-center lg:text-left">
                            <p className="text-gray-400">
                                © {currentYear} Vaibhav Sharma. All rights reserved.
                            </p>
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <span>Built with</span>
                                <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
                                <span>using Next.js & Tailwind CSS</span>
                            </div>
                        </div>

                        {/* Back to Top */}
                        <motion.button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 px-4 py-2 glass rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-blue-400/50 transition-all duration-300 group"
                            whileHover={{ 
                                scale: 1.05, 
                                y: -2
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            Back to Top
                        </motion.button>
                    </div>

                    {/* Fun Tagline */}
                    <motion.div 
                        className="text-center mt-8"
                        variants={itemVariants}
                    >
                        <motion.p 
                            className="text-gray-500 text-sm flex items-center justify-center gap-2"
                            animate={{ 
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ 
                                duration: 3, 
                                repeat: Infinity, 
                                ease: "easeInOut" 
                            }}
                        >
                            <Code className="w-4 h-4" />
                            Learning, Building & Deploying
                            <Zap className="w-4 h-4" />
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;