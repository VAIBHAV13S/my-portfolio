import '../styles/globals.css';
import { useEffect } from 'react';
import { initAnimationOptimizations } from '../utils/animationConfig';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Initialize optimizations once on app start
    initAnimationOptimizations();
    
    // Performance monitoring
    if (process.env.NODE_ENV === 'development') {
      console.log('Animation optimizations initialized');
    }
  }, []);

  return <Component {...pageProps} />;
}