import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const themeToggleButton = style({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  border: `2px solid ${vars.colors.text}`,
  backgroundColor: vars.colors.surface,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  outline: 'none',
  transition: 'background-color 0.3s ease, border-color 0.3s ease',
  position: 'relative',
  padding: 24,
  overflow: 'hidden',
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.accent,
    },
    '&:active': {
      transform: 'scale(0.95)',
    },
  },
});

export const iconContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

export const icon = style({
  width: '60%',
  height: '60%',
  color: vars.colors.text,
  transition: 'color 0.3s ease',
});

// For framer-motion animation
globalStyle(`${themeToggleButton} svg`, {
  position: 'absolute',
});
