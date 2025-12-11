import { style } from "@vanilla-extract/css";
import { vars } from "../../../../styles/theme.css";
import { themeTransition } from "../../../../styles/app.css";

export const sectionContainer = style({
  padding: vars.space.small,
  borderRadius: "8px",
  width: "100%",
  height: "100%",
  transition: themeTransition,
  margin: "0 15px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
});

export const aboutMeContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "60vh",
  textAlign: "left",
  border: `2px solid ${vars.colors.text}`,
  padding: vars.space.large,
  backgroundColor: vars.colors.surface,
  boxShadow: "20px 20px 0px 0px rgba(0,0,0,0.2)",
  transition: themeTransition,
});

export const title = style({
  fontSize: "clamp(2rem, 5vw, 4rem)",
  fontWeight: "bold",
  fontFamily: vars.fonts.heading,
  marginBottom: vars.space.medium,
  textTransform: "uppercase",
  letterSpacing: "-0.05em",
});

export const content = style({
  fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
  fontFamily: vars.fonts.body,
  lineHeight: 1.6,
  color: vars.colors.text,
});
