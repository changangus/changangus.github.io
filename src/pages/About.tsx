import { heading, paragraph } from '../styles/app.css';

const About: React.FC = () => {
  return (
    <div>
      <h2 className={heading}>About Us</h2>
      <p className={paragraph}>This application demonstrates the integration of React Router for navigation and Vanilla Extract for styling in a Vite project.</p>
      <p className={paragraph}>Enjoy exploring the capabilities!</p>
    </div>
  );
};

export default About;
