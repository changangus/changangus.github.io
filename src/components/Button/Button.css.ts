import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const button = style({
  padding: '10px 15px',
  backgroundColor: vars.colors.primary, // Automatically switches based on the active theme
  color: '#ffffff', // Keeping white text for now as per previous inline styles
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1em',
  fontFamily: vars.fonts.body,
  transition: 'background-color 0.2s ease, transform 0.1s ease',
  selectors: {
    '&:hover': {
      opacity: 0.9,
      transform: 'translateY(-1px)',
    },
    '&:active': {
      transform: 'translateY(1px)',
    },
  },
});
