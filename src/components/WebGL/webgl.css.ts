import { style } from '@vanilla-extract/css';

export const canvasContainer = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  pointerEvents: 'none', // Allow clicks to pass through to the content
});
