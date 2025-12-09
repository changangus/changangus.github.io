import { Link } from "react-router-dom";
import { useAnimate } from "framer-motion";
import Home from "./pages/Home";
import { useMode } from "./context/ModeContext";
import { lightTheme } from "./styles/lightTheme.css";
import { darkTheme } from "./styles/darkTheme.css";
import { container, nav, navLink } from "./styles/app.css";
import ThemeToggleButton from "./components/ThemeToggleButton/ThemeToggleButton";
import LenisWrapper from "./components/Lenis/LenisWrapper";
import SEO from "./components/SEO/SEO";
import WebGLExperience from "./components/WebGL/WebGLExperience";

function App() {
  const { isLightMode, toggleLightMode, isReducedMotion } = useMode();
  const [scope, animate] = useAnimate();

  const handleToggle = async () => {
    if (isReducedMotion) {
      toggleLightMode();
      return;
    }

    // 1. Rotate to 90 degrees (edge-on) - looks like the page is turning away
    await animate(scope.current, { rotateY: 90, opacity: 0.5, scale: 0.95 }, { duration: 0.3, ease: "easeIn" });

    // 2. Perform the actual theme switch state update
    toggleLightMode();

    // 3. Rotate back from 90 to 0 (reveal new side) - looks like the new page is turning in
    await animate(scope.current, { rotateY: 0, opacity: 1, scale: 1 }, { duration: 0.3, ease: "easeOut" });
  };

  return (
    <LenisWrapper>
      <SEO title="Angus Chang" description="A software engineering portfolio showcasing interactive web experiences." />

      {/* Perspective Wrapper for 3D effect */}
      <div style={{ perspective: "1500px", overflow: "hidden", backgroundColor: isLightMode ? "#fcfbf7" : "#0a0a0a" }}>
        <div
          ref={scope}
          className={`${isLightMode ? lightTheme : darkTheme} ${container}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <WebGLExperience />
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
                <ThemeToggleButton onClick={handleToggle} />
              </li>
            </ul>
          </nav>
          <Home />
        </div>
      </div>
    </LenisWrapper>
  );
}

export default App;
