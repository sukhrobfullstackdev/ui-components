import { defineSemanticTokens } from '@pandacss/dev';

export const semanticColors = defineSemanticTokens.colors({
  surface: {
    primary: {
      value: {
        base: 'var(--surface-primary, {colors.paper})',
        _light: 'var(--surface-primary, {colors.paper})',
        _dark: 'var(--surface-primary-dark, {colors.slate.0})',
      },
    },
    secondary: {
      value: {
        base: 'var(--surface-secondary, {colors.ink.10})',
        _light: 'var(--surface-secondary, {colors.ink.10})',
        _dark: 'var(--surface-secondary-dark, {colors.slate.1})',
      },
    },
    tertiary: {
      value: {
        base: 'var(--surface-tertiary, {colors.ink.20})',
        _light: 'var(--surface-tertiary, {colors.ink.20})',
        _dark: 'var(--surface-tertiary-dark, {colors.slate.2})',
      },
    },
    quaternary: {
      value: {
        base: 'var(--surface-quaternary, {colors.ink.30})',
        _light: 'var(--surface-quaternary, {colors.ink.30})',
        _dark: 'var(--surface-quaternary-dark, {colors.slate.3})',
      },
    },
  },
  text: {
    primary: {
      value: {
        base: 'var(--text-primary, {colors.ink.90})',
        _light: 'var(--text-primary, {colors.ink.90})',
        _dark: 'var(--text-primary-dark, {colors.chalk})',
      },
    },
    secondary: {
      value: {
        base: 'var(--text-secondary, {colors.ink.80})',
        _light: 'var(--text-secondary, {colors.ink.80})',
        _dark: 'var(--text-secondary-dark, {colors.chalk/72})',
      },
    },
    tertiary: {
      value: {
        base: 'var(--text-tertiary, {colors.ink.70})',
        _light: 'var(--text-tertiary, {colors.ink.70})',
        _dark: 'var(--text-tertiary-dark, {colors.chalk/44})',
      },
    },
    quaternary: {
      value: {
        base: 'var(--text-quaternary, {colors.chalk})',
        _light: 'var(--text-quaternary, {colors.chalk})',
        _dark: 'var(--text-quaternary-dark, {colors.ink.90})',
      },
    },
  },
  neutral: {
    primary: {
      value: {
        base: 'var(--neutral-primary, {colors.ink.50})',
        _light: 'var(--neutral-primary, {colors.ink.50})',
        _dark: 'var(--neutral-primary-dark, {colors.chalk/16})',
      },
    },
    secondary: {
      value: {
        base: 'var(--neutral-secondary, {colors.ink.30})',
        _light: 'var(--neutral-secondary, {colors.ink.30})',
        _dark: 'var(--neutral-secondary-dark, {colors.chalk/12})',
      },
    },
    tertiary: {
      value: {
        base: 'var(--neutral-tertiary, {colors.ink.20})',
        _light: 'var(--neutral-tertiary, {colors.ink.20})',
        _dark: 'var(--neutral-tertiary-dark, {colors.chalk/8})',
      },
    },
    quaternary: {
      value: {
        base: 'var(--neutral-quaternary, {colors.ink.10})',
        _light: 'var(--neutral-quaternary, {colors.ink.10})',
        _dark: 'var(--neutral-quaternary-dark, {colors.chalk/5})',
      },
    },
  },
  brand: {
    lightest: {
      value: {
        base: 'var(--brand-lightest, {colors.magic.10})',
        _light: 'var(--brand-lightest, {colors.magic.10})',
        _dark: 'var(--brand-lightest-dark, {colors.magic.30/25})',
      },
    },
    lighter: {
      value: {
        base: 'var(--brand-lighter, {colors.magic.30})',
        _light: 'var(--brand-lighter, {colors.magic.30})',
        _dark: 'var(--brand-lighter-dark, {colors.magic.30/66})',
      },
    },
    base: {
      value: {
        base: 'var(--brand-base, {colors.magic.50})',
        _light: 'var(--brand-base, {colors.magic.50})',
        _dark: 'var(--brand-base-dark, {colors.magic.30})',
      },
    },
    darker: {
      value: {
        base: 'var(--brand-darker, {colors.magic.70})',
        _light: 'var(--brand-darker, {colors.magic.70})',
        _dark: 'var(--brand-darker-dark, {colors.magic.10})',
      },
    },
    darkest: {
      value: {
        base: 'var(--brand-darkest, {colors.magic.90})',
        _light: 'var(--brand-darkest, {colors.magic.90})',
        _dark: 'var(--brand-darkest-dark, {colors.magic.10})',
      },
    },
  },
  positive: {
    lightest: { value: { base: '{colors.leaf.10}', _light: '{colors.leaf.10}', _dark: '{colors.leaf.30/8}' } },
    lighter: { value: { base: '{colors.leaf.30}', _light: '{colors.leaf.30}', _dark: '{colors.leaf.30/72}' } },
    base: { value: { base: '{colors.leaf.50}', _light: '{colors.leaf.50}', _dark: '{colors.leaf.30}' } },
    darker: { value: { base: '{colors.leaf.70}', _light: '{colors.leaf.70}', _dark: '{colors.leaf.50}' } },
    darkest: { value: { base: '{colors.leaf.90}', _light: '{colors.leaf.90}', _dark: '{colors.leaf.50}' } },
  },
  negative: {
    lightest: { value: { base: '{colors.ruby.10}', _light: '{colors.ruby.10}', _dark: '{colors.ruby.30/8}' } },
    lighter: { value: { base: '{colors.ruby.30}', _light: '{colors.ruby.30}', _dark: '{colors.ruby.30/72}' } },
    base: { value: { base: '{colors.ruby.50}', _light: '{colors.ruby.50}', _dark: '{colors.ruby.30}' } },
    darker: { value: { base: '{colors.ruby.70}', _light: '{colors.ruby.70}', _dark: '{colors.ruby.50}' } },
    darkest: { value: { base: '{colors.ruby.90}', _light: '{colors.ruby.90}', _dark: '{colors.ruby.50}' } },
  },
  warning: {
    lightest: { value: { base: '{colors.gold.10}', _light: '{colors.gold.10}', _dark: '{colors.gold.30/8}' } },
    lighter: { value: { base: '{colors.gold.30}', _light: '{colors.gold.30}', _dark: '{colors.gold.30/72}' } },
    base: { value: { base: '{colors.gold.50}', _light: '{colors.gold.50}', _dark: '{colors.gold.30}' } },
    darker: { value: { base: '{colors.gold.70}', _light: '{colors.gold.70}', _dark: '{colors.gold.50}' } },
    darkest: { value: { base: '{colors.gold.90}', _light: '{colors.gold.90}', _dark: '{colors.gold.50}' } },
  },
  dedicated: {
    lightest: { value: { base: '{colors.sky.10}', _light: '{colors.sky.10}', _dark: '{colors.sky.30/8}' } },
    lighter: { value: { base: '{colors.sky.30}', _light: '{colors.sky.30}', _dark: '{colors.sky.30/72}' } },
    base: { value: { base: '{colors.sky.50}', _light: '{colors.sky.50}', _dark: '{colors.sky.30}' } },
    darker: { value: { base: '{colors.sky.70}', _light: '{colors.sky.70}', _dark: '{colors.sky.50}' } },
    darkest: { value: { base: '{colors.sky.90}', _light: '{colors.sky.90}', _dark: '{colors.sky.50}' } },
  },
});
