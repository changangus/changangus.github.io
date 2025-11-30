import { createTheme } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const logicTheme = createTheme(vars, {
  colors: {
    background: '#0a0a0a', // Deep dark grey/black
    text: '#e0e0e0', // Light grey for readability
    primary: '#3b82f6', // Tech blue
    secondary: '#64748b', // Muted slate
    accent: '#10b981', // Success green (terminal feel)
    surface: '#171717', // Slightly lighter background for cards
  },
  fonts: {
    body: '"Inter", system-ui, -apple-system, sans-serif',
    heading: '"Inter", system-ui, -apple-system, sans-serif', // Clean, technical sans
    code: '"Fira Code", "JetBrains Mono", monospace',
  },
  space: {
    none: '0',
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
    xlarge: '4rem',
  },
});
