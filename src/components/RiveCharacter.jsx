import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Zap, Terminal, Cpu } from 'lucide-react';

const CompactHeroIcon = () => {
  return (
    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 relative">
      {/* Compact geometric background */}
      <motion.div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-white/30"
        animate={{ 
          rotate: [0, 2, -2, 0],
          scale: [1, 1.05, 1] 
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />

      {/* Central icon */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <Terminal className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
      </motion.div>

      {/* Subtle particle effects */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          boxShadow: [
            "0 0 10px rgba(59, 130, 246, 0.3)",
            "0 0 20px rgba(59, 130, 246, 0.5)",
            "0 0 10px rgba(59, 130, 246, 0.3)"
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default CompactHeroIcon;