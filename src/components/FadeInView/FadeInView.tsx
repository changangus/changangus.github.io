import React from "react";
import { motion, type Variants } from "framer-motion";

interface FadeInViewProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  fullWidth?: boolean;
  className?: string;
}

const FadeInView: React.FC<FadeInViewProps> = ({ 
  children, 
  delay = 0, 
  direction = "up",
  fullWidth = false,
  className = ""
}) => {
  // Determine the initial offset based on direction
  // "up" means revealing upwards, so it starts from below (positive Y)
  const getInitialCoordinates = () => {
    switch (direction) {
      case "up": return { y: 60 };
      case "down": return { y: -60 };
      case "left": return { x: 60 };
      case "right": return { x: -60 };
      case "none": return {};
      default: return { y: 60 };
    }
  };

  const variants: Variants = {
    hidden: { 
      opacity: 0,
      scale: 0.92,
      filter: "blur(12px)",
      ...getInitialCoordinates()
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 24,
        stiffness: 140,
        mass: 0.8,
        delay: delay,
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      style={{ width: fullWidth ? "100%" : "auto" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInView;