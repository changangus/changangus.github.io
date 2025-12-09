import { style } from '@vanilla-extract/css';
import { vars } from './theme.css'; // Import the theme variables

export const themeTransition = 'background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1), color 0.6s cubic-bezier(0.16, 1, 0.3, 1)';

export const container = style({
  fontFamily: vars.fonts.body,
  textAlign: 'center',
  padding: vars.space.medium,
  backgroundColor: vars.colors.background, // Use theme background color
  color: vars.colors.text, // Use theme text color
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: themeTransition,
});

export const nav = style({
  listStyle: 'none',
  padding: vars.space.none,
  display: 'flex',
  gap: vars.space.medium, // Use theme space medium
  marginBottom: vars.space.large,
});

export const navLink = style({
  textDecoration: 'none',
  color: vars.colors.primary, // Use theme primary color
  fontSize: '1.2em',
  transition: themeTransition,
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export const pageContent = style({
  backgroundColor: vars.colors.surface, // Use theme surface color
  padding: vars.space.large,
  borderRadius: '8px',
  maxWidth: '800px',
  width: '100%',
  transition: themeTransition,
});

export const heading = style({
  color: vars.colors.text, // Use theme text color
  fontSize: '2em',
  marginBottom: vars.space.medium,
  fontFamily: vars.fonts.heading,
  transition: themeTransition,
});

export const paragraph = style({
  color: vars.colors.text, // Use theme text color
  lineHeight: '1.6',
  fontFamily: vars.fonts.body,
  transition: themeTransition,
});
