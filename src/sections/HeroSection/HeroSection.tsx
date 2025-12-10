import SEO from "../../components/SEO/SEO";
import Hero from "./components/Hero/Hero";

const HeroSection: React.FC = () => {
  return (
    <section
      style={{ height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <SEO title="Home | Angus Chang" description="Welcome to Angus Chang's portfolio." />
      <Hero />
    </section>
  );
};

export default HeroSection;
