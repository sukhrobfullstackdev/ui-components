import '../src/index.css';

import type { Preview } from '@storybook/react';
import container from './container';
import decorators from './decorators';
import { darkTheme, lightTheme } from './theme';

const colorItems = [
  { value: '#bbbbbb', right: '⚪️', title: 'Light' },
  { value: '#f859ba', right: '🔴', title: 'Pink' },
  { value: '#ff761c', right: '🟠', title: 'Orange' },
  { value: '#14d17c', right: '🟢', title: 'Green' },
  { value: '#25a8f8', right: '🔵', title: 'Blue' },
  { value: '#b651f0', right: '🟣', title: 'Purple' },
  { value: '#353535', right: '⚫️', title: 'Dark' },
];

const radiusItems = [
  { value: '0', title: 'none' },
  { value: '6px', title: 'Small' },
  { value: '12px', title: 'Medium' },
  { value: '24px', title: 'Large' },
];

const preview: Preview = {
  globalTypes: {
    mode: {
      description: 'Color mode for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: ['light', 'dark'],
      },
    },
    brandColor: {
      description: 'Custom brand color',
      toolbar: {
        icon: 'paintbrush',
        items: colorItems,
      },
    },
    surfaceColor: {
      description: 'Custom surface color',
      toolbar: {
        icon: 'contrast',
        items: colorItems,
      },
    },
    textColor: {
      description: 'Custom text color',
      toolbar: {
        icon: 'edit',
        items: colorItems,
      },
    },
    neutralColor: {
      description: 'Custom neutral color',
      toolbar: {
        icon: 'switchalt',
        items: colorItems,
      },
    },
    containerRadius: {
      description: 'Custom container radius',
      toolbar: {
        icon: 'component',
        items: radiusItems,
      },
    },
    buttonRadius: {
      description: 'Custom button radius',
      toolbar: {
        icon: 'circlehollow',
        items: radiusItems,
      },
    },
    inputRadius: {
      description: 'Custom input radius',
      toolbar: {
        icon: 'info',
        items: radiusItems,
      },
    },
    brandFont: {
      description: 'Custom brand font',
      toolbar: {
        icon: 'medium',
        items: [
          { value: 'initial', title: 'Default' },
          { value: 'Lobster', title: 'Lobster' },
          { value: 'Roboto Slab', title: 'Roboto Slab' },
        ],
      },
    },
  },
  decorators: decorators,
  parameters: {
    backgrounds: {
      disable: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      current: 'dark',
      dark: { ...darkTheme },
      light: { ...lightTheme },
    },
    deepControls: { enabled: true },
    docs: {
      container: container,
    },
    layout: 'centered',
  },
};

export default preview;
