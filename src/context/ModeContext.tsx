import { createContext, useContext } from 'react';

interface ModeContextType {
  isLightMode: boolean;
  toggleLightMode: () => void;
  isReducedMotion: boolean;
  toggleReducedMotion: () => void;
}

export const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const useMode = () => {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
};
