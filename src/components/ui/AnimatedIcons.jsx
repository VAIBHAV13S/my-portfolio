import React from 'react';
import { motion } from 'framer-motion';

/**
 * Optimized Lucide Icon Component
 * Provides consistent animations and behaviors for all Lucide icons
 */

// Animation variants for different icon types
const iconVariants = {
  standard: {
    hover: { 
      scale: 1.1, 
      transition: { type: "spring", stiffness: 400 }
    },
    tap: { scale: 0.95 }
  },
  
  social: {
    hover: { 
      scale: 1.2, 
      rotate: 10,
      transition: { type: "spring", stiffness: 300 }
    },
    tap: { scale: 0.9 }
  },
  
  tech: {
    hover: { 
      scale: 1.1,
      y: -2,
      transition: { type: "spring", stiffness: 400 }
    },
    tap: { scale: 0.95 }
  },
  
  navigation: {
    hover: { 
      x: 5,
      transition: { type: "spring", stiffness: 400 }
    },
    tap: { x: 2 }
  },
  
  rotate: {
    hover: { 
      rotate: 360,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  }
};

/**
 * Enhanced Lucide Icon Wrapper
 * @param {object} props - Component props
 * @param {React.Component} props.icon - Lucide icon component
 * @param {'standard'|'social'|'tech'|'navigation'|'rotate'} props.variant - Animation variant
 * @param {string} props.className - Additional CSS classes
 * @param {number} props.size - Icon size
 * @param {string} props.color - Icon color
 * @param {function} props.onClick - Click handler
 */
export const AnimatedIcon = ({ 
  icon: Icon, 
  variant = 'standard', 
  className = '', 
  size = 24, 
  color = 'currentColor',
  onClick,
  ...props 
}) => {
  return (
    <motion.div
      className={`inline-flex items-center justify-center cursor-pointer ${className}`}
      variants={iconVariants[variant]}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      {...props}
    >
      <Icon size={size} color={color} />
    </motion.div>
  );
};

/**
 * Icon Button Component
 * For clickable icons with background
 */
export const IconButton = ({ 
  icon: Icon, 
  variant = 'standard',
  className = '',
  bgClassName = 'bg-white/10 hover:bg-white/20',
  size = 24,
  padding = 'p-3',
  rounded = 'rounded-lg',
  onClick,
  children,
  ...props 
}) => {
  return (
    <motion.button
      className={`${padding} ${rounded} ${bgClassName} transition-all duration-300 ${className}`}
      variants={iconVariants[variant]}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      {...props}
    >
      <Icon size={size} />
      {children}
    </motion.button>
  );
};

/**
 * Social Link Component
 * Specialized for social media links
 */
export const SocialLink = ({ 
  href, 
  icon: Icon, 
  label,
  className = '',
  size = 24
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-12 h-12 glass rounded-lg flex items-center justify-center text-gray-300 transition-all duration-300 border border-white/10 hover:text-blue-400 hover:bg-blue-600/20 ${className}`}
      variants={iconVariants.social}
      whileHover="hover"
      whileTap="tap"
      aria-label={label}
    >
      <Icon size={size} />
    </motion.a>
  );
};

/**
 * Tech Stack Icon
 * For skill and technology displays
 */
export const TechIcon = ({ 
  icon: Icon, 
  name, 
  color = 'from-blue-500 to-cyan-500',
  className = ''
}) => {
  return (
    <motion.div
      className={`flex items-center gap-3 p-3 glass rounded-lg border border-white/10 ${className}`}
      variants={iconVariants.tech}
      whileHover="hover"
      whileTap="tap"
    >
      <div className={`p-2 rounded-lg bg-gradient-to-r ${color} text-white`}>
        <Icon size={20} />
      </div>
      <span className="text-white font-medium">{name}</span>
    </motion.div>
  );
};

/**
 * Navigation Arrow
 * For next/previous buttons
 */
export const NavArrow = ({ 
  direction = 'right', 
  icon: Icon, 
  onClick,
  className = ''
}) => {
  return (
    <motion.button
      className={`p-2 glass rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 ${className}`}
      variants={iconVariants.navigation}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      style={{ 
        transform: direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)' 
      }}
    >
      <Icon size={20} />
    </motion.button>
  );
};

/**
 * Floating Action Button
 * For primary actions
 */
export const FloatingActionButton = ({ 
  icon: Icon, 
  onClick,
  className = '',
  primary = true
}) => {
  const baseClasses = primary 
    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
    : 'glass border border-white/20 text-gray-300';

  return (
    <motion.button
      className={`fixed bottom-8 right-8 p-4 rounded-full ${baseClasses} transition-all duration-300 z-50 ${className}`}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <Icon size={24} />
    </motion.button>
  );
};

export default {
  AnimatedIcon,
  IconButton,
  SocialLink,
  TechIcon,
  NavArrow,
  FloatingActionButton,
  iconVariants
};