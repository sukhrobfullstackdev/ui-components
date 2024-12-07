import { defineKeyframes } from '@pandacss/dev';

export const keyframes = defineKeyframes({
  fadeIn: {
    '0%': { opacity: '0' },
  },
  fadeOut: {
    '100%': { opacity: '0' },
  },
  scaleIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1', scale: '1' },
  },
  scaleOut: {
    '0%': { opacity: '1', scale: '1' },
    '100%': { opacity: '0', scale: '0.9' },
  },
  slideIn: {
    '0%': {
      opacity: '0',
      transform: 'translateY(1.25rem)',
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0)',
    },
  },
  slideOut: {
    '0%': {
      opacity: '1',
      transform: 'translateY(0)',
    },
    '100%': {
      opacity: '0',
      transform: 'translateY(1.25rem)',
    },
  },
  slideRight: {
    '0% ': {
      left: '-150%',
    },
    '100%': {
      left: '175%',
    },
  },
  moveRight: {
    '0%': { transform: 'translateX(0rem)' },
    '80%': { transform: 'translateX(1.25rem)' },
    '100%': { transform: 'translateX(1.2rem)' },
  },
  moveLeft: {
    '0%': { transform: 'translateX(0rem)' },
    '80%': { transform: 'translateX(-1.25rem)' },
    '100%': { transform: 'translateX(-1.2rem)' },
  },
  animateSpinnerSmall: {
    '0%': {
      strokeDasharray: '0.4, 60',
      strokeDashoffset: '0',
    },
    '50%': {
      strokeDasharray: '36, 60',
      strokeDashoffset: '-14',
    },
    '100%': {
      strokeDasharray: '36, 60',
      strokeDashoffset: '-52',
    },
  },
  animateSpinnerLarge: {
    '0%': {
      strokeDasharray: '0.875, 175',
      strokeDashoffset: '0',
    },
    '50%': {
      strokeDasharray: '78.75, 131.25',
      strokeDashoffset: '-31',
    },
    '100%': {
      strokeDasharray: '0.875, 175',
      strokeDashoffset: '-158',
    },
  },
  popIn: {
    '0%': {
      scale: 0,
    },
    '100%': {
      scale: 1,
    },
  },
  popOut: {
    '0%': {
      scale: 1,
    },
    '100%': {
      scale: 0,
    },
  },
});
