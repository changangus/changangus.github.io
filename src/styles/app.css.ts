import { style } from '@vanilla-extract/css';

export const container = style({
  fontFamily: 'sans-serif',
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f0f2f5',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const nav = style({
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  gap: '20px',
  marginBottom: '40px',
});

export const navLink = style({
  textDecoration: 'none',
  color: '#007bff',
  fontSize: '1.2em',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export const pageContent = style({
  backgroundColor: '#ffffff',
  padding: '40px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  width: '100%',
});

export const heading = style({
  color: '#333',
  fontSize: '2em',
  marginBottom: '20px',
});

export const paragraph = style({
  color: '#555',
  lineHeight: '1.6',
});
