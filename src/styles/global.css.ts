import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('html, body', {
  height: '100%',
  width: '100%',
  fontFamily: 'sans-serif', // Fallback
});

globalStyle('#root', {
  height: '100%',
  width: '100%',
});
