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
          <span className={subtitle}>Engineer & Maker</span>
        </div>
        <p className={content}>
          I'm a self-taught full stack engineer who's been building web apps for over 5 years. I got into coding because I was curious about how the web worked and saw the potential of being able to build out my ideas with software.That curiosity turned into a career working at startups and agencies, where I've had the chance to work on a variety of projects and technologies across the entire stack.
          <br />
          <br />
          I build accessible, performant UIs on the frontend and solid APIs on the backend. I care a lot about making things that work well, look beautiful and are easy to use. Whether that's for end users or other developers on my team.
          <br />
          <br />
          Outside of code, I'm into printmaking (screen printing and letterpress), photography, and basketball. I like working with my hands and creating things, whether it's on a screen or with ink and paper.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
