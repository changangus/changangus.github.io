import { style } from "@vanilla-extract/css";
import { vars } from "../../../../styles/theme.css";
import { themeTransition } from "../../../../styles/app.css";

export const sectionContainer = style({
  padding: vars.space.small,
  borderRadius: "8px",
  width: "100%",
  transition: themeTransition,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const aboutMeContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  maxWidth: "1000px",
  margin: "0 auto", // Added for centering
  minHeight: "60vh",
  textAlign: "left",
  border: `2px solid ${vars.colors.text}`,
  padding: vars.space.large,
  // Match Resume transparency
  backgroundColor: `color-mix(in srgb, ${vars.colors.surface}, transparent 10%)`,
  boxShadow: "20px 20px 0px 0px rgba(0,0,0,0.2)",
  transition: themeTransition,
});

export const header = style({
  width: "100%",
  borderBottom: `2px solid ${vars.colors.text}`,
  paddingBottom: vars.space.medium,
  marginBottom: vars.space.large,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  flexWrap: "wrap",
  gap: vars.space.small,
});

export const title = style({
  fontSize: "clamp(2rem, 5vw, 4rem)",
  fontWeight: "bold",
  fontFamily: vars.fonts.heading,
  textTransform: "uppercase",
  letterSpacing: "-0.05em",
  color: vars.colors.text,
});

export const subtitle = style({
  fontSize: "clamp(1rem, 2vw, 1.5rem)",
  fontFamily: vars.fonts.code,
  color: vars.colors.secondary,
});

export const content = style({
  fontSize: "clamp(1.1rem, 2vw, 1.3rem)", // Slightly adjusted for readability
  fontFamily: vars.fonts.body,
  lineHeight: 1.6,
  color: vars.colors.text,
  maxWidth: "800px", // Limit line length for readability within the wider container
});
