import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { AnimatedIcon } from './ui/AnimatedIcons';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = ['About', 'Projects', 'Skills', 'Experience', 'Contact'];

    return (
        <header className="fixed w-full top-0 z-50 glass backdrop-blur-xl border-b border-white/10">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div 
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <h1 className="text-2xl font-bold gradient-text neon-text">
                            VS
                        </h1>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item}
                                    to={item.toLowerCase()}
                                    smooth={true}
                                    duration={800}
                                    className="relative group"
                                >
                                    <motion.span
                                        className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium cursor-pointer transition-colors duration-300"
                                        whileHover={{ y: -2 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        {item}
                                    </motion.span>
                                    {/* Hover underline */}
                                    <motion.div
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <AnimatedIcon
                            icon={isMenuOpen ? X : Menu}
                            variant="standard"
                            size={24}
                            className="text-gray-300 hover:text-blue-400"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />
                    </div>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={false}
                    animate={{ 
                        height: isMenuOpen ? "auto" : 0,
                        opacity: isMenuOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 glass backdrop-blur-xl border-t border-white/10">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ 
                                    x: isMenuOpen ? 0 : -50, 
                                    opacity: isMenuOpen ? 1 : 0 
                                }}
                                transition={{ 
                                    delay: isMenuOpen ? index * 0.1 : 0,
                                    duration: 0.3
                                }}
                            >
                                <Link
                                    to={item.toLowerCase()}
                                    smooth={true}
                                    duration={800}
                                    className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium cursor-pointer transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </nav>
        </header>
    );
};

export default Header;