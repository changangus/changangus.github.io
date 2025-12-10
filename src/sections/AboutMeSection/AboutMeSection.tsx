import React from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import { sectionWrapper } from "../../styles/app.css";

const AboutMeSection: React.FC = () => {
  return (
    <section className={sectionWrapper}>
       <AboutMe />
    </section>
  );
};

export default AboutMeSection;
