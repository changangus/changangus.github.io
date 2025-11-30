import { createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  colors: {
    background: null,
    text: null,
    primary: null,
    secondary: null,
    accent: null,
    surface: null,
  },
  fonts: {
    body: null,
    heading: null,
    code: null,
  },
  space: {
    none: null,
    small: null,
    medium: null,
    large: null,
    xlarge: null,
  },
});
