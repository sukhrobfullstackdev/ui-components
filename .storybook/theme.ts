import { create } from '@storybook/theming/create';
//@ts-ignore typescript does not recognize direct SVG import
import MagicLogoDark from './assets/magic-logo-dark.svg';
//@ts-ignore typescript does not recognize direct SVG import
import MagicLogoLight from './assets/magic-logo-light.svg';

export const lightTheme = create({
  base: 'light',

  brandTitle: 'Magic Storybook',
  brandUrl: 'https://magic.link',
  brandImage: MagicLogoLight,

  appBorderRadius: 10,

  colorPrimary: '#6851ff',
  colorSecondary: '#6851ff',

  fontBase:
    '"Inter", "ProximaNova", -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  fontCode: 'monospace',
});

export const darkTheme = create({
  base: 'dark',

  brandTitle: 'Magic Storybook',
  brandUrl: 'https://magic.link',
  brandImage: MagicLogoDark,

  appBorderRadius: 10,

  colorPrimary: '#6851ff',
  colorSecondary: '#6851ff',

  fontBase:
    '"Inter", "ProximaNova", -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  fontCode: 'monospace',
});
