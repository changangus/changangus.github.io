import { style } from "@vanilla-extract/css";

export const section = style({
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem 0", // Add vertical padding to prevent edge touching
});
