import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useMode } from '../../context/ModeContext';
import { themeToggleButton, iconContainer, icon } from './ThemeToggleButton.css';

interface ThemeToggleButtonProps {
  onClick: () => void;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ onClick }) => {
  const { isLightMode } = useMode();

  return (
    <button className={themeToggleButton} onClick={onClick} aria-label={isLightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}>
      <AnimatePresence mode="wait" initial={false}>
        {isLightMode ? (
          <motion.div
            key="moon"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={iconContainer}
          >
            <Moon className={icon} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={iconContainer}
          >
            <Sun className={icon} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggleButton;