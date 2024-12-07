import { Meta, StoryObj } from '@storybook/react';

import { withContainer } from '@components/__stories__/decorators';
import { DropdownOption, DropdownSelector } from '@components/primitives';
import { useState } from 'react';

const meta: Meta<typeof DropdownSelector> = {
  component: DropdownSelector,
  title: 'Primitives/DropdownSelector',
  tags: ['autodocs'],
  decorators: [withContainer],
  parameters: {
    height: 340,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    selectedValue: {
      table: {
        disable: true,
      },
    },
    onSelect: {
      table: {
        disable: true,
      },
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DropdownSelectorDefault: Story = {
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string>();

    return (
      <DropdownSelector {...args} selectedValue={selectedValue} onSelect={setSelectedValue}>
        <DropdownOption value="Option 1" label="Option 1" />
        <DropdownOption value="Option 2" label="Option 2" />
        <DropdownOption value="Option 3" label="Option 3" />
        <DropdownOption value="Option 4" label="Option 4" />
        <DropdownOption value="Option 5" label="Option 5" />
      </DropdownSelector>
    );
  },
  args: {
    label: 'Field label',
    placeholder: 'Select an option',
    size: 'lg',
    tooltipContent: 'Here are more details.',
  },
};
