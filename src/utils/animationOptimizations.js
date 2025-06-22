/**
 * PERFORMANCE OPTIMIZATION CONFIGURATION
 * 
 * This file contains optimized settings for all animation libraries
 * to ensure smooth performance across devices
 */

import { gsap } from 'gsap';

/**
 * GSAP Performance Optimizations
 */
export const initGSAPOptimizations = () => {
  if (typeof window === "undefined") return;

  // Enable 3D transforms for better performance
  gsap.config({
    force3D: true,
    autoSleep: 60,
    nullTargetWarn: false
  });

  // Optimize ticker for smooth animations
  gsap.ticker.lagSmoothing(500, 16);
  
  // Set up performance monitoring
  gsap.ticker.add(() => {
    // Monitor performance here if needed
  });
};

/**
 * Framer Motion Performance Settings
 */
export const framerMotionConfig = {
  // Optimize for performance
  layoutDependency: false,
  optimizeForSpeed: true,
  
  // Reduce motion for accessibility
  respectsReducedMotion: true,
  
  // Default transition settings
  defaultTransition: {
    type: "spring",
    stiffness: 400,
    damping: 25
  }
};

/**
 * Lenis Smooth Scroll Configuration
 */
export const lenisConfig = {
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
  
  // Performance optimizations
  syncTouch: false,
  syncTouchLerp: 0.1,
  touchInertiaMultiplier: 35,
  
  // Orientation handling
  orientation: 'vertical',
  gestureOrientation: 'vertical'
};

/**
 * Animation Performance Presets
 */
export const animationPresets = {
  // Fast animations for immediate feedback
  fast: {
    duration: 0.2,
    ease: "power2.out"
  },
  
  // Standard animations for most interactions
  standard: {
    duration: 0.4,
    ease: "power2.inOut"
  },
  
  // Slow animations for dramatic effects
  slow: {
    duration: 0.8,
    ease: "power3.out"
  },
  
  // Bouncy animations for playful interactions
  bouncy: {
    type: "spring",
    stiffness: 400,
    damping: 15
  },
  
  // Smooth entrance animations
  entrance: {
    duration: 0.6,
    ease: [0.23, 1, 0.32, 1]
  }
};

/**
 * Responsive Animation Settings
 */
export const responsiveAnimations = {
  // Disable complex animations on mobile for performance
  mobile: {
    enabled: true,
    reducedComplexity: true,
    maxDuration: 0.3
  },
  
  // Full animations on desktop
  desktop: {
    enabled: true,
    reducedComplexity: false,
    maxDuration: 1.0
  },
  
  // Tablet settings
  tablet: {
    enabled: true,
    reducedComplexity: false,
    maxDuration: 0.6
  }
};

/**
 * Device Detection and Optimization
 */
export const getDeviceOptimizations = () => {
  if (typeof window === "undefined") return responsiveAnimations.desktop;
  
  const width = window.innerWidth;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    return {
      enabled: false,
      reducedComplexity: true,
      maxDuration: 0.1
    };
  }
  
  if (isMobile) return responsiveAnimations.mobile;
  if (isTablet) return responsiveAnimations.tablet;
  return responsiveAnimations.desktop;
};

/**
 * Memory Management for Animations
 */
export const animationCleanup = {
  // Clean up GSAP animations
  cleanupGSAP: (context) => {
    if (context) {
      context.revert();
    }
  },
  
  // Clean up ScrollTrigger instances
  cleanupScrollTrigger: (triggers = []) => {
    triggers.forEach(trigger => {
      if (trigger && trigger.kill) {
        trigger.kill();
      }
    });
  },
  
  // General cleanup function
  cleanup: (refs = [], contexts = []) => {
    // Clean up GSAP contexts
    contexts.forEach(ctx => {
      if (ctx && ctx.revert) {
        ctx.revert();
      }
    });
    
    // Clear refs
    refs.forEach(ref => {
      if (ref && ref.current) {
        ref.current = null;
      }
    });
  }
};

/**
 * Animation Queue Management
 */
export const animationQueue = {
  // Queue for managing multiple animations
  queue: [],
  isRunning: false,
  
  // Add animation to queue
  add: (animationFn) => {
    animationQueue.queue.push(animationFn);
    if (!animationQueue.isRunning) {
      animationQueue.process();
    }
  },
  
  // Process animation queue
  process: async () => {
    if (animationQueue.queue.length === 0) {
      animationQueue.isRunning = false;
      return;
    }
    
    animationQueue.isRunning = true;
    const animation = animationQueue.queue.shift();
    
    try {
      await animation();
    } catch (error) {
      console.warn('Animation error:', error);
    }
    
    // Process next animation
    requestAnimationFrame(() => {
      animationQueue.process();
    });
  }
};

/**
 * Initialize all optimizations
 */
export const initAnimationOptimizations = () => {
  initGSAPOptimizations();
  
  // Set up performance monitoring
  if (typeof window !== "undefined") {
    // Monitor FPS and adjust animations accordingly
    let fps = 60;
    let lastTime = performance.now();
    
    const monitorPerformance = (currentTime) => {
      const delta = currentTime - lastTime;
      fps = 1000 / delta;
      lastTime = currentTime;
      
      // Adjust animation complexity based on FPS
      if (fps < 30) {
        // Reduce animation complexity
        gsap.ticker.lagSmoothing(1000, 16);
      } else {
        gsap.ticker.lagSmoothing(500, 16);
      }
      
      requestAnimationFrame(monitorPerformance);
    };
    
    requestAnimationFrame(monitorPerformance);
  }
};

export default {
  initGSAPOptimizations,
  framerMotionConfig,
  lenisConfig,
  animationPresets,
  responsiveAnimations,
  getDeviceOptimizations,
  animationCleanup,
  animationQueue,
  initAnimationOptimizations
};