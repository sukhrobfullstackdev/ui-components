import { Meta, StoryObj } from '@storybook/react';

import { WalletAddress } from '@components/info';

const meta = {
  component: WalletAddress,
  title: 'Info/WalletAddress',
  tags: ['autodocs'],
  argTypes: {
    onCopy: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof WalletAddress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WalletAddressDefault: Story = {
  render: ({ ...args }) => {
    return <WalletAddress {...args} />;
  },
  args: {
    address: '0x60a55c4ef50a7b574cb8fc228676497c99e57c42',
    onCopy: address => console.log(`Copied: ${address}`),
  },
};
