import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const experiences = [
        {
            title: "Executive Member",
            organization: "SPEC, NIT Hamirpur",
            period: "2024 - Present",
            description: "Leading technical logistics and coordination for Electrothon 7.0 - MLH 2025, managing 500+ participants and organizing one of India's largest student hackathons.",
            achievements: [
                "Managed logistics and technical infrastructure for 500+ participants",
                "Coordinated with sponsors, mentors, and technical teams",
                "Led volunteer management and event execution",
                "Helped establish partnerships with major tech companies"
            ],
            type: "leadership"
        },
        {
            title: "Volunteer",
            organization: "Electrothon 6.0 - MLH 2024",
            period: "2024",
            description: "Contributed to the successful execution of Electrothon 6.0, gaining valuable experience in large-scale event management and technical coordination.",
            achievements: [
                "Assisted in participant registration and onboarding",
                "Provided technical support during the hackathon",
                "Helped coordinate judging and award ceremonies",
                "Gained experience in community building and tech events"
            ],
            type: "volunteer"
        }
    ];

    return (
        <motion.section 
            id="experience" 
            className="py-20 section-bg-secondary relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5"></div>
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Experience
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        My journey in leadership roles and community involvement, focusing on technical event management and team coordination.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-purple-600 h-full"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                {/* Timeline dot */}
                                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-gray-900 z-10 neon-glow"></div>

                                {/* Content */}
                                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                                    <div className="glass rounded-lg p-6 hover:shadow-2xl transition-all duration-300 border border-white/10">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                exp.type === 'leadership' 
                                                    ? 'bg-purple-600/20 text-purple-300 border border-purple-400/30'
                                                    : 'bg-green-600/20 text-green-300 border border-green-400/30'
                                            }`}>
                                                {exp.type === 'leadership' ? 'Leadership' : 'Volunteer'}
                                            </span>
                                            <span className="text-sm text-gray-400 font-medium">
                                                {exp.period}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {exp.title}
                                        </h3>
                                        <h4 className="text-lg text-blue-400 font-semibold mb-3">
                                            {exp.organization}
                                        </h4>
                                        <p className="text-gray-300 mb-4 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        <div>
                                            <h5 className="font-semibold text-white mb-2">Key Achievements:</h5>
                                            <ul className="space-y-1">
                                                {exp.achievements.map((achievement, achIndex) => (
                                                    <li key={achIndex} className="flex items-start text-sm text-gray-300">
                                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to action */}
                <div className="text-center mt-16">
                    <div className="glass rounded-lg p-8 border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Let's Work Together
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            I'm always excited to collaborate on innovative projects and contribute to meaningful initiatives. 
                            Let's connect and build something amazing together!
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 neon-glow"
                        >
                            Get In Touch
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Experience;