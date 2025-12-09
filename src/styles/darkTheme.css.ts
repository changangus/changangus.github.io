import { createTheme } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const darkTheme = createTheme(vars, {
  colors: {
    background: '#0a0a0a', // Deep dark grey/black
    text: '#e0e0e0', // Light grey for readability
    primary: '#3b82f6', // Tech blue
    secondary: '#64748b', // Muted slate
    accent: '#10b981', // Success green (terminal feel)
    surface: '#171717', // Slightly lighter background for cards
  },
  fonts: {
    body: '"Space Mono", monospace',
    heading: '"Space Mono", monospace', // Brutalist/Tech
    code: '"JetBrains Mono", monospace',
  },
  space: {
    none: '0',
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
    xlarge: '4rem',
  },
});
