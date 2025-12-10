import SEO from "../components/SEO/SEO";
import Hero from "./HeroSection/components/Hero/Hero";

const HeroSection: React.FC = () => {
  return (
    <>
      <SEO title="Home | Angus Chang" description="Welcome to Angus Chang's portfolio." />
      <Hero />
    </>
  );
};

export default HeroSection;
