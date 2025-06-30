import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Projects', id: 'projects' },
        { name: 'Skills', id: 'skills' },
        { name: 'Experience', id: 'experience' },
        { name: 'Contact', id: 'contact' }
    ];

    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const handleSectionChange = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section, index) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(navItems[index].id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleSectionChange);
        
        // Initial check
        handleScroll();
        handleSectionChange();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleSectionChange);
        };
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('header')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const headerVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 20 
            }
        }
    };

    const mobileMenuVariants = {
        hidden: { 
            opacity: 0,
            height: 0,
            transition: { 
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        visible: { 
            opacity: 1,
            height: "auto",
            transition: { 
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const mobileItemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: (i) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.3,
                ease: "easeOut"
            }
        }),
        exit: { x: -50, opacity: 0 }
    };

    return (
        <motion.header 
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/10"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div 
                        className="flex-shrink-0 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <Link
                            to="home"
                            smooth={true}
                            duration={800}
                            className="flex items-center space-x-2"
                        >
                            <motion.div
                                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
                                whileHover={{ rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <span className="text-white font-bold text-lg">VS</span>
                            </motion.div>
                            <div className="hidden sm:block">
                                <h1 className="text-xl font-bold gradient-text">
                                    Vaibhav Sharma
                                </h1>
                                <p className="text-xs text-gray-400 -mt-1">Developer</p>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                to={item.id}
                                smooth={true}
                                duration={800}
                                offset={-80}
                                spy={true}
                                className="relative group px-4 py-2 rounded-lg transition-all duration-300"
                            >
                                <motion.span
                                    className={`text-sm font-medium cursor-pointer transition-all duration-300 ${
                                        activeSection === item.id 
                                            ? 'text-blue-400' 
                                            : 'text-gray-300 hover:text-blue-400'
                                    }`}
                                    whileHover={{ y: -2 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    {item.name}
                                </motion.span>
                                
                                {/* Active indicator */}
                                <motion.div
                                    className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full"
                                    initial={{ scale: 0, x: "-50%" }}
                                    animate={{ 
                                        scale: activeSection === item.id ? 1 : 0,
                                        x: "-50%"
                                    }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                />
                                
                                {/* Hover underline */}
                                <motion.div
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                                    initial={{ scaleX: 0, transformOrigin: "left" }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <motion.button
                            className="p-2 rounded-lg glass border border-white/10 text-gray-300 hover:text-blue-400 hover:bg-white/5 transition-all duration-300"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isMenuOpen ? 'close' : 'menu'}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden"
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <div className="px-2 pt-4 pb-6 space-y-2 glass backdrop-blur-xl border-t border-white/10 rounded-b-xl mt-2">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        custom={index}
                                        variants={mobileItemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                    >
                                        <Link
                                            to={item.id}
                                            smooth={true}
                                            duration={800}
                                            offset={-80}
                                            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
                                                activeSection === item.id
                                                    ? 'bg-blue-600/20 text-blue-400 border border-blue-400/30'
                                                    : 'text-gray-300 hover:text-blue-400 hover:bg-white/5'
                                            }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.id === 'home' && <Home size={18} />}
                                            <span className="font-medium">{item.name}</span>
                                            {activeSection === item.id && (
                                                <motion.div
                                                    className="w-2 h-2 bg-blue-400 rounded-full ml-auto"
                                                    layoutId="mobile-active-indicator"
                                                />
                                            )}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Mobile menu overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;