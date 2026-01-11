import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css"; // Import the theme variables

export const themeTransition =
  "background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1), color 0.6s cubic-bezier(0.16, 1, 0.3, 1)";

export const container = style({
  fontFamily: vars.fonts.body,
  textAlign: "center",
  paddingTop: "60px", // Add padding to account for fixed nav height
  backgroundColor: vars.colors.background, // Use theme background color
  color: vars.colors.text, // Use theme text color
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // Removed justifyContent: 'center' as it interferes with snapping
  transition: themeTransition,

});

export const nav = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 100, // Ensure nav is above other content
  padding: vars.space.small, // Add padding
  display: "flex",
  justifyContent: "flex-end", // Move items to the right
  gap: vars.space.small, // Use theme space medium
  marginBottom: vars.space.small,
  listStyle: "none",
});

globalStyle(`${nav} ul`, {
  display: "flex",
  flexDirection: "row",
  gap: vars.space.medium,
  listStyle: "none",
  margin: 0,
  padding: 0,
  alignItems: "center",
});

globalStyle(`${nav} li`, {
  listStyle: "none",
});

export const navLink = style({
  textDecoration: "none",
  fontWeight: "bold",
  color: vars.colors.primary, // Use theme primary color
  fontSize: "1.2em",
  transition: themeTransition,
  selectors: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export const pageContent = style({
  backgroundColor: vars.colors.surface, // Use theme surface color
  padding: vars.space.large,
  borderRadius: "8px",
  maxWidth: "800px",
  width: "100%",
  transition: themeTransition,
});

export const heading = style({
  color: vars.colors.text, // Use theme text color
  fontSize: "2em",
  marginBottom: vars.space.medium,
  fontFamily: vars.fonts.heading,
  transition: themeTransition,
});

export const paragraph = style({
  color: vars.colors.text, // Use theme text color
  lineHeight: "1.6",
  fontFamily: vars.fonts.body,
  transition: themeTransition,
});
