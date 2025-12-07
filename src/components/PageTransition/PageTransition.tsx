import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { useMode } from '../../context/ModeContext';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const { isReducedMotion } = useMode();

  const variants = {
    initial: { opacity: 0, y: isReducedMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: isReducedMotion ? 0 : -20 },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
