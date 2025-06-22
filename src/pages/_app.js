import '../styles/globals.css'
import { useEffect } from 'react';
import { initAnimationOptimizations } from '../utils/animationOptimizations';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Initialize animation optimizations on app start
    initAnimationOptimizations();
  }, []);

  return <Component {...pageProps} />
}