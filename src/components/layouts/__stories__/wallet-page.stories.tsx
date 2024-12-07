import { withContainer, withTestBg } from '@components/__stories__/decorators';
import { WalletPage, WalletPageProps } from '@components/layouts/wallet-page/';
import { WalletNavigationType } from '@components/sections/wallet-navigation';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { TokenListItem } from '@components/list-items';
import { LogoEthereumCircle } from '@components/logos';
import { VStack } from '@styled/jsx';
import { AccountMenuProps } from '../wallet-page/account-menu';
import { ActionsProps } from '../wallet-page/actions';
import { AddressProps } from '../wallet-page/address';
import { ConnectionMenuProps } from '../wallet-page/connection-menu';
import { FiatProps } from '../wallet-page/fiat';

type PageTypes = WalletPageProps & AccountMenuProps & ActionsProps & AddressProps & ConnectionMenuProps & FiatProps;

const meta: Meta<PageTypes> = {
  component: WalletPage,
  title: 'Layouts/WalletPage',
  decorators: [withContainer, withTestBg],
  parameters: {
    width: 400,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Wallet: Story = {
  render: ({ ...args }) => {
    const [selectedNav, setSelectedNav] = useState(WalletNavigationType.Home);

    return (
      <WalletPage>
        <WalletPage.AccountMenu {...args} />
        <WalletPage.Actions {...args} />
        <WalletPage.Address {...args} />
        <WalletPage.ConnectionMenu {...args} />
        <WalletPage.Fiat {...args} />
        <WalletPage.Navigation
          active={selectedNav}
          onActivity={() => setSelectedNav(WalletNavigationType.Activity)}
          onGallery={() => setSelectedNav(WalletNavigationType.Gallery)}
          onHome={() => setSelectedNav(WalletNavigationType.Home)}
          onSettings={() => setSelectedNav(WalletNavigationType.Settings)}
        />
        <WalletPage.Content>
          <VStack p={10} w="full" overflow="scroll" scrollbarWidth="none">
            <TokenListItem name="Foo" fiatBalanceWithSymbol="$1.23" tokenBalanceWithSymbol="1 ETH">
              <TokenListItem.TokenIcon>
                <LogoEthereumCircle />
              </TokenListItem.TokenIcon>
            </TokenListItem>
          </VStack>
        </WalletPage.Content>
      </WalletPage>
    );
  },
  args: {
    actionBox: false,
    address: '123x4567890',
    avatarUrl: '/.storybook/assets/magic-sample-nft.jpeg',
    connected: true,
    domain: 'foo.bar',
    email: 'john.doe@magic.link',
    fiatTotal: '123.45',
    symbol: '$',
    logoUrl: 'https://static.alchemyapi.io/images/assets/3408.png',
    name: 'John Doe',
    onAddressCopy: () => console.log('Copied'),
    onBuy: () => console.log('Buy action'),
    onDisconnect: () => console.log('Disconnect'),
    onLogout: () => console.log('Logout'),
    onReceive: () => console.log('Receive action'),
    onSend: () => console.log('Send action'),
    buyDisabledLabel: '',
    sendDisabledLabel: 'Coming soon',
    receiveDisabledLabel: '',
  },
  argTypes: {},
};
