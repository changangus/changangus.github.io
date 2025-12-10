import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html, body", {
  minHeight: "100%",
  width: "100%",
  fontFamily: "sans-serif", // Fallback
});

globalStyle("#root", {
  minHeight: "100%",
  width: "100%",
  isolation: "isolate",
});

// Lenis recommended CSS
globalStyle("html.lenis, html.lenis body", {
  height: "auto",
});

globalStyle(".lenis.lenis-smooth [data-lenis-prevent]", {
  overscrollBehavior: "contain",
});

globalStyle(".lenis.lenis-stopped", {
  overflow: "hidden",
});

globalStyle(".lenis.lenis-scrolling iframe", {
  pointerEvents: "none",
});
