import { Menu } from '@components/containers';
import { Drawer } from '@components/containers/drawer';
import { Modal } from '@components/containers/modal';
import { IcoCaretLeft, IcoMagic, IcoQuestionCircleFill } from '@components/icons';
import { WalletAddress } from '@components/info';
import Button from '@components/primitives/button';
import Popover from '@components/primitives/popover';
import Text from '@components/primitives/text';
import { Box, Center, Flex, HStack, VStack } from '@styled/jsx';
import { token } from '@styled/tokens';
import { createHost, createSlot } from 'create-slots';
import { Children, PropsWithChildren } from 'react';

export interface HeaderProps extends PropsWithChildren {
  name: string;
  domain?: string;
  logoUrl?: string;
}

export interface TitleProps {
  branding?: 'light' | 'dark';
  title?: string;
}

export interface PassportPageProps extends PropsWithChildren {
  address?: string;
  animate?: boolean;
  actionDirection?: 'column' | 'row';
  isOpen?: boolean;
  onAnimated?: () => void;
  onBack?: () => void;
  onClosed?: () => void;
  onCancel?: () => void;
}

const Actions = createSlot(({ children }) => Children.map(children, child => <Button expand {...child.props} />));
const Cancel = createSlot(Button);
const Confirm = createSlot(Button);
const Info = createSlot(({ children }) => (
  <Popover textStyle="subtle" variant="text">
    <Popover.TrailingIcon>
      <IcoQuestionCircleFill />
    </Popover.TrailingIcon>
    <Popover.Content>{children}</Popover.Content>
  </Popover>
));
const Title = createSlot(({ branding, title }: TitleProps) => {
  return title ? (
    <Text size="sm" fontColor="text.secondary">
      {title}
    </Text>
  ) : (
    <IcoMagic color={token(branding === 'light' ? 'colors.text.primary' : 'colors.neutral.primary')} />
  );
});

const PageContent = createSlot(({ children }) => (
  <VStack w="full" justify="center">
    {children}
  </VStack>
));
const PageMenu = createSlot(Menu);
const PageDrawer = createSlot(Drawer);
const PageFooter = createSlot(({ children }) => (
  <Center pt={3} w="full">
    {children}
  </Center>
));
const PageHeader = createSlot(({ children, domain, name, logoUrl }: HeaderProps) => (
  <HStack borderBottomColor="neutral.primary" borderBottomWidth="1px" p={3} width="full">
    {logoUrl ? (
      <img src={logoUrl} alt={name} width={24} height={24} />
    ) : (
      <IcoMagic color={token('colors.brand.base')} height={24} width={24} />
    )}
    <Text size="sm" fontWeight="semibold">
      {name}
    </Text>
    {domain && (
      <Text size="sm" fontColor="text.tertiary">
        {domain}
      </Text>
    )}
    {children}
  </HStack>
));

const PageHost = ({ actionDirection = 'row', address, children, onBack, onCancel, ...props }: PassportPageProps) => {
  return createHost(children, slots => {
    const cancelProps = slots.getProps(Cancel);
    const confirmProps = slots.getProps(Confirm);
    const drawerProps = slots.getProps(PageDrawer);
    const menuProps = slots.getProps(PageMenu);

    const actions = slots.get(Actions);
    const info = slots.get(Info);
    const title = slots.get(Title);

    const isRowDirection = actionDirection === 'row';

    return (
      <Modal {...props} fullscreen paddingType="none" gap={0}>
        <VStack gap={0} width="full">
          <HStack
            borderBottomColor="neutral.primary"
            borderBottomWidth="1px"
            justifyContent="space-between"
            p={3}
            width="full"
          >
            {onBack && (
              <Button onPress={onBack} size="md" textStyle="neutral" variant="text">
                <Button.LeadingIcon>
                  <IcoCaretLeft />
                </Button.LeadingIcon>
              </Button>
            )}
            {onCancel && <Button onPress={onCancel} label="Cancel" size="sm" textStyle="neutral" variant="text" />}
            {!(onBack || onCancel) && <Box w={6} />}
            {title}
            {address || info || menuProps ? (
              <HStack>
                {address && <WalletAddress address={address} />}
                {info}
                {menuProps && <Menu {...menuProps} />}
              </HStack>
            ) : (
              <Box w={6} />
            )}
          </HStack>
          {slots.get(PageHeader)}
        </VStack>
        <VStack h="full" w="full" justify="space-between" p={6} maxW={393}>
          {slots.get(PageContent)}
          <VStack w="full" gap={3}>
            {slots.get(PageFooter)}
            {(cancelProps || confirmProps) && (
              <Flex direction={isRowDirection ? 'row' : 'column-reverse'} gap={isRowDirection ? 4 : 3} width="full">
                {cancelProps && <Button expand label="Cancel" variant="neutral" {...cancelProps} />}
                {confirmProps && <Button expand label="Confirm" variant="inverse" {...confirmProps} />}
              </Flex>
            )}
            {actions && (
              <Flex direction={actionDirection} gap={isRowDirection ? 4 : 3} width="full">
                {actions}
              </Flex>
            )}
          </VStack>
        </VStack>
        {drawerProps && <Drawer {...drawerProps} />}
      </Modal>
    );
  });
};

export const PassportPage = Object.assign(PageHost, {
  Actions,
  Cancel,
  Confirm,
  Content: PageContent,
  Menu: PageMenu,
  Drawer: PageDrawer,
  Footer: PageFooter,
  Header: PageHeader,
  Info,
  Title,
});
