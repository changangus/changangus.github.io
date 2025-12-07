import { heading, paragraph } from "../styles/app.css";
import SEO from "../components/SEO/SEO";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <SEO title="Home | Interactive Coder" description="Welcome to Angus Chang's portfolio." />
        <h2 className={heading}>Welcome to the Home Page!</h2>
        <p className={paragraph}>
          This is a simple React application configured with React Router and styled with Vanilla Extract.
        </p>
      </div>
    </>
  );
};

export default Home;
