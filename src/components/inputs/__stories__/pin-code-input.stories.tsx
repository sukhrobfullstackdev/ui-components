import { Meta, StoryObj } from '@storybook/react';

import { PinCodeInput } from '@components/inputs/pincode-input';

const meta = {
  title: 'Inputs/PinCodeInput',
  component: PinCodeInput,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
    onComplete: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof PinCodeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PinCode: Story = {
  render: ({ ...args }) => {
    const { onChange, onComplete, ...pinArgs } = args;
    return <PinCodeInput {...pinArgs} onComplete={onComplete} onChange={onChange} />;
  },
  args: {
    pinLength: 6,
    onChange: (pins: string[]) => console.log('Pins: ', pins.toString()),
    onComplete: (pin: string) => alert(`Pin: ${pin}`),
  },
};
