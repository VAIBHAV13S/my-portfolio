/**
 * UNIFIED ANIMATION CONFIGURATION
 * Combines all animation settings in one optimized file
 */

// Framer Motion Variants
export const animations = {
  // Container animations
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  // Item animations
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  // Fade animations
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.6 } 
    }
  },

  // Scale animations
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 300
      }
    }
  }
};

// Device Detection & Optimization
export const getDeviceSettings = () => {
  if (typeof window === "undefined") {
    return {
      isMobile: false,
      isTablet: false,
      prefersReducedMotion: false,
      particleCount: 6,
      animationDuration: 0.6
    };
  }
  
  const width = window.innerWidth;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isLowPerformance = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  
  return {
    isMobile,
    isTablet,
    prefersReducedMotion,
    isLowPerformance,
    particleCount: isMobile ? 3 : isLowPerformance ? 4 : 8,
    animationDuration: prefersReducedMotion ? 0.1 : 0.6,
    enableComplexAnimations: !isMobile && !isLowPerformance && !prefersReducedMotion
  };
};

// Performance Optimization
export const initAnimationOptimizations = () => {
  if (typeof window === "undefined") return;

  const settings = getDeviceSettings();
  
  // Set CSS custom properties for performance
  const root = document.documentElement;
  
  root.style.setProperty('--animation-duration', `${settings.animationDuration}s`);
  root.style.setProperty('--particle-count', settings.particleCount.toString());
  
  if (settings.prefersReducedMotion) {
    root.style.setProperty('--motion-scale', '0');
    root.classList.add('reduce-motion');
  }
  
  if (settings.isLowPerformance) {
    root.style.setProperty('--blur-intensity', '5px');
    root.classList.add('low-performance');
  }

  // Optimize Framer Motion globally
  if (window.Motion) {
    window.Motion.globalConfig({
      skipAnimations: settings.prefersReducedMotion
    });
  }
};

// Lenis Configuration
export const lenisConfig = {
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
};

// Export everything
export default {
  animations,
  getDeviceSettings,
  initAnimationOptimizations,
  lenisConfig
};