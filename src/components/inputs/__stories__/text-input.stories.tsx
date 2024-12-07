import type { StoryObj } from '@storybook/react';

import { IcoCopy, IcoSearch } from '@components/icons';
import { TextInput } from '@components/inputs/text-input';

const meta = {
  title: 'Inputs/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    'attr.placeholder': {
      table: { category: 'attr' },
      name: 'placeholder',
      control: 'text',
    },
    'attr.size': {
      table: { category: 'attr' },
      name: 'size',
      control: 'number',
    },
    attr: {
      table: {
        disable: true,
      },
    },
    label: {
      name: 'label',
      control: 'text',
    },
    errorMessage: {
      name: 'errorMessage',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInputDefault: Story = {
  args: {
    'aria-label': 'Text Input',
    description: '',
    label: '',
    size: 'md',
    alignText: 'left',
  },
};
export const TextInputWithCenteredText: Story = {
  args: {
    'aria-label': 'Text Input',
    description: 'This is a description',
    label: 'Label',
    size: 'md',
    errorMessage: 'This is an error message',
    alignText: 'center',
  },
};

export const TextInputWithLeadingIcon: Story = {
  render: args => {
    return (
      <TextInput {...args}>
        <TextInput.TypeIcon>
          <IcoSearch />
        </TextInput.TypeIcon>
      </TextInput>
    );
  },
  args: {
    'aria-label': 'Search input',
  },
};

export const TextInputWithClickableIcon: Story = {
  render: args => {
    return (
      <TextInput {...args}>
        <TextInput.ActionIcon onClick={() => console.log('handleClick here')}>
          <IcoCopy />
        </TextInput.ActionIcon>
      </TextInput>
    );
  },
  args: {
    'aria-label': 'Text input with clickable icon',
  },
};

export const TextInputWithBothIcons: Story = {
  render: args => {
    return (
      <TextInput {...args}>
        <TextInput.TypeIcon>
          <IcoSearch />
        </TextInput.TypeIcon>
        <TextInput.ActionIcon onClick={() => console.log('handleClick here')}>
          <IcoCopy />
        </TextInput.ActionIcon>
      </TextInput>
    );
  },
  args: {
    'aria-label': 'Search input with clickable icon',
  },
};

export const TextInputWithPrefixAndSuffix: Story = {
  render: args => {
    return (
      <TextInput {...args}>
        <TextInput.Prefix>$</TextInput.Prefix>
        <TextInput.Suffix>USD</TextInput.Suffix>
      </TextInput>
    );
  },
  args: {
    'aria-label': 'Search input with clickable icon',
  },
};

export const TextInputWithActionButton: Story = {
  render: args => {
    return (
      <TextInput {...args}>
        <TextInput.TypeIcon>
          <IcoSearch />
        </TextInput.TypeIcon>
        <TextInput.ActionIcon onClick={() => console.log('icon clicked')}>
          <IcoCopy />
        </TextInput.ActionIcon>
        <TextInput.ActionButton label="Max" onPress={() => console.log('button pressed')} />
      </TextInput>
    );
  },
  args: {
    'aria-label': 'Search input with clickable icon',
  },
};

export const TextInputCharacter: Story = {
  render: args => {
    return <TextInput.Char {...args} maxLength={args?.attr?.size || 1} />;
  },
  args: {
    'aria-label': 'Char Input',
  },
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
    errorMessage: {
      table: {
        disable: true,
      },
    },
    alignText: {
      table: {
        disable: true,
      },
    },
  },
};
