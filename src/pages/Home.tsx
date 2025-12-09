import SEO from "../components/SEO/SEO";
import Hero from "../components/Hero/Hero";

const Home: React.FC = () => {
  return (
    <>
      <SEO title="Home | Angus Chang" description="Welcome to Angus Chang's portfolio." />
      <Hero />
    </>
  );
};

export default Home;
