/**
 * ANIMATION ARCHITECTURE GUIDE
 * 
 * This file defines the proper usage of each animation tool in our portfolio:
 * 
 * 1. LENIS: Smooth scrolling only
 * 2. GSAP + ScrollTrigger: Complex scroll animations, parallax, entrance effects
 * 3. FRAMER MOTION: Component transitions, hover states, micro-interactions
 * 4. LUCIDE REACT: Consistent icon system with hover animations
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * GSAP ANIMATION PRESETS
 * Use these for consistent scroll-triggered animations
 */
export const gsapAnimations = {
  // Card entrance from bottom with scale
  cardEntrance: (element, index = 0) => {
    gsap.fromTo(element, {
      y: 80,
      opacity: 0,
      scale: 0.8,
      rotationY: 15
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      rotationY: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      delay: index * 0.1
    });
  },

  // Section title reveal
  titleReveal: (element) => {
    gsap.fromTo(element, {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  },

  // Floating elements
  floatingElements: (elements) => {
    gsap.to(elements, {
      y: -10,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 1,
        from: "random"
      }
    });
  },

  // Parallax background
  parallaxBg: (element, speed = -50) => {
    gsap.to(element, {
      yPercent: speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  },

  // Timeline line animation
  timelineLine: (element) => {
    gsap.fromTo(element, 
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element.parentElement,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      }
    );
  }
};

/**
 * FRAMER MOTION VARIANTS
 * Use these for component transitions and micro-interactions
 */
export const framerVariants = {
  // Container stagger animation
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },

  // Item slide up
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.23, 1, 0.32, 1] 
      }
    }
  },

  // Scale hover effect
  scaleHover: {
    hover: { 
      scale: 1.05, 
      y: -5,
      transition: { type: "spring", stiffness: 300 }
    },
    tap: { scale: 0.95 }
  },

  // Button animation
  button: {
    hover: { 
      scale: 1.05, 
      y: -2,
      transition: { type: "spring", stiffness: 400 }
    },
    tap: { scale: 0.95 }
  },

  // Icon rotation
  iconRotate: {
    hover: { 
      rotate: 360,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  },

  // Slide from side
  slideX: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }
};

/**
 * LUCIDE ICON ANIMATIONS
 * Consistent hover effects for all icons
 */
export const iconAnimations = {
  // Standard icon hover
  standard: {
    whileHover: { 
      scale: 1.2, 
      rotate: 5,
      transition: { type: "spring", stiffness: 400 }
    },
    whileTap: { scale: 0.9 }
  },

  // Social media icons
  social: {
    whileHover: { 
      scale: 1.2, 
      rotate: 10,
      transition: { type: "spring", stiffness: 300 }
    },
    whileTap: { scale: 0.9 }
  },

  // Tech stack icons
  tech: {
    whileHover: { 
      scale: 1.1,
      y: -2,
      transition: { type: "spring", stiffness: 400 }
    }
  },

  // Navigation arrows
  arrow: {
    whileHover: { 
      x: 5,
      transition: { type: "spring", stiffness: 400 }
    }
  }
};

/**
 * COMBINED ANIMATION HOOKS
 */
export const useOptimizedAnimations = (ref, options = {}) => {
  const {
    type = 'card',
    index = 0,
    enableFloating = false,
    parallax = false
  } = options;

  React.useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;

    const element = ref.current;
    
    // Apply GSAP animations based on type
    switch (type) {
      case 'card':
        gsapAnimations.cardEntrance(element, index);
        break;
      case 'title':
        gsapAnimations.titleReveal(element);
        break;
      case 'timeline':
        gsapAnimations.timelineLine(element);
        break;
    }

    // Optional floating animation
    if (enableFloating) {
      gsapAnimations.floatingElements(element);
    }

    // Optional parallax
    if (parallax) {
      gsapAnimations.parallaxBg(element);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [ref, type, index, enableFloating, parallax]);
};

/**
 * PERFORMANCE OPTIMIZATIONS
 */
export const animationConfig = {
  // Reduce motion for accessibility
  respectsReducedMotion: true,
  
  // GSAP performance settings
  gsap: {
    force3D: true,
    autoSleep: 60,
    lagSmoothing: 500,
    ticker: {
      lagSmoothing: 0
    }
  },

  // Framer Motion performance settings
  framer: {
    layoutDependency: false,
    optimizeForSpeed: true
  },

  // Lenis smooth scroll settings
  lenis: {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false
  }
};

export default {
  gsapAnimations,
  framerVariants,
  iconAnimations,
  useOptimizedAnimations,
  animationConfig
};