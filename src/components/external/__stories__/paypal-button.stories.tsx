import type { Meta, StoryObj } from '@storybook/react';

import { withContainer } from '@components/__stories__/decorators';
import { PayPalButton } from '@components/external';

const meta: Meta<typeof PayPalButton> = {
  title: 'External/PayPal Button',
  component: PayPalButton,
  tags: ['autodocs'],
  argTypes: {
    onPress: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [withContainer],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PayPalButtonDefault: Story = {
  render: args => {
    return <PayPalButton {...args} />;
  },
  args: {
    onPress: () => console.log('Button clicked'),
  },
};
