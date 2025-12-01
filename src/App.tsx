import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { useMode } from "./context/ModeContext";
import { logicTheme } from "./styles/logicTheme.css";
import { creativeTheme } from "./styles/creativeTheme.css";
import { container, nav, navLink, pageContent } from "./styles/app.css";
import Button from "./components/Button/Button";
import SEO from "./components/SEO/SEO";

function App() {
  const { isCreativeMode, toggleMode } = useMode();

  return (
    <Router>
      <SEO title="Angus Chang" description="A software engineering portfolio showcasing interactive web experiences." />
      <div className={`${isCreativeMode ? creativeTheme : logicTheme} ${container}`}>
        <nav>
          <ul className={nav}>
            <li>
              <Link to="/" className={navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={navLink}>
                About
              </Link>
            </li>
            <li>
              <Button onClick={toggleMode}>Toggle Mode ({isCreativeMode ? "Creative" : "Logic"})</Button>
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
