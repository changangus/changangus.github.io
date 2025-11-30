import { heading, paragraph } from '../styles/app.css';

const Home: React.FC = () => {
  return (
    <div>
      <h2 className={heading}>Welcome to the Home Page!</h2>
      <p className={paragraph}>This is a simple React application configured with React Router and styled with Vanilla Extract.</p>
    </div>
  );
};

export default Home;
