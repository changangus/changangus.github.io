import React from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Section from "../../components/Section/Section";
import FadeInView from "../../components/FadeInView/FadeInView";

const AboutMeSection: React.FC = () => {
  return (
    <Section>
      <FadeInView direction="up" delay={0.2} fullWidth>
       <AboutMe />
      </FadeInView>
    </Section>
  );
};

export default AboutMeSection;
