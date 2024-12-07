import { Modal } from '@components/containers/modal';
import { WalletNavigation } from '@components/sections/wallet-navigation';
import { Box, HStack, VStack } from '@styled/jsx';
import { createHost, createSlot } from 'create-slots';
import { PropsWithChildren } from 'react';

import { token } from '@styled/tokens';
import { AccountMenu } from './account-menu';
import { Actions } from './actions';
import { Address } from './address';
import { ConnectionMenu } from './connection-menu';
import { Fiat } from './fiat';

const PageAccountMenu = createSlot(AccountMenu);
const PageActions = createSlot(Actions);
const PageAddress = createSlot(Address);
const PageConnectionMenu = createSlot(ConnectionMenu);
const PageContent = createSlot(({ children }) => (
  <VStack w="full" justify="center">
    {children}
  </VStack>
));
const PageFiat = createSlot(Fiat);
const PageNavigation = createSlot(WalletNavigation);

export interface WalletPageProps extends PropsWithChildren {}

const PageHost = ({ children, ...props }: WalletPageProps) => {
  return createHost(children, slots => {
    const accountProps = slots.getProps(PageAccountMenu);
    const actionProps = slots.getProps(PageActions);
    const addressProps = slots.getProps(PageAddress);
    const connectionProps = slots.getProps(PageConnectionMenu);
    const fiatProps = slots.getProps(PageFiat);
    const navigationProps = slots.getProps(PageNavigation);

    const background = `radial-gradient(circle at top, color-mix(in srgb, ${token('colors.text.primary')}, transparent 88%) 0%, transparent 25%)`;
    const showHeader = connectionProps || addressProps || accountProps;

    return (
      <Modal {...props} fullscreen paddingType="none" gap={0}>
        <VStack h="full" w="full" style={showHeader ? { background } : {}}>
          {showHeader && (
            <HStack justify="space-between" px={4} w="full">
              {connectionProps ? <ConnectionMenu {...connectionProps} /> : <Box h={10} w={10} m={1} />}
              {addressProps && <Address {...addressProps} />}
              {accountProps ? <AccountMenu {...accountProps} /> : <Box h={10} w={10} m={1} />}
            </HStack>
          )}
          {fiatProps && <Fiat {...fiatProps} />}
          {actionProps && <Actions {...actionProps} />}
          {slots.get(PageContent)}
        </VStack>
        {navigationProps && <WalletNavigation {...navigationProps} />}
      </Modal>
    );
  });
};

export const WalletPage = Object.assign(PageHost, {
  AccountMenu: PageAccountMenu,
  Actions: PageActions,
  Address: PageAddress,
  ConnectionMenu: PageConnectionMenu,
  Content: PageContent,
  Fiat: PageFiat,
  Navigation: PageNavigation,
});
