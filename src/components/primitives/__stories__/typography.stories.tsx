import Text, { BodyProps } from '@components/primitives/text';
import type { StoryObj } from '@storybook/react';

const meta = {
  title: 'Primitives/Typography',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    styles: {
      table: {
        disable: true,
      },
    },
    fontWeight: {
      control: 'radio',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    'styles.color': {
      table: { category: 'styles' },
      name: 'color',
      control: 'color',
    },
    'styles.fontWeight': {
      table: { category: 'styles' },
      name: 'fontWeight',
      control: 'select',
      options: ['800', '700', '600', '500', '400'],
    },
    'styles.letterSpacing': {
      table: { category: 'styles' },
      name: 'letterSpacing',
      control: { type: 'range', min: 0, max: 10, step: 0.1 },
    },
    'styles.textAlign': {
      table: { category: 'styles' },
      name: 'textAlign',
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    'styles.maxWidth': {
      table: { category: 'styles' },
      name: 'maxWidth',
      control: 'number',
    },
  },
};

export default meta;

const disabledTypes = {
  inline: {
    table: {
      disable: true,
    },
  },
  variant: {
    table: {
      disable: true,
    },
  },
  size: {
    table: {
      disable: true,
    },
  },
};

export const H1: StoryObj<BodyProps> = {
  render: ({ ...args }) => {
    return <Text.H1 {...args}>This is an H1 headline.</Text.H1>;
  },
  argTypes: {
    fontWeight: {
      control: 'radio',
      options: ['normal', 'medium', 'semibold', 'bold', 'extrabold'],
    },
    ...disabledTypes,
  },
};

export const H2: StoryObj<BodyProps> = {
  render: ({ ...args }) => {
    return <Text.H2 {...args}>This is an H2 headline.</Text.H2>;
  },
  argTypes: {
    fontWeight: {
      control: 'radio',
      options: ['normal', 'medium', 'semibold', 'bold', 'extrabold'],
    },
    ...disabledTypes,
  },
};

export const H3: StoryObj<BodyProps> = {
  render: ({ ...args }) => {
    return <Text.H3 {...args}>This is an H3 headline.</Text.H3>;
  },
  argTypes: disabledTypes,
};

export const H4: StoryObj<BodyProps> = {
  render: ({ ...args }) => {
    return <Text.H4 {...args}>This is an H4 headline.</Text.H4>;
  },
  argTypes: disabledTypes,
};

export const H5: StoryObj<BodyProps> = {
  render: ({ ...args }) => {
    return <Text.H5 {...args}>This is an H5 headline.</Text.H5>;
  },
  argTypes: {
    ...disabledTypes,
  },
};

export const H6: StoryObj<BodyProps> = {
  render: ({ ...args }) => {
    return <Text.H6 {...args}>This is an H6 headline.</Text.H6>;
  },
  argTypes: {
    ...disabledTypes,
  },
};

export const Body: StoryObj<BodyProps> = {
  render: ({ ...args }) => {
    return <Text {...args}>This is body text.</Text>;
  },
  args: { variant: 'text', size: 'md' },
  argTypes: {
    variant: {
      control: { type: 'select' },
    },
    size: {
      control: { type: 'select' },
    },
  },
};

export const Mono: StoryObj<BodyProps> = {
  render: ({ ...args }) => {
    return <Text.Mono {...args}>This is mono text.</Text.Mono>;
  },
  args: { variant: 'text', size: 'md' },
  argTypes: {
    variant: {
      control: { type: 'select' },
    },
    size: {
      control: { type: 'select' },
    },
    scale: {
      table: {
        disable: true,
      },
    },
  },
};
