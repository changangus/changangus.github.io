import SEO from "../../components/SEO/SEO";
import Hero from "./components/Hero/Hero";
import Section from "../../components/Section/Section";

const HeroSection: React.FC = () => {
  return (
    <Section>
      <SEO title="Home | Angus Chang" description="Welcome to Angus Chang's portfolio." />
      <Hero />
    </Section>
  );
};

export default HeroSection;
