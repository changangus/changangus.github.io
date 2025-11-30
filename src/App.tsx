import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { container, nav, navLink, pageContent } from './styles/app.css';

function App() {
  return (
    <Router>
      <div className={container}>
        <nav>
          <ul className={nav}>
            <li>
              <Link to="/" className={navLink}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={navLink}>About</Link>
            </li>
          </ul>
        </nav>
        <div className={pageContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
