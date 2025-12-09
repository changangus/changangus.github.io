import React, { useState, useEffect, type ReactNode } from 'react';
import { ModeContext } from './ModeContext';

export const ModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false); // Default to Dark Mode
  const [isReducedMotion, setIsReducedMotion] = useState(() => {
    // Check system preference on initial load
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleLightMode = () => {
    setIsLightMode(prevMode => !prevMode);
  };

  const toggleReducedMotion = () => {
    setIsReducedMotion(prev => !prev);
  };

  return (
    <ModeContext.Provider value={{ isLightMode, toggleLightMode, isReducedMotion, toggleReducedMotion }}>
      {children}
    </ModeContext.Provider>
  );
};
