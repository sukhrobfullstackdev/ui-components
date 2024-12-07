import type { Meta, StoryObj } from '@storybook/react';

import { withContainer } from '@components/__stories__/decorators';
import { TransactionRow } from '@components/list-items';
import { LogoBase, LogoEthereum, LogoPolygon, LogoSolana } from '@components/logos';

const meta: Meta<typeof TransactionRow> = {
  title: 'List Items/TransactionRow',
  component: TransactionRow,
  tags: ['autodocs'],
  decorators: [withContainer],
  parameters: {
    width: 400,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Send: Story = {
  render: args => (
    <TransactionRow {...args}>
      <TransactionRow.TokenIcon>
        <LogoPolygon />
      </TransactionRow.TokenIcon>
    </TransactionRow>
  ),
  args: {
    variant: 'send',
    primaryText: '157.0681 POL',
    secondaryText: '$60.00',
    onPress: () => console.log('Handle press'),
  },
};

export const Receive: Story = {
  render: args => (
    <TransactionRow {...args}>
      <TransactionRow.TokenIcon>
        <LogoSolana />
      </TransactionRow.TokenIcon>
    </TransactionRow>
  ),
  args: {
    variant: 'receive',
    primaryText: '2.2612 SOL',
    secondaryText: '$300.00',
  },
};

export const NetworkFee: Story = {
  render: args => (
    <TransactionRow {...args}>
      <TransactionRow.TokenIcon>
        <LogoBase />
      </TransactionRow.TokenIcon>
    </TransactionRow>
  ),
  args: {
    variant: 'networkFee',
    primaryText: '$0.32',
    onPress: () => console.log('Handle press'),
  },
};

export const SpendingCap: Story = {
  render: args => (
    <TransactionRow {...args}>
      <TransactionRow.TokenIcon>
        <LogoEthereum />
      </TransactionRow.TokenIcon>
    </TransactionRow>
  ),
  args: {
    variant: 'spendingCap',
    primaryText: 'Unlimited ETH',
  },
};
