import React from "react";
import {
  sectionContainer,
  aboutMeContainer,
  header,
  title,
  subtitle,
  content,
} from "./AboutMe.css";

const AboutMe: React.FC = () => {
  return (
    <div className={sectionContainer}>
      <div className={aboutMeContainer}>
        <div className={header}>
          <h2 className={title}>About Me</h2>
          <span className={subtitle}>Background & Philosophy</span>
        </div>
        <p className={content}>
          I am a passionate software engineer with a deep love for creative coding and interactive design. 
          My journey started with a curiosity for how things work on the web, leading me to specialize in 
          building immersive digital experiences.
          <br />
          <br />
          When I'm not coding, you can find me exploring the city through my camera lens, printing custom 
          designs, or on the basketball court. I believe in the intersection of technology and art, 
          striving to create software that is not only functional but also beautiful and engaging.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;