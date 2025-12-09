import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

const blink = keyframes({
  "0%": { opacity: 1 },
  "50%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const heroContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "60vh",
  width: "100%",
  textAlign: "left",
  border: `2px solid ${vars.colors.text}`,
  padding: vars.space.large,
  backgroundColor: vars.colors.surface,
  boxShadow: "20px 20px 0px 0px rgba(0,0,0,0.2)", // Hard shadow for brutalist feel
});

export const name = style({
  fontSize: "clamp(2rem, 5vw, 4rem)",
  fontWeight: "bold",
  fontFamily: vars.fonts.heading,
  marginBottom: vars.space.small,
  textTransform: "uppercase",
  letterSpacing: "-0.05em",
});

export const title = style({
  fontSize: "clamp(1.5rem, 3vw, 2rem)",
  fontFamily: vars.fonts.code,
  marginBottom: vars.space.medium,
  color: vars.colors.secondary,
});

export const typewriterWrapper = style({
  fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
  fontFamily: vars.fonts.code,
  display: "flex",
  alignItems: "center",
  lineHeight: 1.5,
});

export const staticText = style({
  marginRight: "0.5ch",
});

export const dynamicText = style({
  color: vars.colors.primary,
  fontWeight: "bold",
  // needs to match lineHeight of typewriterWrapper
  minHeight: "1.5em",
});

export const cursor = style({
  display: "inline-block",
  width: "10px",
  height: "1.2em",
  backgroundColor: vars.colors.text,
  marginLeft: "4px",
  animation: `${blink} 1s linear infinite`,
});
