import { Tooltip } from '@components/feedback';
import { IcoClockFill, IcoGridFill, IcoHomeFill, IcoSettingsFill } from '@components/icons';
import { Button } from '@components/primitives';
import { css } from '@styled/css';
import { Box, Center, HStack } from '@styled/jsx';
import { token } from '@styled/tokens';
import { PropsWithChildren } from 'react';

export const WalletNavigationIcons = {
  Home: IcoHomeFill,
  Gallery: IcoGridFill,
  Activity: IcoClockFill,
  Settings: IcoSettingsFill,
};

export enum WalletNavigationType {
  Home = 'home',
  Gallery = 'gallery',
  Activity = 'activity',
  Settings = 'settings',
}
interface ActionProps extends PropsWithChildren {
  active?: WalletNavigationType;
  label: WalletNavigationType;
  onPress: () => void;
}

type DisabledProps = {
  type: WalletNavigationType;
  label: string;
};

export interface WalletNavigationProps {
  active?: WalletNavigationType;
  onActivity: () => void;
  onGallery: () => void;
  onHome: () => void;
  onSettings: () => void;
  disabled?: DisabledProps[];
}

const Action = ({ active, children, label, onPress }: ActionProps) => (
  <Box pointerEvents={active === label ? 'none' : 'initial'}>
    <Button variant="text" onPress={onPress}>
      <Button.LeadingIcon
        className={css({
          color: active === label ? 'text.primary' : 'text.tertiary',
          _groupHover: { color: active === label ? 'text.primary' : 'text.secondary' },
        })}
      >
        {children}
      </Button.LeadingIcon>
    </Button>
  </Box>
);

const getHandler = <T, K extends keyof T>(o: T, propertyName: K): T[K] => o[propertyName];

export const WalletNavigation = ({
  active = WalletNavigationType.Home,
  disabled = [],
  ...props
}: WalletNavigationProps) => {
  return (
    <Center
      bottom={0}
      pos="fixed"
      h="6.25rem"
      w="full"
      style={{ background: `linear-gradient(180deg, transparent 0%, ${token('colors.surface.primary')} 100%)` }}
    >
      <HStack
        bg="text.primary/6"
        borderColor="text.primary/10"
        borderWidth="medium"
        borderStyle="solid"
        borderRadius={52}
        backdropFilter="blur(24px)"
        p={1.5}
      >
        {Object.keys(WalletNavigationType).map(key => {
          const type = WalletNavigationType[key as keyof typeof WalletNavigationType];
          const disabledLabel = disabled.find(d => d.type === type)?.label;
          const Icon = WalletNavigationIcons[key as keyof typeof WalletNavigationType];
          const onPress = getHandler(props, `on${key}` as keyof typeof props);

          if (disabledLabel) {
            return (
              <Tooltip key={type} content={disabledLabel} width="max-content">
                <Box border="thin solid transparent" opacity={0.3} p={1.5}>
                  <Icon />
                </Box>
              </Tooltip>
            );
          }
          return (
            <Action active={active} label={type} onPress={onPress} key={type}>
              <Icon />
            </Action>
          );
        })}
      </HStack>
    </Center>
  );
};
