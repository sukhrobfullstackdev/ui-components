import { Meta, StoryObj } from '@storybook/react';

import { withContainer } from '@components/__stories__/decorators';
import { PhoneInput } from '@components/inputs';

const meta: Meta<typeof PhoneInput> = {
  component: PhoneInput,
  title: 'Inputs/PhoneInput',
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [withContainer],
  parameters: {
    height: 340,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PhoneInputDefault: Story = {
  render: args => {
    return <PhoneInput aria-label="phone input" {...args} />;
  },
  args: {
    autoFocus: true,
    onChange: (phoneNumber: string) => console.log(phoneNumber),
  },
};
