import type { Meta, StoryObj } from '@storybook/react';

import { withContainer } from '@components/__stories__/decorators';
import { TokenListItem } from '@components/list-items';
import { LogoEthereum, LogoPolygon } from '@components/logos';

const meta: Meta<typeof TokenListItem> = {
  component: TokenListItem,
  title: 'List Items/TokenListItem',
  tags: ['autodocs'],
  argTypes: {
    onPress: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [withContainer],
  parameters: {
    width: 330,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TokenListItemDefault: Story = {
  render: ({ ...args }) => {
    return (
      <TokenListItem {...args}>
        <TokenListItem.TokenIcon>
          <LogoEthereum />
        </TokenListItem.TokenIcon>
      </TokenListItem>
    );
  },
  args: {
    name: 'ethereum',
    fiatBalanceWithSymbol: '$42.00',
    tokenBalanceWithSymbol: '0.00032 ETH',
    tokenBalanceFirst: true,
  },
};

export const TokenListItemWithoutFiatBalance: Story = {
  render: ({ ...args }) => {
    return (
      <TokenListItem {...args}>
        <TokenListItem.TokenIcon>
          <LogoEthereum />
        </TokenListItem.TokenIcon>
      </TokenListItem>
    );
  },
  args: {
    name: 'ethereum',
    tokenBalanceWithSymbol: '0.00032 ETH',
  },
};

export const ClickableTokenListItem: Story = {
  render: ({ ...args }) => {
    return (
      <TokenListItem {...args}>
        <TokenListItem.TokenIcon>
          <LogoPolygon />
        </TokenListItem.TokenIcon>
      </TokenListItem>
    );
  },
  args: {
    name: 'polygon',
    fiatBalanceWithSymbol: '$42.00',
    tokenBalanceWithSymbol: '58.8441 POL',
    onPress: () => console.log('Clicked'),
  },
};

export const ClickableTokenListItemDisabled: Story = {
  render: ({ ...args }) => {
    return (
      <TokenListItem {...args}>
        <TokenListItem.TokenIcon>
          <LogoPolygon />
        </TokenListItem.TokenIcon>
      </TokenListItem>
    );
  },
  args: {
    name: 'polygon',
    fiatBalanceWithSymbol: '$42.00',
    tokenBalanceWithSymbol: '58.8441 POL',
    onPress: () => console.log('Clicked'),
    disabled: true,
  },
};
