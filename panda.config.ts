import { defineConfig } from '@pandacss/dev';
import { magicPreset } from './src/presets';

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  // Minify the generated css
  minify: true,
  // Hash all classnames
  hash: true,
  // Clean the output directory before generating the css
  clean: true,

  importMap: '@styled',

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Styling conditions / modes
  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
  },

  // Use Custom Patterns
  patterns: {
    extend: {
      divider: {
        description: 'An extension of the native Divider pattern that allows it to mimic the Spacer component',
        properties: {
          display: { type: 'enum', value: ['inline-block', 'block'] },
        },
      },
    },
  },

  // Use Magic preset
  presets: ['@pandacss/dev/presets', magicPreset],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',

  // Output extension impacting build
  outExtension: 'js',

  // The JSX framework to use
  jsxFramework: 'react',

  // Pre-generate some color styles
  staticCss: {
    css: [
      {
        properties: {
          color: ['text.primary', 'text.secondary', 'text.tertiary', 'text.quaternary'],
        },
      },
    ],
  },

  globalCss: {
    html: {
      fontFamily:
        "var(--brand-font, 'Inter'), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    },
    body: {
      bg: {
        base: 'white',
        _dark: '#19191A',
      },
    },
  },
});
