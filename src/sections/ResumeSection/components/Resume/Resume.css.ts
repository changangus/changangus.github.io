import { style } from "@vanilla-extract/css";
import { vars } from "../../../../styles/theme.css";
import { themeTransition } from "../../../../styles/app.css";

export const sectionContainer = style({
  padding: vars.space.small,
  borderRadius: "8px",
  transition: themeTransition,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const resumeContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: "1000px",
  margin: "0 8px", // Added for centering
  textAlign: "left",
  border: `2px solid ${vars.colors.text}`,
  padding: vars.space.large,
  // Using color-mix to add opacity to the surface color
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

export const sectionTitle = style({
  fontSize: "1.5rem",
  fontWeight: "bold",
  fontFamily: vars.fonts.heading,
  marginBottom: vars.space.medium,
  textTransform: "uppercase",
  borderBottom: `1px solid ${vars.colors.text}`,
  paddingBottom: vars.space.small,
  width: "100%",
});

export const contentGroup = style({
  marginBottom: vars.space.large,
  width: "100%",
});

export const entry = style({
  marginBottom: vars.space.medium,
});

export const entryHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  marginBottom: vars.space.small,
  flexWrap: "wrap",
});

export const entryTitle = style({
  fontSize: "1.2rem",
  fontWeight: "bold",
  fontFamily: vars.fonts.body,
});

export const entryDate = style({
  fontFamily: vars.fonts.code,
  fontSize: "0.9rem",
  color: vars.colors.secondary,
});

export const entryDescription = style({
  fontFamily: vars.fonts.body,
  lineHeight: 1.6,
  color: vars.colors.text,
});

export const skillsList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space.small,
});

export const skillTag = style({
  fontFamily: vars.fonts.code,
  fontSize: "0.9rem",
  padding: `${vars.space.small} ${vars.space.medium}`,
  border: `1px solid ${vars.colors.text}`,
  borderRadius: "4px",
  backgroundColor: vars.colors.background,
  transition: themeTransition,
  cursor: "default",
  ":hover": {
    transform: "translate(-2px, -2px)",
    boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.2)",
  },
});
