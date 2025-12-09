import React from "react";
import { useTypewriter } from "../../hooks/useTypewriter";
import { heroContainer, name, typewriterWrapper, staticText, dynamicText, cursor, sectionContainer } from "./Hero.css";

const Hero: React.FC = () => {
  const roles = ["Creative Developer", "Problem Solver", "Photographer", "Print Maker", "Basketball Player"];

  const typedText = useTypewriter(roles);

  return (
    <div className={sectionContainer}>
      <div className={heroContainer}>
        <h1 className={name}>Angus Chang</h1>
        <div className={typewriterWrapper}>
          <span className={staticText}>Full Stack Engineer &</span>
        </div>
        <div className={typewriterWrapper}>
          <span className={dynamicText}>{typedText}</span>
          <span className={cursor}></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
