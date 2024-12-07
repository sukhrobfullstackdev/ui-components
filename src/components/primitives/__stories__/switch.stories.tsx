import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '@components/primitives';
import { useState } from 'react';

const meta: Meta<typeof Switch> = {
  title: 'Primitives/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SwitchDefault: Story = {
  render: args => {
    const [isChecked, setIsChecked] = useState(false);
    console.log(`Toggle: ${isChecked ? 'enabled' : 'disabled'}`);
    return <Switch onChange={() => setIsChecked(!isChecked)} checked={isChecked} {...args} />;
  },
};

export const SwitchWithLabel: Story = {
  render: args => {
    const [isChecked, setIsChecked] = useState(false);
    console.log(`Toggle: ${isChecked ? 'enabled' : 'disabled'}`);
    return <Switch onChange={() => setIsChecked(!isChecked)} checked={isChecked} {...args} />;
  },
  args: {
    label: 'Enable',
  },
};
