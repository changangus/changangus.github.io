import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, useAnimate } from 'framer-motion';
import Home from "./pages/Home";
import About from "./pages/About";
import { useMode } from "./context/ModeContext";
import { lightTheme } from "./styles/lightTheme.css";
import { darkTheme } from "./styles/darkTheme.css";
import { container, nav, navLink, pageContent } from "./styles/app.css";
import Button from "./components/Button/Button";
import SEO from "./components/SEO/SEO";
import WebGLExperience from "./components/WebGL/WebGLExperience";
import PageTransition from "./components/PageTransition/PageTransition";
import LenisWrapper from "./components/Lenis/LenisWrapper";

function App() {
  const { isLightMode, toggleLightMode, isReducedMotion, toggleReducedMotion } = useMode();
  const location = useLocation();
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
      <div style={{ perspective: '1500px', overflow: 'hidden', backgroundColor: isLightMode ? '#fcfbf7' : '#0a0a0a' }}>
        <div 
          ref={scope}
          className={`${isLightMode ? lightTheme : darkTheme} ${container}`}
          style={{ transformStyle: 'preserve-3d' }}
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
                {/* Pass our custom handleToggle instead of toggleMode directly */}
                <Button onClick={handleToggle}>
                  Toggle Theme ({isLightMode ? "Light" : "Dark"})
                </Button>
              </li>
              <li>
                <Button onClick={toggleReducedMotion} aria-pressed={isReducedMotion} title={isReducedMotion ? "Enable Motion" : "Reduce Motion"}>
                   {isReducedMotion ? "Enable Motion" : "Reduce Motion"}
                </Button>
              </li>
            </ul>
          </nav>
          
          <div className={pageContent}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                } />
                <Route path="/about" element={
                  <PageTransition>
                    <About />
                  </PageTransition>
                } />
              </Routes>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </LenisWrapper>
  );
}

export default App;
