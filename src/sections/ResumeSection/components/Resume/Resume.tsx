import React from "react";
import {
  header,
  title,
  subtitle,
  sectionTitle,
  contentGroup,
  entry,
  entryHeader,
  entryTitle,
  entryDate,
  entryDescription,
  skillsList,
  skillTag,
} from "./Resume.css";

const Resume: React.FC = () => {
  return (
    <div>
      <div className={header}>
        <h2 className={title}>Resume</h2>
        <span className={subtitle}>Angus Chang • Creative Developer</span>
      </div>

      <div className={contentGroup}>
        <h3 className={sectionTitle}>Experience</h3>

        <div className={entry}>
          <div className={entryHeader}>
            <span className={entryTitle}>Senior Frontend Engineer @ Tech Corp</span>
            <span className={entryDate}>2023 - Present</span>
          </div>
          <p className={entryDescription}>
            Leading the frontend development of next-generation web applications using React, TypeScript, and WebGL.
            Focused on performance optimization and creating immersive user experiences.
          </p>
        </div>

        <div className={entry}>
          <div className={entryHeader}>
            <span className={entryTitle}>Creative Developer @ Digital Agency</span>
            <span className={entryDate}>2021 - 2023</span>
          </div>
          <p className={entryDescription}>
            Collaborated with designers to bring creative visions to life. Built interactive microsites and marketing
            campaigns using Three.js and various animation libraries.
          </p>
        </div>
      </div>

      <div className={contentGroup}>
        <h3 className={sectionTitle}>Education</h3>
        <div className={entry}>
          <div className={entryHeader}>
            <span className={entryTitle}>B.S. Computer Science</span>
            <span className={entryDate}>2017 - 2021</span>
          </div>
          <p className={entryDescription}>
            University of Technology. Specialized in Human-Computer Interaction and Computer Graphics.
          </p>
        </div>
      </div>

      <div className={contentGroup}>
        <h3 className={sectionTitle}>Skills</h3>
        <div className={skillsList}>
          <span className={skillTag}>React</span>
          <span className={skillTag}>TypeScript</span>
          <span className={skillTag}>WebGL / Three.js</span>
          <span className={skillTag}>Node.js</span>
          <span className={skillTag}>Vanilla Extract</span>
          <span className={skillTag}>UI/UX Design</span>
          <span className={skillTag}>Photography</span>
        </div>
      </div>
    </div>
  );
};

export default Resume;
