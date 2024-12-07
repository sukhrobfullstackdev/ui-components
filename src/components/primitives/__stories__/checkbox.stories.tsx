import { Checkbox } from '@components/primitives';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Primitives/Checkbox',
  component: Checkbox,
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

export const CheckboxDefault: Story = {
  render: args => {
    const [isChecked, setIsChecked] = useState(false);
    console.log(`Checkbox: ${isChecked ? 'checked' : 'unchecked'}`);
    return <Checkbox onChange={() => setIsChecked(!isChecked)} checked={isChecked} {...args} />;
  },
};

export const CheckboxWithLabel: Story = {
  render: args => {
    const [isChecked, setIsChecked] = useState(false);
    console.log(`Checkbox: ${isChecked ? 'checked' : 'unchecked'}`);
    return <Checkbox onChange={() => setIsChecked(!isChecked)} checked={isChecked} {...args} />;
  },
  args: {
    label: 'Yes',
  },
};

export const IndeterminateCheckbox: Story = {
  render: args => {
    const [isChecked, setIsChecked] = useState(true);
    console.log(`Checkbox: ${isChecked ? 'checked' : 'unchecked'}`);
    return <Checkbox onChange={() => setIsChecked(!isChecked)} checked={isChecked} {...args} />;
  },
  args: {
    label: 'Select All',
    indeterminate: true,
  },
};
