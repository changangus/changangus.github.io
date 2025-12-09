import SEO from "../components/SEO/SEO";
import Hero from "../components/Hero/Hero";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <SEO title="Home | Angus Chang" description="Welcome to Angus Chang's portfolio." />
        <Hero />
      </div>
    </>
  );
};

export default Home;
