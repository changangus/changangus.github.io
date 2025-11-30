import { createTheme } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const creativeTheme = createTheme(vars, {
  colors: {
    background: '#fcfbf7', // Warm off-white (paper-like)
    text: '#1c1917', // Warm black
    primary: '#ea580c', // Vibrant orange
    secondary: '#57534e', // Warm grey
    accent: '#8b5cf6', // Creative purple
    surface: '#ffffff', // White surface
  },
  fonts: {
    body: '"Merriweather", Georgia, serif', // Editorial feel
    heading: '"Playfair Display", serif', // Elegant serif
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
