import { useAnimate } from "framer-motion";
import HeroSection from "./sections/HeroSection/HeroSection";
import { useMode } from "./context/ModeContext";
import { lightTheme } from "./styles/lightTheme.css";
import { darkTheme } from "./styles/darkTheme.css";
import { container, nav, navLink } from "./styles/app.css";
import ThemeToggleButton from "./components/ThemeToggleButton/ThemeToggleButton";
import LenisWrapper from "./components/Lenis/LenisWrapper";
import SEO from "./components/SEO/SEO";
import WebGLExperience from "./components/WebGL/WebGLExperience";
import AboutMeSection from "./sections/AboutMeSection/AboutMeSection";
import ResumeSection from "./sections/ResumeSection/ResumeSection";

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
      <div
        style={{ position: "relative", perspective: "1500px", backgroundColor: isLightMode ? "#fcfbf7" : "#0a0a0a" }}
      >
        <div
          ref={scope}
          className={`${isLightMode ? lightTheme : darkTheme} ${container}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <WebGLExperience />
          <nav className={nav}>
            <ul>
              <li>
                <a href="https://github.com/changangus" target="_blank" rel="noopener noreferrer" className={navLink}>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/changangus/" target="_blank" rel="noopener noreferrer" className={navLink}>
                  LinkedIn
                </a>
              </li>
              <li>
                <ThemeToggleButton onClick={handleToggle} />
              </li>
            </ul>
          </nav>
          <HeroSection />
          <AboutMeSection />
          <ResumeSection />
        </div>
      </div>
    </LenisWrapper>
  );
}

export default App;
