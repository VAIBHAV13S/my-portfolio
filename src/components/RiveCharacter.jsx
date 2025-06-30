import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Zap, Cpu, Database, Globe } from 'lucide-react';

const RiveCharacter = () => {
  const techIcons = [
    { icon: Code, color: 'text-blue-400', delay: 0 },
    { icon: Database, color: 'text-green-400', delay: 0.5 },
    { icon: Globe, color: 'text-purple-400', delay: 1 },
    { icon: Zap, color: 'text-yellow-400', delay: 1.5 },
  ];

  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Middle pulsing ring */}
      <motion.div
        className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 backdrop-blur-xl border border-white/20"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Central core */}
      <motion.div
        className="absolute inset-4 md:inset-6 rounded-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-white/30 flex items-center justify-center"
        animate={{
          rotate: [0, 5, -5, 0],
          scale: [1, 1.02, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Terminal className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-400" />
        </motion.div>
      </motion.div>

      {/* Orbiting tech icons */}
      {techIcons.map((tech, index) => {
        const IconComponent = tech.icon;
        const angle = (index * 90) * (Math.PI / 180); // 90 degrees apart
        const radius = 60; // Distance from center
        
        return (
          <motion.div
            key={index}
            className="absolute w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-900/80 backdrop-blur-sm border border-white/20"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: [
                Math.cos(angle) * radius - 16,
                Math.cos(angle + Math.PI * 2) * radius - 16
              ],
              y: [
                Math.sin(angle) * radius - 16,
                Math.sin(angle + Math.PI * 2) * radius - 16
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: tech.delay
            }}
            whileHover={{
              scale: 1.2,
              backgroundColor: "rgba(59, 130, 246, 0.2)"
            }}
          >
            <IconComponent className={`w-4 h-4 md:w-5 md:h-5 ${tech.color}`} />
          </motion.div>
        );
      })}

      {/* Floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 2.5,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-50"
        animate={{
          boxShadow: [
            "0 0 20px rgba(59, 130, 246, 0.3)",
            "0 0 40px rgba(147, 51, 234, 0.4)",
            "0 0 20px rgba(59, 130, 246, 0.3)"
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default RiveCharacter;