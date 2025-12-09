import { createTheme } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const lightTheme = createTheme(vars, {
  colors: {
    background: "#f2efe1", // Warm off-white (paper-like)
    text: "#1c1917", // Warm black
    primary: "#ea580c", // Vibrant orange
    secondary: "#57534e", // Warm grey
    accent: "#8b5cf6", // Creative purple
    surface: "#fffefc", // surface
  },
  fonts: {
    body: '"Space Mono", monospace',
    heading: '"Space Mono", monospace',
    code: '"JetBrains Mono", monospace',
  },
  space: {
    none: "0",
    small: "0.5rem",
    medium: "1rem",
    large: "2rem",
    xlarge: "4rem",
  },
});
