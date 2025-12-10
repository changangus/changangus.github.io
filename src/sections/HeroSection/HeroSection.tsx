import SEO from "../../components/SEO/SEO";
import Hero from "./components/Hero/Hero";
import { sectionWrapper } from "../../styles/app.css";

const HeroSection: React.FC = () => {
  return (
    <section className={sectionWrapper}>
      <SEO title="Home | Angus Chang" description="Welcome to Angus Chang's portfolio." />
      <Hero />
    </section>
  );
};

export default HeroSection;
