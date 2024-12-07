import { Radio, RadioGroup } from '@components/primitives/radio';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof RadioGroup> = {
  title: 'Primitives/Radio',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    selectedValue: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioDefault: Story = {
  render: args => {
    const [selectedValue, setSelectedValue] = useState('yes');

    return (
      <RadioGroup {...args} selectedValue={selectedValue} onChange={setSelectedValue}>
        <Radio value="yes" label="Yes" />
        <Radio value="no" label="No" />
        <Radio value="maybe" label="Maybe" />
      </RadioGroup>
    );
  },
};
