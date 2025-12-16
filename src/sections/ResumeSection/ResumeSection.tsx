import React from "react";
import Resume from "./components/Resume/Resume";
import Section from "../../components/Section/Section";
import FadeInView from "../../components/FadeInView/FadeInView";
import { resumeContainer } from "./components/Resume/Resume.css";

const ResumeSection: React.FC = () => {
  return (
    <Section>
      <FadeInView className={resumeContainer} direction="up" delay={0.2} fullWidth>
        <Resume />
      </FadeInView>
    </Section>
  );
};

export default ResumeSection;
