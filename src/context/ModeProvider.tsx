import React, { useState, ReactNode } from 'react';
import { ModeContext } from './ModeContext';

export const ModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isCreativeMode, setIsCreativeMode] = useState(false); // Default to Logic Mode

  const toggleMode = () => {
    setIsCreativeMode(prevMode => !prevMode);
  };

  return (
    <ModeContext.Provider value={{ isCreativeMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};
